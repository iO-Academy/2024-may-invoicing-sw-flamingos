import { useEffect, useState } from "react"

export default function NewInvoiceDetails() {

    const todaysDate = new Date()
    todaysDate = todaysDate.toString()
    const ourAddress = 'bogus address'

    console.log(todaysDate)

    return (
        <div>
            <p>{ourAddress}</p>
            <p>client dropdown</p>
            {/* <ul className="border border-yellow-400 rounded-lg"><li className="py-1 px-3 text-yellow-400">&#x2022; Pending</li></ul> */}
            <p>{todaysDate}</p>
            <p>date due</p>
        </div>
    )
}