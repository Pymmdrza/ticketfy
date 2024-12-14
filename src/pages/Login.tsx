import React from 'react';
import { Mail, Lock } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Login() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-gray-800 rounded-lg p-8 shadow-xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">Welcome Back</h1>
            <p className="text-gray-400 mt-2">Sign in to your account</p>
          </div>

          <form className="space-y-6">
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
                  placeholder="Enter your password"
                />
                <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="rounded bg-gray-700 border-gray-600" />
                <span className="ml-2 text-sm text-gray-400">Remember me</span>
              </label>
              <a href="#" className="text-sm text-blue-400 hover:text-blue-300">
                Forgot password?
              </a>
            </div>

            <Button className="w-full" size="lg">
              Sign In
            </Button>

            <p className="text-center text-sm text-gray-400">
              Don't have an account?{' '}
              <a href="/register" className="text-blue-400 hover:text-blue-300">
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}