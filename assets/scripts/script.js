function handleMouseEnter() {
    this.classList.add('s-card--hovered');
    document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave() {
    this.classList.remove('s-card--hovered');
    document.body.id = '';
}

function addEventListenersToCards() {
    const cardElements = document.querySelectorAll('.s-card');

    cardElements.forEach((cardElement) => {
        cardElement.addEventListener('mouseenter', handleMouseEnter);
        cardElement.addEventListener('mouseleave', handleMouseLeave);
    });
}

function selectCarrouselItem(selectedItem) {
    console.log("Item selecionado: ", selectedItem.id);
}

document.addEventListener('DOMContentLoaded', addEventListenersToCards, false);

function selectCarrouselItem(selectedButton) {
    const selectedItem = selectedButton.id;
    const carousel = document.querySelector('.s-cards-carousel');
    const transform = carousel.style.transform;
    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
    const rotateYDeg = -120 * (Number(selectedItem) - 1);
    const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);
    carousel.style.transform = newTransform;

    const activeButtonElement = document.querySelector('.s-controller__button--active');
    activeButtonElement.classList.remove('s-controller__button--active');
    selectedButton.classList.add('s-controller__button--active');   
}
