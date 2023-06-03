let menu = document.getElementById("menu_links") //estou pedindo para identificar e buscar o menu_links
let menu_barras =document.getElementById("menu_barras") // 02/06 

function mostrarMenu() {
    if(window.getComputedStyle(menu).display == "none") {
        // Se estiver escondido 
        menu.style.display = "flex";
        // mostre o menu

        menu_barras.setAttribute("aria_expanded","true") // 02/06 acessibilidade
        menu_barras.setAttribute("aria_label","Fechar o menu") // 02/06 acessibilidade
    } else { 
        menu.style.display = "none";
        // Se nao esconda o menu

        menu_barras.setAttribute("aria_expanded","false") // 02/06 acessibilidade
        menu_barras.setAttribute("aria_label","Abrir o menu") // 02/06 acessibilidade
    }
}

addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        menu.style.display = "flex"
    } else {
        menu.style.display = "none"
    }
}); /* dia 02/06 adicionado  */