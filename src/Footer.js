import React from "react";
import {
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaEnvelope,
  FaPhoneAlt,
  FaAngleRight,
} from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { AiFillHeart } from "react-icons/ai";
import logoPic from './images/logo.png';
import pic1 from './images/image_1.jpg';

export const Footer = () => (
  <div className="ftco-footer ftco-bg-dark ftco-section">
    <div className="container">
      <div className="row mb-5">
        <div className="col-md">
        <div className="ftco-footer-widget mb-4">
          <h2 className="logo">
            <a href="#"> 
             <img className="logo-pic" src={logoPic} alt="Logo" />
            </a>
          </h2>
          <p>Pathway to Light in its commitment to teaching godly living for young people is committed to teaching scripture by correctly handling the word of truth.</p>
          <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
            <li className="ftco-animate"><a href="#"> <FaFacebook size="50px" color="white" /></a></li>
            <li className="ftco-animate"><a href="#">  <FaInstagram size="50px" color="white" /></a></li>
            <li className="ftco-animate"><a href="#"> <FaYoutube size="50px" color="white" /></a></li>
          </ul>
        </div>
        </div>

        <div className="col-md">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Latest News</h2>
            <div className="block-21 mb-4 d-flex">
              <a className="img mr-4 rounded" 
              style={{ backgroundImage: `url(${require("./images/image_1.jpg")})` }}></a>
                <div className="text">
                  <h3 className="heading"><a href="#">Do not Limit Yourself</a></h3>
                  <div className="meta lat-date">
                    <div>
                      <a href="#"> Sep. 25, 2020</a>
                    </div>
                    <div>
                      <a href="#"> Samuel</a>
                    </div>
                    <div>
                      <a href="#">19</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="block-21 mb-4 d-flex">
                <a className="img mr-4 rounded" style={{ backgroundImage: `url(${require("./images/image_2.jpg")})` }}>
                </a> 
                <div className="text">
                  <h3 className="heading"><a href="#">Do not Limit Yourself - 2</a></h3>
                    <div className="meta lat-date">
                      <div>
                        <a href="#">Sep. 25, 2020</a>
                      </div>
                      <div>
                        <a href="#">Samuel</a>
                      </div>
                      <div>
                        <a href="#"> 19</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-5">
                <h2 className="ftco-heading-2">Information</h2>
                <ul className="list-unstyled">
                    <li><a href="#" className="py-1 d-block"><span
            className="ion-ios-arrow-forward mr-3"> <FaAngleRight /></span>Home</a></li>
                    <li><a href="#" className="py-1 d-block"><span
            className="ion-ios-arrow-forward mr-3"> <FaAngleRight /></span>About</a></li>
                    <li><a href="#" className="py-1 d-block"><span
            className="ion-ios-arrow-forward mr-3"> <FaAngleRight /></span>Articles</a></li>
                    <li><a href="#" className="py-1 d-block"><span
            className="ion-ios-arrow-forward mr-3"> <FaAngleRight /></span>Contact</a></li>
                </ul>
            </div>
        </div>
        <div className="col-md">
            <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Have a Questions?</h2>
                <div className="block-23 mb-3">
                    <ul>
                        <li> <span className="icon"> <GoLocation/> </span><span className="text">Galana Plaza, Galana
            Road off Argwings Kodhek, Nairobi</span></li>
                        <li><a href="#"><span className="icon"> <FaPhoneAlt/> </span><span className="text">+254 7123456
              210</span></a></li>
                        <li><a href="#"><span className="icon"> <FaEnvelope /></span><span
              className="text">info@yourdomain.com</span></a></li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    

      <div className="row">
      <div className="col-md-12 text-center">

          <p className="footer-copyright">
              Copyright &copy; <strong>UGI & BUCCI</strong>
               . All rights reserved
              <br />
              <strong>Galana Plaza, Galana Road off Argwings Kodhek, Nairobi </strong>
              </p>
      </div>
  </div>
  </div>
  </div>
);

export default Footer;
