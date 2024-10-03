package com.invoiceprocessing.server.services;

import com.invoiceprocessing.server.dao.InvoiceDao;
import com.invoiceprocessing.server.model.Invoice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InvoiceServiceImpl implements InvoiceService{
    @Autowired
    InvoiceDao invoiceDao;
    @Override
    public Invoice addInvoice(Invoice invoice){
        invoiceDao.save(invoice);
        return invoice;
    }

}
