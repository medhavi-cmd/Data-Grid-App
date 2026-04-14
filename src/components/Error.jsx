import { TriangleAlert } from "lucide-react";

function Error({ message }) {
  return (
    <div className="flex flex-col items-center justify-center mt-20 text-center">
      
      {/* Icon */}
      <div className="bg-red-100 p-4 rounded-full mb-4">
        <TriangleAlert size={40} className="text-red-500" strokeWidth={2.5} />
      </div>

      {/* Message */}
      <p className="text-red-500 font-medium text-lg max-w-md">
        {message}
      </p>
    </div>
  );
}

export default Error;