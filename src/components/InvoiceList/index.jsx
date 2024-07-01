import { useEffect, useState } from "react"
import InvoiceSummary from "../InvoiceSummary"


export default function InvoiceList() {

    const [invoices, setInvoices] = useState([])

    useEffect(() => {
        fetch('https://invoicing-api.dev.io-academy.uk/invoices').then(res => res.json()).then(
            invoiceData => {
                setInvoices(invoiceData.data)
            }
        )
    }, [])

    return (
        <>
            {invoices.map(invoice => {
                            return (
                            <InvoiceSummary key={invoice.id} invoiceID={invoice.invoice_id} invoiceTotal={invoice.invoice_total} invoiceName={invoice.name} invoiceStatus={invoice.status} invoiceDue={invoice.due} />
                            )
            })}

        </>
    )
}