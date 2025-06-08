import { useState, useRef } from "react";
import "./Image.css";
import Modal from "./Modal";

export default function Image(props) {
  const [modal, setModal] = useState(false);
  const [modalElement, setModalElement] = useState(null);
  const ref = useRef(null);

  function handleNotModalClick(e) {
    if (
      !ref.current?.contains(e.target) &&
      !ref.current?.contains(modalElement)
    ) {
      console.log(props.setDimmer);
      props.setDimmer(false);
      setModal(false);
      window.removeEventListener("mousedown", handleNotModalClick);
    }
  }

  function handleModal() {
    props.setDimmer(true);
    setModal(true);
    setModalElement(document.querySelectorAll(".modal")[0]);
    window.addEventListener("mousedown", handleNotModalClick);
  }

  return (
    <>
      {modal ? (
        <>
          <img
            src={props.src}
            alt={props.alt}
            className="img"
            onClick={handleModal}
          />
          <Modal
            src={props.src}
            alt={props.alt}
            title={props.title}
            modalRef={ref}
          />
        </>
      ) : (
        <img
          src={props.src}
          alt={props.alt}
          className="img"
          onClick={handleModal}
        />
      )}
    </>
  );
}
