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
<<<<<<< HEAD
=======
            //console.log(idArray[i]);
>>>>>>> c424388997935387cea903a76f03172562d9cf95
        }

    }

    const hamburgerDrpDnBtns = document.querySelectorAll('.hamburger-menu-wrapper .parent .dropdown-btn');
    const length = hamburgerDrpDnBtns.length;

    for　(i = 0; i < length; i++) {
        hamburgerDrpDnBtns[i].onclick = openHamburgerDropdown;
<<<<<<< HEAD
        hamburgerDrpDnBtns[i].nextElementSibling.style.display = 'none';
=======
>>>>>>> c424388997935387cea903a76f03172562d9cf95
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
<<<<<<< HEAD
    if (hamburgerButton.classList.contains('hamburger-menu-icon-change')) {
        closeHamburgerMenu(hamburgerButton, hamburgerMenu);
    } else {
=======
    if (!hamburgerButton.classList.contains('hamburger-menu-icon-change')) {
>>>>>>> c424388997935387cea903a76f03172562d9cf95
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
<<<<<<< HEAD

    if (openedDropDown() && (event.target.nextElementSibling !== openedDropDown())) {
        openedDropDown().style.display = 'none';
    }
    if (event.target.nextElementSibling.style.display === 'none') {
        (openedDropDown(event.target.nextElementSibling)).style.display = 'block';
    } else {
        (openedDropDown(event.target.nextElementSibling)).style.display = 'none';
    }
=======
    if (openedDropDown()) {
        openedDropDown().style.display = 'none';
    }
    (openedDropDown(event.target.nextElementSibling)).style.display = 'block';
>>>>>>> c424388997935387cea903a76f03172562d9cf95
}

// close the hamburger menu on the clicking the area outside the hamburger menu
document.body.addEventListener('mousedown', (event) => {
<<<<<<< HEAD

    if (event.clientX > document.querySelector('.hamburger-menu').offsetWidth && 
        ([document.querySelector('.hamburger-menu-icon'),
           document.querySelector('.hmi-bar1'),
           document.querySelector('.hmi-bar2'),
           document.querySelector('.hmi-bar3')].indexOf(event.target) === -1)) {
=======
    if (event.clientX > document.querySelector('.hamburger-menu').offsetWidth) {
>>>>>>> c424388997935387cea903a76f03172562d9cf95
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
