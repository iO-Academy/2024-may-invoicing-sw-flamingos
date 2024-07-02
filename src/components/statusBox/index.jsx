export default function StatusBox({invoiceStatus, invoiceDue}) {
const todaysDate = new Date()
const day = todaysDate.getDate()
const year = todaysDate.getFullYear()
const month = todaysDate.getMonth()
const testADate = `${year}-${month}-${day}T00:00:00`
let dateString = `${invoiceDue}T00:00:00`
let dateDue = Date.parse(dateString)
let dateTest = Date.parse(testADate)
console.log(dateDue)
console.log(todaysDate.getTime())
    return (
        <div>
        {invoiceStatus === 'Paid' && <ul className="border border-green-400 rounded-lg">
                                        <li className="py-1 px-3 text-green-400">&#x2022; {invoiceStatus}</li>
                                        </ul>}
        {invoiceStatus === 'Pending' && <ul className="border border-yellow-400 rounded-lg">
                                        <li className="py-1 px-3 text-yellow-400">&#x2022; {invoiceStatus}</li>
                                        </ul>}
        {invoiceStatus === 'Cancelled' && <ul className="border border-slate-400 rounded-lg">
                                <li className="py-1 px-3 text-slate-400">&#x2022; {invoiceStatus}</li>
                                </ul>}
         {invoiceDue === 'Cancelled' && <ul className="border border-slate-400 rounded-lg">
                                <li className="py-1 px-3 text-slate-400">&#x2022; {invoiceStatus}</li>
                                </ul>}
                                
        </div>
    )
}