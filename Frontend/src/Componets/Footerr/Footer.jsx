import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-2 gap-6 mt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {/* Internship by places */}
          <div>
            <h3 className="text-sm font-bold">Internship / Jobs by Places</h3>
            <div className="flex flex-col items-start mt-4 space-y-4">
              <a href="/" className="transition-colors duration-200 hover:underline hover:text-blue-600">India</a>
              <a href="/" className="transition-colors duration-200 hover:underline hover:text-blue-600">USA</a>
              <a href="/" className="transition-colors duration-200 hover:underline hover:text-blue-600">View More</a>
              {/* Add other cities */}
            </div>
          </div>

          {/* Internship by stream */}
          <div>
            <h3 className="text-sm font-bold">Internship / Jobs by Stream</h3>
            <div className="flex flex-col items-start mt-4 space-y-4">
              <a href="/" className="transition-colors duration-200 hover:underline hover:text-blue-600">Computer Science</a>
              <a href="/" className="transition-colors duration-200 hover:underline hover:text-blue-600">Ceramic Engineering</a>
              <a href="/" className="transition-colors duration-200 hover:underline hover:text-blue-600">View More</a>
              {/* Add other streams */}
            </div>
          </div>

          
        </div>

        {/* Additional sections */}
        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700"/>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
          {/* About us */}
          <div>
            <h3 className="text-sm font-bold">About </h3>
            <div className="flex flex-col items-start mt-4 space-y-4">
              <a href="/" className="transition-colors duration-200 hover:underline hover:text-blue-600">About JobJump</a>
              <a href="/" className="transition-colors duration-200 hover:underline hover:text-blue-600">About Developer & Team</a>
              {/* Add more links */}
            </div>
            
          </div>
          <div>
            <h3 className="text-sm font-bold">Links </h3>
            <div className="flex flex-col items-start mt-4 space-y-4">
            <a href="/" className="transition-colors duration-200 hover:underline hover:text-blue-600">Sign Up</a>
              <a href="/" className="transition-colors duration-200 hover:underline hover:text-blue-600">Blogs</a>
              {/* Add more links */}
            </div>
            
          </div>

          {/* Social icons and legal */}
          <div className="flex flex-col items-start mt-4 space-y-4">
            <div className="flex items-center space-x-4">
              <p className="transition-colors duration-200 hover:underline hover:text-blue-600">
                <i className="bi bi-google-play text-black"></i> Get Android App
              </p>
              <div className="social-icons space-x-4">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
              </div>
            </div>
            <p className="mt-4 text-sm dark">© Copyright 2024. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;



