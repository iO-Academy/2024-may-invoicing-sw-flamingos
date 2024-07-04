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
    const[status, setStatus] = useState('')

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
            })


    }, []
    )
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    const splitCreatedDate = dateCreated.split('-')
    const month = splitCreatedDate[1] - 1
    const wordMonth = monthNames[month]
    const newCreatedDate = `${splitCreatedDate[2]} ${wordMonth} ${splitCreatedDate[0]}`
    console.log(newCreatedDate)

    const splitDate = dateDue.split('-')
    const monthDue = splitDate[1] - 1
    const wordMonthDue = monthNames[monthDue]
    const newDueDate = `${splitDate[2]} ${wordMonthDue} ${splitDate[0]}`
    console.log(newDueDate)

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

            <section className="flex justify-self-stretch px-3 gap-4 border-b">
                {details.map(detail => {
                    return (
                        <InvoiceDetails key={invoiceid} desc={detail.description} quant={detail.quantity} cost={detail.rate} subTotal={detail.total} />
                    )
                })}

            </section>

        </>
    )
}