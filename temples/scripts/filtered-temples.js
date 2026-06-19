document.getElementById("currentyear").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('ul');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "San Pedro Sula Honduras",
        location: "San Pedro Sula, Honduras",
        dedicated: "2024, October, 13",
        area: 35818,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/san-pedro-sula-honduras-temple/san-pedro-sula-honduras-temple-52536.jpg"
    },
    {
        templeName: "Tegucigalpa Honduras",
        location: "Tegucigalpa, Honduras",
        dedicated: "2013, March, 17",
        area: 28254,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/tegucigalpa-honduras-temple/tegucigalpa-honduras-temple-3878.jpg"
    },
    {
        templeName: "Cobán Guatemala Temple",
        location: "Cobán, Guatemala",
        dedicated: "2024, June, 9",
        area: 8772,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/coban-guatemala-temple/coban-guatemala-temple-47562.jpg"
    },


];
TempleCards(temples);
const home = document.querySelector("#home");
const old = document.querySelector("#old");
const newTemples = document.querySelector("#new");
const large = document.querySelector("#large");
const small = document.querySelector("#small");

home.addEventListener("click", () => {
    TempleCards(temples);

});

old.addEventListener("click", () => {
    TempleCards(temples.filter(temple => parseInt(temple.dedicated) < 1900));

});
newTemples.addEventListener("click", () => {
    TempleCards(temples.filter(temple => parseInt(temple.dedicated) > 2000));

});
large.addEventListener("click", () => {
    TempleCards(temples.filter(temple => temple.area > 90000));

});
small.addEventListener("click", () => {
    TempleCards(temples.filter(temple => temple.area < 10000));

});

function TempleCards(filteredTemples) {
    document.querySelector(".container").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let size = document.createElement("p");
        let image = document.createElement("img");
     

        name.innerHTML = temple.templeName;
        location.innerHTML = `<span class ="label">Location: </span> ${temple.location} `;
        dedication.innerHTML = `<span class ="label">Dedication: </span> ${temple.dedicated} `;
        size.innerHTML = `<span class ="label">Size: </span> ${temple.area} sq ft`;
        image.setAttribute("src", temple.imageUrl);
        image.setAttribute("alt", `${temple.templeName} Temple`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", 300);
        image.setAttribute("height", 400);

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(size);
        card.appendChild(image);

        document.querySelector(".container").appendChild(card);
    });


}