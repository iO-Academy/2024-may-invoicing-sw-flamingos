import { useEffect, useState } from "react"
import InvoiceSummary from "../InvoiceSummary"

export default function InvoiceList() {

    const [invoices, setInvoices] = useState([])
    const [filterInvoices, setFilterInvoices] = useState(0)

    useEffect(() => {
        let url = 'https://invoicing-api.dev.io-academy.uk/invoices'
        if (filterInvoices !== 0) {
            url = `https://invoicing-api.dev.io-academy.uk/invoices?status=${filterInvoices}`
        }
        fetch(url)
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
            <div className="flex mb-5">
                <select onChange={filterStatus} className="bg-slate-50 text-blue-950 text-sm font-bold">
                    <option value="0">Filter by Status</option>
                    <option value="1">Paid</option>
                    <option value="2">Pending</option>
                    <option value="3">Cancelled</option>
                    <option value="0">All</option>
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