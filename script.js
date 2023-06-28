const scrollingImageContainers = document.querySelectorAll('.scrolling-image');

scrollingImageContainers.forEach(container => {
  const images = container.querySelectorAll('img');
  const arrowLeft = container.querySelector('.arrow.left');
  const arrowRight = container.querySelector('.arrow.right');
  const imageWidth = images[0].offsetWidth;
  const containerWidth = container.offsetWidth;
  const scrollWidth = (imageWidth * images.length) - containerWidth;
  let currentPosition = 0;

  arrowLeft.addEventListener('click', () => {
    currentPosition -= imageWidth;
    if (currentPosition < 0) {
      currentPosition = scrollWidth;
    }
    container.style.transform = `translateX(-${currentPosition}px)`;
  });

  arrowRight.addEventListener('click', () => {
    currentPosition += imageWidth;
    if (currentPosition > scrollWidth) {
      currentPosition = 0;
    }
    container.style.transform = `translateX(-${currentPosition}px)`;
  });
});