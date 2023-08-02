"use client";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="footer-section mt-auto w-full bg-primary border-t-2 border-solid border-white text-gray-400">
        <div className="container mx-auto grid grid-cols-12 gap-2 px-4 sm:px-8">
          <div className="col-span-12 mx-2 py-[50px]">
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                <div className="py-3">
                  <Image
                    height={50}
                    width={50}
                    src="/logo-main.png"
                    alt="footer-logo"
                  />
                </div>
                <div>
                  <div className="flex items-center py-2">
                    <i className="bi bi-envelope-fill flex text-xl text-primary-color"></i>
                    <a className="break-all" href="/">
                      Crypt.io
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-span-12 py-5 sm:col-span-6 sm:py-0 lg:col-span-4">
                <h3 className="pb-2 font-semibold text-gray-300">
                  Useful Links
                </h3>
                <div>
                  <ul className="flex flex-col flex-wrap gap-2 text-sm xs:max-h-[200px]">
                    <li className="group relative flex items-center hover:text-primary-color">
                      <i className="bi bi-circle-fill invisible absolute -left-4 flex text-[6px] text-primary-color group-hover:visible"></i>
                      <a
                        href="#"
                        className="transition-all-300 group-hover:text-white"
                      >
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li className="group relative flex items-center hover:text-primary-color">
                      <i className="bi bi-circle-fill invisible absolute -left-4 flex text-[6px] text-primary-color group-hover:visible"></i>
                      <a
                        href="#"
                        className="transition-all-300 group-hover:text-white"
                      >
                        Buy Crypto
                      </a>
                    </li>
                    <li className="group relative flex items-center hover:text-primary-color">
                      <i className="bi bi-circle-fill invisible absolute -left-4 flex text-[6px] text-primary-color group-hover:visible"></i>
                      <a
                        href="#"
                        className="transition-all-300 group-hover:text-white"
                      >
                        Track Crypto
                      </a>
                    </li>
                    <li className="group relative flex items-center hover:text-primary-color">
                      <i className="bi bi-circle-fill invisible absolute -left-4 flex text-[6px] text-primary-color group-hover:visible"></i>
                      <a
                        href="#"
                        className="transition-all-300 group-hover:text-white"
                      >
                        Services
                      </a>
                    </li>

                    <li className="group relative flex items-center hover:text-primary-color">
                      <i className="bi bi-circle-fill invisible absolute -left-4 flex text-[6px] text-primary-color group-hover:visible"></i>
                      <a
                        href="#"
                        className="transition-all-300 group-hover:text-white"
                      >
                        About us
                      </a>
                    </li>
                    <li className="group relative flex items-center hover:text-primary-color">
                      <i className="bi bi-circle-fill invisible absolute -left-4 flex text-[6px] text-primary-color group-hover:visible"></i>
                      <a
                        href="#"
                        className="transition-all-300 group-hover:text-white"
                      >
                        Contact us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-4">
                <h3 className="pb-2 font-semibold text-gray-300">
                  Be the first to know it
                </h3>
                <span className="py-2 text-sm">
                  Subscribe to receive updates on our store and special offers
                </span>
                <form className="py-2">
                  <div className="flex overflow-hidden rounded-lg bg-gray-800 p-2">
                    <input
                      className="w-full border-none bg-transparent pl-2 focus:border-none focus:outline-none"
                      type="text"
                      placeholder="Your email address"
                    />
                    <button
                      className="p-2 rounded-lg bg-gold text-white"
                      type="submit"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-span-12 pb-5">
            <p className="text-center">
              © <span className="current-year">2023</span> Example. All rights
              reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
