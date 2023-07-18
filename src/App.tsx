import * as CryptoJS from "crypto-js";
import { ReactElement, useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

const sha256Hashing = (string: string) => {
  const hash = CryptoJS.SHA256(string);
  return hash.toString();
};
const md5Hashing = (string: string) => {
  const hashmd = CryptoJS.MD5(string);
  return hashmd.toString();
};

const Note = () => {
  return (
    <>
      <div className="foot">
        <div>
          <h4>Note:</h4>
          <ul>
            <li>
              You can click on <strong>'Verify'</strong> Button to check the
              hash Value is correct for the given password.
            </li>
            <li>
              To know more About Hash Values and Types click on{" "}
              <strong>About Hash</strong> Button.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
const genHashValue = (string: string) => {
  var strname = string;
  const sha256string = sha256Hashing(strname);
  const md5string = md5Hashing(strname);
  const handleClickCp1 = () => {
    navigator.clipboard.writeText(sha256string).then(() => {
        alert("successfully copied");
      })
      .catch(() => {
        alert("something went wrong");
      });
  };
  const handleClickCp2 = () => {
    navigator.clipboard.writeText(md5string);
    alert("Copied to Clipboard!");
  };
  if (string == "") {
    return (
      <h1 className="d-flex flex-column m-5 p-5" style={{ color: "white" }}>
        Empty Input Given
      </h1>
    );
  }
  return (
    <div className="d-flex flex-column m-5 answer">
      <h1>SHA256 hashing:</h1>
      <div className="shatwo">
        <pre>{sha256string}</pre>
        <button
          onClick={handleClickCp1}
          style={{ border: "none", background: "none", padding: 0 }}
        >
          <img src="copy.png" />
        </button>
      </div>
      <h1>MD5 hashing:</h1>
      <div className="shatwo">
        <pre>{md5string}</pre>
        <button
          onClick={handleClickCp2}
          style={{ border: "none", background: "none", padding: 0 }}
        >
          <img src="copy.png" />
        </button>
      </div>
    </div>
  );
};

function App() {
  const [ip, getIp] = useState("");
  const [st, setSt] = useState<ReactElement | undefined>();
  const n = Note();
  const navi = useNavigate();
  const handleNabout = () => {
    navi("/about-hash");
  };
  const handleNverify = () => {
    navi("/verify");
  };
  const handleChange = () => {
    const gh = genHashValue(ip);
    setSt(gh);
  };
  return (
    <div className="fully">
      <h1 className="heading">Hash Generator</h1>
      <div className="d-flex flex-column m-5">
        <input
          type="text"
          placeholder="Enter any text"
          onChange={(e) => getIp(e.target.value)}
          value={ip}
        />
        <button
          className="btn btn-primary hc"
          value="get-hash-value"
          onClick={handleChange}
        >
          Get-hash-value
        </button>
      </div>
      {st}
      <div className="gp-but">
        <button
          onClick={handleNverify}
          className="btn btn-outline-info gp-butone"
        >
          Verify
        </button>
        <button onClick={handleNabout} className="btn btn-outline-light">
          About Hash
        </button>
      </div>
      {n}
    </div>
  );
}

export default App;
