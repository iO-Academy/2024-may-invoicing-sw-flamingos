import { useState } from "react";
import InvoiceItem from "../../components/InvoiceItem";
import NewInvoiceDetails from "../../components/NewInvoiceDetails";

export default function NewInvoicePage() {

    const [list, setList] = useState([0]);

    const addComponent = () => {
      setList([...list, list.length]);
    };

    const removeComponent = () => {
        if (list.length > 1) {
            setList(list.splice(0,list.length-1))
        }
    }

    return (
        <div>
            <NewInvoiceDetails />
            {list.map(item => <InvoiceItem key={item} />)}
                <button onClick={addComponent}>Plus</button>
                <button onClick={removeComponent}>Minus</button>
        </div>
    )
}