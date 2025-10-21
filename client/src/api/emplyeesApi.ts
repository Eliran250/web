import axios from "axios";

export const fetchEmployees  = async () => {
    try {
        const response = await axios.get('https://dummyjson.com/users');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
