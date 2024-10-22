import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    // Example: Fetch service data based on the ID
    const service = getServiceById(id); // Replace with your data fetching logic

    if (service) {
        res.status(200).json(service);
    } else {
        res.status(404).json({ message: 'Service not found' });
    }
}

function getServiceById(id: string | string[]) {
    // Replace this with your actual data fetching logic
    // For example, querying a database or an external API
    return null; // Simulating a not found scenario
}