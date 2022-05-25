import React from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const SectionPreview = ({ data }) => {
  const { ref: prevText, inView: prevTextAnim } = useInView();
  const { ref: prevImg, inView: prevImgAnim } = useInView();

  return (
    <div className="my-16 pb-16 mx-auto max-w-7xl h-auto">
      <div className="-mx-6 flex items-center">
        <div className="px-6 py-4 w-1/2">
          <div
            ref={prevText}
            className={`pr-5 relative duration-300 ${
              prevTextAnim ? 'slide-left-after' : 'slide-left-before'
            }`}
          >
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
              <div className="max-w-xl self-end mr-6" ref={prevImg}>
                <Image
                  src={data.imgBrowser}
                  alt="cpu"
                  width={538}
                  height={313}
                  className="shadow-overlay-card"
                  priority={true}
                />
              </div>
              <div className="relative max-w-[300px] mr-[10%] -mt-[30%] z-40 self-end">
                <img
                  src={data.imgMenu}
                  alt=""
                  className={`shadow-overlay-card object-cover align-bottom duration-[400ms] relative ${
                    prevImgAnim ? 'slide-right-after' : 'slide-right-before'
                  }`}
                />
                <img
                  src="/assets/illo-cursor.png"
                  alt=""
                  className={`absolute object-cover align-bottom right-[20%] w-8 bottom-[20%] duration-[450ms] ${
                    prevImgAnim ? 'slide-right-after' : 'slide-right-before'
                  }`}
                />
              </div>
              <div className="max-w-[373px] mt-[-20%] z-20">
                <img
                  src={data.imgPort}
                  alt=""
                  className={`shadow-overlay-card object-cover align-bottom relative duration-1000 ${
                    prevImgAnim ? 'slide-left-after' : 'slide-left-before'
                  }`}
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
