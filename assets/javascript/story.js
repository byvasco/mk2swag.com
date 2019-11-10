const images = document.querySelectorAll('img');

images.forEach(image => {
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