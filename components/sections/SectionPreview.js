import React from 'react';
import Image from 'next/image';

const SectionPreview = ({ data }) => {
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
              <div className="max-w-xl self-end mr-6">
                <Image
                  src="/assets/prev/illo-hello.png"
                  alt="cpu"
                  width={538}
                  height={313}
                  className="shadow-overlay-card"
                />
              </div>
              <div className="relative max-w-[300px] mr-[10%] -mt-[30%] z-40 self-end">
                <img
                  src="/assets/prev/illo-context-menu.png"
                  alt=""
                  className="shadow-overlay-card object-cover align-bottom"
                />
                <img
                  src="/assets/prev/illo-cursor.png"
                  alt=""
                  className="absolute object-cover align-bottom right-[20%] bottom-[20%] w-8"
                />
              </div>
              <div className="max-w-[373px] mt-[-20%] z-20">
                <img
                  src="/assets/prev/illo-ports.png"
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

export default SectionPreview;
