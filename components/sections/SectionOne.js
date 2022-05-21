import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const SectionOne = () => {
  return (
    <section className="pt-24 pb-6 md:pb-12 px-6 flex flex-col items-center text-center">
      <h1 className="text-7xl text-center font-extrabold">
        Blazing fast cloud <br />
        developer environments
      </h1>
      <p className="text-gh-secondary text-xl mt-5">
        Visual Studio Code backed by high performance VMs that start in seconds.
      </p>
      <div className="mt-6 md:mt-10 mb-6">
        <a
          href="#"
          className="flex justify-center items-center px-7 py-5 bg-white text-gh-primary rounded-lg font-bold gap-1"
        >
          Get started <IoIosArrowForward className="-mb-[3px]" />
        </a>
      </div>
    </section>
  );
};

export default SectionOne;
