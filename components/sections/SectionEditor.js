import Image from 'next/image';
import React, { useState } from 'react';

const SectionEditor = () => {
  const [type, setType] = useState(true);

  console.log(type);

  return (
    <section className=" flex justify-center items-center flex-col">
      <div className="form-check px-5 my-6 form-switch flex justify-center items-center gap-2">
        <label
          className="form-check-label inline-block text-white font-semibold text-xl"
          for="flexSwitchCheckDefault"
        >
          Desktop
        </label>
        <input
          className="form-check-input appearance-none w-16 rounded-full float-left h-8 align-top bg-gh-tertiary bg-no-repeat bg-contain focus:outline-none cursor-pointer shadow-sm checked:bg-gh-tertiary"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          value={type}
          onChange={() => setType(!type)}
        />
        <label
          className="form-check-label inline-block text-white font-semibold text-xl"
          for="flexSwitchCheckDefault"
        >
          Browser
        </label>
      </div>

      <div className="relative flex justify-center items-end w-[130vw]">
        <div className="max-w-md flex flex-col justify-end items-end mr-6 w-1/6 md:w-4/12">
          <div className="h-[1px] pt-[20%] mt-[20%] mb-4 w-1/4 shadow-overlay-card opacity-75 after:shadow-overlay-card-after" />
          <div className="hidden md:flex justify-end items-center mb-4 w-full">
            <div className="relative block h-32 w-1/3 shadow-overlay-card opacity-75 after:shadow-overlay-card-after" />
            <div className="p-6 shadow-overlay-card h-32 text-gh-muted ml-6">
              <p>CPUs up to</p>
              <h3 className="text-5xl font-extrabold text-gradient-blue-purple">
                32
                <span className="text-2xl font-bold ml-2">cores</span>
              </h3>
            </div>
          </div>
          <div className="p-2 md:p-6 shadow-overlay-card  mb-4 after:shadow-overlay-card-after w-7/12">
            <Image
              src="/assets/editor/illo-hero-icons.png"
              alt="cpu"
              width={438}
              height={29}
              className="block"
            />
          </div>
          <div className="p-2 md:p-6 shadow-overlay-card after:shadow-overlay-card-after w-7/12">
            <Image
              src="/assets/editor/illo-hero-debugger.png"
              alt="cpu"
              width={372}
              height={272}
              className="block"
            />
          </div>
        </div>
        <div className="relative">
          <img
            src={
              type
                ? '/assets/editor/illo-codespaces-desktop.webp'
                : '/assets/editor/illo-codespaces-browser.webp'
            }
            alt="Section Editor"
            width={984}
            height={624}
            className="relative rounded-md shadow-bs1 z-20"
            objectFit="cover"
          />
          <img
            src="/assets/editor/glow.png"
            alt=""
            className="absolute h-auto pointer-events-none"
            width="30"
            height="22"
            style={{ width: '180%', left: '-40%', top: '-60%' }}
          />
        </div>
        <div className="max-w-md flex flex-col justify-start items-start ml-6 w-1/6 md:w-4/12">
          <div className="h-[1px] pb-[30%] mt-[5%] mb-4 w-1/6 shadow-overlay-card opacity-75 after:shadow-overlay-card-after" />
          <div className="hidden md:flex justify-start items-end mb-4 w-full">
            <div className="p-6 shadow-overlay-card h-32 text-gh-muted mr-4">
              <p>Memory up to</p>
              <h3 className="text-5xl font-extrabold text-gradient-blue-purple">
                64
                <span className="text-2xl font-bold ml-2">GB</span>
              </h3>
            </div>
            <div className="relative block h-20 w-1/3 shadow-overlay-card opacity-75 after:shadow-overlay-card-after" />
          </div>
          <div className="p-2 shadow-overlay-card  mb-4 after:shadow-overlay-card-after w-7/12">
            <Image
              src="/assets/editor/illo-hero-branches.png"
              alt="cpu"
              width={247}
              height={181}
              className="block"
            />
          </div>
          <div className="flex gap-4">
            <div className="p-2 md:p-6 shadow-overlay-card after:shadow-overlay-card-after w-7/12">
              <Image
                src="/assets/editor/illo-hero-commits.png"
                alt="cpu"
                width={32}
                height={32}
                className="block"
              />
            </div>
            <div className="p-2 md:p-6 shadow-overlay-card after:shadow-overlay-card-after w-7/12">
              <Image
                src="/assets/editor/illo-hero-vm.png"
                alt="cpu"
                width={32}
                height={32}
                className="block"
              />
            </div>
            <div className="p-2 md:p-6 shadow-overlay-card after:shadow-overlay-card-after w-7/12">
              <Image
                src="/assets/editor/illo-hero-checks.png"
                alt="cpu"
                width={32}
                height={32}
                className="block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionEditor;
