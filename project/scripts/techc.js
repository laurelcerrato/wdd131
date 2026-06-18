document.getElementById("currentyear").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('ul');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

//Arrays holding products info (these can be dinamic using an API)
const smartphones = [
    {
        productName: "iPhone 15",
        category: "Smartphone",
        price: 799,
        durability: "High",
        bestFor: "Work",
        imageUrl: "https://www.apple.com/iphone-15/",
        buyLink: "https://www.apple.com/iphone-15/"
    },
    {
        productName: "Samsung Galaxy S24",
        category: "Smartphone",
        price: 859,
        durability: "High",
        bestFor: "Education",
        imageUrl: "https://www.samsung.com/s24/",
        buyLink: "https://www.samsung.com/s24/"
    },
    {
        productName: "Google Pixel 8",
        category: "Smartphone",
        price: 699,
        durability: "Medium",
        bestFor: "Work",
        imageUrl: "https://store.google.com/pixel_8",
        buyLink: "https://store.google.com/pixel_8"
    }
];

const laptops = [
    {
        productName: "MacBook Air M3",
        category: "Computer",
        type: "Laptop",
        price: 1099,
        durability: "High",
        bestFor: "Education",
        imageUrl: "https://www.apple.com/macbook-air/",
        buyLink: "https://www.apple.com/macbook-air/"
    },
    {
        productName: "Dell XPS 13",
        category: "Computer",
        type: "Laptop",
        price: 1299,
        durability: "High",
        bestFor: "Work",
        imageUrl: "https://www.dell.com/xps-13",
        buyLink: "https://www.dell.com/xps-13"
    },
    {
        productName: "HP Spectre x360",
        category: "Computer",
        type: "Laptop",
        price: 1399,
        durability: "High",
        bestFor: "Work",
        imageUrl: "https://www.hp.com/spectre-x360",
        buyLink: "https://www.hp.com/spectre-x360"
    }
];
const desktops = [
    {
        productName: "Apple iMac 24-inch",
        category: "Computer",
        type: "Desktop",
        price: 1299,
        durability: "High",
        bestFor: "Work",
        imageUrl: "https://www.apple.com/imac/",
        buyLink: "https://www.apple.com/imac/"
    },
    {
        productName: "Dell Inspiron Desktop",
        category: "Computer",
        type: "Desktop",
        price: 799,
        durability: "Medium",
        bestFor: "Education",
        imageUrl: "https://www.dell.com/desktops",
        buyLink: "https://www.dell.com/desktops"
    },
    {
        productName: "HP Pavilion Desktop",
        category: "Computer",
        type: "Desktop",
        price: 699,
        durability: "Medium",
        bestFor: "Education",
        imageUrl: "https://www.hp.com/desktops",
        buyLink: "https://www.hp.com/desktops"
    }
];

const earphones = [
    {
        productName: "Sony WF-1000XM5",
        category: "Earphones",
        price: 299,
        durability: "High",
        bestFor: "Work",
        imageUrl: "https://www.sony.com/wf1000xm5",
        buyLink: "https://www.sony.com/wf1000xm5"
    },
    {
        productName: "Beats Fit Pro",
        category: "Earphones",
        price: 199,
        durability: "High",
        bestFor: "Sports",
        imageUrl: "https://www.beatsbydre.com/fit-pro",
        buyLink: "https://www.beatsbydre.com/fit-pro"
    },
    {
        productName: "JBL Endurance Peak 3",
        category: "Earphones",
        price: 99,
        durability: "High",
        bestFor: "Sports",
        imageUrl: "https://www.jbl.com/peak-3",
        buyLink: "https://www.jbl.com/peak-3"
    }
];