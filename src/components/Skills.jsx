import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Slide } from "react-awesome-reveal";
import { faJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import csharp from "./images/csharp.png";
import asp from "./images/asp.png";

function Skills() {
  return (
    <div className="skills-container">
      <ul className="list-skill">
        <Slide direction="right" cascade triggerOnce>
          <li>
            <p>javascript</p>
            <FontAwesomeIcon
              icon={faJs}
              style={{ color: "#FFD43B" }}
              className="icon-skill"
            />
          </li>
          <li>
            <p translate="no">React</p>
            <FontAwesomeIcon
              icon={faReact}
              style={{ color: "#63E6BE" }}
              className="icon-skill"
            />
          </li>
          <li>
            <p>SQL</p>
            <FontAwesomeIcon
              icon={faDatabase}
              style={{ color: "#74C0FC" }}
              className="icon-skill"
            />
          </li>
          <li>
            <p translate="no">C#</p>
            <img
              className="icon-skill"
              src={csharp}
              alt="icon-csharp"
              id="csharp"
            />
          </li>
          <li>
            <p>ASP.NET Core</p>
            <img className="icon-skill" src={asp} alt="icon-asp" id="asp" />
          </li>
        </Slide>
      </ul>
    </div>
  );
}
export default Skills;
