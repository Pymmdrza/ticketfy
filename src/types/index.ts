export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  avatar?: string;
}

export interface Ticket {
  id: string;
  subject: string;
  description: string;
  status: 'open' | 'pending' | 'closed';
  priority: 'low' | 'medium' | 'high';
  department: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  attachments?: string[];
}

export interface Message {
  id: string;
  ticketId: string;
  userId: string;
  content: string;
  attachments?: string[];
  createdAt: Date;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  read: boolean;
  createdAt: Date;
}