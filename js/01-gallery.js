import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = galleryItems;

const listRef = document.querySelector(".gallery");

const markup = gallery
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

listRef.innerHTML = markup;

listRef.addEventListener("click", showImageFullSizeInModal);

function showImageFullSizeInModal(e) {
	e.preventDefault();
	if (!e.target.classList.contains("gallery__image")) {
		return;
	}
	const instance = basicLightbox.create(`
	    <div class="modal">
	        <img src="${e.target.dataset.source}">
	    </div>
	`);
	instance.show();

	document.addEventListener("keydown", closeModal);

	function closeModal(e) {
		if (e.code === "Escape") {
			instance.close();
			document.removeEventListener("keydown", closeModal);
		}
	}
}
