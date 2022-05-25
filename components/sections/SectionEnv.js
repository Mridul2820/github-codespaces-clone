import React from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const SectionEnv = ({ data }) => {
  const { ref: envText, inView: envTextAnim } = useInView();
  const { ref: envImg, inView: envImgAnim } = useInView();

  return (
    <div className="my-16 pb-16 mx-auto max-w-7xl h-auto">
      <div className="-mx-6 flex items-center">
        <div className="px-6 py-4 w-1/2">
          <div
            ref={envText}
            className={`pr-5 relative duration-300 ${
              envTextAnim ? 'slide-left-after' : 'slide-left-before'
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
              <div className="max-w-xl mr-6 self-end" ref={envImg}>
                <Image
                  src={data.imgCodebg}
                  alt="cpu"
                  width={539}
                  height={571}
                  className="shadow-overlay-card"
                  priority={true}
                />
              </div>
              <div
                className="max-w-[492px] mt-[-76%] z-20 self-end"
                ref={envImg}
              >
                <img
                  src={data.imgCode1}
                  alt=""
                  className={`shadow-overlay-card object-cover align-bottom mb-6 max-w-[473px]  duration-300 relative ${
                    envImgAnim ? 'slide-right-after' : 'slide-right-before'
                  }`}
                />
                <img
                  src={data.imgCode2}
                  alt=""
                  className={`shadow-overlay-card object-cover align-bottom mb-6 max-w-[473px]  duration-500 relative ${
                    envImgAnim ? 'slide-right-after' : 'slide-right-before'
                  }`}
                />
                <img
                  src={data.imgCode3}
                  alt=""
                  className={`shadow-overlay-card object-cover align-bottom mb-6 max-w-[473px]  duration-700 relative ${
                    envImgAnim ? 'slide-right-after' : 'slide-right-before'
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

export default SectionEnv;
