import arrow from "../assets/img/Arrow 1.svg";
import { useState } from "react";
import Selector from "./DropModal.jsx";
import Modal from "./modal.jsx";
import style from "../assets/css/main.css";

function DropButton({ text, size, data, setIsOpen, setStyle }) {
  const CN = "button " + size;
  return (
    <>
      <button className={CN} onClick={setIsOpen}>
        {text}
        <img src={arrow} alt="arrow" />
      </button>
    </>
  );
}
export default DropButton;
