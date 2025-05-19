import Head from "next/head";
import { BeakerIcon } from "@heroicons/react/outline";
import Home from "../pages/home";
import NavBar from "../pages/components/navBar";
import Footer from "./components/footer";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";
import { useState } from "react";

export default function Index() {
  const [selectedTab, setSelectedTab] = useState("Home");

  const getSelectedTab = (value) => {
    console.log(value);
    setSelectedTab(value);
  };
  return (
    <div className="flex flex-col items-center min-h-screen bg-cream-color justify-between">
      <Head>
        <title>Saif Ullah Sajid</title>
        <link rel="icon" href="/memojitans.png" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&family=Smooch&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Oxygen&display=swap"
          rel="stylesheet"
        ></link>
        <meta name="twitter:card" content="summary" />
        <meta property="og:title" content="Saif Ullah Sajid"></meta>
        <meta
          property="og:description"
          content="An iOS engineer & UI/UX enthusiast from Pakistan."
        ></meta>
        <meta property="og:image" content="/memojiback.png"></meta>
        <meta property="og:url" content="https://saifullahsajid.com"></meta>;
      </Head>

      <main className="flex flex-col items-center justify-between w-full h-full p-5 text-center bg-cream-color">
        {/* {NavBar({ selectedTab, getSelectedTab })} */}
        {(() => {
          if (selectedTab == "Home") {
            return Home();
          } else if (selectedTab == "About") {
            return About();
          } else if (selectedTab == "Projects") {
            return Projects();
          } else if (selectedTab == "Contact") {
            return Contact();
          } else {
            return Home();
          }
        })()}
      </main>
      {/* {Footer()} */}
    </div>
  );
}
