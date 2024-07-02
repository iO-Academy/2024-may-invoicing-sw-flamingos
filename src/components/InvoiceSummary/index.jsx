export default function InvoiceSummary({invoiceID, invoiceTotal, invoiceName, invoiceStatus, invoiceDue}) {

    return (
        <div className="flex flex-col justify-between relative mx-10 my-5 p-4 bg-white box-border w-full border-2 border-grey min-[720px]:w-full min-[720px]:flex-row min-[720px]:justify-between min-[720px]:items-baseline">
            <div className="flex flex-col justify-between min-[720px]:justify-around min-[720px]:flex-row ">
                <div className="flex flex-row justify-between min-[720px]:justify-around min-[720px]:w-[400px]">
                    <p className="font-bold">#{invoiceID}</p>
                    <p className="text-slate-500">{invoiceDue}</p>
                    <p className="text-slate-500">{invoiceName}</p>
                </div>    
                <span className="flex flex-row">
                    <p className="text-2xl font-bold">£{invoiceTotal}</p>
                </span>
            </div>
            <span className="flex flex-row justify-end absolute right-4 bottom-5 min-[720px]:justify-between ">
                <p>invoice status: {invoiceStatus}</p> 
            </span>
        </div>
    )
}