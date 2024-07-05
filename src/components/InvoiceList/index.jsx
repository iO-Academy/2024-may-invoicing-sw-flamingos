import { useEffect, useState } from "react"
import InvoiceSummary from "../InvoiceSummary"

export default function InvoiceList() {

    const [invoices, setInvoices] = useState([])
    const [filterInvoices, setFilterInvoices] = useState(0)
    const [sortInvoices, setSortInvoices] = useState('invoice_id')

    useEffect(() => {
        let url = 'https://invoicing-api.dev.io-academy.uk/invoices'
        if (filterInvoices !== 0 && sortInvoices !== 'invoice_id') {
            url += `?status=${filterInvoices}&sort=${sortInvoices}`
        }
        else if (filterInvoices !== 0) {
            url += `?status=${filterInvoices}`
        }
        else if (sortInvoices !== 'invoice_id') {
            url += `?sort=${sortInvoices}`
        }

        fetch(url)
            .then(res => res.json())
            .then(invoiceData => {
                setInvoices(invoiceData.data)
            }
            )
    }, [filterInvoices, sortInvoices])

    function filterStatus(e) {
        setFilterInvoices(Number(e.target.value))
    }

    function sort(e) {
        setSortInvoices(e.target.value)
    }

    return (
        <div className="flex flex-col items-center bg-slate-50">
            <div className="flex">
                <div className="flex mb-5">
                    <select onChange={filterStatus} className="bg-slate-50 text-blue-950 text-sm font-bold">
                        <option value="0">Filter by Status</option>
                        <option value="1">Paid</option>
                        <option value="2">Pending</option>
                        <option value="3">Cancelled</option>
                        <option value="0">All</option>
                    </select>
                </div>
                <div className="mb-5 pl-5">
                    <select onChange={sort} className="bg-slate-50 text-blue-950 text-sm font-bold">
                        <option value="invoice_id">Sort by</option>
                        <option value="invoice_id">Invoice ID</option>
                        <option value="invoice_total">Invoice Total</option>
                        <option value="due">Due Date</option>
                        <option value="created">Created Date</option>
                    </select>
                </div>
            </div>
            <div className="pr-20">
                {invoices.map(invoice => {
                    return (
                        <InvoiceSummary key={invoice.invoice_id} id={invoice.id} invoiceID={invoice.invoice_id} invoiceTotal={invoice.invoice_total} invoiceName={invoice.name} invoiceStat={invoice.status_name} invoiceDue={invoice.due} />
                    )
                })}
            </div>
        </div>
    )
}