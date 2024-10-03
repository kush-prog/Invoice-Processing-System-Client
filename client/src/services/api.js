import axios from 'axios';
import AddInvoice from '../components/AddInvoice';

export const saveInvoice = async (payload) => {
    try{
        return await axios.post('${API_URL}/invoice', payload);
    }
    catch(error){
        console.log('Error: ', error.message);
        return error.response.data;
    }
}