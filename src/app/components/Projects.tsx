import { Card } from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat py-10 -mt-1"
      style={{
        backgroundImage: "url('/first-bg.svg')", // Replace with your image path
      }}
    >
      <div className="flex flex-col space-y-3 py-10 px-4 lg:px-10">
        <p className="text-center text-sm font-bold">Projects</p>
        <h1 className="text-center text-3xl lg:text-4xl font-bold ">
          Discover My Success Stories
        </h1>
        <p className="text-center text-sm">
          Explore My curated collection of successful projects.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 px-4 lg:px-10">
        {/* Example Project Card */}
        <Card className="project-card flex flex-col items-center text-center space-y-3 pb-3 lg:items-start lg:text-start">
          <Image
            src={"/razer-clone.webp"}
            alt="project one"
            width={300}
            height={300}
            className="w-full rounded-t-xl transition-transform transform  hover:saturate-150 duration-300"
          />
          <h1 className="text-lg lg:text-xl font-bold project-title">
            Razer clone
          </h1>
          <p className="px-3 lg:px-6 text-sm lg:text-base">
            I built a Razer clone using{" "}
            <b>Next.js, Tailwind CSS, and ShadCN,</b> replicating the design
            with responsive layouts and polished UI components for a smooth user
            experience.
          </p>
          <Link
            href={"https://razer-clone-gold.vercel.app"}
            className="text-primary1 px-3 lg:px-6"
          >
            View Project &rarr;
          </Link>
        </Card>

        <Card className="project-card flex flex-col items-center text-center space-y-3 pb-3 lg:items-start lg:text-start">
          <Image
            src={"/Real-time.webp"}
            alt="project one"
            width={300}
            height={300}
            className="w-full rounded-t-xl transition-transform transform  hover:saturate-150 duration-300"
          />
          <h1 className="project-title text-lg lg:text-xl font-bold">
            Clock App
          </h1>
          <p className="px-3 lg:px-6 text-sm lg:text-base">
            I created a Clock App project while learning at <b>React</b>, using{" "}
            <b>react.js, HTML5, CSS3, and JavaScript</b>. It features a dynamic,
            responsive design with real-time content.
          </p>
          <Link
            href={"https://simple-clock-react.vercel.app/"}
            className="text-primary1 px-3 lg:px-6"
          >
            View Project &rarr;
          </Link>
        </Card>

        <Card className="project-card flex flex-col items-center text-center space-y-3 pb-3 lg:items-start lg:text-start">
          <Image
            src={"/Dine-Market.webp"}
            alt="project one"
            width={300}
            height={300}
            className="w-full rounded-t-xl transition-transform transform  hover:saturate-150 duration-300"
          />
          <h1 className="project-title text-lg lg:text-xl font-bold">
            Dine Market
          </h1>
          <p className="px-3 lg:px-6 text-sm lg:text-base">
            I created a Dine Market project while learning at <b>PIAIC</b>,
            using <b>Next.js, Tailwind CSS, ShadCN, Sanity, and PostgreSQL</b>.
            It features a dynamic, responsive design with real-time content
            management and a smooth user experience.
          </p>
          <Link
            href={"https://piaic-q2-project.vercel.app"}
            className="text-primary1 px-3 lg:px-6"
          >
            View Project &rarr;
          </Link>
        </Card>

        <Card className="project-card flex flex-col items-center text-center space-y-3 pb-3 lg:items-start lg:text-start">
          <Image
            src={"/To-do-app.webp"}
            alt="project one"
            width={300}
            height={300}
            className="w-full rounded-t-xl transition-transform transform  hover:saturate-150 duration-300"
          />
          <h1 className="project-title text-lg lg:text-xl font-bold">
            To do App
          </h1>
          <p className="px-3 lg:px-6 text-sm lg:text-base">
            I created a To-do App project while learning at <b>React</b>, using{" "}
            <b>react.js, HTML5, CSS3, and JavaScript</b>. It features a dynamic,
            responsive design with real-time content.
          </p>
          <Link
            href={"https://todo-app-ebon-gamma.vercel.app/"}
            className="text-primary1 px-3 lg:px-6"
          >
            View Project &rarr;
          </Link>
        </Card>
      </div>

      <div className="flex justify-center items-center mt-8">
        <button className="inline-flex items-center px-6 py-2 border border-transparent text-sm shadow-md font-semibold rounded-md shadow-gray-500 text-white bg-primary1 hover:bg-transparent cursor-pointer transition-all duration-300 hover:text-primary1 hover:ring-2 hover:ring-primary1 md:text-lg md:px-10 lg:px-7">
          <Link href="#">Check the full Portfolio</Link>
        </button>
      </div>
    </div>
  );
};

export default Projects;
