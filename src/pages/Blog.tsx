import { useEffect, useState } from "react";
import BlogService from "../service/BlogService";

const Blog = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    BlogService.fetchBlogs()
      .then((response) => {
        setBlogs(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error fetching blogs");
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading blogs...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Blog Listing</h1>
      <ul>
        {blogs.map((blog, index) => (
          <li key={index}>
            <h2>{blog.name.common}</h2>
            <p>Region: {blog.region}</p>
            <p>Subregion: {blog.subregion}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
