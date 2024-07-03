import InvoiceItem from "../InvoiceItem"

export default function PlusInvoiceItem() {

    function plusInvoice() {
        invoiceItems.push(<InvoiceItem />)
    }

    return (
        <>
            <button onClick={plusInvoice}>Plus</button>
        </>
    )
}