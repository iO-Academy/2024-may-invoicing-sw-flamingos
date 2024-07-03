import { useEffect, useState } from "react"

export default function InvoiceDetails({ desc, quant, cost, subTotal, paidToDate }) {


    return (
        <div>
            <div>
                <p>Description</p>
                <p>Quantity</p>
                <p>Rate</p>
                <p>Total</p>
            </div>
            <div>
                {desc}
                {quant}
                {cost}
                {subTotal}
            </div>
            <p>Paid to date {paidToDate}</p>
        </div>
    )
}