const DrawerInitiator = {
    init({
        button,
        drawer,
        content
    }) {
        button.addEventListener('click', (event) => {
            this._toggleDrawer(event, drawer);
        });

        content.addEventListener('click', (event) => {
            this._closeDrawer(event, drawer);
        });
    },

    _toggleDrawer(event, drawer) {
        event.stopPropagation();
        const isMobile = window.innerWidth <= 768; // Menentukan apakah perangkat dianggap sebagai perangkat mobile
        if (isMobile) {
            if (drawer.style.display === 'block') {
                drawer.style.display = 'none';
            } else {
                drawer.style.display = 'block';
            }
        }
    },

    _closeDrawer(event, drawer) {
        event.stopPropagation();
        // drawer.classList.remove('open');
        const isMobile = window.innerWidth <= 768; // Menentukan apakah perangkat dianggap sebagai perangkat mobile
        if (isMobile) {
            drawer.style.display = 'none';
        }
    },
};

export default DrawerInitiator;