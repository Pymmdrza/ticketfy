import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export function Settings() {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Settings</h1>

        <Card>
          <CardHeader>
            <CardTitle>Profile Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full bg-gray-700 rounded-lg px-4 py-2.5 text-gray-100"
                  defaultValue="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-gray-700 rounded-lg px-4 py-2.5 text-gray-100"
                  defaultValue="john@example.com"
                />
              </div>
              <Button>Save Changes</Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notification Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="rounded bg-gray-700 border-gray-600" />
                <span>Email notifications for new tickets</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="rounded bg-gray-700 border-gray-600" />
                <span>Email notifications for ticket updates</span>
              </label>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}