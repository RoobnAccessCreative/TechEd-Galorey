import "./Divider.css";

export default function Divider({ length }) {
  return (
    <>
      <div className={`divider ${length} h-[0.1rem] mt-[1rem] mb-[1rem]`}></div>
    </>
  );
}
