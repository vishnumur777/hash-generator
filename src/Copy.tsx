import { useState } from "react";
import { Button, OverlayTrigger, Popover } from "react-bootstrap";
import "./App.css";

const App = () => {
  const [cp, setCp] = useState("Copy");
  const cpyAction = (code: string) => {
    navigator.clipboard.writeText(code);
  };
  const y = cpyAction("Print()");
  const handleClick = () => {
    y;
    setCp("Copied to Clipboard!");
  };
  return (
    <div className="mvcpy">
      <OverlayTrigger
        placement="right"
        trigger="click"
        overlay={
          <Popover id="popover" title="Popover Heading">
            <p>{cp}</p>
          </Popover>
        }
      >
        <Button onClick={handleClick}>Copy</Button>
      </OverlayTrigger>
    </div>
  );
};

export default App;
