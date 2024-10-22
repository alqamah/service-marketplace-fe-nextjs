export interface Booking {
    _id: string;
    service: string; // This will be the Service ID
    customer: string; // This will be the User ID
    provider: string; // This will be the User ID
    notes?: string;
    date: Date;
    status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
    totalPrice: number;
    createdAt?: Date;
}