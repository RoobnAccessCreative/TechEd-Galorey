import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Image from "./components/Image";
import Loading from "./components/Loading";
import Divider from "./components/Divider";

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
      {imges == [] ? (
        <Loading />
      ) : (
        <main className="flex p-[2rem] gap-[1rem] flex-wrap w-full items-center justify-evenly">
          {imges.map((i) => (
            <Image key={i.id} title={i.title} src={i.url} alt={i.alt} />
          ))}
          <Divider length="full" />
          <h1 className="text-center text-2xl font-md">
            More Images Coming Soon :D
          </h1>
        </main>
      )}
    </>
  );
}
