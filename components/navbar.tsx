"use client";

import { useState } from 'react';
import { DropdownMenu } from './DropdownMenu';

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
      <div className="tw-flex tw-flex-1 tw-w-full tw-justify-center">
        <div
          className="living"
          onMouseEnter={handleLivingEnter}
          onMouseLeave={handleLivingLeave}
        >
          <button className="tw-bg-gray-200 tw-hover:bg-gray-300 tw-py-2 tw-px-4 tw-rounded"> LIVING </button>
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
          <button className="tw-bg-gray-200 tw-hover:bg-gray-300 tw-py-2 tw-px-4 tw-rounded"> DINING </button>
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
          <button className="tw-bg-gray-200 tw-hover:bg-gray-300 tw-py-2 tw-px-4 tw-rounded"> BEDROOM </button>
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
          <button className="tw-bg-gray-200 tw-hover:bg-gray-300 tw-py-2 tw-px-4 tw-rounded">OUR SERVICES</button>
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
