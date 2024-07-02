export default function StatusBox({invoiceStatus, invoiceDue}) {

             /*   let statusContainer = ''


            function status() {
                if (invoiceStatus === 'Paid') {
            return statusContainer = 
                                `<ul class="border border-green-400">
                                <li class="p-3 text-green-400">${billStatus}</li>
                                </ul>`
                }

                    else if (invoiceStatus === 'Pending') {
                       return statusContainer = 
                                `<ul class="border border-yellow-400">
                                <li class="p-3 text-yellow-400">${billStatus}</li>
                                </ul>`
                            }

                    else {
                        return statusContainer = 
                                `<ul class="border border-slate-400">
                                <li class="p-3 text-slate-400">${billStatus}</li>
                                </ul>`
                            }

            } */

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