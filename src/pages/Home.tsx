
import BlogSection from '../components/BlogSection';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div className="home-page">
      <section>
        <h1>Welcome to My React Site</h1>
        <p>Your one-stop solution for blogs, galleries, and more.</p>
      </section>
      <BlogSection/>
      <Gallery></Gallery>
      <Testimonials />
    </div>
  );
};

export default Home;
