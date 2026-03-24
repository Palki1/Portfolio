import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = ({ setMenuOpen, menuOpen }) => {
  return (
    <nav>
      <NavContent setMenuOpen={setMenuOpen} />
      <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
        <AiOutlineMenu />
      </button>
    </nav>
  );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <NavContent setMenuOpen={setMenuOpen} />
    </div>
  );
};

const NavContent = ({ setMenuOpen }) => (
  <>
    <h2>Palki</h2>
    <div>
      <Link onClick={() => setMenuOpen(false)} to="/">
        Home
      </Link>
      <Link onClick={() => setMenuOpen(false)} to="/projects">
        Projects
      </Link>
      <Link onClick={() => setMenuOpen(false)} to="/training/internship">
        Training / Internship 
      </Link>
      <Link onClick={() => setMenuOpen(false)} to="/certificates">
        Certificates
      </Link>
    </div>
    <a onClick={() => setMenuOpen(false)} href="mailto:sangwanpalki003@gmail.com">
      <button>Email</button>
    </a>
  </>
);

export default Header;
