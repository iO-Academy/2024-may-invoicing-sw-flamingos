import { useState } from "react"
import PlusInvoiceItem from "../PlusInvoiceItem"
import MinusInvoiceItem from "../MinusInvoiceItem"

export default function InvoiceItem() {

    const [total, setTotal] = useState(0)
    const [quantitySum, setQuantitySum] = useState(0)
    const [rateSum, setRateSum] = useState(0)

    function quantity(e) {
        setQuantitySum(Number(e.target.value))
        setTotal(e.target.value * rateSum)
        console.log(total)
    }

    function rate(e) {
        setRateSum(Number(e.target.value))
        setTotal(quantitySum * e.target.value)
        console.log(total)
    }

    return (
        <div className="flex ">
            <textarea placeholder="description" className="w-[200px] h-[100px]" />

            <input onChange={quantity} type="number" step="1" placeholder="quantity" />

            <div className="flex flex-wrap items-stretch w-[150px] mb-4 relative">
                <div className="flex -mr-px">
                    <span className="flex items-center leading-normal bg-grey-lighter rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">£</span>
                </div>
                <input onChange={rate} type="number" className="flex-shrink flex-grow leading-normal w-px border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-blue focus:shadow" placeholder="Rate" />
            </div>
            <p>Total: {total}</p>
        </div>
    )
}