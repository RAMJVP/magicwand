import axios from "axios";


const BASE_URL="https://restcountries.com/v3.1/all";

class BlogService{
    fetchBlogs(){
        return axios.get(BASE_URL);

    }
}

export default new BlogService();