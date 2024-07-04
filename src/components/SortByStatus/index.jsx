
export default function SortByStatus() {


    function filterPaid() {

    }

    return (
        <div>
            <select name="Sort" id="">
                <option onChange={''} value="Default">Filter by Status</option>
                <option onClick={''} value="Paid">Filter by Paid</option>
                <option onClick={''} value="Pending">Filter by Pending</option>
                <option onClick={''} value="Overdue">Filter by Overdue</option>
                <option onClick={''} value="Cancelled">Filter by Cancelled</option> 
            </select>
        </div>
    )
}