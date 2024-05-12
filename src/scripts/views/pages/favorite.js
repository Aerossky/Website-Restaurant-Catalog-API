const Favorite = {
    async render() {
        return `
        <section id="explore">
        <div class="container">
        <h2>Favorite Page</h2>
            <div class="explore-content">

            <div class="explore-item">
                <div class="rating">4.6</div>
                <img src="https://restaurant-api.dicoding.dev/images/medium/41" />
                <div class="card">
                <p class="city">City Name</p>
                <h3 class="name">name</h3>
                <p class="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, tempore.</p>
                </div>
            </div> 

            </div>
        </section>
      `;
    },

    async afterRender() {
        // Fungsi ini akan dipanggil setelah render()
    },
};

export default Favorite;