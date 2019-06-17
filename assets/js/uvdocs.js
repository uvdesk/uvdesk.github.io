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
function load() {
    openDropdownMenuSelectItemOnPageLoad();
    var retrievedData = sessionStorage.getItem("activeId");
    var idArray = JSON.parse(retrievedData);
    if (idArray && (idArray instanceof Array) ) {
        for (let i = 0; i < idArray.length; i++) {
            document.getElementById(idArray[i]).classList.add('open');

        }
    }

    const hamburgerDrpDnBtns = document.querySelectorAll('.hamburger-menu-wrapper .parent .dropdown-btn');
    const length = hamburgerDrpDnBtns.length;

    for　(i = 0; i < length; i++) {
        hamburgerDrpDnBtns[i].onclick = openHamburgerDropdown;
        hamburgerDrpDnBtns[i].nextElementSibling.style.display = 'none';

        const sibLen = hamburgerDrpDnBtns[i].nextElementSibling.children.length;
        for (j = 0; j < sibLen; j++) {
            hamburgerDrpDnBtns[i].nextElementSibling.children[j].onclick = onSelectDropdownItem;
        }

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



// current openedMenu static variable;
let inlineMenuItem = staticVariable();

// currentOpened External menu
let externalMenuItem = staticVariable();

// current selected dropdown menu item
let openedDropdownItem = staticVariable();

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
            inlineMenuItem().style.display = 'none';
            // un-select dropdown menu parent button
            unSelectDropdownItem(inlineMenuItem().previousElementSibling);
        }
        if (newMenuItem.style.display === 'none') {
            newMenuItem.style.display = 'block';
            selectDropdownItem(event.target);
            inlineMenuItem(newMenuItem);
            onSelectDropdownItem({ target: newMenuItem.children[0] });
        } 
    } else {
        if(externalMenuItem() && (newMenuItem　!== externalMenuItem())) {
            externalMenuItem().style.display = 'none';
        }
        externalMenuItem(newMenuItem).style.display = 'block';
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
    if (event.clientX > document.querySelector('.hamburger-menu').offsetWidth && 
        ([document.querySelector('.hamburger-menu-icon'),
           document.querySelector('.hmi-bar1'),
           document.querySelector('.hmi-bar2'),
           document.querySelector('.hmi-bar3')].indexOf(event.target) === -1)) {
        const hamburgerButton = document.querySelector('.hamburger-menu-icon');
        if (hamburgerButton.classList.contains('hamburger-menu-icon-change')) {
            closeHamburgerMenu(hamburgerButton, hamburgerMenu = document.querySelector('.hamburger-menu'));
        }
    }
});

// closure for storing static values
function staticVariable() {
    let currentValue = null;
    return function(newValue = null) {
        if (newValue) {
            currentValue = newValue;
        }
        return currentValue;
    }
}

function openDropdownMenuSelectItemOnPageLoad() {
    const links = document.querySelectorAll('.hamburger-menu-wrapper a');
    const length = links.length;
    for (let i = 0; i < length; i++) {
        if (links[i].href === window.location.href) {
            openedDropdownItem(selectDropdownItem(links[i].parentNode.previousElementSibling));
            inlineMenuItem(links[i].parentNode);
            setTimeout(() => {
                links[i].parentNode.style.display = 'block';
            }, 1);
            selectDropdownItem(links[i]);
            break;
        }
    }
}

function isInlineLink(link, domainName) {
  return link.match(`https?://${window.location.hostname}`) !== null;
}