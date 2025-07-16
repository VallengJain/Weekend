export const showLoader = () => {
    const loader = document.querySelector('.loader');
    loader.style.display = 'flex';
}

export const hideLoader = () => {
    const loader = document.querySelector('.loader');
    loader.style.animation = 'fadeAwayLoader ease-in 0.3s forwards';
}