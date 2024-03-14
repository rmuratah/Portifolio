import JavaScript from "../../../../assets/icons/habilidades/javascript.png";
import "./style.css";

const PopUp = ({ popup, setPopup }) => {
  return (
    <div
      className="popup-container"
      style={{
        display: `${popup !== null && popup !== undefined ? "grid" : "none"}`,
      }}
    >
      <button className="close-button" onClick={() => setPopup(null)}>
        Fechar
      </button>
      <div className="about-container">
        <h3>Sobre</h3>
        <p>
          O React.js é uma biblioteca JavaScript de código aberto, mantida pelo
          Facebook, que é usada para construir interfaces de usuário (UI) para
          aplicativos da web de uma forma mais eficiente e escalável.
        </p>
      </div>
      <div className="skill-container">
        <div className="skill-name-container">
          <div>
            <img src={JavaScript} alt="JavaScript" />
            <h1>{popup}</h1>
          </div>
        </div>
        <div className="skill-level-container">
          <h3>Nível</h3>
          <p>
            O React.js é uma biblioteca JavaScript de código aberto,O React.js é
            uma biblioteca JavaScript de código aberto,
          </p>
        </div>
        <div className="skill-level-container">
          <h3>Teste</h3>
          <p>
            O React.js é uma biblioteca JavaScript de código aberto,O React.js é
            uma biblioteca JavaScript de código aberto,
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
