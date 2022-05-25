import React from 'react';
import { useInView } from 'react-intersection-observer';

const SectionMoreDetail = ({ data }) => {
  const { ref: moreImg, inView: moreImgAnim } = useInView();
  const { ref: morePlugin, inView: morePluginAnim } = useInView();

  return (
    <div className="py-24 pb-6 md:pb-32 px-6 flex flex-col items-center text-center">
      <h1
        className="text-5xl text-center font-extrabold"
        dangerouslySetInnerHTML={{ __html: data.title }}
      />
      <p
        className="text-gh-secondary text-xl mt-5"
        dangerouslySetInnerHTML={{ __html: data.description }}
      />

      <div className="mt-8 py-4">
        <div className="relative mx-auto">
          <div className="flex justify-center">
            <div className="relative px-6">
              <div className="absolute top-10 z-20 right-[-78%]">
                <img
                  src={data.imgLeft}
                  alt=""
                  loading="lazy"
                  width={636}
                  className={`shadow-overlay-card ${
                    moreImgAnim ? 'slide-left-after' : 'slide-left-before'
                  }`}
                />
              </div>
              <div className="relative z-40" ref={moreImg}>
                <img
                  src={data.imgCenter}
                  alt=""
                  loading="lazy"
                  width={800}
                  className="shadow-overlay-card"
                />
              </div>
              <div className="absolute top-10 z-10 left-[-78%]">
                <img
                  src={data.imgRight}
                  alt=""
                  loading="lazy"
                  width={636}
                  className={`shadow-overlay-card ${
                    moreImgAnim ? 'slide-right-after' : 'slide-right-before'
                  }`}
                />
              </div>
              <img
                src="/assets/glow.png"
                alt=""
                className="absolute bg-gradient h-auto pointer-events-none z-10"
                width="30"
                height="22"
              />
            </div>
          </div>
        </div>
        <div className="relative mt-6 z-40" ref={morePlugin}>
          <div className="relative flex justify-between w-full gap-4 left-20">
            {data.plugin1s.map((plugin, index) => (
              <div
                className={`relative ${
                  morePluginAnim ? 'slide-right-after' : 'slide-right-before'
                }`}
              >
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 shadow-overlay-card mb-4 w-[260px] h-[100px]"
                >
                  <img
                    className="w-10 h-10"
                    src={plugin.image}
                    alt={plugin.name}
                  />
                  <div className="flex flex-col text-left">
                    <p className="text-white text-sm">{plugin.name}</p>
                    <span className="text-gh-secondary text-xs">
                      {plugin.detail}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="relative -right-4 flex justify-between w-full gap-4">
            {data.plugin2s.map((plugin, index) => (
              <div
                className={`relative ${
                  morePluginAnim ? 'slide-right-after' : 'slide-right-before'
                }`}
              >
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 shadow-overlay-card mb-4 w-[260px] h-[100px]"
                >
                  <img
                    className="w-10 h-10"
                    src={plugin.image}
                    alt={plugin.name}
                  />
                  <div className="flex flex-col text-left">
                    <p className="text-white text-sm">{plugin.name}</p>
                    <span className="text-gh-secondary text-xs">
                      {plugin.detail}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionMoreDetail;
