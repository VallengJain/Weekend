export const hideLoader = () => {
    const loader = document.querySelector('.loader');
    loader.style.animation = 'fadeAwayLoader ease-in 0.3s forwards';
    setTimeout(() => {
        loader.remove();
    }, 500)
}