import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = galleryItems;

const list = document.querySelector(".gallery");

const markup = gallery
	.map(
		image => `<div class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="large-image.jpg"
      alt="${image.description}"
    />
  </a>
</div>`,
	)
	.join(" ");

list.innerHTML = markup;
