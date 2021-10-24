import React from "react";
import "./NavbarMenu.scss";
const NavbarMenu = () => {
  return (
    <div>
      <input type="checkbox" id="burger-toggle" />
      <label htmlFor="burger-toggle" className="burger-menu">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </label>
      <div className="menu">
        <div className="menu-inner">
          <ul className="menu-nav">
            {/* <li className="menu-nav-item">
              <a className="menu-nav-link" href="qq">
                <span>
                  <div>Home</div>
                </span>
              </a>
            </li> */}
            <li className="menu-nav-item aaaa">
              <a className="menu-nav-link" href="qq">
                <span>
                  <div>AUTHENTICATE</div>
                </span>
              </a>
            </li>
            <li className="menu-nav-item aaaa">
              <a className="menu-nav-link" href="qq">
                <span>
                  <div style={{ color: "red" }}>CREATE A POST</div>
                </span>
              </a>
            </li>
            <li className="menu-nav-item">
              <a className="menu-nav-link" href="qq">
                <span>
                  <div>BOOKMARKS</div>
                </span>
              </a>
            </li>
            <li className="menu-nav-item">
              <a className="menu-nav-link" href="qq">
                <span>
                  <div>ABOUT US</div>
                </span>
              </a>
            </li>
            <li className="menu-nav-item">
              <a className="menu-nav-link" href="qq">
                <span>
                  <div>SEARCH</div>
                </span>
              </a>
            </li>
            {/* <li className="menu-nav-item">
              <a className="menu-nav-link" href="qq">
                <span>
                  <div>Team</div>
                </span>
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarMenu;
