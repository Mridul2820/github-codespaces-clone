import React from 'react';
import Image from 'next/image';

const SectionEnv = ({ data }) => {
  return (
    <div className="my-16 pb-16 mx-auto max-w-7xl h-auto">
      <div className="-mx-6 flex items-center">
        <div className="px-6 py-4 w-1/2">
          <div className="pr-5">
            <h3
              className="mb-4 text-5xl font-extrabold "
              dangerouslySetInnerHTML={{ __html: data.title }}
            />
            <p
              className="text-gh-secondary text-xl mb-5 max-w-[ 40.5rem]"
              dangerouslySetInnerHTML={{ __html: data.description }}
            />
          </div>
        </div>

        <div className="px-6 py-4 w-1/2">
          <div className="relative">
            <div className="flex flex-col">
              <div className="max-w-xl mr-6 self-end">
                <Image
                  src="/assets/envs/illo-env-bg.png"
                  alt="cpu"
                  width={539}
                  height={571}
                  className="shadow-overlay-card"
                />
              </div>
              <div className="max-w-[492px] mt-[-76%] z-20 self-end">
                <img
                  src="/assets/envs/illo-env-ports-settings.png"
                  alt=""
                  className="shadow-overlay-card object-cover align-bottom mb-6 max-w-[473px]"
                />
                <img
                  src="/assets/envs/illo-env-post-create.png"
                  alt=""
                  className="shadow-overlay-card object-cover align-bottom mb-6 max-w-[420px]"
                />
                <img
                  src="/assets/envs/illo-env-ports-settings.png"
                  alt=""
                  className="shadow-overlay-card object-cover align-bottom mb-6 max-w-[473px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionEnv;
