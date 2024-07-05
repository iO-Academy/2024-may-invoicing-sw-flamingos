import { useEffect, useState } from "react"

export default function StatusBar({ invoiceStatus, invoiceDue, invoiceTotal, paidToDate }) {

    const [todayDateParsed, setTodayDateParsed] = useState(0)
    const [dateDue, setDateDue] = useState(0)

    useEffect(() => {
        let dateString = `${invoiceDue}T00:00:00`
        setDateDue(Date.parse(dateString))
        const todaysDate = new Date()
        let day = todaysDate.getDate()
        const year = todaysDate.getFullYear()
        let month = todaysDate.getMonth()
        month = month + 1
        if (day < 10) {
            day = `0${day}`
        }
        if (month < 10) {
            month = `0${month}`
        }
        const todaysDateFormat = `${year}-${month}-${day}T00:00:00`
        setTodayDateParsed(Date.parse(todaysDateFormat))
    }, [invoiceDue])

    const totalDue = invoiceTotal - paidToDate
    const finalDue = parseFloat(totalDue).toFixed(2)

    const paid = <div className="grid grid-cols-[4fr_1fr_1fr] bg-green-400 ">
        <p></p>
        <p className="font-bold">Total due</p>
        <p className="mr-6 font-bold">£{finalDue}</p>
    </div>

    const cancelled = <div className="grid grid-cols-[4fr_1fr_1fr] bg-slate-400">
        <p></p>
        <p className="font-bold">Total due</p>
        <p className="mr-6 font-bold">£{finalDue}</p>
    </div>

    const overdue = <div className="grid grid-cols-[4fr_1fr_1fr] bg-red-400 ">
        <p></p>
        <p className="font-bold">Total due</p>
        <p className="mr-6 font-bold">£{finalDue}</p>
    </div>

    const pending = <div className="grid grid-cols-[4fr_1fr_1fr] bg-orange-400 ">
        <p></p>
        <p className="font-bold">Total due</p>
        <p className="mr-6 font-bold">£{finalDue}</p>
    </div>

    return (
        <div className="min-[760px]:mb-2">

            {invoiceStatus === 'Paid' ? paid :
                invoiceStatus === 'Cancelled' ? cancelled :
                    invoiceStatus === 'Pending' && dateDue < todayDateParsed ? overdue : pending
            }
        </div>
    )
}