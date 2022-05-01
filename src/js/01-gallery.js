// Add imports above this line
import SimpleLightbox from "simplelightbox";

import { galleryItems } from './gallery-items';

// Change code below this line

import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const galleryTotal = document.querySelector(".gallery");

galleryTotal.insertAdjacentHTML('beforeend', createGallery(galleryItems));

galleryTotal.addEventListener("click", showModalPicture);



let gallerySimpleLightbox = new SimpleLightbox('.gallery a', { captionDelay: 250});

function createGallery(arrey) {
    return arrey.map((value) => {
        return `
           <a class="gallery__link" href="${value.original}"  onclick="return false;">
                <img
                  class="gallery__image"
                  src="${value.preview}"
                  alt="${value.description}"
                  title="${value.description}"
                 />
           </a>
        `}).join("")
};

function showModalPicture(event) {
    if (!event.target.classList.contains("gallery__image")) { return };
    
    gallerySimpleLightbox.on('show.simplelightbox');  
}