document.addEventListener("DOMContentLoaded", function () {

    var dropDownNav = document.getElementById("dropdownMenu");
    var submenu = document.getElementById("submenu");
    var products = document.getElementById("products");
    var productsText = products.querySelectorAll(".productName");
    var slider = document.getElementById("slider");
    var next = slider.querySelector(".rightArrow");
    var prev = slider.querySelector(".leftArrow");
    var list = slider.querySelectorAll("li");
    var index = 0;
    //obsluga slidera
    list[index].classList.add("visible");

    var sliding = function (flag) {
        list[index].classList.remove("visible");
        if (flag === 1) {
            index = (index + 1) % list.length;
        } else if (flag === 0){
            index = ( list.length * (index + 1) + (index - 1) ) % list.length; //uniwersalna instrukcja pozwalajaca na poruszanie sie w dol listy, gdy jest na pierwszym elemencie to po przejsciu na kolejny "nizszy" element wraca na koniec listy
            //mozna to zrobic na if'ach - mniej obliczen ale to rozwiazanie tak w ramach ciekawostki
        }

        list[index].classList.add("visible");
    };

    next.addEventListener("click", function () {
        sliding(1);
    });
    prev.addEventListener("click", function () {
        sliding(0);
    });

    //koniec obslugi slidera

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
