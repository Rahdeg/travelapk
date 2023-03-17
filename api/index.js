import axios from "axios";

export const getPlaces=async ()=>{
    try {
        const {data:{data}} = await axios.get(`http://google.com`,{params,headers})
        return data;
    } catch (error) {
        return null
    }
}