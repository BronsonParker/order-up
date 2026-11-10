// Makin' those Menu Tags
const tags = ["Meat", "Egg", "Vegetarian"];
const prices = [6.35, 4.50, 4.00, 3.25];
console.log(tags, prices);

// Making For Loop for Tags
let tagText = document.querySelector("#tags");
tagText.textContent = "";
for (let i=0; i<tags.length; i++) {
    // I didn't know how to make that dot in ASCII so I just copied it from Moodle; I don't usually use those, I would've used "; " or ", " myself
    tagText.textContent = tagText.textContent + tags[i] + " · ";
};

// Making For Loop for Price Total
let total = 0;
for (let i=0; i<prices.length; i++) {
    total = total + prices[i]
};
document.querySelector("#total").textContent = "$" + total;
