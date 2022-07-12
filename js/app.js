/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
let sections = document.querySelectorAll('main section');
let navbarList = document.getElementById('navbar__list');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function removeActive(){
    sections.forEach(function(e){
        e.classList.remove('active-section');
    })
    listItems.forEach(function(e){
        e.classList.remove('active-nav-item');
    })
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */
function buildNav(){
    for(let i = 0;i < sections.length; i++){
        // adding the li element and the anchor link inside of it.
        const navItem = document.createElement('li');
        const navLink = document.createElement("a");
        navbarList.appendChild(navItem);
        navItem.appendChild(navLink);
        // setting the text content from the dataset of each section
        navLink.textContent = sections[i].dataset.nav;
        // adding the class name for the Style
        navLink.className = "menu__link"
        // adding the ID of each section in the href of the anchor link
        navLink.href = '#'+sections[i].id;
    }
}
buildNav()
let listItems = document.querySelectorAll('ul li a');

/**
 * End Main Functions
 * Begin Events
 * 
*/
