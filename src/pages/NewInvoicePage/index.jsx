import { useState } from "react";
import InvoiceItem from "../../components/InvoiceItem";
import NewInvoiceDetails from "../../components/NewInvoiceDetails";
import TotalInvoice from "../../components/TotalInvoice";

export default function NewInvoicePage() {

    const [list, setList] = useState([{ quantity: 0, rate: 0, total: 0, description: '' }]);

    const addItem = () => {
        setList([...list, { quantity: 0, rate: 0, total: 0, description: '' }]);
    };

    const [clientId, setClientId] = useState('')

    const removeItem = () => {
        if (list.length > 1) {
            setList(list.splice(0, list.length - 1))
        }
    }

    let megaTotal = list.reduce((carry, item) => carry + item.total, 0)

    let newInvoice = {
        client: clientId,
        total: megaTotal,
        details: list
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
    function updateTotal(index, total) {
        const listCopy = [...list]
        listCopy[index].total = total
        setList(listCopy)
    }

    function updateClient(clientIdNew) {
        setClientId(clientIdNew)
    }

    console.log(clientId)
    console.log(newInvoice)
    console.log(megaTotal)

    fetch('https://invoicing-api.dev.io-academy.uk/invoices', {
        method: "POST",
        body: JSON.stringify(newInvoice),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      }).then(res => res.json()).then(data => {
        console.log(data)
      })

    return (
        <div>
            <NewInvoiceDetails clientState={updateClient} />
            <div>
                <div className="grid grid-cols-5 max-w-[850px] mx-2 ml-5 border-b border-gray-400 mb-1 pb-1 font-bold">
                    <p>Description</p>
                    <p>Quantity</p>
                    <p>Rate</p>
                    <p className="">Total</p>
                    <p></p>
                </div>
            {list.map((item, index) => <div key={index}><InvoiceItem quantState={updateQuantity} rateState={updateRate} descState={updateDesc} index={index} addItem={addItem} removeItem={removeItem} totalState={updateTotal} />
            </div>)}
            </div>
            <div className="bg-yellow-400 flex justify-end max-w-[850px] font-bold pr-5">
                <p className="pr-20">Total</p>
                <p>£{list.reduce((carry, item) => carry + item.total, 0)}</p>
            </div>
            <div>
                <button>Create Invoice</button>
                <button>Cancel Invoice</button>
            </div>
        </div>
    )
}