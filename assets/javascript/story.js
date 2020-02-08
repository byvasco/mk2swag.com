const contentImages = document.querySelectorAll('p > img');
const images = document.querySelectorAll('img');
const gallery = document.querySelectorAll('.gallery');

const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

function magnifyImage(image) {
  lightbox.classList.add('active');
  const newImage = document.createElement('img');
  newImage.src = image.src;

  while (lightbox.firstChild) {
    lightbox.removeChild(lightbox.firstChild);
  }

  lightbox.appendChild(newImage);

  setTimeout(function() {
    newImage.classList.add('visible');
  }, 180);
}

contentImages.forEach(image => {
  const figure = document.createElement('figure');
  const newImage = document.createElement('img');

  newImage.setAttribute('src', image.getAttribute('src'));

  figure.appendChild(newImage);

  image.parentNode.replaceChild(figure, image);

  if (image.getAttribute('alt') != '') {
    const figcaption = document.createElement('figcaption');

    figcaption.innerText = image.getAttribute('alt');

    figure.appendChild(figcaption);
  }
});

// gallery.forEach(gallery => {
//   const galleryImages = gallery.querySelectorAll('img');

//   galleryImages.forEach(image => {
//     image.addEventListener('click', e => {
//       magnifyImage(image);
//     });
//   })
// });

images.forEach(image => {
  if (image.getAttribute('data-action') == 'zoom') {
    image.addEventListener('click', e => {
      magnifyImage(image);
    });
  }
});

lightbox.addEventListener('click', e => {
  // if (e.target !== e.currentTarget) return;

  lightbox.classList.remove('active');
});
