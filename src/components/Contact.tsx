import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="mailto:anshkumar19zx@gmail.com"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                Email — anshkumar19zx@gmail.com
              </a>
            </p>
            <p>
              <a
                href="https://discord.com/users/ansh9boss"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                Discord — ansh9boss
              </a>
            </p>
            <h4>Focus Areas</h4>
            <p>
              Cloud Virtualization systems, low-level game security engineering, JVM Netty packet hooks, and custom LLM developer tools.
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/ANSH9BOSS"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://discord.com/users/ansh9boss"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Discord <MdArrowOutward />
            </a>
            <a
              href="https://ansh9boss2.vercel.app"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Live Site <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>ANSH9BOSS</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
