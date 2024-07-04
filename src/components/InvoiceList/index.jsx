import { useEffect, useState } from "react"
import InvoiceSummary from "../InvoiceSummary"
import SortByStatus from "../SortByStatus"

export default function InvoiceList() {

    const [invoices, setInvoices] = useState([])
    useEffect(() => {
        fetch('https://invoicing-api.dev.io-academy.uk/invoices')
            .then(res => res.json())
            .then(invoiceData => {
                setInvoices(invoiceData.data)
            }
            )
    }, [])

    return (
        <div className="flex flex-col items-center px-16 bg-slate-50">
            <SortByStatus />
            {invoices.map(invoice => {
                if (invoice.status_name === 'Paid') {
                    
                return (
                    <InvoiceSummary key={invoice.id} invoiceID={invoice.invoice_id} invoiceTotal={invoice.invoice_total} invoiceName={invoice.name} invoiceStat={invoice.status_name} invoiceDue={invoice.due} />
                )}
            })}
        </div>
    )
}