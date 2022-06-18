function openMenu(){
    let openMenu = document.querySelector('.openMenu');
    let closeMenu = document.querySelector('.closeMenu');
    let navbar = document.querySelector('.navbar');

    navbar.style.display="block";
    openMenu.style.display="none";
    closeMenu.style.display="block";
}
function closeMenu(){
    let openMenu = document.querySelector('.openMenu');
    let closeMenu = document.querySelector('.closeMenu');
    let navbar = document.querySelector('.navbar');

    navbar.style.display="none";
    openMenu.style.display="block";
    closeMenu.style.display="none";
}