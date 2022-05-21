import Image from 'next/image';
import React, { useState } from 'react';

const SectionEditor = () => {
  const [type, setType] = useState(true);

  console.log(type);

  return (
    <section className=' flex justify-center items-center flex-col'>
      <div class="form-check px-5 my-6 form-switch flex justify-center items-center gap-2">
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

      <div className="relative">
        <Image
          src={
            type
              ? '/assets/illo-codespaces-desktop.webp'
              : '/assets/illo-codespaces-browser.webp'
          }
          alt="Section Editor"
          width={984}
          height={624}
          className="rounded-md shadow-bs1 z-10"
        />

        <img
          src="/assets/glow.png"
          alt=""
          className="absolute h-auto pointer-events-none"
          width="30"
          height="22"
          style={{width: '180%', left: '-40%', top: '-60%',}}
        />
      </div>
    </section>
  );
};

export default SectionEditor;
