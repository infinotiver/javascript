import { Link, useLocation } from "react-router-dom";
function Navbar() {
    const location = useLocation();
    const currentPath = location.pathname;
    const navLinkClass = "px-4 py-2 rounded hover:bg-gray-200";
    const isActive = (path: string) => currentPath === path;

    return (
        <nav className="fixed bottom-2 bg-white text-gray-800 p-4 border border-gray-300 rounded-lg shadow-md left-1/2 transform -translate-x-1/2 w-max">
            <div className="flex justify-around space-x-6">
                <div>
                    <Link
                        to="/"
                        className={`${navLinkClass} ${isActive("/") ? "bg-blue-200" : ""}`}
                    >
                        Home
                    </Link>
                </div>
                <div>
                    <Link
                        to="/blogs"
                        className={`${navLinkClass} ${isActive("/blogs") ? "bg-blue-200" : ""}`}
                    >
                        Blogs
                    </Link>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;
