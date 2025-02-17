import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div className="container-contact">
      <h1>Contact</h1>
      <footer>
        <ul>
          <li>
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ color: "#ffffff" }}
              className="icon-envelop"
            />
            <p translate="no">Email: villamargean270@gmail.com</p>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faLinkedinIn}
              style={{ color: "#ffffff" }}
              className="icon-envelop"
            />
            <a href="https://www.linkedin.com/in/gean-villamar-911707333/">
              <p> Linkendin: Gean Villamar</p>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
export default Contact;
