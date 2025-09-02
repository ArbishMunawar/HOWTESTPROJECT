import React from 'react';
import Logo from '../../../assets/images/Logo.png';
import FbFooter from '../../../assets/icons/FbFooter';
import InstaFooter from '../../../assets/icons/InstaFooter';
import GoogleFooter from '../../../assets/icons/GoogleFooter';
import YTFooter from '../../../assets/icons/YTFooter';
import Wicon from '../../../assets/icons/Wicon';

const Footer = () => {
  return (
    <>
      <footer className="bg-[#2C4870] text-white px-6 md:px-12 lg:px-16 py-[70px]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center mb-4">
              <img src={Logo} alt="logo" className="w-10 h-10 object-contain" />
              <div className="pl-4">
                <h2 className="text-lg font-semibold">HOW TESTS</h2>
                <p className="text-sm text-gray-300">Helping You Prepare Best</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              HowTests helps millions of students and aspirants prepare effectively for competitive exams with expertly written MCQs, articles, essays, blogs, research, practice tests, and study resources. Enhance your learning and achieve excellence with confidence!
            </p>
            <div className="flex space-x-4 mt-4 text-gray-300">
              <FbFooter />
              <InstaFooter />
              <GoogleFooter />
              <YTFooter />
              <Wicon />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row md:col-span-1 lg:col-span-2 gap-10 md:gap-0 md:grid md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">All Books</a></li>
                <li><a href="#" className="hover:text-white">All Mocks</a></li>
                <li><a href="#" className="hover:text-white">Course</a></li>
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Categories</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">Blogs</a></li>
                <li><a href="#" className="hover:text-white">CSS Essays</a></li>
                <li><a href="#" className="hover:text-white">PMS Essays</a></li>
                <li><a href="#" className="hover:text-white">PMS Ministerial Essays</a></li>
                <li><a href="#" className="hover:text-white">Civil Judge Essays</a></li>
                <li><a href="#" className="hover:text-white">CSS Solved Papers</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <div className="w-full bg-[#18345A] text-center text-sm text-gray-300 py-4">
        2025 © HOWTESTS | POWERED BY <a href="#" className="text-white underline">CPE</a>
      </div>
    </>
  );
};

export default Footer;
