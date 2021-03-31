import Axios from 'axios'

const url = 'api/posts';

class Service {
    static getHomeResults(){
        return Axios.get(url)
    }
}

export default Service