import React from 'react';

const SectionFaster = () => {
  return (
    <div className="my-16 pb-16 mx-auto max-w-7xl h-auto">
      <div className="-mx-6 flex items-center">
        <div className="px-6 py-4 w-1/2">
          <div className="pr-5">
            <h3 className="mb-4 text-5xl font-extrabold ">
              Faster than your laptop
            </h3>
            <p className="text-gh-secondary text-xl mb-5">
              Spin up new dev environment for any sized project in seconds with
              prebuilt images. GitHub’s own 35GB dev image starts in under 10
              seconds. Scale your cloud VMs up to 32 cores and 64GB of RAM. And
              with low-latency connections across four regions, you won’t even
              remember it’s not your local machine.
            </p>
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
