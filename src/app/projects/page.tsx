import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="bg-primary2 py-20">
      <section className="text-gray-600 body-font">
        <h1 className="text-center font-bold text-primary3 text-4xl">
          FROM VISION TO CREATION!
        </h1>
        <p className="text-center font-semibold text-lg text-primary3">
          See How Ideas Transform into Impactful Creations.
        </p>
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  width={100}
                  height={100}
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="/722x402.png"
                  alt="project"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Project 1
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Praesentium eum magni voluptatibus voluptatum saepe ut.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-primary3 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer">
                      Preveiw
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  width={100}
                  height={100}
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="/722x402.png"
                  alt="project"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Project 2
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia laudantium dolorem excepturi maiores aut laboriosam.
                  </p>
                  <div className="flex items-center flex-wrap">
                    <a className="text-primary3 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer">
                      Preveiw
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  width={100}
                  height={100}
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="/722x402.png"
                  alt="project"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Project 3
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Fuga reiciendis labore, vel nostrum quod laudantium.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-primary3 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer">
                      Preveiw
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
