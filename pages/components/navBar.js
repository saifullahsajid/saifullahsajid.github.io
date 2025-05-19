export default function NavBar(props) {
  return (
    <nav className="">
      {/* <nav className="w-full"> */}
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 justify-between">
        <div className="relative flex items-center justify-between h-16 bg-white-800">
          <div className="flex-shrink-0 flex items-center">
            <button
              type="button"
              className=" flex text-sm rounded-full focus:outline-none focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white ease-linear transform hover:scale-125 transition duration-500"
              id="user-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
            >
              <h1 className="text-6xl p-5 font-smooch text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-800">
                Saif
              </h1>
            </button>
          </div>
          {/* <div className="hidden sm:block rounded-full p-2 bg-nav-menu-background-color">
            <div className="flex">
              <button
                type="button"
                onClick={() => props.getSelectedTab("Home")}
                className={
                  (props.selectedTab == "Home" ? "bg-white" : "") +
                  " hover:text-gray-500 focus:bg-white mx-1 px-3 py-2 rounded-full text-sm font-poppins"
                }
              >
                Home
              </button>

              <button
                type="button"
                onClick={() => props.getSelectedTab("About")}
                className={
                  (props.selectedTab == "About" ? "bg-white" : "") +
                  " hover:text-gray-500 focus:bg-white mx-1 px-3 py-2 rounded-full text-sm font-poppins"
                }
              >
                About
              </button>

              <button
                type="button"
                onClick={() => props.getSelectedTab("Projects")}
                className={
                  (props.selectedTab == "Projects" ? "bg-white" : "") +
                  " hover:text-gray-500 focus:bg-white mx-1 px-3 py-2 rounded-full text-sm font-poppins"
                }
              >
                Projects
              </button>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="ml-3 relative">
              <div>
                <button
                  type="button"
                  onClick={() => props.getSelectedTab("Contact")}
                  className={
                    (props.selectedTab == "Contact" ? "bg-white" : "") +
                    "hover:text-gray-500 focus:bg-white mx-1 px-3 py-2 rounded-full text-sm font-poppins"
                  }
                >
                  Contact
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </nav>
  );
}
