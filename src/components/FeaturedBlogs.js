import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LoadingIndicator from './LoadingIndicator';
import './css/FeaturedBlogs.css';

export default function FeaturedBlogs() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true); // Set loading to true when fetching starts
      try {
        const res = await fetch('https://blogapi-santos.onrender.com/blogs/allPosts');
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        
        const data = await res.json();

        // Shuffle and take three random posts
        const shuffledPosts = data.posts.sort(() => 0.5 - Math.random()).slice(0, 3);
        setPosts(shuffledPosts);
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError(err.message);
      } finally {
        setLoading(false); // Set loading to false when fetching ends
      }
    };

    fetchPosts();
  }, []);

  const truncateContent = (content) => {
    const words = content.split(' ');
    return words.length > 110 ? words.slice(0, 110).join(' ') + '...' : content;
  };

  // Show loading indicator while loading
  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <div className="container my-5">
      <h1 className='featured-title text-center my-4'>Featured Blogs</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <section className="row">
        {posts.map(post => (
          <div className="col-lg-4 mb-4" key={post._id}>
            <div className="card shadow-sm border-light">
              <img 
                src={post.imageUrl || 'fallback-image-url.jpg'} 
                className="card-img-top" 
                alt={post.title} 
              />
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{truncateContent(post.content)}</p>
                <Link to={`/post/${post._id}`} className="btn btn-primary">Read More</Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
