import React from "react";
import Image from "next/image";
import Link from "next/link";

const Projects = async () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat py-10 -mt-1"
      style={{
        backgroundImage: "url('/first-bg.svg')", // Replace with your image path
      }}
    >
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <h1 className="text-center font-bold text-4xl text-primary3 pb-10">
            Projects
          </h1>
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="sm:w-1/2 mb-10 px-4">
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
              <button className="flex mx-auto mt-6 text-white bg-primary1 border-0 py-2 px-5 focus:outline-none hover:bg-primary3 rounded">
                <Link
                  href={"https://razer-clone-gold.vercel.app"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project &rarr;
                </Link>
              </button>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
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
              <button className="flex mx-auto mt-6 text-white bg-primary1 border-0 py-2 px-5 focus:outline-none hover:bg-primary3 rounded">
                <Link
                  href={"https://piaic-q2-project.vercel.app/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project &rarr;
                </Link>
              </button>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
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
              <button className="flex mx-auto mt-6 text-white bg-primary1 border-0 py-2 px-5 focus:outline-none hover:bg-primary3 rounded">
                <Link
                  href={"https://netflix-clone-frontend-ten.vercel.app/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project &rarr;
                </Link>
              </button>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
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
              <button className="flex mx-auto mt-6 text-white bg-primary1 border-0 py-2 px-5 focus:outline-none hover:bg-primary3 rounded">
                <Link
                  href={"https://simple-clock-react.vercel.app/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project &rarr;
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Link
            href="/projects"
            className="inline-block bg-gradient-to-r from-blue-500 to-teal-400 text-white font-bold py-3 px-12 rounded-full shadow-lg hover:from-teal-400 hover:to-blue-500 hover:scale-105 transform transition duration-300"
          >
            Discover My Creations
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Projects;
