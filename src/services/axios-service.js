import axios from 'axios';

class AxiosService {
    
    axiosInstance = {};
    
    constructor() {
        this.initInstance();
    }
    
    initInstance() {
        this.axiosInstance = axios.create({
            baseURL: '/api/v1',
            timeout: 4000
        });
        
        return this.axiosInstance;
    }
    
    getInstance() {
        return this.axiosInstance || this.initInstance();
    }
}

export default new AxiosService();
