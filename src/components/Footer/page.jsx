"use client";
import "./Footer.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_up">
        <div className="footer_up_left"></div>
        <div className="footer_center">
          <h2>Dummy app</h2>
        </div>
        <div className="footer_up_right"></div>
      </div>
      <div className="footer_down">
        <div className="footer_down_left">
          <span>Privacy policy</span>
          <span>Terms and condition</span>
          <span>About</span>
        </div>
        <div className="footer_down_center">
          <TwitterIcon />
          <GitHubIcon />
          <LinkedInIcon />
        </div>
        <div className="footer_down_right">
          <span>shipping info</span>
          <span>returns / exchange</span>
          <span>contacts</span>
        </div>
      </div>
      <div className="line_center"></div>
      <div className="text_center">&copy; 2023</div>
    </div>
  );
};

export default Footer;
