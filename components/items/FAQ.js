import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const FAQ = ({ faq }) => {
  const [open, setOpen] = useState(false);

  const modalOpenClose = () => {
    setOpen(!open);
  };

  return (
    <div className="border-b-[1px] border-b-gh-border">
      <div className="flex gap-8 items-center p-6">
        <div className="w-5">
          <AiOutlineMinus
            onClick={modalOpenClose}
            size={24}
            color="#79c0ff"
            className={`cursor-pointer duration-500 ${
              open
                ? '-rotate-180 scale-100 visible opacity-100'
                : 'visually-hidden opacity-0 scale-0'
            }`}
          />
          <AiOutlinePlus
            color="#79c0ff"
            onClick={modalOpenClose}
            size={24}
            className={`cursor-pointer duration-500 ${
              open
                ? '-rotate-180 scale-0 visually-hidden opacity-0'
                : 'visible opacity-100 scale-100'
            }`}
          />
        </div>

        <h4
          className="font-bold text-xl cursor-pointer"
          onClick={modalOpenClose}
        >
          {faq.question}
        </h4>
      </div>

      <div className="pl-[76px]">
        <p
          dangerouslySetInnerHTML={{ __html: faq.answer }}
          className={`mb-8 text-gh-muted rich-text fade-in ${
            open
              ? 'visible opacity-100 duration-300'
              : 'visually-hidden opacity-0 duration-300'
          }`}
        />
      </div>
    </div>
  );
};

export default FAQ;
