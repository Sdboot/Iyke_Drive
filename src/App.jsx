import React from "react";
import { useInView } from "./useInView";
import { Link } from "react-router-dom";
import "./App.css";



function App() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const [isBadgeClicked, setIsBadgeClicked] = React.useState(false);
  const [headerRef, headerInView] = useInView({ threshold: 0.5 });
  const [heroRef, heroInView] = useInView({ threshold: 0.3 });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.3 });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.3 });
  const [blogRef, blogInView] = useInView({ threshold: 0.3 });
  const [reviewsRef, reviewsInView] = useInView({ threshold: 0.3 });
  const [contactRef, contactInView] = useInView({ threshold: 0.3 });
  



   


  return (
    <div>
      <header ref={headerRef} className={headerInView ? "animate" : ""} >
        <a href="header"><img src="iyke logoo.jpg" alt="Featured Car" className="hero-img" /></a> 
        <h1>IYKE <b>AUTOMOBILE</b></h1>
  
          <div className="hamburger" onClick={() => setIsNavOpen(!isNavOpen)}>
    <span></span>
    <span></span>
    <span></span>
  </div>
       <nav className={isNavOpen ? 'nav-active' : ''}>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#blog">Blog</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="hero" ref={heroRef} className={heroInView ? "animate" : ""}>
        <div className="hero-text">
           <h3>VROOM WITH IYKE</h3>
        <p>Experience the thrill of the drive with IYKE. Your journey begins here.</p>
        </div>
    
      </main>

      <section id="about" ref={aboutRef} className={aboutInView ? "animate" : ""}>
       <div className="about-head">
        <h2>MEET THE DRIVE CALLED <b className={aboutInView ? "animate" : ""}> IYKE </b></h2>
        </div>

        <div className="about-iyke"> 
           <div className="about-image-container">
        <img src="/akintunde.jpeg" alt="Iyke" className="about-img" />
         <div className={`experience-badge ${isBadgeClicked ? 'rotate-trophy' : ''}`} 
  onClick={() => setIsBadgeClicked(!isBadgeClicked)}
>
  {isBadgeClicked ? (
    <>
      <i className='bx bxs-trophy'></i>
       <p>Excellence</p>
    </>
  ) : (
    <>
        <span>7 years +</span>
        <p>Years Experience</p>
        </>
  )}
      </div>
    </div> 

        <div className="about-content">
      
        <p>
          <strong>Welcome!</strong><br /> <br />
           I’m <b> IYKE </b>- A trusted and passionate car euthusiast with over 7 years of experience in the auto industry.<br></br><br></br>
      
        

        <b>IYKE AUTOMOBILE</b> connects you with the right car with a smooth,transparent and stress-free process while delivering honesty,value and
        excellent customer service every step of the way. <br></br> <br></br>

         Want a sleek ride,a family car or a durable vehicle for business?
          </p>

          <div className="about-features">
        <div className="feature">
          <h4>Quality Assurance</h4>
          <p>Every vehicle undergoes thorough inspection before sale</p>
        </div>
        <div className="feature">
          <h4>Transparency</h4>
          <p>Honest, value-driven, and excellent customer service</p>
        </div>
      </div>
    </div>
        </div>
      </section>

      <section id="services" ref={servicesRef} className={servicesInView ? "animate" : ""}>
        <div className="services-head">
          <h2>Our <b className={servicesInView ? "animate" : ""}>Services</b></h2>
        </div>
        <div className="services-container">
          <div className="service-card">
            <div className="service-icon">
              <i className='bx bx-search-alt-2'></i>
            </div>
            <h3>Car Inspection Services</h3>
            <p>Comprehensive vehicle inspection by certified professionals to ensure your car's quality and safety.</p>
            <a href="#contact" className="service-link">Learn More <i className='bx bx-right-arrow-alt'></i></a>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className='bx bx-money'></i>
            </div>
            <h3>Car Valuation</h3>
            <p>Get accurate market value assessment for your vehicle based on current market trends.</p>
            <a href="#contact" className="service-link">Learn More <i className='bx bx-right-arrow-alt'></i></a>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className='bx bx-transfer'></i>
            </div>
            <h3>Trade-in Options</h3>
            <p>Flexible trade-in solutions to help you upgrade to your dream car with ease.</p>
            <a href="#contact" className="service-link">Learn More <i className='bx bx-right-arrow-alt'></i></a>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className='bx bx-credit-card'></i>
            </div>
            <h3>Auto Financing</h3>
            <p>Tailored financing solutions to make your car ownership dreams a reality.</p>
            <a href="#contact" className="service-link">Learn More <i className='bx bx-right-arrow-alt'></i></a>
          </div>
        </div>
      </section>

      <section id="blog" ref={blogRef} className={blogInView ? "animate" : ""}>
        <div className="blog-head">
          <h2>Latest <b className={blogInView ? "animate" : ""}>Updates</b></h2>
        </div>
        <div className="blog-container">
          <article className="blog-card">
            <div className="blog-image">
              <img src="/Iyke maintainance.jpg" alt="Car Maintenance" />
              <span className="blog-tag">Tips</span>
            </div>
            <div className="blog-content">
              <h3>Essential Car Maintenance Tips</h3>
              <p>Learn how to keep your vehicle in top condition with these maintenance tips.</p>
              <div className="blog-meta">
                <span><i className='bx bx-calendar'></i> Oct 29, 2025</span>
                <span><i className='bx bx-user'></i> By IYKE</span>
              </div>
              <Link to="/blog/essential-car-maintenance" className="read-more">Read More <i className='bx bx-right-arrow-alt'></i></Link>
            </div>
          </article>

          <article className="blog-card">
            <div className="blog-image">
              <img src="/market trend.jpg" alt="Market Trends" />
              <span className="blog-tag">Market</span>
            </div>
            <div className="blog-content">
              <h3>Current Auto Market Trends</h3>
              <p>Stay informed about the latest trends and developments in the automotive market.</p>
              <div className="blog-meta">
                <span><i className='bx bx-calendar'></i> Oct 28, 2025</span>
                <span><i className='bx bx-user'></i> By IYKE</span>
              </div>
              <Link to="/blog/current-auto-market-trends" className="read-more">Read More <i className='bx bx-right-arrow-alt'></i></Link>
            </div>
          </article>

          <article className="blog-card">
            <div className="blog-image">
              <img src="/top cars.jpg" alt="Car Review" />
              <span className="blog-tag">Review</span>
            </div>
            <div className="blog-content">
              <h3>Top Cars of 2025</h3>
              <p>Discover the best performing and most popular vehicles of the year.</p>
              <div className="blog-meta">
                <span><i className='bx bx-calendar'></i> Oct 27, 2025</span>
                <span><i className='bx bx-user'></i> By IYKE</span>
              </div>
              <Link to="/blog/top-cars-of-2025" className="read-more">Read More <i className='bx bx-right-arrow-alt'></i></Link>
            </div>
          </article>
        </div>
      </section>

      <section id="reviews" ref={reviewsRef} className={reviewsInView ? "animate" : ""}>
  <h2>What Our Customers Say</h2>
  <div className="reviews-container">
    <div className="review-card">
      <div className="review-header">
        <img src="/michael.jpg" alt="Customer" />
        <div>
          <h3>Michael Phillip</h3>
          <div className="stars">
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
          </div>
        </div>
      </div>
      <p>"Exceptional service! <br></br>
        IYKE helped me find my dream Toyota Camry at a great price. Very transparent process."</p>
    </div>

    <div className="review-card">
      <div className="review-header">
        <img src="/Ebuka Oyoyo.jpeg" alt="Customer" />
        <div>
          <h3>Ebuka Oyoyo</h3>
          <div className="stars">
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star-half'></i>
          </div>
        </div>
      </div>
      <p>"I got my car from IYKE AUTOMOBILE and it has not given me issue for once.
        He is a good business guy and someone i highly recommend"</p>
    </div>
    <div className="review-card">
      <div className="review-header">
        <img src="/Agbona Victory.jpeg" alt="Customer" />
        <div>
          <h3>Agbonna Victory</h3>
          <div className="stars">
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>s
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star-half'></i>
          </div>
        </div>
      </div>
      <p>"IYKE AUTOMOBILE is so honest and trustworthy.He gives you the best cars and advices on how to maintain your car"</p>
    </div>
    <div className="review-card">
      <div className="review-header">
        <img src="/Omokhai Emmanuel.jpeg" alt="Customer" />
        <div>
          <h3>Omokhia Emmanuel</h3>
          <div className="stars">
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
          </div>
        </div>
      </div>
      <p>"What i ordered was what i got.He was honest,i hope we deal again as i'll proudly reer other persons to him.
        Thank you Iyke"</p>
    </div>
    <div className="review-card">
      <div className="review-header">
        <img src="/Michael.jpeg" alt="Customer" />
        <div>
          <h3>Mr Michael</h3>
          <div className="stars">
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star-half'></i>
          </div>
        </div>
      </div>
      <p>"IYKE AUTOMOBILE which will soon be top 5 automobiles in town offers vehicle of your choice in good condition and maintainance tips"</p>
    </div>

    <div className="review-card">
      <div className="review-header">
        <img src="/Collins Eneluwe.jpeg" alt="Customer" />
        <div>
          <h3>Collins Eneluwe</h3>
          <div className="stars">
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
          </div>
        </div>
      </div>
      <p>"I purchased a car from IYKE AUTOMOBILE and had a great experience.The car was in an execellent condition and 
        the transaction was smooth and hassle-free.<br></br> 
        I highly recommend IYKE"</p>
    </div>
  </div>
</section>
    
      <section id="contact" ref={contactRef} className={contactInView ? "animate" : ""}>
        <div className="contact-head">
          
        </div>
         <div className="animated-bg"></div>
        <form action="https://formspree.io/f/mrbyjodz" method="POST">
          <h1>Contact <b className={contactInView ? "animate" : ""}>IYKE</b></h1>
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <select name="car_condition" required>
      <option value="">Select Car Condition</option>
      <option value="new">New</option>
      <option value="fairly-used">Fairly Used</option>
    </select>
     <select>
      <option value="">Brand</option>
      <option value="toyota">Toyota</option>
      <option value="honda">Honda</option>
      <option value="highlander">HighLander</option>
      <option value="benz">Benz</option>
      <option value="lexus">Lexus</option>
      <option value="commercial-bus">Commercial Bus</option>
    </select>
    <select>
      <option value="">Price Range</option>
      <option value="0-5000000">₦0 - ₦5,000,000</option>
      <option value="5000000-10000000">₦5,000,000 - ₦10,000,000</option>
      <option value="10000000+">₦10,000,000+</option>
    </select>
    <select>
      <option value="">Year</option>
      <option value="2020+">2024</option>
      <option value="2015-2019">2023</option>
      <option value="2010-2014">2022</option>
      <option value="2010-2014">2021</option>
      <option value="2010-2014">2020</option>
      <option value="2010-2014">2019</option>
      <option value="2010-2014">2018</option>
      <option value="2010-2014">2017</option>
      <option value="2010-2014">2016</option>
      <option value="2010-2014">2015</option>
      <option value="2010-2014">2014</option>
      <option value="2010-2014">2013</option>
      <option value="2010-2014">2012</option>
      <option value="2010-2014">2011</option>
      <option value="2010-2014">2010</option>
    </select>
          <input type="file" name="car_image" placeholder="Add Sample Image" />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Submit</button>
           <p>Email: salakoakintunde8@email.com  Phone:<a href="tel:+2347065892372" className="btn">+234 706 589 2372</a></p>
            <div className="social-icons">
            <a href="https://web.facebook.com/salako.akintunde.2025/" target="_blank" rel="noopener" aria-label="Facebook"><i className='bx bxl-facebook'></i></a>
            <a href="https://www.instagram.com/salako1996/" target="_blank" rel="noopener" aria-label="Instagram"><i className='bx bxl-instagram'></i></a>
            <a href="https://tiktok.com/@onyinye_chukwu_1208" target="_blank" rel="noopener" aria-label="TikTok"><i className='bx bxl-tiktok'></i></a>
            <a href="https://wa.me/+2347065892372" target="_blank" rel="noopener" aria-label="WhatsApp"><i className='bx bxl-whatsapp'></i></a>
        </div>
        </form>
       
      </section>

      <footer>
        <h2>IYKE AUTOMOBILE</h2>
        <p>&copy; 2025 Iyke Automobile</p>
        <h6>Designed and Developed by Deborah❤️</h6>
      </footer>
    </div>
  );
}

export default App;