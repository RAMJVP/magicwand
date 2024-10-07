import React, { useEffect, useState } from "react";
import Message from "./Message";
import AddBlog from "./AddBlog";
import BlogList from "./BlogList";
import './App.css';
import BlogService from "./service/BlogService";

// Sample blog data
const sampleBlog = {
  title: 'ज्ञान और नम्रता',
  date: '12.05.2025',
  readingTime: '4 min',
  content: 'बरषहिं जलद भूमि निअराएँ। जथा नवहिं बुध बिद्या पाएँ। बूँद अघात सहहिं गिरि कैसे। खल के बचन संत सह जैसें॥ The clouds are coming close to the earth (descending) and it is raining, just as scholars become humble after gaining knowledge. How mountains bear the blow of drops, just as saints bear the words of the wicked.',
};

function App() {
  const [blogs, setBlogs] = useState([sampleBlog]); // Initialize with sample blog

  // Fetch blogs on component mount
  useEffect(() => {
    BlogService.fetchBlogs()
      .then((response) => {
        console.log("Fetched blogs:", response.data);
        // Assuming you transform the API data to fit your blog format
        const fetchedBlogs = response.data.map((blogData: any) => ({
          title: blogData.area, // Replace with your actual data
          date: blogData.region,
          readingTime: blogData.population,
          content: `Information about ${blogData.flag}`,
        }));
        setBlogs(fetchedBlogs);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      });
  }, []);

  return (
    <div>
     
      <Message />
      <AddBlog />
      <BlogList blogs={blogs} /> {/* Pass the fetched blogs */}
    </div>
  );
}

export default App;
