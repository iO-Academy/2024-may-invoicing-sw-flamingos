import { useEffect, useState } from "react"
import NewInvoiceButton from "../NewInvoiceButton"
import { Link } from "react-router-dom"

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
        <header className="bg-slate-50 pt-4 pb-2 mb-2 flex justify-around">
            <div>
                <Link to="/" id="link fro header">
                    <h1 className="pb-3 text-3xl font-semibold">Invoices</h1>
                    <p className="pb-3 text-slate-500" >There are {unpaid} unpaid invoices</p>
                </Link>
            </div>
            <div className="flex items-end mb-5">
                <NewInvoiceButton />
            </div>
        </header>

    )
}