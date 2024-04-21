import React from "react";

function Footer() {
  return (
    <footer className="m-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto py-8 px-6 lg:px-8 bg-black text-gray-400">
        <div className="text-center">
          <h2 className="text-white font-bold text-lg mb-5">About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
            eius porro minus atque et? Dicta in iure totam ducimus nesciunt
            recusandae? Quae, blanditiis similique. Reprehenderit dignissimos
            vero eos! Natus, perferendis.
          </p>
        </div>
        <div className="text-center">
          <h2 className="text-white font-bold text-lg mb-5">Quick Links</h2>
          <ul>
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center">
          <h2 className="text-white font-bold text-lg mb-5">Follow Us</h2>
          <ul>
            <li>
              <a href="#" className="hover:text-white">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center">
          <h2 className="text-white font-bold text-lg mb-5">Contact Us</h2>
          <address>
            <p>123 Main Street</p>
            <p>City, Country</p>
            <p>123-456-7890</p>
          </address>
        </div>
      </div>

      <p className="text-center text-gray-400">
        Copyright &copy; 2024 &middot; codexharoon &middot; All Rights Reserved!
      </p>
    </footer>
  );
}

export default Footer;
