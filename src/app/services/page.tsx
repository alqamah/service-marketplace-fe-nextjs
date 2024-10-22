'use client';

import React, { useState, useEffect } from 'react';
import { getServices } from '@/lib/api';
import Link from 'next/link';

// Define the type for service
type Service = {
  _id: string;
  name: string;
  description: string;
  price: number;
};

const ServicesPage = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); 

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const fetchedServices = await getServices();
        setServices(fetchedServices.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch services'); 
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service._id} className="border rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <p className="font-bold">Price: ${service.price}</p>
            <Link href={`/services/${service._id}`} className="text-blue-500 hover:underline mt-2 inline-block">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
