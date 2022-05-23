import React from 'react';

const FooterTop = ({ rows }) => {
  console.log(rows);
  return (
    <div className="bg-gh-primary pt-10">
      <div className="max-w-7xl mx-auto flex gap-6 pb-16 mt-8 text-sm">
        <div className="w-1/3 text-gh-secondary">
        <img class="footer-logo-mktg" src="https://github.githubassets.com/images/modules/site/icons/footer/github-logo.svg" width="84" height="30" loading="lazy" decoding="async" alt="GitHub" className='revert-filter'/>
          <h5 className='mt-4 font-bold'>Subscribe to our newsletter</h5>
          <p className='mb-4 font-light'>Get product updates, company news, and more.</p>
          <button className='px-5 py-3 rounded-md border-2 border-slate-500 hover:border-slate-700 font-bold'>Subscribe</button>
        </div>
        {rows?.map((row, index) => (
          <ul key={index} className="flex flex-col gap-4 w-2/12 mb-1">
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
