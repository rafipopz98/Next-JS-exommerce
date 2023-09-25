"use client";
import Link from "next/link";
import "./Footers.css";

// const Footer = () => {
//   return (
//     <div className="footer">
//       <div className="footer_up">
//         <div className="footer_up_left"></div>
//         <div className="footer_center">
//           <h2>Dummy app</h2>
//         </div>
//         <div className="footer_up_right"></div>
//       </div>
//       <div className="footer_down">
//         <div className="footer_down_left">
//           <span>Privacy policy</span>
//           <span>Terms and condition</span>
//           <span>About</span>
//         </div>
//         <div className="footer_down_center">
//           <TwitterIcon />
//           <GitHubIcon />
//           <LinkedInIcon />
//         </div>
//         <div className="footer_down_right">
//           <span>shipping info</span>
//           <span>returns / exchange</span>
//           <span>contacts</span>
//         </div>
//       </div>
//       <div className="line_center"></div>
//       <div className="text_center">&copy; 2023</div>
//     </div>
//   );
// };

// export default Footer;

import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <h1 className="footerTitle">dummy app</h1>
        <ul className="footerList">
          <li>
            <Link href={"/"} className="footerLink">
            Privacy policy
            </Link>
          </li>
          <li>
            <Link href={"/"} className="footerLink">
            Terms and condition
            </Link>
          </li>
          <li>
            <Link href={"/"} className="footerLink">
              About
            </Link>
          </li>
        </ul>
        <div className="footerSocials">
          <a href="#" target="_blank" className="footerSocialLink">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="#" target="_blank" className="footerSocialLink">
            <i className="bx bxl-github"></i>
          </a>
          <a href="#" target="_blank" className="footerSocialLink">
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
