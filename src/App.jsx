
import './App.css';
import React, { useState } from "react";
import firstImage from './homeimage.jpg'
import iceCraem from './icecream.jpg'
import firstBurger from './burger.jpg'
import sandwich from './sandwich.jpeg'
import juice from './juice.jpeg'
import Salad from './salas1.jpg'
import salad2 from './salad2.jpg'
import salad3 from './salad3.jpg'
import chefImage from './chef.jpg'
import Catreing from './catering.jpg'
import clock from './clock.jpg'
import gift from './gift.jpg'
import basket from'./basket.jpg'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';



function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };

  return (
    <>
    <nav className="navbar">
    <div className="navbar-container">
<div className="logo"><span>F</span>oodi</div>
{/* Hamburger Icon */}
<div className="hamburger" onClick={toggleNavbar}>
☰
</div>
</div>

{/* Navbar links (only visible when isOpen is true) */}
<ul className={`nav-links ${isOpen ? "open" : ""}`}>
    <li>Home</li>
    <li>Menu</li>
    <li>Offers</li>
    <li>Services</li>

    <div className="icons">
    <span className="icon">🔍</span> {/* Search Icon */}
    <span className="icon">🔒</span> {/* Lock Icon */}
</div>
<button className="contact-button">
    Contact Us
</button>
</ul>

</nav>
 <br />
 <div className="home-container">
        <div className="text-container">
          <h1>Dive into Delights <br /> of Delectable <span>Food</span></h1>
          <p>Where each plate weaves a story of Culinary <br />Mastery and Passionate CraftmanShip</p>
          <div className="button-container">
            <button className="btn">Order Now</button>
            <button className="btn-white">Watch vedio</button>
          </div>
        </div>
        <div className="image-container">
          <img src={firstImage} alt="Placeholder" className="responsive-image" />
        </div>
      </div> <br />

      <div className="about-container">
      <div className="heading">
        <h5>Constumer Favourite</h5>
        <h1>Popular Categories</h1>
      </div>
      
      <div className="cards-container">
        <div className="card">
          <img src={firstBurger} alt="Card 1" className="card-image" />
          <h5 className="card-title">Main Dish</h5>
          <p className="card-description">(86 dishes)</p>
        </div>

        <div className="card">
          <img src={sandwich} alt="Card 2" className="card-image" />
          <h5 className="card-title">Breakfast</h5>
          <p className="card-description">(12 Breakfast)</p>
        </div>

        <div className="card">
          <img src={iceCraem} alt="Card 3" className="card-image" />
          <h5 className="card-title">Dessert</h5>
          <p className="card-description">(48 dessert) </p>
        </div>

        <div className="card">
          <img src={juice} alt="Card 4" className="card-image" />
          <h5 className="card-title">Browse All</h5>
          <p className="card-description">(255 Items) </p>
        </div>
      </div>
    </div> <br /> <br />    <div className="special-container">
        {/* Paragraph with red color */}
        <p className="special-paragraph">Special Section</p>
  
        {/* Heading with buttons */}
        <div className="heading-container">
          <h1>Our Special Offers</h1>
          <div className="button-container">
            <button className="prev-btn">&#60;</button>
            <button className="next-btn">&#62;</button>
          </div>
        </div>
  
        {/* Cards Section */}
        <div className="cards-container">
          {/* Card 1 */}
          <div className="cards">
            <img src={Salad} alt="Card 1" className="card-image" />
            <h5 className="card-title">Fattoush salad</h5>
            <p className="card-description">Description of the item</p>
            <p className="card-extra-info"><b>$</b>24.00</p>  
            <p className="star">⭐4.9</p>
            <div className="card-heart">
              <span>&#10084;</span>
            </div>
           
          </div>
  
          {/* Card 2 */}
          <div className="cards">
            <img src={salad2} alt="Card 2" className="card-image" />
            <h5 className="card-title">Vegetable salad</h5>
            <p className="card-description">Description of the item</p>
            <p className="card-extra-info"><b>$</b>26.00</p>
            <p className="star">⭐4.6</p>
            <div className="card-heart">
              <span>&#10084;</span>
            </div>
           
          </div>
  
          {/* Card 3 */}
          <div className="cards">
            <img src={salad3} alt="Card 3" className="card-image" />
            <h5 className="card-title">Egg Vegi salad</h5>
            <p className="card-description">Description of the item</p>
            <p className="card-extra-info"><b>$</b>23.00</p>
            <p className="star">⭐4.4</p>
            <div className="card-heart">
              <span>&#10084;</span>
            </div>
           
          </div>
        </div>
      </div>
      <div className="home-containers">
        <div className="image-containers">
        <img src={chefImage} alt="Placeholder" className="responsive-images" />
      </div>
      <div className="text-containers">
        
      <p className="feedback-tag">TESTIMONIALS</p>
          <h3 className="feedback-heading">What Our Constumers <br />Say About Us</h3>
          <p className="feedback-description">
            " i had the pleasure of dining at foodi  last night, and <br />i'm still raving about the experinence.The attention to <br />detail in presentation and service was impeccable "
          </p>
          <p className="customer-feedback">Customer Feedback</p>
          <div className="rating">
            <span className="star">⭐</span>
            <span className="star">⭐</span>
            <span className="star">⭐</span>
            <span className="star">⭐</span>
            <span className="star">⭐</span>
          </div> </div>
          </div> <br /><div className="service-container">
        <div className="text-containe">
          <p>Our story Services</p>
          <h1>Our Culinary Journey <br />And Services</h1>
          <p>
          Rooted in passion,we craute unforggetable dining <br />experinces and offers exceptional service <br />,blending artery eith warm hospitialty
          </p>
        </div>
        <div className="cards-containe">
          <div className="car">
            <img src={Catreing}alt="Card 1" className="card-imag" />
            <h5>Catering</h5>
            <p className="card-tex">Delight your guest <br />with our falvour and <br /> prensentation</p>
          </div>
          <div className="car">
            <img src={clock} alt="Card 2" className="card-imag" />
            <h5>Fast Deleivery</h5>
            <p className="card-tex">We delievr your order <br />promptly tn your door</p>
          </div>
          <div className="car">
            <img src={basket} alt="Card 3" className="card-imag" />
            <h5>online ordering</h5>
            <p className="card-tex">Explore menu $ order <br /> with ease using over <br />online ordering</p>
          </div>
          <div className="car">
            <img src={gift}alt="Card 4" className="card-imag" />
            <h5>Gift cards</h5>
            <p className="card-tex">give the gift  of <br />expextional dining with <br />foodi gift cards</p>
          </div>
        </div>
      </div> <br />   <div className="footer">
      <div className="footer-logo">
        <div className="foodie-logo">Foodi</div>
        <p className="footer-text">Thankyou!</p>
      </div>
      <div className="footer-links">
        <h5>useful link</h5>
      
        <h5>main menu</h5>
        <h5>Contact us</h5>
        
      </div>
      <div className="footer-socials">

        <FaFacebook className="social-icon" />
        <FaInstagram className="social-icon" />
        <FaTwitter className="social-icon" />
        <FaYoutube className="social-icon" /> 
        <em>copyright || All right reversed</em>
        
      </div>
    </div>

 </>
  );
}

export default App;
