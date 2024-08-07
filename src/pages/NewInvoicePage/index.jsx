import { useState } from "react";
import InvoiceItem from "../../components/InvoiceItem";
import NewInvoiceDetails from "../../components/NewInvoiceDetails";
import { Link } from "react-router-dom";

export default function NewInvoicePage() {

    const [list, setList] = useState([{ quantity: 0, rate: 0, total: 0, description: '' }]);

    const [clientId, setClientId] = useState('')

    const [message, setMessage] = useState('')

    const [buttonDisplay, setButtonDisplay] = useState('')

    function addItem() {
        setList([...list, { quantity: 0, rate: 0, total: 0, description: '' }]);
    };

    function removeItem() {
        if (list.length > 1) {
            setList(list.splice(0, list.length - 1))
        }
    }

    let megaTotal = list.reduce((carry, item) => carry + item.total, 0)

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

    function createInvoice() {
        let newInvoice = {
            client: clientId,
            total: megaTotal,
            details: list
        }
        fetch('https://invoicing-api.dev.io-academy.uk/invoices', {
            method: "POST",
            body: JSON.stringify(newInvoice),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }).then(res => {
            res.json()
            if(res.status=== 200){
                setMessage(`You have successfully added your invoice`)
                setButtonDisplay(<Link to='/'><button className="bg-gray-600 p-2 text-white rounded ml-3">Home</button></Link>)
            }
            else (
                setMessage('Please complete all fields')
            )
        }).then(data => {
            
        })
    }

    function successMessage(e) {
        e.preventDefault()
    }

    return (
        <div className="flex flex-col items-center px-5">
            <form onSubmit={successMessage} className=" bg-white p-2">
                <NewInvoiceDetails clientState={updateClient} />
                <div>
                    <div className="grid grid-cols-5 max-w-[850px] border-b border-gray-400 mb-1 pb-1 font-bold pl-4">
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
                <div className="flex justify-end max-w-[850px] p-3">
                    <button type='Submit' onClick={createInvoice} className="bg-green-600 p-2 text-white rounded">Create Invoice</button>
                    <Link to="/"><button className="bg-red-600 p-2 text-white rounded ml-3">Cancel Invoice</button></Link>
                </div>
            </form>
            <div className="flex pb-2 max-w-[850px]">
                <p className="pt-2">{message}</p>
                <p>{buttonDisplay}</p>
            </div>
        </div>

    )
}