import React from 'react'
import { Link } from 'react-router-dom'
import './css/Banner.css'

export default function Banner() {
  return (
    <header className="text-center text-dark" id="home">
        <h1 className="display-4">Welcome to Memoirs</h1>
        <p className="lead">Sharing thoughts, ideas, and stories.</p>
        <Link className='start-blogging-btn' to={'/addPost'}>Start Blogging</Link>
        {/* Optional: Add an image below the button */}
        <div>
          <img src="https://cdn.dribbble.com/userupload/4652082/file/original-93c2e14d792144e218b87e1771a9f8e6.png?resize=2048x1536" alt="A beautiful scene" className="header-image" />

        </div>
    </header>
  )
}
