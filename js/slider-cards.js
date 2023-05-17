const container = document.querySelector('.container');
const cards = document.querySelectorAll('.card');

let isDown = false;
let startX;
let scrollLeft;

container.addEventListener('mousedown', (e) => {
    isDown = true;
    container.classList.add('active');
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
});

container.addEventListener('mouseleave', () => {
    isDown = false;
    container.classList.remove('active');
});

container.addEventListener('mouseup', () => {
    isDown = false;
    container.classList.remove('active');
});

container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 3; // Velocidad del scroll
    container.scrollLeft = scrollLeft - walk;
});

cards.forEach((card) => {
    card.addEventListener('click', () => {
        cards.forEach((c) => c.classList.remove('active'));
        card.classList.add('active');
    });
});
