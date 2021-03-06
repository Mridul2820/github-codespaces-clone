import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const FAQ = ({ faq }) => {
  const [open, setOpen] = useState(false);

  const modalOpenClose = () => {
    setOpen(!open);
  };

  return (
    <div className="gh-border-bottom">
      <div className="flex gap-8 items-center p-6">
        <div className="w-5 h-5 relative mb-1">
          <AiOutlineMinus
            onClick={modalOpenClose}
            size={24}
            color="#79c0ff"
            stopColor="#d2a8ff"
            stopOpacity={1}
            className={`cursor-pointer duration-500 absolute top-0 left-0 ${
              open ? 'rotate-180 scale-100 opacity-100' : 'opacity-0'
            }`}
          />
          <AiOutlinePlus
            color="#79c0ff"
            stopColor="#d2a8ff"
            stopOpacity={1}
            onClick={modalOpenClose}
            size={24}
            className={`cursor-pointer duration-500 absolute top-0 left-0 ${
              open ? 'rotate-180 opacity-0' : 'opacity-100 scale-100'
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
          className={`mb-8 text-gh-muted rich-text fade-in relative ${
            open
              ? 'visible opacity-100 duration-300 top-0'
              : 'visually-hidden opacity-0 duration-300 -top-4'
          }`}
        />
      </div>
    </div>
  );
};

export default FAQ;
