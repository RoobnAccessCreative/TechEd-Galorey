import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

export default function App() {
  const [imges, setImges] = useState([]);

  useEffect(() => {
    (async function getImages() {
      const res = await fetch(import.meta.env.VITE_API);
      const data = res.ok ? await res.json() : [];
      setImges(data);
    })();
  }, []);

  return (
    <>
      <Navbar />
    </>
  );
}
