document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    let counter = 1;

    function slide() {
        slider.style.transform = `translateX(${-counter * 100}%)`;
        counter++;
        if (counter === 3) {
            counter = 0;
        }
    }

    setInterval(slide, 6000);
});