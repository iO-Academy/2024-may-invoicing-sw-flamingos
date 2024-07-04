import { useEffect, useState } from "react"
import DropdownClients from "../DropdownClients";

export default function NewInvoiceDetails({clientState}) {

    const now = new Date();
    const next30Days = now.getTime() + 30 * 24 * 60 * 60 * 1000;
    const next30DaysDate = new Date(next30Days);
    const formattedDueDate = next30DaysDate.toLocaleDateString('en-uk');
    const formattedDate = now.toLocaleDateString('en-uk')

    const [clients, setClients] = useState([])

    useEffect(() => {
        fetch('https://invoicing-api.dev.io-academy.uk/clients')
            .then(res => res.json())
            .then(clientList => {
                setClients(clientList.data)
            }
            )
    }, [])

    return (
        <div className="flex justify-between max-w-[850px] pb-2 mb-2 border-b border-gray-400">
            <div>
                <div>
                    <p>IO Academy</p>
                    <p>1 Widcombe Cres</p>
                    <p>Bath</p>
                    <p>BA2 6AH</p>
                </div>
                <div>
                    <p>To</p>
                    <DropdownClients clients={clients} clientState={clientState} />
                </div>
            </div>
            <div className="pr-20">
                <div>
                    <p>Status</p>
                    <ul className="border border-yellow-400 rounded-lg"><li className="py-1 px-3 text-yellow-400">&#x2022; Pending</li></ul>
                </div>
                <div>
                    <p>Created</p>
                    <p>{formattedDate}</p>
                </div>
                <div>
                    <p>Due</p>
                    <p>{formattedDueDate}</p>
                </div>
            </div>
        </div>
    )
}