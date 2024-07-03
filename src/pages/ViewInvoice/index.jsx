import { useParams } from "react-router-dom";
import InvoiceTitle from "../../components/InvoiceTitle";
import { useEffect, useState } from "react";
import StatusBox from "../../components/StatusBox";
import InvoiceDetails from "../../components/InvoiceDetails";

export default function ViewInvoice({invoiceDue, invoiceStatus}) {

    const { invoiceid } = useParams()
    const [invoiceNumber, setInvoiceNumber] = useState('')
    const [client, setClient] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [dateCreated, setDateCreated] = useState('')
    const [dateDue, setDateDue] = useState('')
    const [paidToDate, setPaidToDate] = useState('')
    const [details, setDetails] = useState([])

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
            })
            

    }, []
)

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
                    <StatusBox invoiceDue={invoiceDue} invoiceStatus={invoiceStatus}/>
                    <p>Created</p>
                    <p>{dateCreated}</p>
                    <p>Due</p>
                    <p>{dateDue}</p>
                </div>
            </section>

            <section className="flex justify-self-stretch px-3 gap-4 border-b">
                    {details.map(detail => {
                return (
            <InvoiceDetails desc={detail.description} quant={detail.quantity} cost={detail.rate} subTotal={detail.total} />
                )
            })}

            </section>
            
        </>
    )
}