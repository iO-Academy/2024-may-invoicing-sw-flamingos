import { Link } from "react-router-dom";

export default function InvoiceTitle({invoiceID}) {

    return (
        <div className="flex justify-between border-b border-slate-500 items-center">
            <p className="ml-2 font-bold">Invoice <span className=" text-slate-500">#</span>{invoiceID}</p>
            <Link to='/' ><i className="fa-solid fa-xmark  text-slate-500 pt-3 pr-3 pb-2"></i></Link>
        </div>
    )
}