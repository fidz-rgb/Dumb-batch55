let isOpen = false;

function openBurger() {
    let burgerNavContainer = document.getElementById("burger");

    if (!isOpen) {
        burgerNavContainer.style.display = "flex";
    } else {
        burgerNavContainer.style.display = "none";
    }
    
    isOpen = !isOpen;
}