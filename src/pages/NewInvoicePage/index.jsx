import { useState } from "react";
import InvoiceItem from "../../components/InvoiceItem";
import NewInvoiceDetails from "../../components/NewInvoiceDetails";
import TotalInvoice from "../../components/TotalInvoice";

export default function NewInvoicePage() {

    const [list, setList] = useState([0]);
        //change list to be array of "details" objects rather than numbers.

    const addItem = () => {
        setList([...list, list.length]);
    };

    const removeItem = () => {
        if (list.length > 1) {
            setList(list.splice(0, list.length - 1))
        }
    }

    return (
        <div>
            <NewInvoiceDetails />
            {list.map(item => <div><InvoiceItem key={item} /><button onClick={addItem}>Plus</button>
            <button onClick={removeItem}>Minus</button></div>)}
            <TotalInvoice />
        </div>
    )
}