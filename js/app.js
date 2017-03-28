document.addEventListener("DOMContentLoaded", function () {
    var slider = document.getElementById("slider");
    var next = slider.querySelector(".rightArrow");
    var prev = slider.querySelector(".leftArrow");
    var list = slider.querySelectorAll("li");
    var index = 0;

    list[index].classList.add("visible");

    var sliding = function (flag) {
        list[index].classList.remove("visible");
        if (flag === 1) {
            if (index === list.length-1) {
                index = 0;
            } else {
                index++;
            }
        } else {
            if (index === 0) {
                index = list.length-1;
            } else {
                index--;
            }
        }

        list[index].classList.add("visible");
    };

    next.addEventListener("click", function () {
        sliding(1);
    });
    prev.addEventListener("click", function () {
        sliding(0);
    });
});
