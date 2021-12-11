const dino = document.querySelector('.dino'),
      cactus = document.querySelector('.cactus');

      console.log(dino);

document.addEventListener('keydown', function(event) {
    jump();
});

function jump() {
   if (dino.classList != 'jump') {
        dino.classList.add('jump');
   }
   setTimeout(function() {
        dino.classList.remove('jump');
   }, 300);
}

let isAlive = setInterval(() => {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

    if (cactusLeft < 40 && cactusLeft > 0 && dinoTop >= 140) {
        alert('GAME OVER!!!')
    }

}, 10);




