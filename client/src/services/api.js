import axios from 'axios';
import AddInvoice from '../components/AddInvoice';

const API_URL = 'http://localhost:8080';
export const saveInvoice = async (payload) => {
    try{
        return await axios.post('${API_URL}/invoice', payload);
    }
    catch(error){
        console.log('Error: ', error.message);
        return error.response.data;
    }
}