import { useNavigate } from "react-router-dom";
import "./verifi.css";

function Note() {
  const navi = useNavigate();
  const handleNabout = () => {
    navi("/about-hash");
  };
  const handleNGen = () => {
    navi("/generate");
  };
  return (
    <>
      <div>
        <div>
          <h4>Note:</h4>
          <ul>
            <li>
              To generate hash values for the given word use {}
              <strong>Generate</strong> button.
            </li>
            <li>
              To know more About Hash Values and Types click on{" "}
              <strong>About Hash</strong> Button.
            </li>
          </ul>
        </div>
        <div className="btnGroup">
          <button onClick={handleNGen} className="btn btn-success mr-3">
            Generate
          </button>
          <button onClick={handleNabout} className="btn btn-outline-light">
            About Hash
          </button>
        </div>
      </div>
    </>
  );
}

export default Note;
