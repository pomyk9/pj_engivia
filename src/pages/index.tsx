import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "components/Header";


const Home: NextPage = () => {

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/Icon.svg" />
      </Head>

      <Header />
    </div>
  );
};


export default Home;
