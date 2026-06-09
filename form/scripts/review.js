let reviewCount = Number(localStorage.getItem("reviewCount"));

if (isNaN(reviewCount)) {
    reviewCount = 0;
}

reviewCount++;

localStorage.setItem("reviewCount", reviewCount);

document.querySelector("#counter").textContent =
    `Reviews Completed: ${reviewCount}`;