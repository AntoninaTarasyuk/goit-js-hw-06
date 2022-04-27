const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const photoGallery = document.querySelector('.gallery');

const galleryArray = images.map(({url,alt}) => {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery__item');
  galleryItem.insertAdjacentHTML('beforeend', `<img src="${url}" class="gallery__image" alt="${alt}">`);
  return galleryItem;
});

photoGallery.append(...galleryArray);