import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryBox = document.querySelector("ul.gallery");
let lightboxInstance = null;
galleryBox.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.tagName === "IMG") {
    const imgSource = event.target.dataset.source;

    lightboxInstance = new SimpleLightbox(`img[src='${imgSource}']`, {
        captions: true,
        captionDelay: 250,
      });
  

    lightboxInstance.show();

    window.addEventListener("keydown", handleKey);
  }
});
for (const item of galleryItems) {
    if(Array.isArray(galleryItems)){
  const imgGallery = `<li class="gallery__item"><a class="gallery__link" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a></li>`;
  galleryBox.insertAdjacentHTML("beforeend", imgGallery);};
};

//klik esc
function handleKey(event) {
  if (event.key === "Escape") {
    lightboxInstance.close();
    window.removeEventListener("keydown", handleKey);
  }
}
console.log(galleryItems);
