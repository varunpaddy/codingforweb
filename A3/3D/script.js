window.addEventListener("scroll", function() {
    var h1Element = document.querySelector("h1");
    if (window.scrollY >= 500) {
        h1Element.classList.add("fade-on-scroll");
    } else {
        h1Element.classList.remove("fade-on-scroll");
    }
});
