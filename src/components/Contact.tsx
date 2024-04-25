import React from 'react';

import config from '../config/index.json';

const Contact = () => {
  const { contact } = config;
  const { title, subtitle, description, items: contactList } = contact;

  return (
    <div className={`py-12 bg-background lg:my-40 sm:my-20`} id="contact">
      <div className="px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <div className="lg:text-center">
          <h2
            className={`text-base text-primary font-semibold tracking-wide uppercase`}
          >
            {title}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {subtitle}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {description}
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid  md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {contactList.map((_contact) => (
              <div key={_contact.name} className="relative">
                <dt>
                  <div
                    className={`absolute flex items-center justify-center h-12 w-12 rounded-md bg-background text-tertiary border-primary border-4`}
                  >
                    <img
                      className={`inline-block h-6 w-6 rounded-full`}
                      src={_contact.icon}
                      alt={_contact.name}
                    />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {_contact.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {_contact.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Contact;
