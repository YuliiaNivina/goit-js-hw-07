import { galleryItems } from "./gallery-items.js";

// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);

galleryEl.addEventListener("click", onClickGalleryItem);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

let instance = {};

function onClickGalleryItem(evt) {
  evt.preventDefault();
  
  if (evt.target.nodeName !== "IMG") {
  return
}
  const imgUrl = evt.target.dataset.source;

  window.addEventListener("keydown", onEscModalClose);

  instance = basicLightbox.create(`
    <img src=${imgUrl} width="800" height="600">
`);

  instance.show();

  // console.log(imgUrl);
  // console.log(instance);
}

function onEscModalClose(evt) {
  if (evt.code === "Escape") {
    instance.close();

    window.removeEventListener("keydown", onEscModalClose);
    console.log(evt);
  }
}
