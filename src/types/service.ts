export interface Service {
    _id: string;
    name: string;
    category: 'plumbing' | 'electrical' | 'cleaning' | 'landscaping' | 'other';
    description: string;
    provider: string; // This will be the User ID
    price: number;
    isAvailable?: boolean;
    createdAt?: Date;
}