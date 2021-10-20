import React from "react";
import "./NavbarMenu.scss";
const NavbarMenu = () => {
  return (
    <div>
      <input type="checkbox" id="burger-toggle" />
      <label for="burger-toggle" class="burger-menu">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </label>
      <div class="menu">
        <div class="menu-inner">
          <ul class="menu-nav">
            {/* <li class="menu-nav-item">
              <a class="menu-nav-link" href="#">
                <span>
                  <div>Home</div>
                </span>
              </a>
            </li> */}
            <li class="menu-nav-item aaaa">
              <a class="menu-nav-link" href="#">
                <span>
                  <div>AUTHENTICATE</div>
                </span>
              </a>
            </li>
            <li class="menu-nav-item aaaa">
              <a class="menu-nav-link" href="#">
                <span>
                  <div style={{ color: "red" }}>CREATE A POST</div>
                </span>
              </a>
            </li>
            <li class="menu-nav-item">
              <a class="menu-nav-link" href="#">
                <span>
                  <div>BOOKMARKS</div>
                </span>
              </a>
            </li>
            <li class="menu-nav-item">
              <a class="menu-nav-link" href="#">
                <span>
                  <div>ABOUT US</div>
                </span>
              </a>
            </li>
            <li class="menu-nav-item">
              <a class="menu-nav-link" href="#">
                <span>
                  <div>SEARCH</div>
                </span>
              </a>
            </li>
            {/* <li class="menu-nav-item">
              <a class="menu-nav-link" href="#">
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
