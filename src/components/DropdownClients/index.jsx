export default function DropdownClients({ clients }) {

    return (
        <select className="bg-gray-200 rounded border border-gray-400">
            <option value="">Select from client list</option>
            {clients.map(client => <option key={client.id} value={client.id}>{client.name}</option>)}
        </select>
    )
}