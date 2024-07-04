import { useState } from "react"

export default function InvoiceItem() {

    const [total, setTotal] = useState(0)
    const [quantitySum, setQuantitySum] = useState(0)
    const [rateSum, setRateSum] = useState(0)
    const [description, setDescription] = useState('')

    function quantity(e) {
        setQuantitySum(Number(e.target.value))
        setTotal(e.target.value * rateSum)
    }

    function rate(e) {
        setRateSum(Number(e.target.value))
        setTotal(quantitySum * e.target.value)
    }

    function desc(e) {
        setDescription(e.target.value)
    }

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
        </div>
    )
}