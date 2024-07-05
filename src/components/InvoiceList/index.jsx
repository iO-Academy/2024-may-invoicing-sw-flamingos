import { useEffect, useState } from "react"
import InvoiceSummary from "../InvoiceSummary"

export default function InvoiceList() {

    const [invoices, setInvoices] = useState([])
    const [filterInvoices, setFilterInvoices] = useState(NaN)

    useEffect(() => {
        fetch(`https://invoicing-api.dev.io-academy.uk/invoices?status=${filterInvoices}`)
            .then(res => res.json())
            .then(invoiceData => {
                setInvoices(invoiceData.data)
            }
            )
    }, [filterInvoices])

    function filterStatus(e) {
        setFilterInvoices(Number(e.target.value))
    }

    return (
        <div className="flex flex-col items-center bg-slate-50">
            <div className="flex">
                <select onChange={filterStatus}>
                    <option value="NaN">Filter by Status</option>
                    <option value="1">Filter by Paid</option>
                    <option value="2">Filter by Pending</option>
                    <option value="3">Filter by Cancelled</option>
                    <option value="NaN">No Filter</option>
                </select>
            </div>
            <div className="pr-20">
                {invoices.map(invoice => {
                    return (
                        <InvoiceSummary key={invoice.id} invoiceID={invoice.invoice_id} invoiceTotal={invoice.invoice_total} invoiceName={invoice.name} invoiceStat={invoice.status_name} invoiceDue={invoice.due} />
                    )
                })}
            </div>
        </div>
    )
}