import React from 'react';

import { Link } from 'react-scroll';

import config from '../config/index.json';

const Footer = () => {
  const { company, footer } = config;
  const { logo, name: companyName } = company;
  const { sections } = footer;

  return (
    <div
      id="footer"
      className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12"
    >
      <div className="flex flex-col items-center justify-center">
        <div>
          <img src={logo} alt={companyName} className="w-16 h-16" />
        </div>
        <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-4 h-12">
          {sections.map((section, index) => (
            <Link
              spy={true}
              active="active"
              smooth={true}
              duration={1000}
              key={`${section.name}-${index}`}
              to={section.href}
              className="hover:text-primary text-base cursor-pointer leading-4 text-gray-800 dark:text-gray-400 dark:hover:text-white"
            >
              {section.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center mt-6">
          <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">
            Veterinária Pata Amiga &copy; {new Date().getFullYear()} designed by{' '}
            <a href="https://github.com/danielalexssander" rel="nofollow">
              Daniel Alexssander
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
