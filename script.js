document.addEventListener("DOMContentLoaded", function () {
    console.log("Professional AI CV loaded!");

    // Smooth Scroll Effect
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
        });
    });
});
