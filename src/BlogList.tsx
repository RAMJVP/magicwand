//import React from 'react';

interface Blog {
  id: number;
  title: string;
  content: string;
  date: string;
  readingTime: string;
}

interface BlogListProps {
  blogs: Blog[];
}

const BlogList: React.FC<BlogListProps> = ({ blogs }) => {
  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
          <small>{blog.date} • {blog.readingTime}</small>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
