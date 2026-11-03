import { data } from "../assets/data/data.js";

export const time = () => {
    const timeContainer = document.querySelector('.time');
    const [marriageDiv, receptionDiv] = timeContainer.querySelectorAll('div div');
    const mapLink = timeContainer.querySelector('#map');
    const mapLink2 = timeContainer.querySelector('#map2');
    const addressParagraph = timeContainer.querySelector('#map + p');
    const addressParagraph2 = timeContainer.querySelector('#map2 + p');

    const createTimeListItem = (title, details) => (
        `<h3>${title}</h3>` +
        `<p>${details.day}, ${details.date} ${details.month} ${details.year} <br> 
         Pukul ${details.hours.start} - ${details.hours.finish} WIB</p>`
    );

    marriageDiv.innerHTML = createTimeListItem('Resepsi', data.time.marriage);
    receptionDiv.innerHTML = createTimeListItem('Ngunduh Mantu', data.time.reception);

    mapLink.href = data.link.map;
    mapLink2.href = data.link.map2;
    addressParagraph.textContent = data.time.address;
    addressParagraph2.textContent = data.time.address2;
};
