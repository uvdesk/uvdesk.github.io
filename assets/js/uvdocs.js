//for pagination
var paginationCollection = document.getElementById('pagination');
if (paginationCollection) {
    paginationCollection.addEventListener('click', event => {
        var dropdowns = document.getElementsByClassName("pagination");
        dropdowns = dropdowns[0];

        let listItemsHTMLCollection = dropdowns.children;

        let listItemsArrayCollection = Array.prototype.slice.call(listItemsHTMLCollection);
        if (listItemsArrayCollection) {
            listItemsArrayCollection.forEach(item => {
                item.classList.remove('active')
            });
        }

        event.target.classList.add('active');
    })
}
//for side-bar
var sideCollection = document.getElementById('nav__list');
if (sideCollection) {
    sideCollection.addEventListener('click', event => {
        var active = document.getElementsByClassName('open');
        for (i = 0; i < active.length; i++) {
            console.log(active[i].classList.remove('open'));
        }
        event.target.classList.add('open');
    })
}

var current = document.getElementById('nav__list');
if (current) {
    var idCollection = [];
    current.addEventListener('click', event => {
        if (!(event.target.id.indexOf('group') > -1)) {
           // console.log("sau-",event.target.id);
            idCollection.push(event.target.id);
        }
        sessionStorage.setItem('activeId', JSON.stringify(idCollection));
    })
}

// current openedMenu static variable;
let openedDropDown = getSetOpenedDropdown();


window.onload = load;
function load() {
    var retrievedData = sessionStorage.getItem("activeId");
    var idArray = JSON.parse(retrievedData);
    if (idArray && (idArray instanceof Array) ) {
        for (let i = 0; i < idArray.length; i++) {
            document.getElementById(idArray[i]).classList.add('open');
            //console.log(idArray[i]);
        }

    }

    const hamburgerDrpDnBtns = document.querySelectorAll('.hamburger-menu-wrapper .parent .dropdown-btn');
    const length = hamburgerDrpDnBtns.length;

    for　(i = 0; i < length; i++) {
        hamburgerDrpDnBtns[i].onclick = openHamburgerDropdown;
    }

}

//for footer-button
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}


window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


// on hamburger menu icon click
function onClickHamburgerIcon() {
    const hamburgerButton = document.querySelector('.hamburger-menu-icon');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    if (!hamburgerButton.classList.contains('hamburger-menu-icon-change')) {
        openHamburgerMenu(hamburgerButton, hamburgerMenu);
    }
}

// open Hamburger menu
function openHamburgerMenu(hamburgerButton, hamburgerMenu) {
    hamburgerButton.classList.add('hamburger-menu-icon-change');
    hamburgerMenu.classList.add('hamburger-menu-show');
}

// close hamburger menu
function closeHamburgerMenu(hamburgerButton, hamburgerMenu) {
    hamburgerButton.classList.remove('hamburger-menu-icon-change');
    hamburgerMenu.classList.remove('hamburger-menu-show');
}

// open the selected dropdown menu in the hamburger menu and close the opened one
function openHamburgerDropdown(event) {
    if (openedDropDown()) {
        openedDropDown().style.display = 'none';
    }
    (openedDropDown(event.target.nextElementSibling)).style.display = 'block';
}

// close the hamburger menu on the clicking the area outside the hamburger menu
document.body.addEventListener('mousedown', (event) => {
    if (event.clientX > document.querySelector('.hamburger-menu').offsetWidth) {
        const hamburgerButton = document.querySelector('.hamburger-menu-icon');
        if (hamburgerButton.classList.contains('hamburger-menu-icon-change')) {
            closeHamburgerMenu(hamburgerButton, hamburgerMenu = document.querySelector('.hamburger-menu'));
        }
    }
});

// static variable for storing current opened hamburger dropdown menu 
function getSetOpenedDropdown() {
    let currentDropdown = null;
    return function(dropDown = null) {
        if (dropDown) {
            currentDropdown = dropDown;
        }
        return currentDropdown;
    }
}
