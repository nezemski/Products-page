import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ModalCtate } from "./context/ModalContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <ModalCtate>
      <App />
    </ModalCtate>
  </BrowserRouter>
);
