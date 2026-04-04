let text = document.querySelector('.title');

const textLoad = () => {
    setTimeout(() => {
        text.textContent = 'Valeriia Barabash';
    }, 0);
    setTimeout(() => {
        text.textContent = 'Programmer';
    }, 4000);
    setTimeout(() => {
        text.textContent = 'Web Developer';
    }, 8000);
}
textLoad();


window.onload = () => {
const icons = Array.from(document.getElementsByClassName("header-nav"));
icons.forEach((button, index) => {
	button.addEventListener("click", () => {
		let currentIcon = icons[index];
		currentIcon.classList.add("selectIcon");
	})
})};




document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide', {
        type: 'loop',
        perPage: 1,
        gap: '20px',
        arrows: true,
        pagination: true,
        drag: true,
        speed: 800,
        easing: 'ease-in-out',
    }).mount();
});



document.addEventListener('DOMContentLoaded', function () {


    new Splide('#splide', {
        type: 'loop',
        perPage: 1,
        arrows: true,
        pagination: true,
        speed: 800,
        easing: 'ease-in-out',
    }).mount();


    new Splide('#edu-splide', {
        type: 'loop',
        perPage: 1,
        arrows: true,
        pagination: true,
        speed: 800,
        easing: 'ease-in-out',
    }).mount();

});



  

