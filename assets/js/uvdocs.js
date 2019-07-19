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

window.onload = load;
async function load() {
    var retrievedData = sessionStorage.getItem("activeId");
    var idArray = JSON.parse(retrievedData);
    loadSearchTextBox();
    if (idArray && (idArray instanceof Array) ) {
        for (let i = 0; i < idArray.length; i++) {
            document.getElementById(idArray[i]).classList.add('open');

        }
    }
}

async function loadSearchTextBox() {
    if (window.innerWidth < 1000) {
        document.querySelector('.hamburger-menu-wrapper .searchbar .searchBox').value = sessionStorage.getItem('search');
    } else {
        document.querySelector('.inline-header .searchbar .searchBox').value = sessionStorage.getItem('search');
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
            var onClickDropdownMenuItem = dropdowns[i];
            if (onClickDropdownMenuItem.classList.contains('show')) {
                onClickDropdownMenuItem.classList.remove('show');
            }
        }
    }
}


// select dropdown item;
function selectDropdownItem(dropdownItem) {
    dropdownItem.classList.add('is-selected');
}

// un-select dropdownmenu Item
function unSelectDropdownItem(dropdownItem) {
    dropdownItem.classList.remove('is-selected');
}

// on selecting current dropdown item
function onSelectDropdownItem(event = null) {
    
    const currentItem = openedDropdownItem();

    if (currentItem && (currentItem !== event.target)) {
        unSelectDropdownItem(currentItem);
    }
    
    if (event && (currentItem !== event.target)) {
        if(event.preventDefault) {
            event.preventDefault();
        }
        let target;
        
        if (isInlineLink(event.target.href, window.location.hostname)) {
            target = '_self';
            selectDropdownItem(openedDropdownItem(event.target));
        } else target = '_blank';
        window.open(event.target.href, target) ;
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

    const newMenuItem = event.target.nextElementSibling; 
    const inline = isInlineLink(newMenuItem.children[0].href, window.location.hostname);
    if (inline) {
        if (inlineMenuItem() && (newMenuItem !== inlineMenuItem())) {
            inlineMenuItem().classList.add('display-none');
            
            // un-select dropdown menu parent button
            unSelectDropdownItem(inlineMenuItem().previousElementSibling);
            
        }
        if (newMenuItem.classList.contains('display-none')) {
            newMenuItem.classList.remove('display-none');
            selectDropdownItem(event.target);
            inlineMenuItem(newMenuItem);
            onSelectDropdownItem({ target: newMenuItem.children[0] });
        } 
    } else {
        if(externalMenuItem() && (newMenuItem　!== externalMenuItem())) {
            externalMenuItem().classList.add('display-none');
        }
        externalMenuItem(newMenuItem).classList.remove('display-none');
    }
}

// on hamburger menu icon click
function onClickHamburgerIcon() {
    const hamburgerButton = document.querySelector('.hamburger-menu-icon');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    if (hamburgerButton.classList.contains('hamburger-menu-icon-change')) {
        closeHamburgerMenu(hamburgerButton, hamburgerMenu);
    } else {
        openHamburgerMenu(hamburgerButton, hamburgerMenu);
    }
}
// close the hamburger menu on the clicking the area outside the hamburger menu
document.body.addEventListener('mousedown', (event) => {
    if (event.clientY > document.querySelector('.header').getBoundingClientRect().bottom) {
        if (event.clientX > document.querySelector('.hamburger-menu').offsetWidth && 
            ([document.querySelector('.hamburger-menu-icon'),
               document.querySelector('.hmi-bar1'),
               document.querySelector('.hmi-bar2'),
               document.querySelector('.hmi-bar3')].indexOf(event.target) === -1)) {
            const hamburgerButton = document.querySelector('.hamburger-menu-icon');
            if (hamburgerButton.classList.contains('hamburger-menu-icon-change')) {
                closeHamburgerMenu(hamburgerButton, hamburgerMenu = document.querySelector('.hamburger-menu'));
            } else {
            }
            hideSearchBarDropdown(event);
        }
    }
});

function openDropdownMenuSelectItemOnPageLoad() {
    const links = document.querySelectorAll('.hamburger-menu-wrapper a');
    const length = links.length;
    for (let i = 0; i < length; i++) {
        if (links[i].href === window.location.href) {
            openedDropdownItem(selectDropdownItem(links[i].parentNode.previousElementSibling));
            inlineMenuItem(links[i].parentNode);
            links[i].parentNode.classList.remove('display-none');
            selectDropdownItem(links[i]);
            break;
        }
    }
}

function isInlineLink(link, domainName) {
  return link.match(`https?://${window.location.hostname}`) !== null;
}

//close the search bar when user clicks on the body.
<<<<<<< HEAD
function hideSearchBarDropdown (event) {
    const resultsContainer = window.innerWidth < 1000 ? document.querySelector('.hamburger-menu-wrapper .searchbar .results-container') : document.querySelector('.inline-header .searchbar .results-container');
    const rect = resultsContainer.getBoundingClientRect();
    if (event.clientX > rect.right || event.clientX < rect.left || event.clientY > rect.bottom || event.clientY < resultsContainer.previousElementSibling.getBoundingClientRect().top) {
        resultsContainer.classList.add('display-none');
    }
}
=======
// window.onclick = function() {

//     if(document.querySelector(".results-container").hasChildNodes())
//     {
//         document.querySelector(".results-container").classList.add('display-none');
//     }

// }
>>>>>>> 7a8f62fc60cd2509b93ce070b8b928ec277eb2bd
