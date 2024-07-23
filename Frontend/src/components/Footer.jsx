import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import KromaApps from "../assets/KromaApps.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="fixed inset-x-0 bottom-0 flex flex-col md:flex-row md:justify-between p-4 bg-white shadow-lg" id="upper-footer">
          <div className="footer-container flex flex-wrap justify-between w-full">
            <div className="footer-section about-us">
              <h4>About Us</h4>
              <p>
                Our mission is to provide the best products at the best prices.
              </p>
              <a href="#">Learn more</a>
            </div>
            <div className="footer-section customer-service">
              <h4>Customer Service</h4>
              <ul>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link to="/faq">FAQs</Link>
                </li>
                <li>
                  <Link to="/returns">Returns & Refunds</Link>
                </li>
                <li>
                  <Link to="/shipping">Shipping Information</Link>
                </li>
                <li>
                  <Link to="/track-order">Order Tracking</Link>
                </li>
              </ul>
            </div>
            <div className="footer-section information">
              <h4>Information</h4>
              <ul>
                <li>
                  <Link to="/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms">Terms & Conditions</Link>
                </li>
              </ul>
            </div>
            <div className="footer-section account">
              <h4>Account</h4>
              <ul>
                <li>
                  <Link to="/signin">Sign In</Link>
                </li>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
                <li>
                  <Link to="/account">My Account</Link>
                </li>
                <li>
                  <Link to="/orders">Order History</Link>
                </li>
                <li>
                  <Link to="/wishlist">Wishlist</Link>
                </li>
              </ul>
            </div>
            <div className="footer-section social-media">
              <h4>Follow Us</h4>
              <ul>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-pinterest"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-section newsletter">
              <h4>Newsletter</h4>
              <form>
                <input type="email" placeholder="Your email address" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
            <div className="footer-section mobile-app">
              <h4>Download Our App</h4>
              <a href="#">
                <img src="https://via.placeholder.com/120x40" alt="App Store" />
              </a>
              <a href="#">
                <img
                  src="https://via.placeholder.com/120x40"
                  alt="Google Play"
                />
              </a>
            </div>
            <div className="footer-section legal">
              <p>&copy; 2024 Stitch and Styles. All rights reserved.</p>
            </div>
          </div>
        </div>
        <div className="footer-image fixed flex p-8 justify-center inset-x-0 bottom-0">
          <img src={KromaApps} alt="Kroma-Apps" className="h-9" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
