import ReactDOM from "react-dom";
import "./Portal.css";

export const Portal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="portal-children">{children}</div>,
    document.getElementById("portal")
  );
};
