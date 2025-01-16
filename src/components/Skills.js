import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

function Skills() {
  return (
    <div className="skills-container">
      <ul className="list-skill">
        <li>
          <p>javascript</p>
          <FontAwesomeIcon
            icon={faJs}
            style={{ color: "#FFD43B" }}
            className="icon-skill"
          />
        </li>
        <li>
          <p>React</p>
          <FontAwesomeIcon
            icon={faReact}
            style={{ color: "#74C0FC" }}
            className="icon-skill"
          />
        </li>
        <li>
          <p>Mysql</p>
          <FontAwesomeIcon icon={faDatabase} className="icon-skill" />
        </li>
      </ul>
    </div>
  );
}
export default Skills;
