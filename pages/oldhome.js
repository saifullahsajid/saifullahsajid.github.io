import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
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

export default function Home() {
  function openGitHub() {
    window.open("https://github.com/saifullahsajid");
  }

  function openSwiftHub() {
    window.open("https://apple.co/391RxtN");
  }

  function openUnicorn() {
    window.open("https://apple.co/3PQUeyX");
  }

  function openLinkedIn() {
    window.open("https://pk.linkedin.com/in/saifsajid99");
  }

  function openSwiftShorts() {
    window.open("https://swiftshorts.com");
  }

  function openTwitter() {
    window.open("https://twitter.com/saifcodes");
  }

  function openApple() {
    window.open(
      "https://apps.apple.com/us/developer/saif-ullah-sajid/id1527861472"
    );
  }

  function openPlaystore() {
    window.open("//play.google.com/store/apps/dev?id=4817776406979722087");
  }

  https: return (
    <div className="h-full w-full">
      <div className="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-7">
        <div className="relative overflow-hidden rounded-2 col-span-4 bg-light-gray-color h-standardHeight hover:border-2 hover:border-gray-300 hover:transition-all">
          <img
            className="h-32 p-1 ml-12 mr-8 mt-4 object-fit"
            src="/momoji.png"
            alt=""
          />
          <p className="ml-8 mb-8 mr-8 text-left font-bold text-xs md:text-base lg:text-base leading-6 lg:leading-8 font-nunito">
            I am
            <span className="text-4xl pl-2 pr-2 font-smooch font-normal text-transparent bg-clip-text text-indigo-600">
              Saif
            </span>
            an iOS engineer and UX enthusiast from Pakistan. My interests are
            Swift, user experience, startups, team management, joint ventures
            and learning new things.
          </p>
        </div>

        {/* <button
          type="button"
          id="swiftshorts-button"
          onClick={() => openSwiftShorts()}
          className="relative overflow-hidden h-standardHeight rounded-2 col-span-2 max-h-[18rem] static sd bg-gray-800 flex justify-center items-center focus:outline-none focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white ease-linear transform hover:scale-105 transition duration-200"
        >
          <img
            className="h-20 w-40 object-cover drop-shadow-xl"
            src="swiftshorts.png"
            alt=""
          />
          <BsFillArrowUpRightCircleFill className="absolute bottom-3 left-3 text-3xl text-white" />
        </button> */}

        <button
          type="button"
          id="twitter-button"
          onClick={() => openTwitter()}
          className="relative overflow-hidden h-standardHeight rounded-2 col-span-4 md:col-span-2 lg:col-span-2 max-h-[18rem] static sd bg-gray-400 flex justify-center items-center hover:border-2 hover:border-gray-300 hover:transition-all"
        >
          <img
            className="h-28 w-28 object-cover drop-shadow-xl"
            src="x.png"
            alt=""
          />
          <BsFillArrowUpRightCircleFill className="absolute bottom-3 left-3 text-3xl text-white" />
        </button>

        <button
          type="button"
          id="swifthub-long-button"
          onClick={() => openSwiftHub()}
          className="relative overflow-hidden h-twoColHeight rounded-2 col-span-4 md:col-span-2 lg:col-span-2 max-h-[37.5rem] row-span-2 hover:border-2 hover:border-gray-300 hover:transition-all"
        >
          <img
            className="h-full w-full object-cover"
            src="swifthub2.png"
            alt=""
          />
          <BsFillArrowUpRightCircleFill className="absolute bottom-3 left-3 text-3xl text-white" />
        </button>

        <button
          type="button"
          id="appstore-button"
          onClick={() => openApple()}
          className="relative overflow-hidden h-standardHeight rounded-2 col-span-4 md:col-span-2 lg:col-span-2 max-h-[18rem] static sd bg-blue-300 flex justify-center items-center hover:border-2 hover:border-gray-300 hover:transition-all"
        >
          <img
            className="h-28 w-28 object-cover  drop-shadow-xl"
            src="appstore.png"
            alt=""
          />
          {/* <FaApple className="w-28 h-28 text-white drop-shadow-xl shadow-white" /> */}
          <BsFillArrowUpRightCircleFill className="absolute bottom-3 left-3 text-3xl text-white" />
        </button>

        <button
          type="button"
          id="swifshorts-button"
          onClick={() => openSwiftShorts()}
          className="relative overflow-hidden h-twoColHeight rounded-2 col-span-4 md:col-span-2 lg:col-span-2 max-h-[37.5rem] row-span-2 hover:border-2 hover:border-gray-300 hover:transition-allr"
        >
          <img
            className="h-full w-full object-cover"
            src="swiftshorts2.png"
            alt=""
          />
          <BsFillArrowUpRightCircleFill className="absolute bottom-3 left-3 text-3xl text-white" />
        </button>

        <button
          type="button"
          id="unicorn-button"
          onClick={() => openUnicorn()}
          className="relative overflow-hidden  h-standardHeight rounded-2 col-span-4 md:col-span-2 lg:col-span-2 static sd bg-yellow-400 flex justify-center items-center hover:border-2 hover:border-gray-300 hover:transition-all"
        >
          <img className="h-28 w-28 object-cover " src="unicorn.png" alt="" />
          <BsFillArrowUpRightCircleFill className="absolute bottom-3 left-3 text-3xl text-white" />
        </button>
        <button
          type="button"
          id="playstore-button"
          onClick={() => openPlaystore()}
          className="relative overflow-hidden h-standardHeight rounded-2 col-span-4 md:col-span-2 lg:col-span-2 max-h-[18rem] static sd bg-green-400 flex justify-center items-center hover:border-2 hover:border-gray-300 hover:transition-all"
        >
          <img
            className="h-28 w-28 object-fit drop-shadow-xl"
            src="playstore.png"
            alt=""
          />
          <BsFillArrowUpRightCircleFill className="absolute bottom-3 left-3 text-3xl text-white" />
        </button>

        <button
          type="button"
          id="linkedIn-button"
          onClick={() => openLinkedIn()}
          className="relative overflow-hidden h-standardHeight rounded-2 col-span-4 md:col-span-2 lg:col-span-2 max-h-[18rem] static sd bg-blue-400 flex justify-center items-center hover:border-2 hover:border-gray-300 hover:transition-all"
        >
          <img
            className="h-28 w-28 object-cover drop-shadow-xl rounded-3xl"
            src="linkedin.png"
            alt=""
          />
          <BsFillArrowUpRightCircleFill className="absolute bottom-3 left-3 text-3xl text-white" />
        </button>

        <button
          type="button"
          id="github-button"
          onClick={() => openGitHub()}
          className="relative overflow-hidden h-standardHeight rounded-2 col-span-4 md:col-span-2 lg:col-span-2 static sd bg-light-gray-color flex justify-center items-center hover:border-2 hover:border-gray-300 hover:transition-all"
        >
          <img
            className="h-28 w-28 object-cover drop-shadow-xl rounded-3xl"
            src="github2.png"
            alt=""
          />
          <BsFillArrowUpRightCircleFill className="absolute bottom-3 left-3 text-3xl text-white" />
        </button>
      </div>
    </div>
  );
}
