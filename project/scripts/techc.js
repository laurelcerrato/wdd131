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


const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const deviceType = document.getElementById("device-type").value;

        const storage = document.querySelector('input[name="storage"]:checked').value;

        const priceRange = document.querySelector('input[name="priceRange"]:checked').value;

        console.log("Device Type:", deviceType);
        console.log("Storage in GB: ", storage);
        console.log("Price Range:", priceRange);

        const userChoices = {
            deviceType,
            storage,
            priceRange
        };
        localStorage.setItem("techChoices", JSON.stringify(userChoices));
        window.location.href = "result.html";
    });

}

const results = document.getElementById("selected");
const choices = document.getElementById("container");
const userChoices = JSON.parse(localStorage.getItem("techChoices"));
if (choices && userChoices) {

    const info = document.createElement("p");

    info.innerHTML = `
Device Type: ${userChoices.deviceType}<br>
<br>
Storage: ${userChoices.storage}<br>
<br>

Price Range: ${userChoices.priceRange}
`;

    choices.appendChild(info);
}



function filterProducts(products, choices) {
    return products.filter(product => {
        const matchCategory =
            product.category.toLowerCase().trim() === choices.deviceType.toLowerCase().trim();

        let matchPrice = true;

        if (choices.priceRange === "budget") {
            matchPrice = product.price <= 300;
        } else if (choices.priceRange === "mid") {
            matchPrice = product.price > 300 && product.price <= 800;
        } else if (choices.priceRange === "premium") {
            matchPrice = product.price > 800 && product.price <= 1500;
        } else if (choices.priceRange === "high") {
            matchPrice = product.price > 1500;
        }

        return matchCategory && matchPrice;
    });
}

function ProductCards(list) {
    results.innerHTML = "";

    list.forEach(product => {
        const card = document.createElement("section");

        const name = document.createElement("h2");
        name.textContent = product.productName;
        const image = document.createElement("img");
        image.src = product.imageUrl;
        image.alt = product.productName;
        image.loading = "lazy";
        image.width = 300;

        const price = document.createElement("p");
        price.innerHTML = `<span class="label">Price:</span> $${product.price}`;

        const durability = document.createElement("p");
        durability.innerHTML = `<span class="label">Durability:</span> ${product.durability}`;

        const bestFor = document.createElement("p");
        bestFor.innerHTML = `<span class="label">Best For:</span> ${product.bestFor}`;

        

        const link = document.createElement("a");
        link.href = product.buyLink;
        link.textContent = "Buy Now";
        link.target = "_blank";

        card.append(name, price, durability, bestFor, link);
        results.appendChild(card);
    });
}

if (results && userChoices) {
    const filtered = filterProducts(products, userChoices);

    if (filtered.length === 0) {
        results.innerHTML = "<p>No matching products found.</p>";
    } else {
        ProductCards(filtered);
    }
}