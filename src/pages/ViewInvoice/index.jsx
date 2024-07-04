import { useParams } from "react-router-dom";
import InvoiceTitle from "../../components/InvoiceTitle";
import { useEffect, useState } from "react";
import StatusBox from "../../components/StatusBox";
import InvoiceDetails from "../../components/InvoiceDetails";

export default function ViewInvoice() {

    const { invoiceid } = useParams()
    const [invoiceNumber, setInvoiceNumber] = useState('')
    const [client, setClient] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [dateCreated, setDateCreated] = useState('')
    const [dateDue, setDateDue] = useState('')
    const [paidToDate, setPaidToDate] = useState('')
    const [details, setDetails] = useState([])
    const [status, setStatus] = useState('')
    const [invoiceTotal, setInvoiceTotal] = useState(0)

    useEffect(() => {
        fetch(`https://invoicing-api.dev.io-academy.uk/invoices/${invoiceid}`)
            .then(res => res.json())
            .then(invoice => {
                setClient(invoice.data.name)
                setAddress(invoice.data.street_address)
                setCity(invoice.data.city)
                setDateCreated(invoice.data.created)
                setDateDue(invoice.data.due)
                setPaidToDate(invoice.data.paid_to_date)
                setDetails(invoice.data.details)
                setStatus(invoice.data.status_name)
                setInvoiceTotal(invoice.data.invoice_total)
            })
    }, [])

    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    const splitCreatedDate = dateCreated.split('-')
    const month = splitCreatedDate[1] - 1
    const wordMonth = monthNames[month]
    const newCreatedDate = `${splitCreatedDate[2]} ${wordMonth} ${splitCreatedDate[0]}`

    const splitDate = dateDue.split('-')
    const monthDue = splitDate[1] - 1
    const wordMonthDue = monthNames[monthDue]
    const newDueDate = `${splitDate[2]} ${wordMonthDue} ${splitDate[0]}`

    return (
        <>
            <InvoiceTitle invoiceID='test' />
            <section className="flex justify-self-stretch px-3 gap-4 border-b">
                <div className="flex flex-col">
                    <p>From</p>
                    <p>SW Flamingos Ltd</p>
                    <p>The saltflats</p>
                    <p>Bolivia</p>
                    <p>To</p>
                    <p>{client}</p>
                    <p>{address}</p>
                    <p>{city}</p>
                </div>

                <div className="flex flex-col">
                    <p>Status</p>
                    <StatusBox invoiceDue={dateDue} invoiceStatus={status} />
                    <p>Created</p>
                    <p>{newCreatedDate}</p>
                    <p>Due</p>
                    <p>{newDueDate}</p>
                </div>
            </section>

            <section className="border-b">
                <div className="grid grid-cols-4 p-2 gap-3">
                    <p>Description</p>
                    <p>Quantity</p>
                    <p>Rate</p>
                    <p>Total</p>
                </div>
                {details.map(detail => {
                    return (
                        <InvoiceDetails key={invoiceid} desc={detail.description} quant={detail.quantity} cost={detail.rate} subTotal={detail.total} paidToDate={paidToDate} />

                    )
                })}
                <div className="grid grid-cols-4 w-full">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="grid grid-rows-2">
                    <p className="content-end">Total £{invoiceTotal}</p>
                    <p className="content-end">Paid to date £{paidToDate}</p>
                    </div>
                    </div>
                    <div className="grid grid-rows-1 row-span-full bg-orange-300">
                    <p className="justify-self-end mr-6">Total due £{invoiceTotal - paidToDate}</p>
                    </div>
            </section>

        </>
    )
}