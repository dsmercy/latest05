import React from "react";
import logo from '../../assets/images/Logo.png'
import { NavLink } from "react-router-dom";

const Footer =()=>{
    return(
        <>
<footer>
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-12">
        <div className="foot-f">
          <img src={logo} alt="logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </p>
          <div className="footer-social-icon">
            <span>
            <i className="fa fa-facebook" />
            </span>
            <span>
            <i className="fa fa-youtube-play" />
            </span>
            <span>
            <i className="fa fa-instagram" />
            </span>
            <span>
            <i className="fa fa-twitter" />
            </span>
          </div>
          <div className="app-icon">
            <img src="images/apple-download.png" alt="" />
            <img src="images/google-download.png" alt="" />
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-12">
        <div className="company">
          <h5>Company</h5>
          <ul>
            <li>
              <NavLink to="/about-us">About Us</NavLink>
            </li>
            <li>
              <NavLink to="#">Blogs</NavLink>
            </li>
            <li>
              <NavLink to="/frequently-asked-questions">FAQ&apos;s</NavLink>
            </li>
            <li>
              <NavLink to="#">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-2 col-12">
        <div className="services">
          <h5>Services</h5>
          <ul>
            <li>
              <NavLink to="#">Browse Job</NavLink>
            </li>
            <li>
              <NavLink to="#">Companies</NavLink>
            </li>
            <li>
              <NavLink to="#">Candidates</NavLink>
            </li>
            <li>
              <NavLink to="#">Pricing</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-2 col-12">
        <div className="support">
          <h5>Support</h5>
          <ul>
            <li>
              <NavLink to="/term-of-use">Terms of use</NavLink>
            </li>
            <li>
              <NavLink to="/terms-and-conditions">Terms &amp; Conditions</NavLink>
            </li>
            <li>
              <NavLink to="/privacy-policy">Privacy &amp; Policy</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="copy">
        <h5>Copyright @2023 Poppin jobs.</h5>
      </div>
    </div>
  </div>
</footer>

        </>
    )
}
export default Footer;