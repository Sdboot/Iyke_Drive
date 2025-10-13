import React from "react";
import { useInView } from "./useInView";
import "./App.css";



function App() {
  const [headerRef, headerInView] = useInView({ threshold: 0.5 });
  const [heroRef, heroInView] = useInView({ threshold: 0.3 });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.3 });
  const [galleryRef, galleryInView] = useInView({ threshold: 0.3 });
  const [contactRef, contactInView] = useInView({ threshold: 0.3 });

  return (
    <div>
      <header ref={headerRef} className={headerInView ? "animate" : ""} >
        <a href="header"><img src="/src/assets/iyke logo.jpg" alt="Featured Car" className="hero-img" /></a> 
        <h1>IYKE <b>AUTOMOBILE</b></h1>
        <nav>
          <a href="#about">About</a>
          <a href="#gallery">Cars</a>
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
        <img src="/src/IYKE.jpg" alt="Iyke" className="about-img" />
        
        <p>
          <strong>Welcome!</strong><br /> <br />
           I’m <b> IYKE </b>- A trusted and passionate car euthusiast with over 7 years of experience in the auto industry.<br></br><br></br>
        
        <b>IYKE AUTOMOBILE</b> was founded by <b>IYKE</b> to help clients find reliable,top-quality rides that
         fit their lifestyle and budgets.
         
         Want a sleek ride,a family car or a durable vehicle for business? <br></br> <br></br>

        <b>IYKE AUTOMOBILE</b> connects you with the right car with a smooth,transparent and stress-free process while delivering honesty,value and 
        excellemnt customer service every step of the way.
          </p>
        </div>
      </section>

      <section id="gallery">
        <h2>Car Gallery</h2>
        <div className="car-grid">
          <div className="car-card">
            <img src="/car1.jpg" alt="Car 1" />
            <h3>2018 Toyota Camry</h3>
            <p>$15,000</p>
          </div>
          <div className="car-card">
            <img src="/car2.jpg" alt="Car 2" />
            <h3>2020 Honda Accord</h3>
            <p>$18,500</p>
          </div>
          <div className="car-card">
            <img src="/car3.jpg" alt="Car 3" />
            <h3>2019 Ford Mustang</h3>
            <p>$22,000</p>
          </div>
        </div>
      </section>

      <section id="contact" ref={contactRef} className={contactInView ? "animate" : ""}>
        <div className="contact-head">
          
        </div>
        <form>
          <h2>Looking for your next ride?</h2>
          <h1>Contact <b className={contactInView ? "animate" : ""}>IYKE</b></h1>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <select required>
      <option value="">Select Car Condition</option>
      <option value="new">New</option>
      <option value="fairly-used">Fairly Used</option>
    </select>
     <input type="text" placeholder="Type of Car (e.g. Lexus, Toyota Camry, Honda Accord)" required />
          <input type="file" placeholder="Add Sample Image" />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
           <p>Email: salakoakintunde8@email.com |  Phone:<a href="tel:+2347065892372" class="btn">+234 706 589 2372</a></p>
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