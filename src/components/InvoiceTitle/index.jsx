import { Link } from "react-router-dom";

export default function InvoiceTitle({ invoiceID }) {

    return (
        <div>
            <p>Invoice #{invoiceID}</p>
            <Link to='/' ><i class="fa-solid fa-xmark"></i></Link>
        </div>
    )
}