import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Image from "./components/Image";
import Loading from "./components/Loading";
import Divider from "./components/Divider";
import Dimmer from "./components/Dimmer";

export default function App() {
  const [imges, setImges] = useState([]);
  const [dimmer, setDimmer] = useState(false);

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
          {dimmer ? <Dimmer /> : null}
          {imges.map((i) => (
            <Image
              key={i.id}
              title={i.title}
              src={i.url}
              alt={i.alt}
              dimmer={dimmer}
              setDimmer={setDimmer}
            />
          ))}
          <Divider length="full" />
          <h1 className="text-center text-4xl font-black">
            More Images Coming Soon :D
          </h1>
        </main>
      )}
    </>
  );
}
