import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('ul');

const imgMarkup = createImgItemMarkup(galleryItems);
gallery.innerHTML = imgMarkup;

// gallery.addEventListener('click', onImgItemClick);

function createImgItemMarkup(items) {
return items.map(({preview, original, description}) => {
        return `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    alt="${description}"
                />
            </a>
        </li>`
    }).join('');

}

let gal = new SimpleLightbox('.gallery__item a', {
  captions: true,
  captionSelector: "img",
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
