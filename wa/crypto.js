
const KEY = "Aniroh";
const PREFIX = "Ari";

// CRC32 standar (4 byte)
function crc32(bytes) {
  let crc = 0xFFFFFFFF;

  for (const byte of bytes) {
    crc ^= byte;

    for (let j = 0; j < 8; j++) {
      crc = (crc >>> 1) ^ ((crc & 1) ? 0xEDB88320 : 0);
    }
  }

  return (crc ^ 0xFFFFFFFF) >>> 0;
}

function toBase64Url(bytes) {
  let binary = "";
  for (const b of bytes) binary += String.fromCharCode(b);

  return btoa(binary)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

function fromBase64Url(token) {
  if (!token || !/^[A-Za-z0-9_-]+$/.test(token)) {
    throw new Error("Token tidak valid");
  }

  let base64 = token.replace(/-/g, "+").replace(/_/g, "/");
  base64 += "=".repeat((4 - base64.length % 4) % 4);

  const binary = atob(base64);
  return Uint8Array.from(binary, c => c.charCodeAt(0));
}

function enc(name) {
  const payload = new TextEncoder().encode(PREFIX + name);
  const crc = crc32(payload);

  // Tambahkan CRC32 sebagai 4 byte.
  const data = new Uint8Array(payload.length + 4);
  data.set(payload);

  const n = payload.length;
  data[n]     = (crc >>> 24) & 255;
  data[n + 1] = (crc >>> 16) & 255;
  data[n + 2] = (crc >>> 8) & 255;
  data[n + 3] = crc & 255;

  // XOR
  const key = new TextEncoder().encode(KEY);
  const encrypted = data.map((b, i) => b ^ key[i % key.length]);

  return toBase64Url(encrypted);
}

function dec(token) {
  const encrypted = fromBase64Url(token);
  if (encrypted.length < 6) throw new Error("Token terlalu pendek");

  const key = new TextEncoder().encode(KEY);
  const data = encrypted.map((b, i) => b ^ key[i % key.length]);

  // Pisahkan payload dan CRC32.
  const payload = data.slice(0, -4);
  const n = data.length;

  const received = (
    data[n - 4] * 0x1000000 +
    (data[n - 3] << 16) +
    (data[n - 2] << 8) +
    data[n - 1]
  ) >>> 0;

  // Periksa integritas data.
  if (crc32(payload) !== received) {
    throw new Error("CRC32 tidak cocok");
  }

  const text = new TextDecoder("utf-8", { fatal: true }).decode(payload);

  if (!text.startsWith(PREFIX)) {
    throw new Error("Prefix tidak cocok");
  }

  const name = text.slice(PREFIX.length);
  if (!name.trim()) throw new Error("Nama kosong");

  return name;
}
