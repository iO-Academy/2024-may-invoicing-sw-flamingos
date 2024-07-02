export default function StatusBox({invoiceStatus, invoiceDue}) {

    return (
        <div>
        {invoiceStatus === 'Paid' && <ul className="border border-green-400 rounded-lg">
                                        <li className="py-1 px-3 text-green-400">&#x2022; {invoiceStatus}</li>
                                        </ul>}
        {invoiceStatus === 'Pending' && <ul className="border border-yellow-400 rounded-lg">
                                        <li className="py-1 px-3 text-yellow-400">&#x2022; {invoiceStatus}</li>
                                        </ul>}
        {invoiceStatus === 'Cancelled' && <ul class="border border-slate-400 rounded-lg">
                                <li class="py-1 px-3 text-slate-400">&#x2022; {invoiceStatus}</li>
                                </ul>}
        </div>
    )
}