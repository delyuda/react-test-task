import api from '../utils/api';
// import Http from '../utils/http';
import CONSTS from '../consts';

// const http = new Http();

class AsteroidService {
    getAsteroid (id) {
        return api.get(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${CONSTS.API_KEY}`)
        // return http.get(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${CONSTS.API_KEY}`)
    }

    getRandomAsteroid () {
        return api.get(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY`);
        // return http.get('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY/');
    }
}

export default AsteroidService;