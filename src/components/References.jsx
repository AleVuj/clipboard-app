import React from 'react';

const References = () => {
  return (
    <div>
      <section id="references">
        <div className="flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0">
          <img src="logo-google.png" alt="" />
          <img src="logo-imb.png" alt="" />
          <img src="logo-microsoft.png" alt="" />
          <img src="logo-hp.png" alt="" />
          <img src="logo-vector-graphics.png" alt="" />
        </div>
      </section>
      <section id="bottom">
        <div className="section-container my-20">
          <h3>Cliboard for iOS and MacOS</h3>
          <p className="section-content mb-10 text-xl">
            Available for free on the App Store. Download for Mac or iOS, sync
            with iCloud and you're ready to start adding to your clipboard.
          </p>
          {/* button container */}
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

export default References;
