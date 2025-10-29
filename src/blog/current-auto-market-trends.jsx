import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BlogPost.css';

function CurrentAutoMarketTrends() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="blog-post">
      <nav className="blog-nav">
        <Link to="/" className="back-button">
          <i className='bx bx-arrow-back'></i> Back to Home
        </Link>
      </nav>
      <div className="blog-header">
        <img src="/market trend.jpg" alt="Auto Market Trends" className="blog-hero-image" />
        <div className="blog-meta">
          <span><i className='bx bx-calendar'></i> Oct 28, 2025</span>
          <span><i className='bx bx-user'></i> By IYKE</span>
          <span><i className='bx bx-tag'></i> Market</span>
        </div>
      </div>

      <article className="blog-content">
        <h1>Current Auto Market Trends: What You Need to Know in 2025</h1>
        
        <p className="blog-intro">
          The automotive market is constantly evolving, with new technologies, changing consumer preferences, 
          and economic factors shaping the industry. As an experienced automotive professional, I'm here to 
          break down the current trends that are defining the market in 2025.
        </p>

        <section className="blog-section">
          <h2>1. Electric Vehicle Revolution</h2>
          <p>
            The shift towards electric vehicles (EVs) continues to accelerate in 2025:
          </p>
          <ul>
            <li>EVs now represent 35% of new car sales globally</li>
            <li>Improved battery technology offering 500+ mile ranges</li>
            <li>Expanding charging infrastructure across Nigeria</li>
            <li>More affordable EV options entering the market</li>
            <li>Growing selection of electric SUVs and pickup trucks</li>
          </ul>
        </section>

        <section className="blog-section">
          <h2>2. Price Trends and Market Dynamics</h2>
          <p>
            Current market conditions are showing interesting patterns:
          </p>
          <ul>
            <li>Stabilizing prices in the used car market</li>
            <li>Increased availability of new vehicles</li>
            <li>Growing demand for fuel-efficient options</li>
            <li>Premium features becoming standard in mid-range vehicles</li>
            <li>Shift in consumer preferences towards long-term value</li>
          </ul>
        </section>

        <section className="blog-section">
          <h2>3. Popular Vehicle Segments</h2>
          <p>
            Consumer preferences are evolving in interesting ways:
          </p>
          <ul>
            <li>Continued dominance of SUVs and crossovers</li>
            <li>Rising popularity of compact SUVs in urban areas</li>
            <li>Growing interest in hybrid powertrains</li>
            <li>Steady demand for reliable family sedans</li>
            <li>Increased market for luxury compact vehicles</li>
          </ul>
        </section>

        <section className="blog-section">
          <h2>4. Technology Integration</h2>
          <p>
            Advanced technology features are becoming increasingly important:
          </p>
          <ul>
            <li>Standard advanced driver assistance systems (ADAS)</li>
            <li>Enhanced connectivity and smartphone integration</li>
            <li>Over-the-air software updates</li>
            <li>Augmented reality displays</li>
            <li>Advanced cybersecurity features</li>
          </ul>
        </section>

        <section className="blog-section">
          <h2>5. Market Challenges and Opportunities</h2>
          <p>
            Key factors affecting the market include:
          </p>
          <ul>
            <li>Supply chain improvements</li>
            <li>Changing global economic conditions</li>
            <li>Environmental regulations</li>
            <li>Evolution of mobility services</li>
            <li>Investment in local manufacturing</li>
          </ul>
        </section>

        <section className="blog-section">
          <h2>6. Nigerian Market Specifics</h2>
          <p>
            Our local market shows distinct trends:
          </p>
          <ul>
            <li>Growing demand for fuel-efficient vehicles</li>
            <li>Increased interest in certified pre-owned vehicles</li>
            <li>Rise in financing options availability</li>
            <li>Preference for durable and reliable brands</li>
            <li>Emerging market for premium vehicles</li>
          </ul>
        </section>

        <div className="blog-conclusion">
          <h2>Looking Ahead</h2>
          <p>
            The automotive market continues to evolve rapidly, with technology and sustainability driving major 
            changes. Understanding these trends is crucial for making informed decisions about vehicle purchases 
            and investments. At IYKE AUTOMOBILE, we stay ahead of these trends to provide our customers with 
            the best options and advice in this dynamic market.
          </p>
          <p>
            Whether you're looking to buy, sell, or simply stay informed about the auto market, our team is 
            here to help you navigate these changes and make the best decisions for your needs.
          </p>
        </div>

        <div className="blog-cta">
          <h3>Want to Know More?</h3>
          <p>Get personalized insights about the current market and find the perfect vehicle for your needs!</p>
          <Link to="/" className="cta-button" onClick={() => {
            setTimeout(() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }, 100);
          }}>Contact Us Now</Link>
        </div>
      </article>
    </div>
  );
}

export default CurrentAutoMarketTrends;