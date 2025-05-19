import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

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

  return (
    <div className="min-h-screen w-full bg-cream-color">
      {/* Navigation */}
      <nav className="py-3 px-8 border-gray-200">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <a href="/" className="text-black font-serif">
            Saif
          </a>
          <div className="flex space-x-8">
            <a href="#services" className="text-sm text-gray-600">
              Services
            </a>
            <a href="#case-studies" className="text-sm text-gray-600">
              Case Studies
            </a>
            <a href="#about" className="text-sm text-gray-600">
              About me
            </a>
            <a href="#contact" className="text-sm text-gray-600">
              Contact us
            </a>
          </div>
          {/* <a
            href="#work"
            className="px-6 py-3 border border-gray-200 rounded-full"
          >
            See my work
          </a> */}
        </div>
      </nav>

      <div className="md:grid md:grid-cols-2 md:gap-16">
        {/* Left Column - Fixed Content */}
        <div className="md:sticky md:top-0 md:h-screen p-8 py-24">
          <div className="flex flex-col items-center md:items-start">
            <div className="w-[100px] aspect-square rounded-3xl overflow-hidden mb-6">
              <img
                src="https://media.licdn.com/dms/image/v2/D4E03AQGfKDTBEa3_Fw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727714474607?e=1740614400&v=beta&t=bqrgMQQUMc1wac7HMm7RpufFyZ43m6cP8GzGTn9xo40"
                alt="Saif"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="max-w-md text-center md:text-left">
              <h1 className="font-serif text-4xl mb-4">I'm Saif Ullah Sajid</h1>
              <p className="text-gray-600">
                An iOS engineer and UX enthusiast from Pakistan. My interests
                are Swift, user experience, startups, team management, joint
                ventures and learning new things.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Scrollable Content */}
        <main className="md:pl-8 md:pr-16">
          {/* Hero Section */}
          <section className="py-20 px-8 md:px-0 text-center md:text-left border-b">
            <h2 className="font-serif text-5xl leading-tight mb-8">
              Passionate creating great experiences for Digital Product
            </h2>
            <div className="flex justify-center md:justify-start space-x-4">
              <button className="px-6 py-3 bg-black text-white rounded-full">
                Talk with me
              </button>
              {/* <button className="px-6 py-3 border border-gray-200 rounded-full">
                See my work
              </button> */}
            </div>
          </section>

          {/* Work Experience */}
          {/* <section className="py-16 px-8 md:px-0 text-center md:text-left border-b">
            <h3 className="font-serif text-2xl mb-8">Working experience</h3>
            <div className="space-y-4">
              {[
                {
                  company: "HEINI",
                  role: "Staff iOS Engineer",
                  period: "Sept 2022 - Present",
                  logo: "https://media.licdn.com/dms/image/v2/C4E0BAQFrPTnUjbqrVg/company-logo_200_200/company-logo_200_200/0/1630631189259/heinibuild_logo?e=2147483647&v=beta&t=yadm4jlawPrWrR6qncdMzXsRe1XUhm0tLa3FH6I8r10",
                },
                {
                  company: "Betaworks",
                  role: "Senior Product design",
                  period: "Feb 2020 - Feb 2023",
                  logo: "/company2.png",
                },
                {
                  company: "Colourboy",
                  role: "Product design",
                  period: "Feb 2018 - Feb 2020",
                  logo: "/company3.png",
                },
              ].map((job) => (
                <div
                  key={job.company}
                  className="flex items-center space-x-4 p-4 bg-white rounded-full border border-gray-200 hover:border-gray-300 transition-colors"
                >
                  <img
                    src={job.logo}
                    alt={job.company}
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="justify-between flex">
                    <div>
                      <h4 className="text-sm">{job.role}</h4>
                      <p className="text-gray-600 font-bold">{job.company}</p>
                    </div>
                    <div className="ml-auto text-sm text-gray-400">
                      {job.period}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section> */}

          {/* Indie Projects */}
          <section className="py-16 px-8 md:px-0 text-center md:text-left">
            <h3 className="font-serif text-2xl mb-8">Indie Projects</h3>
            <div className="space-y-8">
              {[
                {
                  title: "Expenses",
                  description:
                    "The simplest most intuitive expense and income tracking you have never experienced.",
                  images: [
                    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/e4/c0/cc/e4c0ccb1-3192-cb62-88b4-73c87d08d3a9/92c04151-7327-46c4-ba81-9b3c39aa72a3_Apple_iPhone_11_Pro_Max_Screenshot_2.png/230x0w.webp",
                    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/78/26/27/7826270c-b577-e997-dd25-13322edc2e8c/6d08bd11-e0c1-489d-aeb9-4cc2b5031f59_Apple_iPhone_11_Pro_Max_Screenshot_1.png/230x0w.webp",
                    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/6b/d4/0f/6bd40f4b-ae00-f508-58fa-79091b4c0040/77baef43-1de5-44c0-ac1b-439175f082ba_Apple_iPhone_11_Pro_Max_Screenshot_0.png/230x0w.webp",
                    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/4d/0e/1b/4d0e1b79-9f18-76d9-2678-0c334bf97d8a/5c6a40f3-8c3b-46c9-9c72-f5aec398328b_Apple_iPhone_11_Pro_Max_Screenshot_3.png/230x0w.webp",
                    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/03/7a/81/037a8196-1c5f-1e0c-cf82-b8f6ccb420d6/009ba8c6-f529-473d-a2b4-d9a77a1822ee_Apple_iPhone_11_Pro_Max_Screenshot_4.png/230x0w.webp",
                    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/f0/a1/fc/f0a1fc0b-0b80-670b-df79-fc100c355fcc/7e6316fc-6ec5-4a8c-a99b-eae4cd3ecba3_Apple_iPhone_11_Pro_Max_Screenshot_5.png/230x0w.webp",
                    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/67/08/ac/6708ac16-772a-d4d4-9650-a4b32adfd836/494dd04a-5fc7-469a-b9f5-c9559df5d041_Apple_iPhone_11_Pro_Max_Screenshot_6.png/230x0w.webp",
                  ],
                  link: "https://apple.co/3BKzEOf",
                },
                {
                  title: "Scanner",
                  description:
                    "Scan, organize and share your documents with the minimum effort possible.",
                  images: ["/sc1.png", "/sc2.png", "/sc3.png", "/sc4.png"],
                  link: "https://apple.co/4eTfQGe",
                },
                {
                  title: "SwiftHub",
                  description:
                    "SwiftHub is the one-stop shop for everything you need to learn about Swift and iOS development.",
                  images: [
                    "/sh1.png",
                    "/sh2.png",
                    "/sh3.png",
                    "/sh4.png",
                    "/sh5.png",
                    "/sh6.png",
                    "/sh7.png",
                  ],
                  link: "https://apple.co/3UFmiJN",
                },
                {
                  title: "SocialCanvas",
                  description:
                    "Turn your words into stunning visuals. Share them anywhere you want.",
                  images: [
                    "/soc1.png",
                    "/soc2.png",
                    "/soc3.png",
                    "/soc4.png",
                    "/soc5.png",
                    "/soc6.png",
                    "/soc7.png",
                    "/soc8.png",
                    "/soc9.png",
                  ],
                  link: "https://apple.co/4fdoqQI",
                },
                {
                  title: "SwiftShorts",
                  description:
                    "Learn Swift programming through bite-sized video tutorials and interactive code examples.",
                  images: ["/ss.png"],
                  link: "https://swiftshorts.com",
                },
              ].map((app) => (
                <div
                  key={app.title}
                  className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 transition-colors"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h4 className="font-serif text-xl mb-2">{app.title}</h4>
                      <p className="text-gray-600 text-sm max-w-xl">
                        {app.description}
                      </p>
                    </div>
                    <a
                      href={app.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0"
                    >
                      <img
                        src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us"
                        alt="Download on the App Store"
                        className="h-10"
                      />
                    </a>
                  </div>

                  {/* Scrollable Screenshots Container */}
                  <div className="relative">
                    <div className="overflow-x-auto scrollbar-hide -mx-6 px-6">
                      <div className="flex space-x-4 pb-4">
                        {app.images.map((img, i) => (
                          <div
                            key={i}
                            className="flex-none w-[200px] first:pl-6 last:pr-6"
                          >
                            <div className="aspect-[9/19] rounded-2xl overflow-hidden bg-gray-100">
                              <img
                                src={img}
                                alt={`${app.title} screenshot ${i + 1}`}
                                className="w-full h-[425px] object-cover border border-gray-100"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Fade Indicators
                    <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-white to-transparent pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-white to-transparent pointer-events-none" /> */}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Awards Section */}
          <section className="py-16 px-8 md:px-0 text-center md:text-left border-b">
            <h3 className="font-serif text-2xl mb-8">Awards & Recognition</h3>
            <div className="space-y-4">
              {[
                {
                  award: "Website of the Day",
                  platform: "Awwwards",
                  date: "Feb 2022",
                },
                {
                  award: "Site of the Day",
                  platform: "Awwwards",
                  date: "Jan 2022",
                },
              ].map((award) => (
                <div
                  key={award.award}
                  className="flex items-center space-x-4 p-6 bg-white rounded-full border border-gray-100 hover:border-gray-200 transition-colors"
                >
                  <div className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center">
                    W
                  </div>
                  <div>
                    <h4 className="font-medium">{award.award}</h4>
                    <p className="text-sm text-gray-600">{award.platform}</p>
                  </div>
                  <span className="ml-auto text-sm text-gray-400">
                    {award.date}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Services Section */}
          <section className="py-16 px-8 md:px-0 text-center md:text-left border-b">
            <h3 className="font-serif text-2xl mb-8">What I do</h3>
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  title: "Full pages Website design",
                  description:
                    "Crafting immersive and engaging full-page website designs that captivate audiences and deliver a memorable experience",
                },
                {
                  title: "Company website design",
                  description:
                    "Transform your online presence with our sleek and modern company website designs",
                },
                {
                  title: "Landing page design",
                  description:
                    "Creating compelling first impressions with our expertly crafted landing pages",
                },
                {
                  title: "Framer development",
                  description:
                    "Transforming design into captivating digital realities with precision and innovation using design tools called Framer",
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors text-center md:text-left"
                >
                  <h4 className="font-serif text-xl mb-2">{service.title}</h4>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-8 rounded-full mt-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <img
              src="https://media.licdn.com/dms/image/v2/D4E03AQGfKDTBEa3_Fw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727714474607?e=1740614400&v=beta&t=bqrgMQQUMc1wac7HMm7RpufFyZ43m6cP8GzGTn9xo40"
              alt=""
              className="w-12 h-12 rounded-full"
            />
            <div className="text-left">
              <h4 className="font-serif">I'm Saif Ullah Sajid</h4>
              <p className="text-sm text-gray-400">
                Senior iOS Engineer based in Pakistan
              </p>
            </div>
          </div>
          <div className="flex space-x-8 text-sm">
            <a href="#services">Services</a>
            <a href="#case-studies">Case studies</a>
            <a href="#about">About me</a>
            <a href="#contact">Contact us</a>
          </div>
          <button className="px-6 py-3 bg-white text-black rounded-full text-sm">
            Talk with me
          </button>
        </div>
      </footer>
    </div>
  );
}
