import {
  FaApple,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaBug,
  FaBezierCurve,
  FaMobileAlt,
  FaBriefcase,
} from "react-icons/fa";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  return (
    <footer className="flex items-center justify-start pl-4 pr-4 rounded-2xl text-gray-600 mb-4 ml-4 mr-5">
      {/* <a
        className="flex items-center justify-center font-poppins"
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Created by Saif Ullah Sajid Using Next.js and Tailwind CSS
      </a> */}
      <div className="container px-2 py-2 mx-auto flex items-center sm:flex-row flex-col">
        {/* <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Tailblocks</span>
        </a> */}
        <p className="text-sm text-gray-600 font-nunito font-medium sm:mx-auto sm:py-2 sm:mt-0 mt-4 text-center">
          © {new Date().getFullYear()} Saif Ullah Sajid, All rights reserved. —
          Made with 💚 by me using Next.js and Tailwind —
          <a
            href="https://twitter.com/saifcodes"
            className="text-black ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @saifcodes
          </a>
        </p>
        {/* <span className="inline-flex sm:mx-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            className="text-black"
            href="https://apps.apple.com/us/developer/saif-ullah-sajid/id1527861472"
          >
            <FaApple className="w-5 h-5 text-black mr-6" />
          </a>
          <a className="text-black" href="https://pk.linkedin.com/in/saifsajid99">
            <FaLinkedinIn className="w-5 h-5 text-black mr-6" />
          </a>
          <a className="text-gray-300" href="https://github.com/saifullahsajid">
            <FaGithub className="w-5 h-5 text-black mr-6" />
          </a>
          <button onClick={() => router.push("mailto:axcay@outlook.com")}>
            <FaEnvelope className="w-5 h-5 text-black" />
          </button>
        </span> */}
      </div>
    </footer>
  );
}
