import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Paperclip, Send } from 'lucide-react';

export function TicketDetails() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold">Ticket #1234</h1>
            <p className="text-gray-400">Created on March 10, 2024</p>
          </div>
          <span className="px-3 py-1 rounded-full text-sm bg-green-500/20 text-green-400">
            Open
          </span>
        </div>

        <Card>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                  JD
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">John Doe</h3>
                      <p className="text-sm text-gray-400">2 hours ago</p>
                    </div>
                  </div>
                  <p className="mt-2">
                    Hello, I'm having issues with logging into my account. Can you please help?
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <form className="space-y-4">
              <textarea
                rows={4}
                className="w-full bg-gray-700 rounded-lg px-4 py-2.5 text-gray-100 placeholder-gray-400"
                placeholder="Type your reply..."
              />
              <div className="flex justify-between items-center">
                <Button variant="secondary" size="sm">
                  <Paperclip className="w-4 h-4 mr-2" />
                  Attach Files
                </Button>
                <Button size="sm">
                  <Send className="w-4 h-4 mr-2" />
                  Send Reply
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}