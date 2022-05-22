import React from 'react';
import Image from 'next/image';

const SectionPower = () => {
  return (
    <div className="mt-16 mx-auto max-w-7xl">
      <div className="-mx-6 pb-12 flex items-center">
        <div className="px-6 py-4 w-1/2">
          <div className="pr-5">
            <h3 className="mb-4 text-5xl font-extrabold ">
              The full power of Visual&nbsp;Studio Code
            </h3>
            <p className="text-gh-secondary text-xl mb-5">
              Use the full power of Visual Studio Code, including the editor,
              terminal, debugger, version control, settings sync, and the entire
              ecosystem of extensions. Work in the browser or hand off to your
              desktop.
            </p>
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
                  src="/assets/power/illo-vscode.webp"
                  alt="cpu"
                  width={571}
                  height={363}
                  className="shadow-overlay-card"
                />
              </div>{' '}
              <div className="max-w-[492px] mt-[-20%] z-20 self-end">
                <img
                  src="/assets/power/illo-terminal.webp"
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
