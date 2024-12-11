import React from "react";
import Image from "next/image";
import Link from "next/link";

const Projects = async () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat py-10 -mt-1 bg-primary2">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <h1 className="text-center font-bold text-4xl text-primary3 pb-10">
            PROJECTS
          </h1>
          <div className="flex flex-wrap -mx-4 -mb-10 text-center ">
            <div className="sm:w-1/2 mb-10 px-4 z-10">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  width={500}
                  height={500}
                  alt="content"
                  className="object-cover object-center h-full w-full filter grayscale hover:grayscale-0 hover:saturate-150 transition duration-300"
                  src="/razer-clone.jpg"
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                Razer Clone
              </h2>
              <h2 className="text-md font-bold text-gray-800 mb-2">
                Tech Stack Used:
              </h2>
              <p className="text-gray-700 tracking-widest font-semibold">
                HTML, TaiwindCSS, TypeScript, React, Next.js, and more...
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center md:gap-x-5">
                <button className="flex  mt-6 text-white bg-primary1 border-0 py-2 px-5 focus:outline-none hover:bg-primary2 hover:text-primary3 hover:shadow-lg hover:shadow-primary3 hover:ring-2 hover:ring-primary3  rounded hover:scale-105 transform transition duration-300">
                  <Link
                    href={"https://razer-clone-gold.vercel.app"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo &#9788;
                  </Link>
                </button>
                <button className="flex  mt-6 text-white bg-primary1 border-0 py-2 px-5 focus:outline-none hover:bg-primary2 hover:text-primary3 hover:shadow-lg hover:shadow-primary3 hover:ring-2 hover:ring-primary3  rounded hover:scale-105 transform transition duration-300">
                  <Link
                    href={"https://github.com/iamasadshah/razer-clone"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    &#10100; Code &#10101;
                  </Link>
                </button>
              </div>
            </div>
            <div className="sm:w-1/2 mb-10 px-4 z-10">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  width={500}
                  height={500}
                  alt="content"
                  className="object-cover object-center h-full w-full filter grayscale hover:grayscale-0 hover:saturate-150 transition duration-300"
                  src="/Dine-Market.webp"
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                Dine Market
              </h2>
              <h2 className="text-md font-bold text-gray-800 mb-2">
                Tech Stack Used:
              </h2>
              <p className="text-gray-700 tracking-widest font-semibold">
                HTML, TailwindCSS, React, Next.js, TypeScript, Sanity and
                more...
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center md:gap-x-5">
                <button className="flex  mt-6 text-white bg-primary1 border-0 py-2 px-5 focus:outline-none hover:bg-primary2 hover:text-primary3 hover:shadow-lg hover:shadow-primary3 hover:ring-2 hover:ring-primary3  rounded hover:scale-105 transform transition duration-300">
                  <Link
                    href={"https://piaic-q2-project.vercel.app/"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo &#9788;
                  </Link>
                </button>
                <button className="flex  mt-6 text-white bg-primary1 border-0 py-2 px-5 focus:outline-none hover:bg-primary2 hover:text-primary3 hover:shadow-lg hover:shadow-primary3 hover:ring-2 hover:ring-primary3  rounded hover:scale-105 transform transition duration-300">
                  <Link
                    href={"https://github.com/iamasadshah/piaic-q2-project"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    &#10100; Code &#10101;
                  </Link>
                </button>
              </div>
            </div>
            <div className="sm:w-1/2 mb-10 px-4 z-10">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  width={500}
                  height={500}
                  alt="content"
                  className="object-cover object-center h-full w-full filter grayscale hover:grayscale-0 hover:saturate-150 transition duration-300"
                  src="/netflix-clone.png"
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                Netflix Clone
              </h2>
              <h2 className="text-md font-bold text-gray-800 mb-2">
                Tech Stack Used:
              </h2>
              <p className="text-gray-700 tracking-widest font-semibold">
                HTML, CSS, JavaScript and more...
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center md:gap-x-5">
                <button className="flex  mt-6 text-white bg-primary1 border-0 py-2 px-5 focus:outline-none hover:bg-primary2 hover:text-primary3 hover:shadow-lg hover:shadow-primary3 hover:ring-2 hover:ring-primary3  rounded hover:scale-105 transform transition duration-300">
                  <Link
                    href={"https://netflix-clone-frontend-ten.vercel.app/"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo &#9788;
                  </Link>
                </button>
                <button className="flex  mt-6 text-white bg-primary1 border-0 py-2 px-5 focus:outline-none hover:bg-primary2 hover:text-primary3 hover:shadow-lg hover:shadow-primary3 hover:ring-2 hover:ring-primary3  rounded hover:scale-105 transform transition duration-300">
                  <Link
                    href={
                      "https://github.com/iamasadshah/netflix-clone-frontend"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    &#10100; Code &#10101;
                  </Link>
                </button>
              </div>
            </div>
            <div className="sm:w-1/2 mb-10 px-4 z-10">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  width={500}
                  height={500}
                  alt="content"
                  className="object-cover object-center h-full w-full filter grayscale hover:grayscale-0 hover:saturate-150 transition duration-300"
                  src="/Real-time.webp"
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                Digital Clock
              </h2>
              <h2 className="text-md font-bold text-gray-800 mb-2">
                Tech Stack Used:
              </h2>
              <p className="text-gray-700 tracking-widest font-semibold">
                HTML, TailwindCSS, React, TypeScript and more...
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center md:gap-x-5">
                <button className="flex  mt-6 text-white bg-primary1 border-0 py-2 px-5 focus:outline-none hover:bg-primary2 hover:text-primary3 hover:shadow-lg hover:shadow-primary3 hover:ring-2 hover:ring-primary3  rounded hover:scale-105 transform transition duration-300">
                  <Link
                    href={"https://simple-clock-react.vercel.app/"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo &#9788;
                  </Link>
                </button>
                <button className="flex  mt-6 text-white bg-primary1 border-0 py-2 px-5 focus:outline-none hover:bg-primary2 hover:text-primary3 hover:shadow-lg hover:shadow-primary3 hover:ring-2 hover:ring-primary3  rounded hover:scale-105 transform transition duration-300">
                  <Link
                    href={"https://github.com/iamasadshah/simple-clock-react"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    &#10100; Code &#10101;
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Link
            href="/projects"
            className="inline-block bg-primary3 text-white font-bold py-3 px-12 rounded-lg shadow-lg  hover:scale-105 transform transition duration-300 hover:shadow-lg hover:shadow-primary1 hover:bg-primary2 hover:text-primary3"
          >
            Discover My Creations &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Projects;
