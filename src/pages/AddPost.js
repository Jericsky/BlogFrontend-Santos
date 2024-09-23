import React, { useState } from 'react';
import './css/AddPost.css';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import './css/Login.css'

export default function AddPost() {
  const noty = new Notyf();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const [tagArray, setTagArray] = useState([]);
  const [imageUrl, setImageUrl] = useState(null); // State for image

  const handleAddTag = () => {
    if (tags) {
      setTagArray([...tagArray, tags]);
      setTags(''); // Clear the input after adding
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageUrl(URL.createObjectURL(file)); // Preview image
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const postData = {
      title,
      content,
      category,
      tags: tagArray,
      imageUrl, 
    };
  
    try {
      const response = await fetch('https://blogapi-santos.onrender.com/blogs/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(postData),
      });
  
      const data = await response.json();
      
      if(data.message){
        noty.success(data.message);
        
        // Reset form fields after successful submission
        setTitle('');
        setContent('');
        setCategory('');
        setTagArray([]); // Reset tags array
        setTags(''); // Reset individual tag input
        setImageUrl(null); // Reset image
  
      } else if(data.error){
        noty.error(data.error);
      }
  
    } catch (error) {
      console.error('Error submitting post:', error);
      noty.error('An error occurred while submitting the post.');
    }
  };
  

  return (
    <div className="add-post-container ">
      <h2>Add New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>

        <div className="form-group">
          <label>Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Tags</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
          <button type="button" onClick={handleAddTag}>
            Add Tag
          </button>
          <div className="tags-list">
            {tagArray.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label>Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          {imageUrl && <img src={imageUrl} alt="Preview" className="image-preview" />}
        </div>

        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
}
