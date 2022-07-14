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
const sections = document.querySelectorAll('main section');
const navbarList = document.getElementById('navbar__list');
const ScrollTop = document.querySelector('.scroll-to-top');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// remove active function
function removeActive(){
    // removing the active class from all sections
    sections.forEach(function(e){
        e.classList.remove('active-section');
    })
    // removing the active class from all nav items
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
        // adding the li element and the span inside of it.
        const navItem = document.createElement('li');
        const navLink = document.createElement("span");
        navbarList.appendChild(navItem);
        navItem.appendChild(navLink);
        // setting the text content from the dataset of each section
        navLink.textContent = sections[i].dataset.nav;
        // adding the class name for the Style
        navLink.className = "menu__link";
    }
}
buildNav()
//Assign nav items array after creation
const listItems = document.querySelectorAll('ul li span');
/**
 * End Main Functions
 * Begin Events
 * 
*/
onscroll = function(){
    for(let i = 0; i<sections.length;i++){
         // catch where the view port reachs the section
        if(window.scrollY >= sections[i].offsetTop - (sections[i].offsetHeight * 0.35)){
            // removing all active class [section and nav items] using the helper function
            removeActive();
            // adding active class
            sections[i].classList.add('active-section')
            listItems[i].classList.add('active-nav-item')
        }
        // removing Active class while scrolling aftere all sections
        window.scrollY > sections[sections.length - 1].offsetTop+sections[sections.length - 1].offsetHeight ? removeActive():false;
    }
    // Appearance of scroll to top
    window.scrollY >= document.body.offsetHeight * 0.25 ? ScrollTop.style.right = "4%" : ScrollTop.style.right = "-30%";
}
// scroll to top function
ScrollTop.onclick = function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}
// scrolling to section onclick the nav item [depends on the same index].
for(let i = 0;i < listItems.length;i++){
    listItems[i].onclick = function(){
        window.scrollTo({
            top: sections[i].offsetTop,
            left:0,
            behavior: "smooth"
        })
    };
};