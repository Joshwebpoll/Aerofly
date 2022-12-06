import React from "react";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="row ">
        <div className="boxs">
          <img src="./images/logo.png" alt="" />
          <p>We are the number one premier travel agency in Nigeria.</p>
        </div>
        <ul className="boxs">
          <h4>Quick Links</h4>
          <li>
            {" "}
            <NavLink className="bar">
              Quick And Easy Study Visa Guide
            </NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink className="bar">Travel Agency In Sango Ota</NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink className="bar">Travel Agency In Iyana Ipaja</NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink className="bar">Services</NavLink>
          </li>{" "}
          <li>
            <NavLink className="bar">Contact</NavLink>
          </li>
          <li>
            {" "}
            <NavLink className="bar">Privacy Policy</NavLink>
          </li>
        </ul>
        <ul className="boxs">
          <h4>Latest post</h4>
          <li>
            <NavLink className="bar">
              7 Days Christmas Holiday In Badagry Lagos State
            </NavLink>
          </li>
          <li>
            <NavLink className="bar">Is Nigeria Safe? [Honest Answer]</NavLink>
          </li>
          <li>
            <NavLink className="bar">Top Night Clubs In Lagos State</NavLink>
          </li>
          <li>
            <NavLink className="bar">How To Travel Cheap In Nigeria</NavLink>
          </li>
          <li>
            <NavLink className="bar">
              How To Travel Out Of Nigeria And Japa [MUST READ]
            </NavLink>
          </li>
        </ul>
        <ul className="boxs">
          <h4>Contact Us</h4>
          <li>Ph:09086454738</li>
          <li>Email:hello@aeroflytravels.com</li>
          <li>Location : Ogun State & Lagos State</li>
          <li>Open : 9AM – 5PM (Mon – Fri)</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
