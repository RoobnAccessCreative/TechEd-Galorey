import "./Modal.css";

export default function Modal(props) {
  return (
    <aside className="modal rounded-4xl" ref={props.modalRef}>
      <img
        src={props.src}
        alt={props.alt}
        className="modal-img h-full rounded-l-4xl"
      />
      <h2 className="title p-[2rem]">{props.title}</h2>
    </aside>
  );
}
