export const dropdown = () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown__toggle');
        const menu = dropdown.querySelector('.dropdown__list');

        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            menu.classList.toggle('show');
        });
    });

    window.addEventListener('click', function (e) {
        if (!e.target.matches('.dropdown__toggle')) {
            const openMenus = document.querySelectorAll('.dropdown__list.show');
            openMenus.forEach(menu => {
                menu.classList.remove('show');
            });
        }
    });
}