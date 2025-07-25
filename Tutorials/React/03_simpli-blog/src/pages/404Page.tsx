
import { Link } from "react-router-dom";
function NotFoundPage() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <Link to="/">
          <div className="px-4 py-2 rounded bg-gray-700 text-gray-100">Go to Home</div>
        </Link>
        <p className="mt-4 text-gray-400">
          The page you are looking for does not exist.
        </p>
      </div>
    );
};

export default NotFoundPage;