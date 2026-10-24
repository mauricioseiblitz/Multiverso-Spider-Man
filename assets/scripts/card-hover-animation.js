function handleMouseEnter() {
    this.classList.add('s-card--hovered');
}

function handleMouseLeave() {
    this.classList.remove('s-card--hovered');
}

function addEventListenersToCards() {
    const cardElements = document.querySelectorAll('.s-card');

    cardElements.forEach((cardElement) => {
        cardElement.addEventListener('mouseenter', handleMouseEnter);
        cardElement.addEventListener('mouseleave', handleMouseLeave);
    });
}

addEventListenersToCards();