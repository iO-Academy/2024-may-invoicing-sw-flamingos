import { Link } from "react-router-dom";

export default function NewInvoiceButton() {

    return (
        <div>
            <Link to='/NewInvoice'><i className="fa-solid fa-square-plus"></i> New Invoice</Link>
        </div>
    )
}