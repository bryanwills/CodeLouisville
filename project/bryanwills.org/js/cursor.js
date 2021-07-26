
/* Get the cursor div from site */
let mouseCursor = document.querySelector(".cursor");
/* Get all of the links in the navigation */
let navLinks = document.querySelectorAll(".nav-links li");

/* Listen for all events for the 'mousemove' when the user moves the mouse */
window.addEventListener('mousemove', cursor);

/* Write this into a function that will also act as an event that will grab the coordinates of the mouse and show the exact position on the screen if you use a console.log(e) Used the pageY and PageX events from the console. The 'e' is the event aka mousemove by user*/
function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add("link-grow");
        link.classList.add("hovered-link");
    });
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove("link-grow");
        link.classList.remove("hovered-link");
    });
});