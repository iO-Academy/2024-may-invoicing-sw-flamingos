import { useEffect, useState } from "react"
import NewInvoiceButton from "../NewInvoiceButton"

export default function Header() {
    const [unpaid, setUnpaid] = useState(0)

    useEffect(() => {
        fetch('https://invoicing-api.dev.io-academy.uk/invoices?status=2')
            .then(res => res.json())
            .then(invoices => {

                let counter = invoices.data.length

                setUnpaid(counter)
            })
    }, [])

    return (

        <header className="bg-slate-50 pt-4 pb-2 mb-2 flex justify-around border-b border-gray-400">
            <div>
                <h1 className="pb-3 text-3xl font-semibold">Invoices</h1>
                <p className="pb-3 text-slate-500" >There are {unpaid} unpaid invoices</p>
            </div>
            <div className="flex items-end">
                <NewInvoiceButton />
            </div>
        </header>
    )
}