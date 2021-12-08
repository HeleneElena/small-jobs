const sliderNext = document.querySelector('.slider-next'),
      sliderLine = document.querySelector('.slider-line'),
      sliderPrev = document.querySelector('.slider-prev');

let offset = 0; // смешение от левого края


sliderNext.addEventListener('click', () => {
    offset += 510; // + ширина картинки
    if (offset > 1470) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px'; // работатет есть в CSS position: relative;
});

sliderPrev.addEventListener('click', () => {
    offset -= 510; // + ширина картинки
    if (offset < 0) {
        offset = 1470;
    }
    sliderLine.style.left = -offset + 'px'; // работатет есть в CSS position: relative;
});


