import axios from 'axios';

const URLServer = "http://localhost:7071/api/Users/";

export const GetProducts = async ()=> {
    let response = await axios.get(`${URLServer}GET`);
    if(response.status === 200)
    {
        return Object.values(response.data);
    }
    
}

export const PostMessage = async (newMessage)=> {
    console.log(newMessage);
    await axios.post(`${URLServer}POST`,newMessage);
}

export const RemoveProductFromDB = async (id) =>{
    await axios.delete(`${URLServer}DELETE/${id.toString()}`);
}