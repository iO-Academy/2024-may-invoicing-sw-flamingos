export default function StatusBox({invoiceStatus, invoiceDue}) {
let dateString = `${invoiceDue}T00:00:00`
let dateDue = Date.parse(dateString)

const todaysDate = new Date()
let day = todaysDate.getDate()
const year = todaysDate.getFullYear()
let month = todaysDate.getMonth()
if (day < 10) {
    day = `0${day}`
}
if (month < 10) {
    month = `0${month}`
}
const todaysDateFormat = `${year}-${month}-${day}T00:00:00`
let todayDateParsed = Date.parse(todaysDateFormat)


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
         {dateDue < todayDateParsed && <ul className="border border-red-400 rounded-lg">
                                <li className="py-1 px-3 text-red-400">&#x2022; Overdue</li>
                                </ul>}
                                
        </div>
    )
}