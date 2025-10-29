import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BlogPost.css';

function TopCarsOf2025() {
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
        <img src="/top cars.jpg" alt="Top Cars of 2025" className="blog-hero-image" />
        <div className="blog-meta">
          <span><i className='bx bx-calendar'></i> Oct 27, 2025</span>
          <span><i className='bx bx-user'></i> By IYKE</span>
          <span><i className='bx bx-tag'></i> Review</span>
        </div>
      </div>

      <article className="blog-content">
        <h1>Top Cars of 2025: The Best Vehicles in Every Category</h1>
        
        <p className="blog-intro">
          As we move through 2025, the automotive industry continues to impress with innovative designs, 
          advanced technology, and improved performance. In this comprehensive review, we'll explore the 
          standout vehicles across different categories that have made their mark this year.
        </p>

        <section className="blog-section">
          <h2>Luxury Sedans</h2>
          <p>
            The luxury sedan segment continues to set new standards in comfort and technology:
          </p>
          <ul>
            <li>
              <strong>Mercedes-Benz S-Class (2025)</strong>
              <p>Leading the pack with its revolutionary autonomous features and hybrid powertrain</p>
            </li>
            <li>
              <strong>BMW 7 Series (2025)</strong>
              <p>Outstanding performance with advanced AI integration</p>
            </li>
            <li>
              <strong>Lexus LS (2025)</strong>
              <p>Exceptional reliability meets cutting-edge technology</p>
            </li>
          </ul>
        </section>

        <section className="blog-section">
          <h2>SUVs and Crossovers</h2>
          <p>
            SUVs remain the most popular segment with these standout models:
          </p>
          <ul>
            <li>
              <strong>Toyota Highlander (2025)</strong>
              <p>Perfect blend of practicality, comfort, and reliability</p>
            </li>
            <li>
              <strong>Honda CR-V (2025)</strong>
              <p>Best-in-class fuel efficiency with enhanced safety features</p>
            </li>
            <li>
              <strong>Lexus RX (2025)</strong>
              <p>Luxury meets versatility with impressive hybrid performance</p>
            </li>
          </ul>
        </section>

        <section className="blog-section">
          <h2>Family Sedans</h2>
          <p>
            Reliable and practical options for family transportation:
          </p>
          <ul>
            <li>
              <strong>Toyota Camry (2025)</strong>
              <p>Continued excellence in reliability and comfort</p>
            </li>
            <li>
              <strong>Honda Accord (2025)</strong>
              <p>Sophisticated design with class-leading safety features</p>
            </li>
            <li>
              <strong>Lexus ES (2025)</strong>
              <p>Premium features at a competitive price point</p>
            </li>
          </ul>
        </section>

        <section className="blog-section">
          <h2>Electric Vehicles</h2>
          <p>
            The EV segment shows impressive growth with these notable entries:
          </p>
          <ul>
            <li>
              <strong>Tesla Model 3 (2025)</strong>
              <p>Enhanced range and updated autonomous capabilities</p>
            </li>
            <li>
              <strong>Mercedes-Benz EQS (2025)</strong>
              <p>Luxury electric motoring with exceptional range</p>
            </li>
            <li>
              <strong>BMW i4 (2025)</strong>
              <p>Sporty performance meets zero emissions</p>
            </li>
          </ul>
        </section>

        <section className="blog-section">
          <h2>Commercial Vehicles</h2>
          <p>
            Top choices for business and commercial use:
          </p>
          <ul>
            <li>
              <strong>Toyota Hiace (2025)</strong>
              <p>Versatile and reliable commercial transport solution</p>
            </li>
            <li>
              <strong>Mercedes-Benz Sprinter (2025)</strong>
              <p>Premium commercial vehicle with advanced safety features</p>
            </li>
            <li>
              <strong>Ford Transit (2025)</strong>
              <p>Excellent value with robust performance</p>
            </li>
          </ul>
        </section>

        <section className="blog-section">
          <h2>Value for Money</h2>
          <p>
            Best vehicles offering exceptional value:
          </p>
          <ul>
            <li>
              <strong>Toyota Corolla (2025)</strong>
              <p>Reliable, efficient, and packed with features</p>
            </li>
            <li>
              <strong>Honda Civic (2025)</strong>
              <p>Sporty performance with excellent fuel economy</p>
            </li>
            <li>
              <strong>Hyundai Elantra (2025)</strong>
              <p>Premium features at an affordable price point</p>
            </li>
          </ul>
        </section>

        <div className="blog-conclusion">
          <h2>Making Your Choice</h2>
          <p>
            2025 has brought an impressive array of vehicles across all segments. Whether you're looking for 
            luxury, practicality, or value, there's a perfect car for every need and budget. At IYKE AUTOMOBILE, 
            we can help you navigate these options and find the ideal vehicle that matches your requirements.
          </p>
          <p>
            Remember, the best car for you depends on your specific needs, lifestyle, and budget. Our experienced 
            team can provide detailed insights about any of these vehicles and help you make an informed decision.
          </p>
        </div>

        <div className="blog-cta">
          <h3>Ready to Find Your Perfect Car?</h3>
          <p>Let us help you choose from these top performers of 2025!</p>
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

export default TopCarsOf2025;