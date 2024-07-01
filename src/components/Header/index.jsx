import { useEffect, useState } from "react"

export default function Header() {
    const [unpaid, setUnpaid] = useState(0)
    const [data, setData] = useState([])
    useEffect(
        fetch('https://invoicing-api.dev.io-academy.uk/invoices')
        .then(res => res.json())
        .then((invoices) => {
            setData(invoices.data)  
}, [])
    )

    function UnpaidCounter() {
        data.map(invoice.status === "2" && setUnpaid(unpaid + 1)
        )
        console.log(unpaid)
    }

    return (
        
        <header>
           <h1>Invoices</h1> 
           <p>There are {unpaid} unpaid invoices</p>
    </header>
    )
}