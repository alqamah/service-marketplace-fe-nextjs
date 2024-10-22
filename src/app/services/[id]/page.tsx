"use client"; // Add this line at the top of the file

import { useEffect, useState } from 'react';

// Define the type for service
type Service = {
    name: string;
    description: string;
};

function ServiceDetails({ params }: { params: { id: string } }) {
    const [service, setService] = useState<Service | null>(null);
    
    useEffect(() => {
        const fetchServiceDetails = async () => {
            const response = await fetch(`/api/services/${params.id}`);
            const data = await response.json();
            console.log(data);
            setService(data);
        };
        
        fetchServiceDetails();
    }, [params.id]);

    if (!service) return <div>Loading...</div>;

    return (
        <div>
            <h1>{service.name}</h1>
            <p>{service.description}</p>
            {/* Add more service details as needed */}
        </div>
    );
}

export default ServiceDetails;
