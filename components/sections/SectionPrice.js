import React from 'react';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';

const SectionPrice = ({ data }) => {
  console.log(data);
  return (
    <div className="mt-16 mx-auto max-w-7xl pb-12">
      <div className="-mx-6">
        <h3
          className="pb-4 px-4 mx-auto mb-6 text-5xl font-extrabold text-center"
          dangerouslySetInnerHTML={{ __html: data.title }}
        />
        <div className="px-6 py-4">
          <div className="flex items-center rounded-md overflow-hidden shadow-overlay-card">
            <div
              className="flex flex-col justify-center items-center w-1/3 p-6 "
              style={{
                backgroundImage:
                  'url(https://github.githubassets.com/images/modules/site/codespaces/blurple-pricing.jpg',
                backgroundSize: 'cover',
              }}
            >
              <img src={data.dataleft.logoImg} alt="logo" />
              <span
                className="text-xl text-centerpy-4 font-bold my-6"
                dangerouslySetInnerHTML={{ __html: data.dataleft.title }}
              />
              <Link href={data.dataleft.url}>
                <a className="flex justify-center items-center px-7 py-5 w-full bg-white mx-8 mb-5 text-gh-primary rounded-lg font-bold gap-1">
                  Get started <IoIosArrowForward className="-mb-[3px]" />
                </a>
              </Link>
            </div>
            <div className="px-10 py-6 w-2/3 flex-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionPrice;
