//   3 прослуховувача через фор ич
const container = document.querySelector('.js-container');

[...container.children].forEach(item => item.addEventListener('click', onClick))

function onClick(evt) {
    console.log(evt.currentTarget.dataset.color);
    console.log(evt);
}
 

// Один слухач на всіх

const container = document.querySelector('.js-container');

container.addEventListener('click', onClick)

function onClick(evt) {
    console.log(evt.currentTarget);
    console.log(evt.target);
}
