import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LoadingIndicator from '../components/LoadingIndicator';
import './css/Blogs.css'; // Import any necessary CSS

export default function Blogs() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://blogapi-santos.onrender.com/blogs/allPosts');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        
        const data = await response.json();
        console.log(data.posts)
        setPosts(data.posts); // Access posts array directly
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const truncateContent = (content) => {
    const words = content.split(' ');
    return words.length > 110 ? words.slice(0, 110).join(' ') + '...' : content;
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  filteredPosts.map(post => {
    console.log(post.imageUrl)
  })

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>; 
  }

  return (
    <div className="container my-5">
      <h1 className="title text-center my-4">Blogs</h1>
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search by title or content..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <section className="row">
        {filteredPosts.length > 0 ? (
          filteredPosts.map(post => (
            <div className="col-lg-4 col-md-6 mb-4" key={post._id}>
              <div className="card shadow-sm border-light d-flex flex-column">
                <img 
                  src={post.imageUrl} 
                  className="card-img-top" 
                  // alt={post.imageUrl} 
                />
                <div className="card-body flex-grow-1 d-flex flex-column">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{truncateContent(post.content)}</p>
                  <Link to={`/post/${post._id}`} className="btn btn-primary">Read More</Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center">No posts found.</div>
        )}
      </section>
    </div>
  );
}
