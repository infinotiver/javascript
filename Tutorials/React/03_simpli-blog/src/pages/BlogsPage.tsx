import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import data from "../utils/Data";

function Blogs() {
    const blogsData = data.map((blog, index) => (
        
        <div
            key={index}
            className="m-4 p-6 border border-gray-300 rounded-lg shadow-lg bg-white max-w-md"
        >
            <h2 className="font-bold text-xl mb-2 text-gray-800">
                <Link to={`/blog/${blog.id}`} className="text-blue-500 hover:underline">
                    {blog.title}
                </Link>
            </h2>
            <p className="text-gray-600">{blog.content}</p>
        </div>
    ));
    return (
        <div className="min-h-screen w-full flex flex-col items-center bg-gray-50">
            <Navbar />
            <div className="w-full max-w-4xl px-4">
                <h1 className="font-bold text-4xl mt-8 mb-4 text-center text-gray-800">
                    Blogs
                </h1>
                <p className="text-center text-gray-600 mb-8">
                    Welcome to the Blogs page!
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogsData}
                </div>
            </div>
        </div>
    );
}
export default Blogs;
