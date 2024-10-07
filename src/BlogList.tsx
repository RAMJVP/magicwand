import './App.css';

const BlogList = ({ blogs }) => {
  return (
    <div>
      {blogs
        .filter(blog => !blog.deleted) // Exclude deleted blogs
        .map((blog, index) => (
          <div key={index} className="blog-item">
            <h2 className="blog-title">{blog.title}</h2>
            <p className="blog-date">{blog.date}</p>
            <p className="blog-content">{blog.content}</p>
          </div>
      ))}
    </div>
  );
};

export default BlogList;
