import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:4001/api/v1",
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
  
});

class APIClient {
    endpoint
  
    constructor(endpoint:String) {
      this.endpoint = endpoint;
    }
  
    getAll = (queryString:any) => {
      return axiosInstance
        .get(this.endpoint+queryString)
        .then((res) => res.data);
    };
  
    get = () => {
      return axiosInstance
        .get(`${this.endpoint}`)
        .then((res) => res.data);
    };
  
    post = (body:any) => {
      return axiosInstance
        .post(`${this.endpoint}`, body)
        .then((res) => res.data);
    };
  
    put = (id:any, body:any) => {
      return axiosInstance
        .put(`${this.endpoint}/${id}`, body)
        .then((res) => res.data);
    };
  
    delete = (id:any) => {
      return axiosInstance
        .delete(`${this.endpoint}/${id}`)
        .then((res) => res.data);
    };
}

export default APIClient;
