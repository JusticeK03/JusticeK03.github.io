window.onload = function() {
    document.getElementById("date").innerHTML = "Date: " + Date();
};

function displayGreeting() {
    const name = document.getElementById("name").value;
    const mood = document.getElementById("mood").value;

    if (name && mood) {
        document.getElementById("name").style.display = "none";
        document.getElementById("mood").style.display = "none";
        document.querySelector("label[for='name']").style.display = "none";
        document.querySelector("label[for='mood']").style.display = "none";
        document.getElementById("greeting-button").style.display = "none";

        document.getElementById("greeting").innerText = `Jumbo Kiwi MilSurp Market welcomes you, ${name}! We're glad you are doing ${mood}!`;
    } else {
        document.getElementById("greeting").innerText = "Please enter both your name and how you're feeling.";
    }
}

function checkPolygon() {
    let sides = parseFloat(document.getElementById("sides").value);
    sides = Math.abs(Math.round(sides));

    const polygons = {
        0: "No polygon (a point)",
        1: "Monogon",
        2: "Digon (or bigon)",
        3: "Triangle",
        4: "Quadrilateral",
        5: "Pentagon",
        6: "Hexagon",
        7: "Heptagon",
        8: "Octagon",
        9: "Nonagon",
        10: "Decagon"
    };

    const resultElement = document.getElementById("polygon-name");

    if (sides in polygons) {
        resultElement.innerText = `The polygon with ${sides} sides is a ${polygons[sides]}.`;
    } else {
        resultElement.innerText = "Please enter a number between 0 and 10.";
    }
}

function checkInventory() {
    const inventory = {
        "Camp Knives": 12,
        "US Military Gear": 147,
        "British Military Gear": 85,
        "MRE": 54,
        "Night Vision Goggles": 5
    };

    const selectedItem = document.getElementById("inventory-select").value; // Updated to match ID
    const itemQuantity = inventory[selectedItem] || 0;
    document.getElementById("output").innerText = `${selectedItem} in stock: ${itemQuantity}`;
}

function disguiseSelection() {
    const camouflages = [
        "Woodland Camo",
        "Desert Camo",
        "Urban Camo",
        "Multicam",
        "Digital Camo",
        "Tiger Stripe Camo",
        "Snow Camo",
        "Jungle Camo",
        "Flecktarn",
        "DPM (Disruptive Pattern Material)"
    ];
    
    const randomIndex = Math.floor(Math.random() * camouflages.length);
    const chosenCamouflage = camouflages[randomIndex];
    
    document.getElementById("disguise-output").innerText = `Selected Disguise: ${chosenCamouflage}`;
}

function calculateTotalCost() {
    const prices = {
        "Camp Knives": 29.99,
        "US Military Gear": 49.99,
        "British Military Gear": 39.99,
        "MRE": 8.99,
        "Night Vision Goggles": 299.99
    };

    const selectedItem = document.getElementById("cost-select").value; // Updated to match ID
    const quantity = parseInt(document.getElementById("quantity-input").value);

    if (!isNaN(quantity) && quantity > 0) {
        const unitPrice = prices[selectedItem];
        const totalCost = unitPrice * quantity;
        document.getElementById("output1").innerText = `Total cost for ${quantity} x ${selectedItem}: $${totalCost.toFixed(2)}`;
    } else {
        document.getElementById("output1").innerText = "Please enter a valid quantity.";
    }
}

function generateRandomDiscount() {
    const minDiscount = 5; 
    const maxDiscount = 30; 
    const discount = Math.floor(Math.random() * (maxDiscount - minDiscount + 1)) + minDiscount; 

    const totalCostInput = parseFloat(document.getElementById("total-input").value); // Updated to match ID
    if (!isNaN(totalCostInput) && totalCostInput > 0) {
        const discountAmount = (discount / 100) * totalCostInput; 
        const newTotal = totalCostInput - discountAmount; 
        
        document.getElementById("output2").innerText = `Congratulations! You have received a ${discount}% discount! 
                \nOriginal Total: $${totalCostInput.toFixed(2)} 
                \nDiscount Amount: $${discountAmount.toFixed(2)} 
                \nNew Total: $${newTotal.toFixed(2)}`;
    } else {
        document.getElementById("output2").innerText = "Please enter a valid total cost.";
    }
}

document.getElementById("greeting-button").addEventListener("click", displayGreeting);
document.getElementById("polygon-button").addEventListener("click", checkPolygon);
document.getElementById("check-inventory-button").addEventListener("click", checkInventory);
document.getElementById("disguise-button").addEventListener("click", disguiseSelection);
document.getElementById("calculate-cost-button").addEventListener("click", calculateTotalCost);
document.getElementById("get-discount-button").addEventListener("click", generateRandomDiscount);

document.getElementById("cost-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    calculateTotalCost();
});
document.getElementById("discount-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    generateRandomDiscount();
});