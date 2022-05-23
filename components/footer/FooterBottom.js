import Link from 'next/link';
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
            <Link key={index} href={link.href}>
              <a className="text-gh-secondary hover:text-gh-link hover:underline">
                {link.text}
              </a>
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3 text-gh-secondary">
          <Link href="/">
            <a>
              <AiOutlineTwitter size={24} />
            </a>
          </Link>
          <Link href="/">
            <a>
              <AiFillFacebook size={24} />
            </a>
          </Link>

          <Link href="/">
            <a>
              <AiFillYoutube size={24} />
            </a>
          </Link>

          <Link href="/">
            <a>
              <FaLinkedinIn size={24} />
            </a>
          </Link>

          <Link href="/">
            <a>
              <AiFillGithub size={24} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
