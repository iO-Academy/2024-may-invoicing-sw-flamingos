import { useEffect, useState } from "react"

export default function InvoiceDetails({ desc, quant, cost, subTotal, paidToDate, total }) {



    return (
        <div>
            <div className="grid grid-cols-[3fr_1fr_1fr_1fr] gap-3 p-2 border-b border-slate-500">
                <p>{desc}</p>
                <p>{quant}</p>
                <p>{cost}</p>
                <p>{subTotal}</p>
            </div>
        </div>
    )
}