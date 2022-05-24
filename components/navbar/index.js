import React from 'react';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';

const index = ({ headerData }) => {
  console.log(headerData);
  return (
    <div className="flex py-4 px-8 bg-gh-primary">
      <div className="flex items-center gap-4">
        <BsGithub size={32} color="white" />
        <form className="relative w-[272px]">
          <input
            className="gh-search-input"
            placeholder="Search or jump to…"
            type="text"
          />
          <span className="gh-search-input-icon">/</span>
        </form>
        {headerData.mainlinks.map((link, index) => (
          <Link href={link.href} key={index}>
            <a className="text-sm font-semibold text-white">{link.text}</a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default index;
