import React from 'react';
import Image from 'next/image';

const SectionPower = ({ data }) => {
  return (
    <div className="mt-16 mx-auto max-w-7xl">
      <div className="-mx-6 pb-12 flex items-center">
        <div className="px-6 py-4 w-1/2">
          <div className="pr-5">
            <h3
              className="mb-4 text-5xl font-extrabold"
              dangerouslySetInnerHTML={{ __html: data.title }}
            />
            <p className="text-gh-secondary text-xl mb-5">{data.description}</p>
            <Image
              src="/assets/power/logos.png"
              alt="cpu"
              width={321}
              height={41}
              className="block"
            />
          </div>
        </div>
        <div className="px-6 py-4 w-1/2">
          <div className="relative">
            <div className="flex flex-col">
              <div className="max-w-xl">
                <Image
                  src={data.imgVscode}
                  alt="cpu"
                  width={571}
                  height={363}
                  className="shadow-overlay-card"
                />
              </div>{' '}
              <div className="max-w-[492px] mt-[-20%] z-20 self-end">
                <img
                  src={data.imgTerminal}
                  alt=""
                  className="shadow-overlay-card object-cover align-bottom"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionPower;
