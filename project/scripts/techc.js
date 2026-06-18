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
const products = [
    ...smartphones,
    ...laptops,
    ...desktops,
    ...earphones
];
if (document.getElementById("device-type")) {

    let select = document.getElementById("device-type"); 

    const unduplicatecategory = [...new Set(products.map(p => p.category))];

    unduplicatecategory.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        select.append(option);
    });
}


const selectedCategory = document.getElementById("device-type");
const categoryValue = selectedCategory.value;
const selectedStorage = document.querySelector('input[name="storage"]:checked');
const storageValue = selectedStorage.value;
const selectedPrice = document.querySelector('input[name="priceRange"]:checked');
const PriceValue = selectedPrice.value;

const selectedValues = document.getElementById("selected");
const selectednew = document.createElement("p");
selectedValues.textContent = `Storage: ${storageValue}`;
selectedValues.appendChild(selectednew);

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Stops the page from changing/reloading

    // 1. Automatically collect all form values
    const formData = new FormData(this);

    // 2. Extract the values using the field 'name' attributes
    const device = formData.get("device type"); // Gets selected option
    const storage = formData.get("storage");    // Gets checked radio value (1, 2, 3, or 4)
    const price = formData.get("priceRange");   // Gets checked price value

    // 3. See your results in the browser console
    console.log("Device:", device);
    console.log("Storage ID:", storage);
    console.log("Price Range:", price);
});

const selectedCategory = document.getElementById("device-type");
const categoryValue = selectedCategory.value;
const selectedStorage = document.querySelector('input[name="storage"]:checked');
const storageValue = selectedStorage.value;
const selectedPrice = document.querySelector('input[name="priceRange"]:checked');
const PriceValue = selectedPrice.value;

const selectedValues = document.getElementById("selected");
const selectednew = document.createElement("p");
selectedValues.textContent = `Storage: ${storageValue}`;
selectedValues.appendChild(selectednew);

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Stops the page from changing/reloading

    // 1. Automatically collect all form values
    const formData = new FormData(this);

    // 2. Extract the values using the field 'name' attributes
    const device = formData.get("device type"); // Gets selected option
    const storage = formData.get("storage");    // Gets checked radio value (1, 2, 3, or 4)
    const price = formData.get("priceRange");   // Gets checked price value

    // 3. See your results in the browser console
    console.log("Device:", device);
    console.log("Storage ID:", storage);
    console.log("Price Range:", price);
});