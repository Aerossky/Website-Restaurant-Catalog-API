import RestaurantSource from "../../data/restaurant-source";

const Home = {
    async render() {
        return `
        <h2>Home Page</h2>
      `;
    },

    async afterRender() {
        // Fungsi ini akan dipanggil setelah render()
        const restaurants = await RestaurantSource.listRestaurants();
        console.log(restaurants);
    },
};

export default Home;