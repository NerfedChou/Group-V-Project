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
    if (searchExpand.style.display === 'block') {
        searchClose();
    }
});

hamburgerMenu.addEventListener("click", toggleSideBar);
closeBtn.addEventListener("click", close);

search = document.querySelector(".search");
searchExpand = document.querySelector(".search-suggestions");

function searchExpanded() {
    searchExpand.style.display = "block";
    searchExpand.style.right = "20%";
    searchExpand.style.left = "auto";
    searchExpand.style.width = "0%";
    searchExpand.style.height = "7vh";
    searchExpand.style.transition = "width 0.3s ease, height 0.3s ease";

    setTimeout(() => {
        searchExpand.style.width = "64%";
    }, 10);

    // Listen for width transition end, then expand height
    searchExpand.addEventListener('transitionend', function handler(e) {
        if (e.propertyName === "width") {
            searchExpand.style.height = "70vh";
            searchExpand.removeEventListener('transitionend', handler);
        }
    });
}


function searchClose() {
    searchExpand.innerHTML = "";
    searchExpand.style.height = "7vh";

    searchExpand.addEventListener('transitionend', function handler(e) {
        if (e.propertyName === "height") {
            searchExpand.style.display = "none";
            searchExpand.removeEventListener('transitionend', handler);
        }
    });
}


document.addEventListener("mousedown", function(event) {
    if (searchExpand.style.display === "block" && !searchExpand.contains(event.target) && !search.contains(event.target)) {
        searchClose();
    }
});

search.addEventListener("click", searchExpanded);