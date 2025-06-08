import "./Dimmer.css";

export default function Dimmer({ setModal }) {
  return (
    <>
      <div
        className="dimmer h-full w-full bg-black/50"
        onClick={() => {
          setModal(false);
        }}
      ></div>
    </>
  );
}
