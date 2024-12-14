import React from 'react';
import { Layout } from '@/components/Layout';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { TicketList } from '@/components/TicketList';
import { 
  Ticket, 
  Users, 
  MessageSquare, 
  Clock,
  CheckCircle 
} from 'lucide-react';

const stats = [
  { 
    title: 'Total Tickets', 
    value: 156, 
    trend: 12, 
    icon: <Ticket className="w-6 h-6 text-blue-400" /> 
  },
  { 
    title: 'Active Users', 
    value: 2845, 
    trend: 8, 
    icon: <Users className="w-6 h-6 text-green-400" /> 
  },
  { 
    title: 'Response Time', 
    value: 2.4, 
    trend: -5, 
    icon: <Clock className="w-6 h-6 text-yellow-400" /> 
  },
  { 
    title: 'Resolution Rate', 
    value: 94, 
    trend: 3, 
    icon: <CheckCircle className="w-6 h-6 text-purple-400" /> 
  }
];

const pendingTickets = [
  {
    id: '1',
    subject: 'Payment Processing Issue',
    description: 'Customer unable to complete payment...',
    status: 'pending',
    priority: 'high',
    department: 'Billing',
    createdAt: new Date('2024-03-10'),
    updatedAt: new Date('2024-03-10'),
    userId: 'user1'
  },
  // More tickets...
];

export function AdminDashboard() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <div className="flex space-x-3">
            <select className="bg-gray-700 rounded-lg px-3 py-2 text-sm">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <StatsCard key={stat.title} {...stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center space-x-3 text-sm">
                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium">New response on ticket #1234</p>
                      <p className="text-gray-400">2 hours ago</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Pending Tickets */}
          <Card>
            <CardHeader>
              <CardTitle>Pending Tickets</CardTitle>
            </CardHeader>
            <CardContent>
              <TicketList tickets={pendingTickets} />
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}