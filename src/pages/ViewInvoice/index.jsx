import { useParams } from "react-router-dom";
import InvoiceTitle from "../../components/InvoiceTitle";
import { useEffect, useState } from "react";

export default function ViewInvoice(){

    const {invoiceid} = useParams()
    const [invoiceNumber, setInvoiceNumber] = useState('')
    const [client, setClient] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [dateCreated, setDateCreated] = useState('')
    const [dateDue, setDateDue] = useState('')
    const [details, setDetails] = useState([])
    const [description, setDescription] = useState('')
    const [quantity, setQuantity] = useState('')
    const [rate, setRate] = useState('')
    const [total, setTotal] = useState('')
    const [paidToDate, setPaidToDate] = useState('')

    useEffect(() => {
        fetch(`https://invoicing-api.dev.io-academy.uk/invoices/${invoiceid}`)
        .then(res => res.json())
        .then(invoice => {
            console.log(invoice)
        })
    },[])

    return(
        <>
        </>
)
}