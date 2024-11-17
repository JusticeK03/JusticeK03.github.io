
function populateNav(data, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ""; 
    data.forEach((item) => {
        const link = document.createElement("a");
        link.href = item.url;
        link.textContent = item.name;
        container.appendChild(link);
    });
}
function populateFooterLinks(data) {
    const footerContainer = document.getElementById("footer-links");
    footerContainer.innerHTML = ""; 
    data.forEach((item, index) => {
        const link = document.createElement("a");
        link.href = item.url;
        link.textContent = item.name;
        footerContainer.appendChild(link);
        if (index < data.length - 1) {
            footerContainer.appendChild(document.createTextNode(" | ")); 
        }
    });
}
function populateFooterText() {
    document.getElementById("footer-message").textContent = "Gear Up. Go Beyond. Authentic Military Surplus for Every Mission.";
    document.getElementById("footer-credits").innerHTML = `
        <strong>Page built by:</strong> <a href="./keistlerandco.com/index.html">Keistler &amp; Co &copy;2024,</a> 
        <a href="https://www.freecodecamp.org/certification/JusticeK/responsive-web-design"><i>Certified in Responsive Web Design</i></a>, 
        <a href="https://www.freecodecamp.org/certification/JusticeK/javascript-algorithms-and-data-structures-v8"><i>Certified in JS</i></a>
    `;
}
document.addEventListener("DOMContentLoaded", function() {
 
    fetch("scripts/nav_main.json")
        .then((response) => response.json())
        .then((data) => populateNav(data, "main-nav"))
        .catch((error) => console.error("Error loading main navigation:", error));

    fetch("scripts/nav_secondary.json")
        .then((response) => response.json())
        .then((data) => populateNav(data, "secondary-nav"))
        .catch((error) => console.error("Error loading secondary navigation:", error));

    fetch("scripts/footer_links.json")
        .then((response) => response.json())
        .then((data) => populateFooterLinks(data))
        .catch((error) => console.error("Error loading footer links:", error));

    populateFooterText();
});

