const imgs = document.getElementById('imgs');
const img = document.querySelectorAll('#imgs img');

let index = 0;

function run() {
    index++;

    if(index >= img.length) {
        index = 0;
    }

    imgs.style.transform = `translateX(${-index * 900}px)`;
}

setInterval(run, 1000);