
export default function SortByStatus({statusVal}) {

    function filter() {

    }

    return (
        <div>
            <select name="Sort" id="">
                <option onChange={filter} value="Default">Filter by Status</option>
                <option value="Paid">Filter by Paid</option>
                <option value="Pending">Filter by Pending</option>
                <option value="Overdue">Filter by Overdue</option>
                <option value="Cancelled">Filter by Cancelled</option> 
            </select>
        </div>
    )
}