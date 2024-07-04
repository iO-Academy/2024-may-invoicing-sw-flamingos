export default function DropdownClients({ clients, clientState }) {

    function clientId(e) {
        const clientSelect = (e.target.value)
        clientState(clientSelect)
    }

    return (
        <select onChange={clientId} className="bg-gray-200 rounded border border-gray-400">
            <option value="">Select from client list</option>
            {clients.map(client => <option key={client.id} value={client.id}>{client.name}</option>)}
        </select>
    )
}