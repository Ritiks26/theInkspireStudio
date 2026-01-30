import { NavLink } from "react-router-dom";
import { navMenus } from "../constant";
import "./Footer.css";

export function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-section">
          <video
            playsInline
            loop
            autoPlay
            muted
            className="footer-video"
            src="https://stokt.b-cdn.net/Golf%20Ball%20Render%20V1.webm"
          ></video>
          <div className="footer-grid">
            <div className="footer-grid-child">
              <div className="contact">
                <h1>The Inkspire Studio</h1>
                <p>New Delhi, Delhi | India</p>
                <p>hello@inkspirestudio.com</p>
              </div>
            </div>
            <div className="footer-grid-child">
              <div className="footer-links">
                <div className="quick-nav">
                  <ul>
                    <p>Index</p>
                    {navMenus.map((link) => (
                      <li key={link.id}>
                        <NavLink
                          to={link.id}
                          onClick={(e) => handleNav(e, link.id)}
                          className={({ isActive }) =>
                            isActive ? "active" : ""
                          }
                        >
                          {link.title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="legals">
                  <ul>
                    <p>Terms & Policies</p>
                    <li>
                      <a href="#">License Agreement</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Cookie Settings</a>
                    </li>
                  </ul>
                </div>
                <div className="stores">
                  <ul>
                    <p>Digital Stores</p>
                    <li>
                      <a href="#">Mockups</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Framers Templates</a>
                    </li>
                    <li>
                      <a href="#">Freebies</a>
                    </li>
                  </ul>
                </div>
                <div className="socials">
                  <ul>
                    <p>Socials</p>
                    <li>
                      <a href="#">Instagram</a>
                    </li>
                    <li>
                      <a href="#">Linked In</a>
                    </li>
                    <li>
                      <a href="#">Youtube</a>
                    </li>
                    <li>
                      <a href="#">Tik Tok</a>
                    </li>
                    <li>
                      <a href="#">Behance</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="copyrights">
            <p>© 2026 The Inkspire Studio Co. all rights reserved</p>
          </div>
        </div>
      </div>
    </>
  );
}
