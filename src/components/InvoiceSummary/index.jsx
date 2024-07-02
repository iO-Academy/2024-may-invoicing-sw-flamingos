export default function InvoiceSummary({invoiceID, invoiceTotal, invoiceName, invoiceStatus, invoiceDue}) {

    return (
        <div className="flex flex-col justify-around mx-10 my-5 p-4 bg-white box-border h-20 w-[500px] border-2 border-grey sm:w-full sm:flex-row sm:justify-between sm:items-baseline">
            <div className="flex flex-col justify-between sm:justify-start">
                <div className="flex flex-row justify-between sm:justify-start">
                    <p className="font-bold">#{invoiceID}</p>
                    <p className="text-slate-500">{invoiceDue}</p>
                    <p className="text-slate-500">{invoiceName}</p>
                </div>    
                <span className="flex flex-row">
                    <p className="text-2xl font-bold">£{invoiceTotal}</p>
                </span>
            </div>
            <span className="flex flex-row justify-end sm:justify-between relative bottom-6 ">
                <p>invoice status: {invoiceStatus}</p>
            </span>
        </div>
    )
}