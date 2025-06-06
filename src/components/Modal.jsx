import "./Modal.css";

export default function Modal(props) {
  return (
    <aside
      className="modal min-h-[80dvh] min-w-[50dvw] rounded-4xl"
      ref={props.modalRef}
    >
      <img src={props.src} alt={props.alt} className="modal-img" />
      <h2>{props.title}</h2>
    </aside>
  );
}
