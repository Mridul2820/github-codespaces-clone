import React from 'react';

const SectionMoreDetail = ({ data }) => {
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

      <div>
        <div className='relative mx-auto'>
          <div className="flex"></div>
        </div>
        <div className="relative mt-6 z-40">
          <div className="relative flex justify-between w-full gap-4 left-20">
            {data.plugin1s.map((plugin, index) => (
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
            ))}
          </div>
          <div className="relative -right-4 flex justify-between w-full gap-4">
            {data.plugin2s.map((plugin, index) => (
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionMoreDetail;
