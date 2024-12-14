import React, { useState } from 'react';
import { 
  Bell, 
  Menu, 
  User, 
  Home, 
  Ticket, 
  Settings as SettingsIcon,
  PlusCircle,
  MessageSquare,
  Clock,
  ChevronDown,
  LogOut
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const navigation = [
  { 
    name: 'Dashboard', 
    href: '/dashboard', 
    icon: Home 
  },
  {
    name: 'Tickets',
    icon: Ticket,
    children: [
      { name: 'All Tickets', href: '/tickets' },
      { name: 'Open Tickets', href: '/tickets/open' },
      { name: 'Pending', href: '/tickets/pending' },
      { name: 'Closed', href: '/tickets/closed' },
      { name: 'Create New', href: '/tickets/new', icon: PlusCircle },
    ],
  },
  { 
    name: 'Reports', 
    icon: MessageSquare,
    children: [
      { name: 'Overview', href: '/reports' },
      { name: 'Response Time', href: '/reports/response-time' },
      { name: 'Resolution Rate', href: '/reports/resolution' },
    ],
  },
  { 
    name: 'Settings', 
    href: '/settings', 
    icon: SettingsIcon 
  },
];

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (name: string) => {
    setExpandedItems(prev => 
      prev.includes(name) 
        ? prev.filter(item => item !== name)
        : [...prev, name]
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="fixed top-0 w-full bg-gray-800 border-b-1 border-gray-700 z-50">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsSidebarOpen(prev => !prev)}
              className="p-1.5 hover:bg-gray-700 rounded-lg"
            >
              <Menu className="w-5 h-5" />
            </button>
            <h1 className="text-lg font-semibold">Support Desk</h1>
          </div>
          
          <div className="flex items-center space-x-3">
            <button className="p-1.5 hover:bg-gray-700 rounded-lg relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="relative group">
              <button className="flex items-center space-x-2 p-1.5 hover:bg-gray-700 rounded-lg">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  JD
                </div>
                <span className="text-sm">John Doe</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg py-1 hidden group-hover:block">
                <Link to="/profile" className="flex items-center px-4 py-2 text-sm hover:bg-gray-700">
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </Link>
                <Link to="/settings" className="flex items-center px-4 py-2 text-sm hover:bg-gray-700">
                  <SettingsIcon className="w-4 h-4 mr-2" />
                  Settings
                </Link>
                <hr className="border-gray-700 my-1" />
                <button className="flex items-center px-4 py-2 text-sm text-red-400 hover:bg-gray-700 w-full">
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside className={`fixed left-0 top-14 h-[calc(100vh-3.5rem)] bg-gray-800 border-r-1 border-gray-700 transition-all duration-300 ${
        isSidebarOpen ? 'w-64' : 'w-16'
      }`}>
        <nav className="p-3 h-full flex flex-col">
          <div className="flex-1 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              const isExpanded = expandedItems.includes(item.name);
              
              if (item.children) {
                return (
                  <div key={item.name}>
                    <button
                      onClick={() => toggleExpanded(item.name)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isExpanded ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                      }`}
                    >
                      <div className="flex items-center">
                        <Icon className="w-4 h-4 mr-2" />
                        {isSidebarOpen && <span>{item.name}</span>}
                      </div>
                      {isSidebarOpen && (
                        <ChevronDown className={`w-4 h-4 transition-transform ${
                          isExpanded ? 'rotate-180' : ''
                        }`} />
                      )}
                    </button>
                    {isExpanded && isSidebarOpen && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                              location.pathname === child.href
                                ? 'bg-gray-700 text-white'
                                : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                            }`}
                          >
                            {child.icon && <child.icon className="w-4 h-4" />}
                            <span>{child.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-gray-700 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {isSidebarOpen && <span>{item.name}</span>}
                </Link>
              );
            })}
          </div>

          {/* User Status */}
          {isSidebarOpen && (
            <div className="border-t border-gray-700 pt-3 mt-3">
              <div className="px-3 py-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-gray-400">Online</span>
                </div>
              </div>
            </div>
          )}
        </nav>
      </aside>

      {/* Main Content */}
      <main className={`pt-14 transition-all duration-300 ${
        isSidebarOpen ? 'pl-64' : 'pl-16'
      }`}>
        <div className="container mx-auto p-6">
          {children}
        </div>
      </main>
    </div>
  );
}