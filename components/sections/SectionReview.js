import React from 'react';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';

import Blockquote from '../svgs/blockquote.svg';

const SectionReview = ({ data }) => {
  return (
    <div className="mt-16 mb-20 mx-auto max-w-7xl pb-12">
      <div className="-mx-6">
        <h3
          className="pb-4 px-4 mx-auto mb-2 text-6xl font-extrabold text-center"
          dangerouslySetInnerHTML={{ __html: data.title }}
        />
        <Link href={data.url}>
          <a className="flex text-xl justify-center items-center mb-8 text-white font-bold gap-1">
            {data.urlText} <IoIosArrowForward className="-mb-[3px]" />
          </a>
        </Link>
        <div className="flex gap-8">
          {data.reviews.map((review, index) => (
            <div className="w-1/2 p-8 shadow-overlay-card" key={index}>
              <div className="flex flex-col justify-start">
                <Blockquote className="mb-6" />
                <span
                  className="text-[32px] mb-6"
                  dangerouslySetInnerHTML={{ __html: review.review }}
                />
                <div className="flex justify-start items-center gap-2">
                  <img
                    src={review.reviewerImage}
                    alt="logo"
                    className="w-10 rounded-full"
                  />
                  <div>
                    <span
                      className="text-xl block"
                      dangerouslySetInnerHTML={{ __html: review.reviewer }}
                    />
                    <span className="text-gh-secondary">
                      {review.reviewerTitle}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionReview;
