import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-y">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 mt-5">
            <Link to="/" className="flex items-center">
              <img
                src="https://i.ibb.co/ZBvpsps/Screenshot-2024-03-24-143834.png"
                className="mr-3 h-16"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Resources
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/aboutUs" className="hover:underline">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Follow us
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a
                    href="https://www.linkedin.com/company/zenpa-marketing/about/"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Linked in
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/zenpamarketing?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Legal
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2024
            <a href="https://www.linkedin.com/in/akshay-patel-8a9582244/" className="hover:underline">
              developer contact
            </a>
            . Akshaypatel
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            
            <Link to="https://www.linkedin.com/in/akshay-patel-8a9582244/" className="text-gray-500 hover:text-gray-900">
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20,0H4C1.8,0,0,1.8,0,4v16c0,2.2,1.8,4,4,4h16c2.2,0,4-1.8,4-4V4C24,1.8,22.2,0,20,0z M7.2,20H4.8V9.4h2.4V20z M6,8.2 c-0.7,0-1.2-0.5-1.2-1.2S5.3,5.8,6,5.8c0.7,0,1.2,0.5,1.2,1.2S6.7,8.2,6,8.2z M20,20h-2.4v-4.8c0-1.1,0-2.5-1.6-2.5 c-1.6,0-1.8,1.2-1.8,2.4V20h-2.4V9.4h2.2v1.3h0.1c0.3-0.6,1-1.2,2.1-1.2c2.3,0,2.7,1.5,2.7,3.4V20z"></path>
              </svg>
              <span className="sr-only">LinkedIn page</span>
            </Link>

            {/* Other social media icons */}
          </div>
        </div>
      
      </div>
    </footer>
  );
}
