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
        document.querySelector("button").style.display = "none";

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

    const resultElement = document.getElementById("polygonName");

    if (sides in polygons) {
        resultElement.innerText = `The polygon with ${sides} sides is a ${polygons[sides]}.`;
    } else {
        resultElement.innerText = "Please enter a number between 0 and 10.";
    }
}