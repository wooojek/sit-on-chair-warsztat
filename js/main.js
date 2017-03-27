document.addEventListener("DOMContentLoaded", function () {

    var dropDownNav = document.getElementById("dropdownMenu");
    var submenu = document.getElementById("submenu");
    var products = document.getElementById("products");
    var productsText = products.querySelectorAll(".productName");

    dropDownNav.addEventListener("mouseenter", function  () {
        submenu.classList.toggle("display");
    });
    dropDownNav.addEventListener("mouseleave", function  () {
        submenu.classList.toggle("display");
    });
    
    for (var i = 0; i < productsText.length-1; i++) {
        productsText[i].addEventListener("mouseenter", function () {
            this.children[1].classList.toggle("productToggleDisplay");
        });
        productsText[i].addEventListener("mouseleave", function () {
            this.children[1].classList.toggle("productToggleDisplay");
        });
    }


});
