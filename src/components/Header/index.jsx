import { useEffect, useState } from "react"

export default function Header() {
    const [unpaid, setUnpaid] = useState(0)

    useEffect(() => {
        fetch('https://invoicing-api.dev.io-academy.uk/invoices')
            .then(res => res.json())
            .then((invoices) => {
                let counter = 0

                invoices.data.forEach((invoice) => {
                    invoice.status === "2" && counter ++
                })
                setUnpaid(counter)
                })
                    }, [])

    return (

        <header className="bg-slate-50 p-4">
            <h1 className="pb-3 text-3xl font-semibold">Invoices</h1>
            <p className="pb-3 text-slate-500" >There are {unpaid} unpaid invoices</p>
        </header>
    )
}