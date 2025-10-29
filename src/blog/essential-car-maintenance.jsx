import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BlogPost.css';

function EssentialCarMaintenance() {
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
        <img src="/Iyke maintainance.jpg" alt="Car Maintenance" className="blog-hero-image" />
        <div className="blog-meta">
          <span><i className='bx bx-calendar'></i> Oct 29, 2025</span>
          <span><i className='bx bx-user'></i> By IYKE</span>
          <span><i className='bx bx-tag'></i> Tips</span>
        </div>
      </div>

      <article className="blog-content">
        <h1>Essential Car Maintenance Tips: A Comprehensive Guide</h1>
        
        <p className="blog-intro">
          Regular car maintenance is crucial for ensuring your vehicle's longevity, performance, and safety. 
          With over 7 years of experience in the automotive industry, I'm sharing my professional insights 
          on keeping your vehicle in pristine condition.
        </p>

        <section className="blog-section">
          <h2>1. Regular Oil Changes: The Lifeblood of Your Engine</h2>
          <p>
            Oil is essential for your engine's health, acting as both a lubricant and coolant. Here's what you need to know:
          </p>
          <ul>
            <li>Change your oil every 5,000-7,500 miles for synthetic oil</li>
            <li>Check oil levels monthly using the dipstick</li>
            <li>Look for oil color - clean oil is amber, dirty oil is dark brown or black</li>
            <li>Pay attention to oil warning lights on your dashboard</li>
          </ul>
        </section>

        <section className="blog-section">
          <h2>2. Tire Maintenance: Your Connection to the Road</h2>
          <p>
            Proper tire maintenance is crucial for safety and fuel efficiency. Regular checks should include:
          </p>
          <ul>
            <li>Monthly tire pressure checks (including spare)</li>
            <li>Tire rotation every 5,000-8,000 miles</li>
            <li>Regular wheel alignment checks</li>
            <li>Tread depth monitoring using the penny test</li>
          </ul>
        </section>

        <section className="blog-section">
          <h2>3. Brake System Care</h2>
          <p>
            Your braking system is arguably the most critical safety feature. Watch out for:
          </p>
          <ul>
            <li>Squealing or grinding noises when braking</li>
            <li>Brake pedal feeling soft or spongy</li>
            <li>Vehicle pulling to one side when braking</li>
            <li>Regular brake fluid checks and changes</li>
          </ul>
        </section>

        <section className="blog-section">
          <h2>4. Battery Health</h2>
          <p>
            A healthy battery is essential for reliable starting and electrical system operation:
          </p>
          <ul>
            <li>Test battery strength every 6 months</li>
            <li>Keep battery terminals clean and corrosion-free</li>
            <li>Check for secure battery mounting</li>
            <li>Consider replacement after 3-5 years</li>
          </ul>
        </section>

        <section className="blog-section">
          <h2>5. Fluid Level Monitoring</h2>
          <p>
            Regular fluid checks are vital for various vehicle systems:
          </p>
          <ul>
            <li>Engine coolant levels</li>
            <li>Power steering fluid</li>
            <li>Brake fluid</li>
            <li>Transmission fluid</li>
            <li>Windshield washer fluid</li>
          </ul>
        </section>

        <section className="blog-section">
          <h2>Professional Inspection Schedule</h2>
          <p>
            While regular self-checks are important, professional inspections are crucial:
          </p>
          <ul>
            <li>Every 3 months or 3,000 miles: Basic inspection</li>
            <li>Every 6 months or 6,000 miles: Comprehensive service</li>
            <li>Yearly: Full vehicle inspection</li>
            <li>Every 2 years: Major service check</li>
          </ul>
        </section>

        <div className="blog-conclusion">
          <h2>Final Thoughts</h2>
          <p>
            Regular maintenance is an investment in your vehicle's future. By following these guidelines, 
            you can significantly extend your car's lifespan, maintain its value, and ensure safe operation. 
            Remember, prevention is always better (and cheaper) than cure when it comes to car maintenance.
          </p>
          <p>
            Need professional assistance with your vehicle maintenance? Contact IYKE AUTOMOBILE for expert 
            service and advice. We're here to help keep your car running at its best.
          </p>
        </div>

        <div className="blog-cta">
          <h3>Ready to get your car checked?</h3>
          <p>Schedule a professional inspection with IYKE AUTOMOBILE today!</p>
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

export default EssentialCarMaintenance;