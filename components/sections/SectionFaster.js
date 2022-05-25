import React from 'react';
import { useInView } from 'react-intersection-observer';

const SectionFaster = ({ data }) => {
  const { ref: fasterText, inView: fasterTextAnim } = useInView();
  const { ref: fasterItems, inView: fasterItemsAnim } = useInView();

  return (
    <div className="my-16 pb-16 mx-auto max-w-7xl h-auto">
      <div className="-mx-6 flex items-center">
        <div className="px-6 py-4 w-1/2 -mt-[7%]">
          <div className="pr-5">
            <div
              ref={fasterText}
              className={`relative duration-300 ${
                fasterTextAnim ? 'slide-left-after' : 'slide-left-before'
              }`}
            >
              <h3 className="mb-4 text-5xl font-extrabold">{data.title}</h3>
              <p className="text-gh-secondary text-xl mb-5">
                {data.description}
              </p>
            </div>
            <div className="mt-10 flex w-full" ref={fasterItems}>
              {data.stats?.map((stat, index) => (
                <div
                  key={index}
                  className={`w-1/3 relative duration-[${
                    300 + index * 200
                  }ms] ${
                    fasterItemsAnim ? 'slide-right-after' : 'slide-right-before'
                  }`}
                >
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
              src={data.imgCore}
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
