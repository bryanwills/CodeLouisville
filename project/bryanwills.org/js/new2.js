

const images = document.querySelectorAll(".ween-gallery .weens");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modalImg");
const modalTxt = document.querySelector(".modalTxt");
const close = document.querySelector(".close");

// Close modal on click
close.addEventListener("click", () => {
    modal.classList.remove("appear");
});

// forEach loop
images.forEach(addImageEventListener);

// Function to replace modalImg and modalTxt with specific image and alt text
function addImageEventListener(image) {
    image.addEventListener("click", () => {
        modalImg.src = image.src;
        modalTxt.innerHTML = image.alt;
// Add class of appear to modal
        modal.classList.add("appear");
    });
}