import React from 'react';
import { Mail, Lock, User } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Register() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-gray-800 rounded-lg p-8 shadow-xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">Create Account</h1>
            <p className="text-gray-400 mt-2">Get started with your support account</p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full bg-gray-700 rounded-lg px-4 py-2.5 pl-10 text-gray-100 placeholder-gray-400"
                  placeholder="Enter your full name"
                />
                <User className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  className="w-full bg-gray-700 rounded-lg px-4 py-2.5 pl-10 text-gray-100 placeholder-gray-400"
                  placeholder="Enter your email"
                />
                <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  className="w-full bg-gray-700 rounded-lg px-4 py-2.5 pl-10 text-gray-100 placeholder-gray-400"
                  placeholder="Create a password"
                />
                <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
            </div>

            <Button className="w-full" size="lg">
              Create Account
            </Button>

            <p className="text-center text-sm text-gray-400">
              Already have an account?{' '}
              <a href="/login" className="text-blue-400 hover:text-blue-300">
                Sign in
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}