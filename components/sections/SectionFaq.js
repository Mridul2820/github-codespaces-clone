import React from 'react';
import FAQ from '../items/FAQ';

const SectionFaq = ({ data }) => {
  return (
    <div className="my-16 pb-16 mx-auto max-w-7xl h-auto">
      <div className="w-2/3 mx-auto">
        <h2 className="mb-6 text-5xl font-black text-white">{data.title}</h2>
        {data.faqs?.map((faq, index) => (
          <FAQ faq={faq} key={index} />
        ))}
      </div>
    </div>
  );
};

export default SectionFaq;
