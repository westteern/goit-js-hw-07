import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = galleryItems;

const listRef = document.querySelector(".gallery");

function markupGallery(gallery) {
	return gallery
		.map(
			image => `<div class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</div>`,
		)
		.join(" ");
}
const markup = markupGallery(gallery);
listRef.innerHTML = markup;

let instance = basicLightbox.create(``);

listRef.addEventListener("click", showImageFullSizeInModal);
// listRef.addEventListener("click", removeListnerOnClick);

function showImageFullSizeInModal(e) {
	e.preventDefault();

	if (!e.target.classList.contains("gallery__image")) return;

	openModal(e);

	document.addEventListener("keydown", closeModal);

	closeModal(e);
}

function openModal(eventClik) {
	instance = basicLightbox.create(`
	    <div class="modal">
	        <img src="${eventClik.target.dataset.source}" width ="960">
	    </div>
	`);
	instance.show();
}
function closeModal(eventKeydown) {
	if (eventKeydown.code === "Escape") {
		instance.close();
		document.removeEventListener("keydown", closeModal);
		console.log(eventKeydown);
	}
}
// function removeListnerOnClick(e) {
// 	if (e.target.classList.contains === "basicLightbox__placeholder") {
// 		document.removeEventListener("keydown", closeModal);
// 	}
// }
