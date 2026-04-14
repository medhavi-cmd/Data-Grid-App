import { TriangleAlert } from 'lucide-react';

function Error({ message }) {
  return (
    <div className="text-center mt-16">
      <p className="text-red-500 font-medium mb-2">
        <TriangleAlert size={60} color="#edbc35" strokeWidth={3} /> 
        {message}
      </p>
      <p className="text-gray-500 text-sm">
        Please try again later
      </p>
    </div>
  );
}

export default Error;