import Featured from "@/components/Featured";
import MihogoList from "@/components/MihogoList";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mihogo Point</title>
        <meta name="Mihogo Point" content="Best Restaurant in Dar es salaam" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <MihogoList />
    </>
  );
}

