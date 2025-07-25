import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import data from "../utils/Data";

function Blog() {
  const params = useParams();
  console.log(params);
  const blogItem = data.find((item) => item.id === Number(params.blogId));
  console.log(blogItem);

  if (!blogItem) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center">
        <Navbar />
        <h1 className="font-bold text-4xl m-4">Blog Not Found</h1>
      </div>
    );
  }

  return (
    <div className="h-screen w-full flex flex-col items-center justify-around">
      <Navbar />
      <h1 className="font-bold text-4xl m-4">{blogItem.title}</h1>
      <p className="text-lg m-4">{blogItem.content}</p>
      
      {/* Author and Date Section */}
      <div className="m-4">
        <p className="text-md">
          <strong>Author:</strong> {blogItem.author}
        </p>
        <p className="text-md">
          <strong>Date:</strong> {blogItem.date}
        </p>
      </div>

      {/* Tags Section */}
      <div className="m-4 flex flex-wrap gap-2">
        {blogItem.tags?.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-gray-200 text-sm rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Blog;
