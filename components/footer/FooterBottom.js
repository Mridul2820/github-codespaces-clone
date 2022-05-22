import React from 'react';
import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillYoutube,
  AiFillGithub,
} from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

const FooterBottom = ({ links }) => {
  return (
    <div className="bg-gh-overlay">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-6 px-4">
        <div className="flex items-center gap-4 text-xs">
          <p className="text-gh-secondary">© 2024 GitHub, Inc.</p>
          {links?.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-gh-secondary hover:text-gh-link hover:underline"
            >
              {link.text}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3 text-gh-secondary">
          <a href="/">
            <AiOutlineTwitter size={24} />
          </a>
          <a href="/">
            <AiFillFacebook size={24} />
          </a>
          <a href="/">
            <AiFillYoutube size={24} />
          </a>
          <a href="/">
            <FaLinkedinIn size={24} />
          </a>
          <a href="/">
            <AiFillGithub size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
