import { useState, useEffect, useRef } from "react";
import "./Image.css";
import Modal from "./Modal";

export default function Image(props) {
  const [modal, setModal] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleNotModalClick(e) {
      if (!ref.current?.contains(e.target)) {
        setModal(false);
      }
    }
    window.addEventListener("mousedown", handleNotModalClick);
    return () => {
      window.removeEventListener("mousedown", handleNotModalClick);
    };
  }, []);

  return (
    <>
      {modal ? (
        <>
          <img
            src={props.src}
            alt={props.alt}
            className="img"
            onClick={() => {
              setModal(!modal);
            }}
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
          onClick={() => {
            setModal(!modal);
          }}
        />
      )}
    </>
  );
}
