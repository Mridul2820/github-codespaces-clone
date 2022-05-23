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
    </div>
  );
};

export default SectionMoreDetail;
