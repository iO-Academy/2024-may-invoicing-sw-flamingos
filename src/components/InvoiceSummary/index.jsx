import StatusBox from "../StatusBox";

export default function InvoiceSummary({invoiceID, invoiceTotal, invoiceName, invoiceStat, invoiceDue}) {
    return (
        <div className="text-sm flex flex-col relative mx-10 my-2 p-4 bg-white box-border w-full border-2 border-grey min-[760px]:max-w-[850px] min-[760px]:flex-row">
            <div className="flex flex-col justify-between min-[760px]:justify-around min-[760px]:flex-row ">
                <div className="flex flex-row items-center justify-between min-[760px]:justify-around min-[760px]:w-[400px]">
                    <p className="font-bold">#{invoiceID}</p>
                    <p className="text-slate-500">{invoiceDue}</p>
                    <p className="text-slate-500">{invoiceName}</p>
                </div>    
                <span className="flex flex-row">
                    <p className="text-lg font-bold ">£{invoiceTotal}</p>
                </span>
            </div>
            <span className="flex flex-row justify-end absolute right-4 bottom-2 min-[760px]:justify-between ">
                <StatusBox invoiceDue={invoiceDue} invoiceStatus={invoiceStat}/> 
            </span>
        </div>
    )
}