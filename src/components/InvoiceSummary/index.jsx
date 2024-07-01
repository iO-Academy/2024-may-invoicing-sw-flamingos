export default function InvoiceSummary({invoiceID, invoiceTotal, invoiceName, invoiceStatus, invoiceDue}) {

    return (
        <div className="m-10">
            <p>invoice id: {invoiceID}</p>
            <p>invoice total: {invoiceTotal}</p>
            <p>invoice name: {invoiceName}</p>
            <p>invoice status: {invoiceStatus}</p>
            <p>invoice due date: {invoiceDue}</p>
        </div>
    )
}