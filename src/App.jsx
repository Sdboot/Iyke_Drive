import React from "react";
import { useInView } from "./useInView";
import "./App.css";



function App() {
  const [headerRef, headerInView] = useInView({ threshold: 0.5 });
  const [heroRef, heroInView] = useInView({ threshold: 0.3 });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.3 });
const [reviewsRef, reviewsInView] = useInView({ threshold: 0.3 });
  const [contactRef, contactInView] = useInView({ threshold: 0.3 });
  



   


  return (
    <div>
      <header ref={headerRef} className={headerInView ? "animate" : ""} >
        <a href="header"><img src="/src/iyke logoo.jpg" alt="Featured Car" className="hero-img" /></a> 
        <h1>IYKE <b>AUTOMOBILE</b></h1>
        <nav>
          <a href="#about">About</a>
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
        <img src="/src/akintunde.jpeg" alt="Iyke" className="about-img" />
         <div className="experience-badge">
        <span>7 years +</span>
        <p>Years Experience</p>
      </div>
    </div> 

        <div className="about-content">
      
        <p>
          <strong>Welcome!</strong><br /> <br />
           I’m <b> IYKE </b>- A trusted and passionate car euthusiast with over 7 years of experience in the auto industry.<br></br><br></br>
        
        <b>IYKE AUTOMOBILE</b> was founded by <b>IYKE</b> to help clients find reliable,top-quality rides that
         fit their lifestyle and budgets.
         
         Want a sleek ride,a family car or a durable vehicle for business? <br></br> <br></br>

        <b>IYKE AUTOMOBILE</b> connects you with the right car with a smooth,transparent and stress-free process while delivering honesty,value and 
        excellemnt customer service every step of the way.
          </p>

          <div className="about-features">
        <div className="feature">
          <h4>Quality Assurance</h4>
          <p>Every vehicle undergoes thorough inspection before sale</p>
        </div>
        <div className="feature">
          <h4>Personalized Service</h4>
          <p>Find the perfect car that matches your lifestyle and budget</p>
        </div>
        <div className="feature">
          <h4>Transparent Process</h4>
          <p>Honest, value-driven, and excellent customer service</p>
        </div>
      </div>
    </div>
        </div>
      </section>

     
<section id="reviews" ref={reviewsRef} className={reviewsInView ? "animate" : ""}>
  <h2>What Our Customers Say</h2>
  <div className="reviews-container">
    <div className="review-card">
      <div className="review-header">
        <img src="/customer1.jpg" alt="Customer" />
        <div>
          <h3>John Smith</h3>
          <div className="stars">
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
          </div>
        </div>
      </div>
      <p>"Exceptional service! IYKE helped me find my dream Toyota Camry at a great price. Very transparent process."</p>
    </div>

    <div className="review-card">
      <div className="review-header">
        <img src="/customer2.jpg" alt="Customer" />
        <div>
          <h3>Sarah Johnson</h3>
          <div className="stars">
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star-half'></i>
          </div>
        </div>
      </div>
      <p>"Professional and knowledgeable. Got a fantastic deal on a Mercedes. Highly recommend IYKE AUTOMOBILE!"</p>
    </div>
    <div className="review-card">
      <div className="review-header">
        <img src="/customer2.jpg" alt="Customer" />
        <div>
          <h3>Sarah Johnson</h3>
          <div className="stars">
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star-half'></i>
          </div>
        </div>
      </div>
      <p>"Professional and knowledgeable. Got a fantastic deal on a Mercedes. Highly recommend IYKE AUTOMOBILE!"</p>
    </div>
    <div className="review-card">
      <div className="review-header">
        <img src="/customer2.jpg" alt="Customer" />
        <div>
          <h3>Sarah Johnson</h3>
          <div className="stars">
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star-half'></i>
          </div>
        </div>
      </div>
      <p>"Professional and knowledgeable. Got a fantastic deal on a Mercedes. Highly recommend IYKE AUTOMOBILE!"</p>
    </div>
    <div className="review-card">
      <div className="review-header">
        <img src="/customer2.jpg" alt="Customer" />
        <div>
          <h3>Sarah Johnson</h3>
          <div className="stars">
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star-half'></i>
          </div>
        </div>
      </div>
      <p>"Professional and knowledgeable. Got a fantastic deal on a Mercedes. Highly recommend IYKE AUTOMOBILE!"</p>
    </div>

    <div className="review-card">
      <div className="review-header">
        <img src="/customer3.jpg" alt="Customer" />
        <div>
          <h3>Michael Obi</h3>
          <div className="stars">
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
          </div>
        </div>
      </div>
      <p>"Best car dealer in town! Found me a perfect Lexus within my budget. The after-sales service is outstanding."</p>
    </div>
  </div>
</section>
    
      <section id="contact" ref={contactRef} className={contactInView ? "animate" : ""}>
        <div className="contact-head">
          
        </div>
         <div className="animated-bg"></div>
        <form action="https://formspree.io/f/mrbyjodz" method="POST">
          <h1>Need a Perfect Ride? Contact <b className={contactInView ? "animate" : ""}>IYKE</b></h1>
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
           <p>Email: salakoakintunde8@email.com |  Phone:<a href="tel:+2347065892372" class="btn">+234 706 589 2372</a></p>
            <div class="social-icons">
            <a href="https://web.facebook.com/salako.akintunde.2025/" target="_blank" rel="noopener" aria-label="Facebook"><i class='bx bxl-facebook'></i></a>
            <a href="https://www.instagram.com/salako1996/" target="_blank" rel="noopener" aria-label="Instagram"><i class='bx bxl-instagram'></i></a>
            <a href="https://tiktok.com/@onyinye_chukwu_1208" target="_blank" rel="noopener" aria-label="TikTok"><i class='bx bxl-tiktok'></i></a>
            <a href="https://wa.me/+2347065892372" target="_blank" rel="noopener" aria-label="WhatsApp"><i class='bx bxl-whatsapp'></i></a>
        </div>
        </form>
       
      </section>

      <footer>
        <h2>IYKE AUTOMOBILE</h2>
        <p>&copy; 2025 Iyke Automobile</p>
      </footer>
    </div>
  );
}

export default App;