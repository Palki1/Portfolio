import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Palki</h2>
        <p>sangwanpalki003@gmail.com</p>
      </div>

      <aside>
        <h2>Connect with me</h2>

        <article>
          <a href="https://www.linkedin.com/in/palki-sangwan-b85090295/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/Palki1" target={"blank"}>
            <AiFillGithub />
          </a>
          <a href="mailto:sangwanpalki003@gmail.com">
            <AiOutlineMail />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
