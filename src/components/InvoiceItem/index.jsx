import { useEffect, useState } from "react"

export default function InvoiceItem({addItem, removeItem, index, quantState, rateState, descState, totalState}) {

    const [total, setTotal] = useState(0)
    const [quantityNew, setQuantityNew] = useState(0)
    const [rateNew, setRateNew] = useState(0)

    function quantity(e) {
        const quantitySum = Number(e.target.value)
        quantState(index, quantitySum)
        setQuantityNew(quantitySum)
        setTotal(rateNew * e.target.value)
    }

    function rate(e) {
        const rateSum = Number(e.target.value)
        rateState(index, rateSum)
        setRateNew(rateSum)
        setTotal(quantityNew * e.target.value)
    }

    function desc(e) {
        const description = (e.target.value)
        descState(index, description)
    }

    function bigTotal() {
        totalState(index, total)
    }

    useEffect(bigTotal, [total])

    return (
        <div className="flex justify-center max-w-[850px]">
            <textarea onChange={desc} placeholder="description" className="w-[200px] h-[100px] bg-grey-lighter rounded border border-gray-400 ml-2" />

            <input onChange={quantity} type="number" step="1" placeholder="quantity" className="h-10 bg-grey-lighter rounded border border-gray-400 ml-2"/>

            <div className="flex flex-wrap w-[150px] mb-4 relative h-10 ml-2">
                <div className="flex">
                    <span className="flex items-center bg-gray-200 rounded rounded-r-none border border-r-0 border-gray-400 px-3">£</span>
                </div>
                <input onChange={rate} type="number" className="flex-grow w-px border border-gray-400 rounded rounded-l-none px-3 relative" placeholder="Rate" />
            </div>
            <p className="ml-2">Total: £{total}</p>
            <div>
                <button onClick={addItem} className="m-3 text-4xl">+</button>
                <button onClick={removeItem} className="m-3 text-4xl">-</button>
            </div>
        </div>
    )
}