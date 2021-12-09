const sliderNext = document.querySelector('.slider-next'),
      sliderLine = document.querySelector('.slider-line'),
      sliderPrev = document.querySelector('.slider-prev'),
      select = document.querySelector('.change-lang'),
      allLang = ['en', 'de', 'ru'];

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
        offset = 1020;
    }
    sliderLine.style.left = -offset + 'px'; // работатет есть в CSS position: relative;
});

select.addEventListener('change', changeURLLanguage);

// перенаправлание на url с указанием языка
function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguege() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    console.log(hash);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#en';
        location.reload();
    }
    select.value = hash;
    document.querySelector('.lng-text').innerHTML = langArr['text'][hash];
}
changeLanguege();
