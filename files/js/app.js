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

    setTimeout(() => {
        searchExpand.innerHTML = `
        <input type="text" name="search-input" id="search-input" placeholder="Search Guthib">
            <h5>Owners</h5>
            <ul class = "search-results">
                <li class="search-result-item">
                    <a href="#">
                        <div class = "owners">
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo">
                                <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                            </svg><span>NerfedChou</span>
                        </div>
                        <span class="jumpto">Jump to</span>
                    </a>
                </li>
            </ul>
    
            <h5>Projects</h5>
            <ul class = "search-results">
                <li class="search-result-item">
                    <a href="#">
                        <div class = "projects-results">
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo">
                                <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                            </svg><span>NerfedChou</span>
                        </div>
                        <span class="jumpto">Jump to</span>
                    </a>
                </li>
            </ul>
            `;
        setTimeout(() => {
            const input = document.getElementById("search-input");
            if (input) input.focus();
        }, 10);

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

newBtn = document.querySelector("#new-project-btn");
newBtnExpanded = document.querySelector(".new-project-expand");

isActive = false;
function expandNewBtn() {
    if (!isActive) {
        newBtnExpanded.style.display = "block";
        isActive = true;
    } else {
        newBtnExpanded.style.display = "none";
        isActive = false;
    }

}

function newBtnClose() {
    newBtnExpanded.style.display = "none";
}

newBtn.addEventListener("click", expandNewBtn);

document.addEventListener("mousedown", function(event) {
    if (isActive && !newBtnExpanded.contains(event.target) && !newBtn.contains(event.target)) {
        newBtnClose();
        isActive = false;
    }
});

mainProfile = document.querySelector("#profile-expand");
profileBtn = document.querySelector(".main-profile-btn");

profileActive = false;
function expandProfile() {
    if (!profileActive) {
        mainProfile.style.display = "block";
        profileActive = true;
    } else {
        mainProfile.style.display = "none";
        profileActive = false;
    }
}

function profileClose() {
    mainProfile.style.display = "none";
}

profileBtn.addEventListener("click", expandProfile);

document.addEventListener("mousedown", function(event) {
    if (profileActive && !mainProfile.contains(event.target) && !profileBtn.contains(event.target)) {
        profileClose();
        profileActive = false;
    }
});


