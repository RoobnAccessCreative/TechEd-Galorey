import { useState } from "react";
import "./Image.css";
import Modal from "./Modal";

export default function Image(props) {
  const [modal, setModal] = useState(false);

  function handleModal() {
    setModal(true);
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
            setModal={setModal}
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
