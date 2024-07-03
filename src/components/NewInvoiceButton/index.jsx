import { Link } from "react-router-dom";

export default function NewInvoiceButton() {

    return (
        <div>
            <Link to='/NewInvoice'><i class="fa-solid fa-square-plus"></i> New Invoice</Link>
        </div>
    )
}