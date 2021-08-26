document.addEventListener("DOMContentLoaded", function(){
    const menu = document.querySelector(".menu");
    const menuOpen = document.querySelector(".menu-toggle");
    const menuClose = document.querySelector(".menu-close");
    if(!menu || !menuClose || !menu) return;
    menuOpen.addEventListener("click", function(){
        menu.classList.add("active")
    })
    menuClose.addEventListener("click", function(){
        menu.classList.remove("active")
    })
})