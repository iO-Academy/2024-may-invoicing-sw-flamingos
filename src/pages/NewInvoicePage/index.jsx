import { useState } from "react";
import InvoiceItem from "../../components/InvoiceItem";
import NewInvoiceDetails from "../../components/NewInvoiceDetails";
import TotalInvoice from "../../components/TotalInvoice";

export default function NewInvoicePage() {

    let index = 0;
    const [list, setList] = useState([{ quantity: 0, rate: 0, total: 0, description: '' }]);

    const addItem = () => {
        setList([...list, { quantity: 0, rate: 0, total: 0, description: '' }]);
    };

    const removeItem = () => {
        if (list.length > 1) {
            setList(list.splice(0, list.length - 1))
        }
    }

    let newInvoice = {
        client: '',
        total: 0,
        details: []
    }

    return (
        <div>
            <NewInvoiceDetails />
            {list.map(item => <div key={index++} className="relative"><InvoiceItem /><button onClick={addItem} className="m-3 text-4xl absolute right-5 bottom-12">+</button>
                <button onClick={removeItem} className="m-3 text-4xl absolute right-6 bottom-0">-</button></div>)}
            <TotalInvoice total='0' />
        </div>
    )
}