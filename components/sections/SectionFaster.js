import React from 'react';

const SectionFaster = ({ data }) => {
  return (
    <div className="my-16 pb-16 mx-auto max-w-7xl h-auto">
      <div className="-mx-6 flex items-center">
        <div className="px-6 py-4 w-1/2 -mt-[7%]">
          <div className="pr-5">
            <h3 className="mb-4 text-5xl font-extrabold ">{data.title}</h3>
            <p className="text-gh-secondary text-xl mb-5">{data.description}</p>
            <div className="mt-10 flex w-full">
              {data.stats?.map((stat, index) => (
                <div key={index} className="w-1/3">
                  <p className="text-gh-secondary">{stat.detail}</p>
                  <p className="font-extrabold text-3xl">{stat.stat}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="px-6 py-4 w-1/2 relative self-start">
          <div className="minus-margin">
            <img
              src="/assets/faster/illo-cpu.webp"
              alt="cpu"
              width="1577"
              height="1508"
              loading="lazy"
              decoding="async"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFaster;
