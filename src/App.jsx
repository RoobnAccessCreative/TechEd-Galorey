import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

export default function App() {
  const [imges, setImges] = useState([]);

  const imp = import.meta.env;

  useEffect(() => {
    (async function getImages() {
      const res = await fetch(imp.VITE_API_URL);
      const data = res.ok ? await res.json() : [];
      setImges(data);
    })();
  }, [imp]);

  return (
    <>
      <Navbar />
      {imges ? (
        <Loading />
      ) : (
        imges.map((i) => {
          return (
            <div>
              <Image key={i.id} title={i.title} src={i.url} alt={i.alt} />
            </div>
          );
        })
      )}
    </>
  );
}
