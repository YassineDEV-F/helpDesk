import { useEffect, useState } from 'react';
import axios from 'axios';
import api from '../api';

export default function TicketList() {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/tickets')
            .then(res => setTickets(res.data))
            .catch(err => console.error("Error fetching tickets:", err));
    }, []);

    return (
        <>
            <div className="p-4">
                <h2 className="text-xl font-bold">Support Tickets</h2>
                <ul>
                    {tickets.map(ticket => (
                        <li key={ticket.id} className="border-b py-2">
                            {ticket.title} - <span className="text-blue-500">{ticket.status}</span>
                        </li>
                    ))}
                    
                </ul>
            </div>
            {tickets.map(ticket => (
                <div key={ticket.id}>
                    <h3>{ticket.title}</h3>
                    {/* Accessing the related service table data */}
                    <p>Category: {ticket.service ? ticket.service.name : 'No Service'}</p>
                </div>
            ))}
        </>
    );
}

api.get('/tickets')