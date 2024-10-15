export interface User {
    _id: string;
    name: string;
    email: string;
    role: 'customer' | 'provider' | 'admin';
    address?: string;
    phone?: string;
  }