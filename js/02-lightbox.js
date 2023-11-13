import { galleryItems } from "./gallery-items.js";


const galleryBox = document.querySelector("ul.gallery");
let lightboxInstance = null;


for (const item of galleryItems) {
 const imgGallery = `<li class="gallery__item"><a class="gallery__link" href="${item.original}">
     <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
   </a></li>`;
 galleryBox.insertAdjacentHTML("beforeend", imgGallery);
}


lightboxInstance = new SimpleLightbox('.gallery__item a');


galleryBox.addEventListener("click", (event) => {
 event.preventDefault();
  window.addEventListener("keydown", handleKey);
});


// Esc
function handleKey(event) {
 if (event.key === "Escape") {
   lightboxInstance.close();
   window.removeEventListener("keydown", handleKey);
 }
}


console.log(galleryItems);





