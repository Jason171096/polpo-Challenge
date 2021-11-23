import { useState } from "react";
import "./Button.css";
import Portal from "../Portal/Portal";
import Card from "../Card/Card";

export const Button = ({ title, fetchUrl }) => {
  const [openPortal, setOpenPortal] = useState(false);
  return (
    <>
      <div
        className="wrapper-button"
        onClick={() => {
          setOpenPortal(!openPortal);
        }}>
        <div className="wrapper-button-page">
          <h2>{title}</h2>
        </div>
      </div>
      {openPortal &&<Portal><Card setOpenPortal={setOpenPortal} /></Portal>}
    </>
  );
};
