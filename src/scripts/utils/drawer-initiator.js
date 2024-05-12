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
        if (drawer.style.display === 'block') {
            drawer.style.display = 'none';
        } else {
            drawer.style.display = 'block';
        }
    },

    _closeDrawer(event, drawer) {
        event.stopPropagation();
        // drawer.classList.remove('open');
        drawer.style.display = 'none';
    },
};

export default DrawerInitiator;