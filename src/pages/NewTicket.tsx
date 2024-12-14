import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Paperclip } from 'lucide-react';

export function NewTicket() {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Create New Ticket</h1>

        <Card>
          <CardHeader>
            <CardTitle>Ticket Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full bg-gray-700 rounded-lg px-4 py-2.5 text-gray-100"
                  placeholder="Brief description of your issue"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Department
                </label>
                <select className="w-full bg-gray-700 rounded-lg px-4 py-2.5 text-gray-100">
                  <option>Technical Support</option>
                  <option>Billing</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Priority
                </label>
                <select className="w-full bg-gray-700 rounded-lg px-4 py-2.5 text-gray-100">
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Description
                </label>
                <textarea
                  rows={6}
                  className="w-full bg-gray-700 rounded-lg px-4 py-2.5 text-gray-100"
                  placeholder="Detailed description of your issue..."
                />
              </div>

              <div>
                <Button variant="secondary" type="button">
                  <Paperclip className="w-4 h-4 mr-2" />
                  Attach Files
                </Button>
              </div>

              <Button className="w-full">Submit Ticket</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}