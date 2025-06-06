import "./Image.css";
import Modal from "./Modal";

export default function Image(props) {
  return (
    <>
      <Modal src={props.src} alt={props.alt} title={props.title} />
      <img src={props.src} alt={props.alt} className="img" />
    </>
  );
}
