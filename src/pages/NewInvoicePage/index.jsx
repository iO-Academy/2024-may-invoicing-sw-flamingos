import { useState } from "react";
import InvoiceItem from "../../components/InvoiceItem";
import NewInvoiceDetails from "../../components/NewInvoiceDetails";
import TotalInvoice from "../../components/TotalInvoice";

export default function NewInvoicePage() {

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

    function updateQuantity(index, quantitySum) {
        const listCopy = [...list]
        listCopy[index].quantity = quantitySum
        setList(listCopy)
    }
    function updateRate(index, rateSum) {
        const listCopy = [...list]
        listCopy[index].rate = rateSum
        setList(listCopy)
    }
    function updateDesc(index, description) {
        const listCopy = [...list]
        listCopy[index].description = description
        setList(listCopy)
    }
    function updateTotal(index, total){
        const listCopy = [...list]
        listCopy[index].total = total
        setList(listCopy)
    }

    console.log(list)

    return (
        <div>
            <NewInvoiceDetails />
            {list.map((item, index) => <div key={index}><InvoiceItem quantState={updateQuantity} rateState={updateRate} descState={updateDesc} index={index} addItem={addItem} removeItem={removeItem} totalState={updateTotal}/>
                </div>)}
            <p>Total is: {list.reduce((carry, item) => carry + item.total, 0)}</p>
        </div>
    )
}