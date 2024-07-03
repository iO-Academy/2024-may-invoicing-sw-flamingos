import InvoiceItem from "../InvoiceItem"

export default function MinusInvoiceItem() {

    function minusInvoice() {
        <InvoiceItem />
    }

    return (
        <>
            <button onClick={minusInvoice}>Minus</button>
        </>
    )
}