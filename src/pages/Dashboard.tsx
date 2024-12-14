import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { TicketList } from '@/components/TicketList';
import { Plus } from 'lucide-react';

const tickets = [
  {
    id: '1',
    subject: 'Login Issue',
    description: 'Unable to login to my account...',
    status: 'open',
    priority: 'high',
    department: 'Technical',
    createdAt: new Date('2024-03-10'),
    updatedAt: new Date('2024-03-10'),
    userId: 'user1'
  },
  // Add more tickets as needed
];

export function Dashboard() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Tickets</h1>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            New Ticket
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Active Tickets</CardTitle>
          </CardHeader>
          <CardContent>
            <TicketList tickets={tickets} />
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}