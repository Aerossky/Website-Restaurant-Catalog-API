import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {

    static async listRestaurants() {
        try {
            const response = await fetch(API_ENDPOINT.LIST);
            const responseJson = await response.json();
            return responseJson.restaurants;
        } catch (error) {
            console.error('Failed to fetch restaurant data:', error);
            throw error;
        }

    }

    static async detailRestaurant(id) {
        try {
            const response = await fetch(API_ENDPOINT.DETAIL(id));
            const responseJson = await response.json();
            return responseJson.restaurant;
        } catch (error) {
            console.error('Failed to fetch restaurant details:', error);
            throw error;
        }

    }

}

export default RestaurantSource;