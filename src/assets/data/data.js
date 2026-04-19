export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Ari Ardianto',
            child: 'Putra ke 4',
            father: '(alm) Suparman',
            mother: 'Tuminem',
            image: './src/assets/images/cowo.png'
        },
        P: {
            id: 2,
            name: 'Siti Aniroh',
            child: 'Putri ke 4',
            father: 'Samsudin',
            mother: 'Siti Maryati',
            image: './src/assets/images/cewe.png'
        },

        couple: './src/assets/images/couple.png'
    },

    time: {
        marriage: {
            year: '2026',
            month: 'November',
            date: '27',
            day: "Jum'at",
            hours: {
                start: '09.00',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2026',
            month: 'November',
            date: '28',
            day: 'Sabtu',
            hours: {
                start: '09.00',
                finish: 'Selesai'
            }
        },
        address: 'Jogahan RT 03, Suren Wetan, Canden, Jetis, Bantul, Yogyakarta (55781)'
    },

    link: {
        calendar: 'https://calendar.app.google/oSVLRMYC79GzuA4f9',
        map: 'https://maps.app.goo.gl/kRMLqU7PWMp7SSpu9',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.png'
        },
        {
            id: 2,
            image: './src/assets/images/2.png'
        },
        {
            id: 3,
            image: './src/assets/images/3.png'
        },
        {
            id: 4,
            image: './src/assets/images/4.png'
        },
        {
            id: 5,
            image: './src/assets/images/5.png'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'Ari Ardianto',
            icon: './src/assets/images/bca.png',
            rekening: '4451974895'
        },
        {
            id: 2,
            name: 'Siti Aniroh',
            icon: './src/assets/images/sea.webp',
            rekening: '901550988250'
        },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbxVGd-pUXqkFZPN1qGaOnM-XN-dVc31UiBVF5IsCfwnYtzdJVrn5X_XtEhZ0T8azdJETA/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
