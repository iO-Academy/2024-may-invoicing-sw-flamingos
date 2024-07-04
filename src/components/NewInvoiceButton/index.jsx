import { Link } from "react-router-dom";

export default function NewInvoiceButton() {

    return (
        <div className="bg-teal-600 h-10 w-36 rounded flex justify-center items-center text-white">
            <Link to='/NewInvoice'><i className="fa-solid fa-square-plus pr-2"></i> New Invoice</Link>
        </div>
    )
}