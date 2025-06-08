import "./Modal.css";
import Dimmer from "./Dimmer";

export default function Modal(props) {
  return (
    <>
      <Dimmer setModal={props.setModal} />

      <aside className="modal rounded-4xl p-[1rem]">
        <img
          src={props.src}
          alt={props.alt}
          className="modal-img rounded-2xl"
        />
        <h2 className="title p-[2rem] pt-4 text-center">{props.title}</h2>
      </aside>
    </>
  );
}
