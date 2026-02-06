import { NavLink } from "react-router-dom";
import { navMenus } from "../constant";
import "./Footer.css";

export function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-content">
            <h1>the</h1>
            <h1>inkspire studio</h1>
            <h1>'2026</h1>
          </div>
          <div className="socials">
            <p>Socials</p>
            <ul>
              <li>
                <a href="#">Behance</a>
              </li>
              <li>
                <a href="#">Awwwards</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Linkedin</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="closing-header">
          <p>©2026 THE INKSPIRE STUDIO. All Rights Reserved</p>

          <p>WORLDWIDE</p>

          <p>the-inkspire-studio.com</p>
        </div>
      </div>
    </>
  );
}
