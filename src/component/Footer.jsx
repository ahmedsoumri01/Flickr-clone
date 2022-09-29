import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
function Footer() {
  return (
    <div className="footer">
      <ul>
        <li>About </li>
        <li>Jobs</li>
        <li>Blog</li>
        <li>Developers</li>
        <li>Guidelines</li>
        <li>Help</li>
        <li>Help forum</li>
        <li>Privacy</li>
        <li>Terms</li>
        <li>Cookies</li>
        <li>
          <select name="" id="option">
            <option value="">English</option>
            <option value="">arabic</option>
            <option value="">french</option>
          </select>
        </li>
      </ul>
      <ul id="lastlist">
        <li>
          <FacebookIcon className="iconet" />
        </li>
        <li>
          <InstagramIcon className="iconet" />
        </li>
        <li>
          <TwitterIcon className="iconet" />
        </li>
      </ul>
    </div>
  );
}
export default Footer;
