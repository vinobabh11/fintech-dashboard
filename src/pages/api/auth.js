import axios from "axios"

export const GetUsers = async () => {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/users`)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
        return res.data
    } catch (error) {
        console.error(error);
        return null;
    }
}