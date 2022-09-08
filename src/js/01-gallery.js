// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line


const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

//Створення розмітки
function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join('');
}

//Додавання підписів до зображень з атрибута alt 
//(Підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення)

new SimpleLightbox('.gallery a', {
	animationSpeed: 150,
	captionsData: 'alt',
	captionDelay: 250,
});

console.log(galleryItems);