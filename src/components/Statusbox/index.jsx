import { useEffect, useState } from "react"

export default Statusbox(invoiceStatus, invoiceDue) {


                const dueDate = {invoiceDue}
                const invoiceStatus = {invoiceStatus}

                let statusContainer = ''

            function status(() => {
                if (invoiceStatus === 'Paid') {
            statusContainer = '<div className="border border-green-400">
                                <ul>
                                <li className="p-3 text-green-400">invoiceStatus</li>
                                </ul>
                                </div>'
                }

            )}

    return (

        <div>
        statusContainer
        </div>

    )
}