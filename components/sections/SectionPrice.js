import React from 'react';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';

const SectionPrice = ({ data }) => {
  return (
    <div className="mt-16 mx-auto max-w-7xl pb-12">
      <div className="-mx-6">
        <h3
          className="pb-4 px-4 mx-auto mb-6 text-5xl font-extrabold text-center"
          dangerouslySetInnerHTML={{ __html: data.title }}
        />
        <div className="px-6 py-4">
          <div className="flex rounded-md overflow-hidden shadow-overlay-card">
            <div
              className="flex flex-col justify-center items-center p-6 w-1/3 bg-cover"
              style={{
                backgroundImage:
                  'url(https://github.githubassets.com/images/modules/site/codespaces/blurple-pricing.jpg',
              }}
            >
              <img
                src={data.dataleft.logoImg}
                alt="logo"
                className="w-[72px] mx-auto"
              />
              <span
                className="text-xl text-centerpy-4 font-bold my-6"
                dangerouslySetInnerHTML={{ __html: data.dataleft.title }}
              />
              <Link href={data.dataleft.url}>
                <a className="get-started-button w-full">
                  Get started <IoIosArrowForward className="-mb-[3px]" />
                </a>
              </Link>
            </div>
            <div className="w-2/3 flex-1">
              <div className="px-10 py-6">
                <div className="mb-6">
                  <h3 className="text-xl text-white font-medium">
                    {data.dataright.title}
                  </h3>
                  <span className="text-gh-secondary">
                    {data.dataright.subTitle}
                  </span>
                </div>

                <table className="w-full font-medium leading-5">
                  <thead>
                    <tr className="gh-border-bottom">
                      <th className="w-1/3 py-4 mb-3 text-gh-secondary font-medium text-left">
                        Cores
                      </th>
                      <th className="w-1/3 py-4 mb-3 text-gh-secondary font-medium text-left">
                        RAM
                      </th>
                      <th className="w-1/3 py-4 mb-3 text-gh-secondary font-medium text-left">
                        Price
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {data.dataright.prices.map((item, index) => (
                      <tr
                        className="gh-border-bottom mb-4 align-top"
                        key={index}
                      >
                        <td className="py-4 text-white">{item.core}</td>
                        <td className="py-4 text-white">{item.ram}</td>
                        <td className="py-4 text-white">
                          {item.price}
                          <span className="block text-xs font-normal text-gh-secondary">
                            per hour
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-10 py-6 flex items-center">
                <div className="w-2/3">
                  <h3 className="text-xl text-white font-medium">
                    Codespaces storage
                  </h3>
                  <span className="text-gh-secondary">
                    charged when inactive
                  </span>
                </div>

                <div>
                  <h3 className="text-xl text-white font-medium">
                    {data.dataright.inactivePrice.price}
                  </h3>
                  <span className="text-gh-secondary">
                    {data.dataright.inactivePrice.detail}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionPrice;
