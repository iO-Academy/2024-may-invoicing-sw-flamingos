export default Statusbox({invoiceStatus, invoiceDue}) {


                const dueDate = {invoiceDue}
                const invoiceStatus = {invoiceStatus}

                let statusContainer = ''



            function status(() => {
                if (invoiceStatus === 'Paid') {
            statusContainer = '<div className="border border-green-400">
                                <ul>
                                <li className="p-3 text-green-400">{invoiceStatus}</li>
                                </ul>
                                </div>'
                }

                    else if (invoiceStatus === 'Pending') {
                        statusContainer = 
                                        ' <ul className="border border-yellow-400">
                                            <li className="p-3 text-yellow-400">{invoiceStatus}</li>
                                            </ul> '
                            }

                    else (
                        statusContainer = 
                                            ' <ul className="border border-slate-400">
                                            <li className="p-3 text-slate-400">{invoiceStatus}</li>
                                            </ul> '
                            )}

            )}

    return (
        <div>
        statusContainer
        </div>
    )
}