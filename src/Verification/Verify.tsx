import { useState } from "react";
import "./verifi.css";
import Note from "./Note";
import Checker from "./Checker";

function Verify() {
  const [ap, setAp] = useState("");
  const [bp, setBp] = useState("");
  const [opt, setOpt] = useState("SHA256");
  const [fin, setFin] = useState(null);
  const handleOpt = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOpt(event.target.value);
  };
  const handleInp = () => {
    setFin(<Checker hash={ap} value={bp} format={opt} />);
  };
  return (
    <>
      <h1 className="hv"> Hash Value Verification</h1>
      <div className="coverall">
        <div className="bdr">
          <div className="d-flex flex-column ips">
            <p>Hash Value: </p>
            <input
              type="text"
              placeholder="Paste hash Value"
              onChange={(e) => setAp(e.target.value)}
              value={ap}
            />
            <p>Text to verify</p>
            <input
              type="text"
              placeholder="Enter value"
              onChange={(e) => setBp(e.target.value)}
              value={bp}
            />
            <p>Select Format: </p>
            <select onChange={handleOpt} value={opt}>
              <option>SHA256</option>
              <option>MD5</option>
            </select>
            <button onClick={handleInp} className="btn btn-primary">
              Check
            </button>
          </div>
        </div>
        <div className="makeNote">
          <Note />
          {fin}
        </div>
      </div>
      {console.log(ap)}
      {console.log(bp)}
      {console.log(opt)}
    </>
  );
}

export default Verify;
