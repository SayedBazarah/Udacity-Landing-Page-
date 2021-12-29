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
const variables = {
    nav_element: document.querySelectorAll('section'),
    nav: document.getElementById("navbar__list"),
    active_section: "section1",
}


/**
 * End Global Variables
 * Start Helper Functions
 *
 */





/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
const nav_builder = {
    build: () => {
        nav_builder.nav_structure()
        nav_builder.active_section();
        nav_builder.smoth_scroll();
    },
    nav_structure: () => {
        variables.nav_element.forEach((sec) => {
            var li = document.createElement("li")
            const link = document.createElement("a");
            link.innerText = sec.attributes['data-nav'].value
            link.href=`#${sec.id}`
            link.animate({},500)
            link.classList.add('menu__link')
            li.appendChild(link)
            variables.nav.appendChild(li)
        })
    },
    active_section: () => {
        variables.nav_element.forEach((sec) => {
            sec.addEventListener("mouseover",() => {
                console.log(sec)
                if(variables.active_section === sec.id) {
                    console.log(sec.id)
                }
                else {
                    document.getElementById(variables.active_section).classList.remove("your-active-class")
                    variables.active_section = sec.id
                    
                    sec.classList.add("your-active-class")
                }
            })
        })
    }
}

nav_builder.build();
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click

// Set sections as active