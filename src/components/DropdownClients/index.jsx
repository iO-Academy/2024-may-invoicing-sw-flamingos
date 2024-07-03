export default function DropdownClients({ clients }) {

    return (
        <select>
            <option value="">Select from client list</option>
            {clients.map(client => <option key={client.id} value="client.id">{client.name}</option>)}
        </select>
    )
}