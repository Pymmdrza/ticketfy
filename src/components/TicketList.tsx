import React from 'react';
import { Clock, MessageSquare } from 'lucide-react';
import type { Ticket } from '../types';

interface TicketListProps {
  tickets: Ticket[];
}

export function TicketList({ tickets }: TicketListProps) {
  return (
    <div className="space-y-4">
      {tickets.map((ticket) => (
        <div
          key={ticket.id}
          className="bg-gray-800 rounded-lg p-4 hover:bg-gray-750 transition-colors"
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold">{ticket.subject}</h3>
              <p className="text-gray-400 mt-1">{ticket.description}</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className={`px-3 py-1 rounded-full text-sm ${
                ticket.status === 'open' ? 'bg-green-500/20 text-green-400' :
                ticket.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                'bg-red-500/20 text-red-400'
              }`}>
                {ticket.status}
              </span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 text-sm text-gray-400">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {new Date(ticket.createdAt).toLocaleDateString()}
            </div>
            <div className="flex items-center">
              <MessageSquare className="w-4 h-4 mr-1" />
              3 replies
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}