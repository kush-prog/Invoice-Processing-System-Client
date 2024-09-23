import { useState } from "react";
import { Box, TextField, Typography, Button, styled } from '@mui/material';
import { saveInvoice } from "../services/api";


const Component = styled(Box)({
    marginTop: 20,
    '& > p': {
        fontSize: 26,
        marginBottom: 10
    },
    '& > div > div': {
        marginRight: 20,
        minWidth: 200
    }
})

const deafultObj = {
    vendor: '',
    product: '',
    amount: 0,
    date: '',
    action: 'pending'
}
const AddInvoice = ({setAddInvoice}) =>{
    
    const [invoice, setInvoice] = useState(deafultObj);

    const onValueChange = (e) => {
        setInvoice({ ...invoice, [e.target.name]: e.target.value });
    }

    const addnewInvoice = async () => {
        await saveInvoice({ ...invoice, amount: Number(invoice['amount']) });
        setAddInvoice(false);
    }

    return (
        <Component>
            <Typography>Add Invoice</Typography>
            <Box>
                <TextField
                    name = "vendor"
                    variant='standard'
                    placeholder='Enter vendor name'
                    onChange={(e) => onValueChange(e)}
                    autoComplete="off"
                />
                <TextField
                    name = "product"
                    variant='standard'
                    placeholder='Enter Product name'
                    onChange={(e) => onValueChange(e)}                    
                    autoComplete="off"
                />
                <TextField
                    name="amount"
                    variant='standard'
                    placeholder='Enter amount (in Rs.)'
                    type="number"
                    onChange={(e) => onValueChange(e)}
                    autoComplete="off"
                />
                <TextField
                    name="date"
                    variant='standard'
                    placeholder='Enter Date'
                    type="date"
                    onChange={(e) => onValueChange(e)}
                    autoComplete="off"
                />

                <Button 
                    variant="contained"
                    onClick={() => addnewInvoice()}    
                >
                    Add Invoice
                </Button>
            </Box>
        </Component>
    )
}

export default AddInvoice;