
import { useState, useEffect } from "react";
import Header from "../components/Header";
import { Box, Typography, Button, styled } from '@mui/material';
import AddInvoice from "../components/AddInvoice";
import Invoices from "../components/Invoices";
import { getAllInvoice, deleteInvoice } from "../services/api";


const Component = styled(Box)`
    width: 80%;
    margin: 50px auto;
    & > h4 {
        margin-bottom: 20px;
    }
    & > thead {
        background-color: #000;
    }
    & > th {
        color: #FFFFFF;
        font-weight: 600;
        font-size: 16px;
    } 
    & > td {
        font-size: 16px;
    }
`

const defaultObj = {
    id: '',
    vendor: '',
    product: '',
    amount: '',
    date: ''
}

const Home = () => {

    const [addInvoice, setAddInvoice] = useState(false);
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await getAllInvoice();
            response && response.data && setInvoices(response.data);
        }
        getData();
    }  , [addInvoice]);

    const toggleInvoice = () => {
        setAddInvoice(true);
    }

    const removeInvoice = async (id) => {
        await deleteInvoice(id);
        const updatedInvoices = invoices.filter(invoice => invoice.id !== id);
        setInvoices(updatedInvoices);   
    }

    return (
        <>

            <Header/>
            <Box style={{ margin: 20 }}>
                <Typography variant= "h4" >Pending Invoices</Typography>
                { !addInvoice && <Button 
                        variant="contained" 
                        style={{ marginTop: 15 }}
                        onClick={() => toggleInvoice()}
                    >Add Invoice</Button>
                }
                
                { addInvoice && < AddInvoice setAddInvoice={setAddInvoice}/> }

                <Box>
                    <Invoices 
                        invoices = {invoices}
                        removeInvoice = {removeInvoice} 
                    />
                </Box>
            </Box>

        </>
    )
}

export default Home;