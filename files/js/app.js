sideBar = document.querySelector(".side-bar")
hamburgerMenu = document.querySelector(".hamburger-menu")
closeBtn = document.querySelector(".close")


function toggleSideBar() {
    sideBar.style.display = "block"

    setTimeout(() => {
        sideBar.style.transform = 'translateX(0)';
    }, 10)
}

function close() {
    sideBar.style.transform = 'translateX(-100%)';

    sideBar.addEventListener('transitionend', () => {
        sideBar.style.display = "none";
    }, { once: true });
}

window.addEventListener('scroll', () => {
    if (sideBar.style.display === 'block') {
        close();
    }
});

hamburgerMenu.addEventListener("click", toggleSideBar);
closeBtn.addEventListener("click", close);