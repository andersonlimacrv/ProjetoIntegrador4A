//HEADER
(function () {
    "use strict";
    var menuId;
    function init() {
        menuId = document.getElementById("menu");
        document.addEventListener("scroll", scrollMenu, false);
    }
    function scrollMenu() {
        if (document.documentElement.scrollTop > 50) {
            menuId.classList.add("scroll");
            console.log('scroll');
        }
        else {
            menuId.classList.remove("scroll");
            console.log('no-scroll');
        }
    }
    document.addEventListener("DOMContentLoaded", init, false);
})();

(function () {
    "use strict";
    var mobBtn, topMenu;

    function init() {
        mobBtn = document.getElementById("mobile-btn");
        topMenu = document.getElementById("top-menu");
        mobBtn.addEventListener("click", mobileMenu, false);
    }

    function mobileMenu() {
        if (topMenu.classList.contains("mobile-open")) {
            topMenu.classList.remove("mobile-open");
        } else {
            topMenu.classList.add("mobile-open");
        }
        if (mobBtn.classList.contains("hamburger-cross")) {
            mobBtn.classList.remove("hamburger-cross");
        }
        else {
            mobBtn.classList.add("hamburger-cross");
        }
    }

    document.addEventListener("DOMContentLoaded", init);

})();

// Animations

let sections = document.querySelectorAll('.section');
const videoFramerSections = document.querySelectorAll('.video_content');

window.onscroll = () => {
    videoFramerSections.forEach(videoSection => {
        let top = window.scrollY;
        let offset = videoSection.offsetTop - 1000;
        let height = videoSection.offsetHeight;

        if (top >= offset && top < offset + height) {

            playVideo();
        }
    });
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 500;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');

        }
        else {
            sec.classList.remove('show-animate');

        }
    })
}


function playVideo() {
    var videoFrame = document.getElementById('videoFrame');
    if (!videoFrame.hasAttribute('data-autoplayed')) {

        videoFrame.src += "&autoplay=1";
        videoFrame.setAttribute('data-autoplayed', 'true'); // Marca o vídeo como reproduzido
    }
}
