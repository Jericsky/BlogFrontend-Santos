import React from 'react';
import './css/About.css';

export default function About() {
  return (
    <div className="about-container my-5">
      <h1 className="text-center">About Us</h1>
      <p className="text-center mx-5">
        Welcome to Memoirs, where we share stories and insights that inspire and connect people.
      </p>
      <section className="what-is">
        <h2>What is Memoirs?</h2>
        <p className="text-center mx-5">
          Memoirs is a storytelling platform designed to give individuals a voice. We believe that everyone has a story worth sharing, and our goal is to provide a space where these stories can be told and celebrated.
        </p>
      </section>
      <section className="what-we-offer">
        <h2>What We Offer</h2>
        <p className="text-center mx-5">
          Our platform offers a variety of features, including:
        </p>
        <ul className="text-center mx-5">
          <li>Community engagement through shared stories</li>
          <li>A supportive environment for writers and readers</li>
          <li>Regular blog posts and articles on diverse topics</li>
          <li>Opportunities for collaboration and guest contributions</li>
        </ul>
      </section>
      <section className="mission">
        <h2>Our Mission</h2>
        <p className='text-center mx-5'>
          Our mission is to create a platform for sharing authentic stories that resonate with our audience, fostering a sense of community and understanding.
        </p>
      </section>
      <section className="team mx-5">
        <h2>Meet the Team</h2>
        <div className="team-member">
          <h3>Christian Jeric Santos</h3>
          <p>Founder & CEO</p>
          <p>Jeric is passionate about storytelling and bringing people together through shared experiences.</p>
        </div>
      </section>
    </div>
  );
}
