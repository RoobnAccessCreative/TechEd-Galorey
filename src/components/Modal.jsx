import "./Modal.css";
import Dimmer from "./Dimmer";

export default function Modal(props) {
  return (
    <>
      <Dimmer setModal={props.setModal} />

      <aside className="modal rounded-4xl">
        <img
          src={props.src}
          alt={props.alt}
          className="modal-img h-full rounded-l-4xl"
        />
        <h2 className="title p-[2rem]">{props.title}</h2>
      </aside>
    </>
  );
}
