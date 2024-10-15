import Link from "next/link";

interface ServiceCardProps {
  category: string;
}

export default function ServiceCard({ category }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-2">{category}</h3>
      <p className="text-gray-600 mb-4">Find top {category.toLowerCase()} professionals for your projects.</p>
      <Link href={`/services/${category.toLowerCase().replace(' ', '-')}`} className="text-blue-500 hover:text-blue-600">
        View Services &rarr;
      </Link>
    </div>
  );
}