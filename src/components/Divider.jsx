import "./Divider.css";

export default function Divider({ length }) {
  return (
    <>
      <div className={`divider ${length} h-[0.2rem] mt-[1rem] mb-[1rem]`}></div>
    </>
  );
}
