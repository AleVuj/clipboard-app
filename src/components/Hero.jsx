import React from 'react';

const Hero = () => {
  return (
    <div>
      <section id="hero">
        <div className="max-w-6xl mx-auto text-center mb-40 px-10 pt-16">
          <img src="logo.svg" alt="" className="mx-auto my-16" />

          <h3 className="mb-8 text-4xl text-center font-bold text-darkGrayishBlue md:text-5xl">
            A history of everything you copy
          </h3>

          <p className="max-w-3xl mx-auto mb-10 text-2xl text-grayishBlue">
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </p>

          <div className="button-container">
            <a
              href="#"
              className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80"
            >
              Download for iOS
            </a>
            <a
              href="#"
              className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80"
            >
              Download for Mac
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
