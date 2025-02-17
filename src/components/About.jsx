import { Fade } from "react-awesome-reveal";
import Gean from "./images/Gean.jpg";

function About() {
  return (
    <div className="about-container">
      <Fade cascade damping={0.2}>
        <h2 className="title-section">About me</h2>
        <p>
          Hi, I'm Gean, and I'm a software engineer. I have programming
          knowledge in both web applications and databases, and based on my
          experience and educational studies, I have the important foundations
          in the field of information technology and systems.
        </p>
      </Fade>
      <Fade>
        <picture className="image-container">
          <img id="image-gean" src={Gean} alt="fotoperfil"></img>
        </picture>
      </Fade>
    </div>
  );
}
export default About;
