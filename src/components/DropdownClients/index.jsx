export default function DropdownClients({ clients, clientState }) {

    function clientId(e) {
        const clientSelect = (e.target.value)
        clientState(clientSelect)
    }

    return (
        <select onChange={clientId} className="rounded border border-gray-400 h-8 pl-3 bg-white text-slate-500">
            <option className="bg-white pl-3" value="">Select from client list</option>
            {clients.map(client => <option key={client.id} value={client.id}>{client.name}</option>)}
        </select>
    )
}