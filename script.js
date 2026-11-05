
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const botao = document.querySelector('#reiniciar');

let loop;

const jump = () => {
    if (!mario.classList.contains('jump')) {
        mario.classList.add('jump');

        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
    }
}

function iniciarJogo() {

    botao.style.display = 'none';

    mario.src = 'img/mario.gif';
    mario.style.width = '150px';
    mario.style.bottom = '0px';
    mario.style.marginLeft = '0px';
    mario.style.animation = '';

    pipe.style.animation = 'none';
    pipe.style.left = '';
    pipe.style.right = '-80px';

    clouds.style.animation = 'none';
    clouds.style.right = '-550px';

    setTimeout(() => {
        pipe.style.animation = 'pipe-animation 1.5s infinite linear';
        clouds.style.animation = 'clouds-animation 10s infinite linear';
    }, 100);

    clearInterval(loop);

    loop = setInterval(() => {

        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

            clearInterval(loop);

            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            mario.src = 'img/game-over.png';
            mario.style.width = '90px';
            mario.style.marginLeft = '50px';

            botao.style.display = 'block';
        }

    }, 10);
}

document.addEventListener('keydown', jump);

botao.addEventListener('click', iniciarJogo);

iniciarJogo();
