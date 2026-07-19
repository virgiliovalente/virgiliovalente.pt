window.addEventListener("load", () => {

    const name = document.getElementById("name");
    const subtitle = document.getElementById("subtitle");
    const line1 = document.getElementById("line1");
    const line2 = document.getElementById("line2");
    const scroll = document.querySelector(".scroll");

    setTimeout(() => {
        name.classList.add("fade");
    }, 2000);

    setTimeout(() => {
        subtitle.classList.add("fade");
    }, 4000);

    setTimeout(() => {
        line1.classList.add("fade");
    }, 6000);

    setTimeout(() => {
        line2.classList.add("fade");
    }, 7000);

    setTimeout(() => {
        scroll.classList.add("fade");
        scroll.style.animation += ", bounce 2s infinite";
    }, 9000);

});
