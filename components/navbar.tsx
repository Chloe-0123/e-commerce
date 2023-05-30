"use client";

import { useState } from 'react';
import { DropdownMenu } from '../pages/DropdownMenu';

const Navbar = () => {
  const [isLivingOpen, setIsLivingOpen] = useState(false);
  const [isDiningOpen, setIsDiningOpen] = useState(false);
  const [isBedroomOpen, setIsBedroomOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const handleLivingEnter = () => {
    setIsLivingOpen(true);
  };

  const handleLivingLeave = () => {
    setIsLivingOpen(false);
  };

  const handleDiningEnter = () => {
    setIsDiningOpen(true);
  };

  const handleDiningLeave = () => {
    setIsDiningOpen(false);
  };

  const handleBedroomEnter = () => {
    setIsBedroomOpen(true);
  };

  const handleBedroomLeave = () => {
    setIsBedroomOpen(false);
  };

  const handleServicesEnter = () => {
    setIsServicesOpen(true);
  };

  const handleServicesLeave = () => {
    setIsServicesOpen(false);
  };

  return (
    <>
      <div className="flex flex-1 w-full justify-center">
        <div
          className="living"
          onMouseEnter={handleLivingEnter}
          onMouseLeave={handleLivingLeave}
        >
          <button className="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded"> LIVING </button>
          {isLivingOpen && (
            <div
              className="livingDropdown"
              onMouseEnter={handleLivingEnter}
              onMouseLeave={handleLivingLeave}
            >
              <DropdownMenu
                options={['Shop All', 'Sofas', 'Tables', 'New Arrivals', 'livingroom1.png', 'livingroom2.png']}
              />
            </div>
          )}
        </div>

        <div
          className="dining"
          onMouseEnter={handleDiningEnter}
          onMouseLeave={handleDiningLeave}
        >
          <button className="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded"> DINING </button>
          {isDiningOpen && (
            <div
              className="diningDropdown"
              onMouseEnter={handleDiningEnter}
              onMouseLeave={handleDiningLeave}
            >
              <DropdownMenu
                options={['teeraefe', 'q34rqewf23e323r', 'awef2222fe', 'awqfefwef', 'aefeavf']}
              />
            </div>
          )}
        </div>

        <div
          className="bedroom"
          onMouseEnter={handleBedroomEnter}
          onMouseLeave={handleBedroomLeave}
        >
          <button className="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded"> BEDROOM </button>
          {isBedroomOpen && (
            <div
              className="bedroomDropdown"
              onMouseEnter={handleBedroomEnter}
              onMouseLeave={handleBedroomLeave}
            >
              <DropdownMenu
                options={['123123123', 'q3434r', 'a5466e', 'aw97f', 'a2432434f']}
              />
            </div>
          )}
        </div>

        <div
          className="services"
          onMouseEnter={handleServicesEnter}
          onMouseLeave={handleServicesLeave}
        >
          <button className="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded">OUR SERVICES</button>
          {isServicesOpen && (
            <div
              className="servicesDropdown"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <DropdownMenu
                options={['srgwg4t', 'q323433455r', 'asgslkjglkr', 'werf', 'a']}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
