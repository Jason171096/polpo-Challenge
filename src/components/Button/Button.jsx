import { useState, useEffect } from "react";
import "./Button.css";
import Portal from "../Portal/Portal";
import Card from "../Card/Card";
import axios from "axios";

export const Button = ({ title, fetchUrl }) => {
  const [openPortal, setOpenPortal] = useState(false);
  const [joke, setJoke] = useState("");
  useEffect(() => {
    if (openPortal === true) {
      axios.get(fetchUrl).then((res) => {
        setJoke(res.data.value.joke);
      });
    }
  }, [fetchUrl, openPortal]);

  return (
    <>
      <div
        className="wrapper-button"
        onClick={() => {
          setOpenPortal(!openPortal);
        }}
      >
        <div className="wrapper-button-page">
          <h2>{title}</h2>
        </div>
      </div>
      {openPortal && (
        <Portal>
          <Card
            setOpenPortal={setOpenPortal}
            title={title}
            joke={joke}
            fetchUrl={fetchUrl}
          />
        </Portal>
      )}
    </>
  );
};
