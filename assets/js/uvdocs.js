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
    var retrievedData = sessionStorage.getItem("activeId");
    var idArray = JSON.parse(retrievedData);
    if (typeof idArray !== 'undefined' ) {
        for (let i = 0; i < idArray.length; i++) {
            document.getElementById(idArray[i]).classList.add('open');
            //console.log(idArray[i]);
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
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

