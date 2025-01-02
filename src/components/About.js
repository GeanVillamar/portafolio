import Gean from "./images/Gean.jpg";

function About() {
  return (
    <div className="about">
      <h1 className="title-section">About me</h1>
      <p>
        Hola soy Gean, y mi profesión es ingeniero de software. Tengo
        conocimientos en programación tanto en aplicaciones web y base de
        datos,tambien en base mi experiencia y estudios educativos poseo las
        bases importantes en el ambito de las tecnologias y sistemas de
        información.
      </p>
      <div className="imagen-perfil">
        <img id="image-gean" src={Gean} alt="fotoperfil"></img>
      </div>
    </div>
  );
}
export default About;
