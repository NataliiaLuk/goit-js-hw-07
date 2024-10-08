import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('ul');

const imgMarkup = createImgItemMarkup(galleryItems);
gallery.innerHTML = imgMarkup;

gallery.addEventListener('click', onImgItemClick);

function createImgItemMarkup(items) {
return items.map(({preview, original, description}) => {
        return `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </li>`
    }).join('');

}

function onImgItemClick(evt) {

    if (!evt.target.classList.contains('.gallery__item')) {
        return;
    }
    evt.preventDefault();
    const bigImg = evt.target.dataset.source;
    if (!bigImg) return;
 
    const modalImgMarkup = basicLightbox.create(`
    <div class="modal">
         <img src="${bigImg}" width="800" height="600">
    </div>
`);

    modalImgMarkup.show()
}
