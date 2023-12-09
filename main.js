const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', (event) => {
        event.stopPropagation();
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}


document.addEventListener('click', function () {
    nav.classList.remove('active');
});


