import React from 'react';

const FooterTop = ({ rows }) => {
  console.log(rows);
  return (
    <div className="bg-gh-primary pt-10">
      <div className="max-w-7xl mx-auto flex px-4 pb-16 mt-8 text-sm">
        <div className="w-1/3"></div>
        {rows?.map((row, index) => (
          <ul key={index} className="flex flex-col gap-4 w-2/12">
            <li className="text-gh-secondary">{row.title}</li>
            {row?.links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-gh-secondary hover:text-gh-link hover:underline"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default FooterTop;
