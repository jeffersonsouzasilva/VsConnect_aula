let menu = document.getElementById("menu_links");

function mostrarMenu() {
    if(window.getComputedStyle(menu).display == "none") {
        // Mostre o menu
        menu.style.display = "flex";
    } else {
        // Esconda o menu
        menu.style.display = "none";
    }
}