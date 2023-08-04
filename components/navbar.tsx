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
          <a href='/shop/1' className="tw-block tw-bg-gray-200 tw-hover:bg-gray-300 tw-py-2 tw-px-4 tw-rounded"> LIVING </a>
          {isLivingOpen && (
            <div
              className="livingDropdown"
              onMouseEnter={handleLivingEnter}
              onMouseLeave={handleLivingLeave}
            >
              <DropdownMenu
                options={['Shop All', 'Sofas', 'Tables', 'Chairs']} section={"living"}
              />
            </div>
          )}
        </div>

        <div
          className="dining"
          onMouseEnter={handleDiningEnter}
          onMouseLeave={handleDiningLeave}
        >
          <a href='/dining' className="tw-block tw-bg-gray-200 tw-hover:bg-gray-300 tw-py-2 tw-px-4 tw-rounded"> DINING </a>
          {isDiningOpen && (
            <div
              className="diningDropdown"
              onMouseEnter={handleDiningEnter}
              onMouseLeave={handleDiningLeave}
            >
              <DropdownMenu
                options={['Shop All']} section={"dining"}
              />
            </div>
          )}
        </div>

        <div
          className="bedroom"
          onMouseEnter={handleBedroomEnter}
          onMouseLeave={handleBedroomLeave}
        >
          <a href='/bedroom' className="tw-block tw-bg-gray-200 tw-hover:bg-gray-300 tw-py-2 tw-px-4 tw-rounded"> BEDROOM </a>
          {isBedroomOpen && (
            <div
              className="bedroomDropdown"
              onMouseEnter={handleBedroomEnter}
              onMouseLeave={handleBedroomLeave}
            >
              <DropdownMenu
                options={['Shop All', 'Beds', 'Dressers', 'Chairs']} section={"bedroom"}
              />
            </div>
          )}
        </div>

        <div
          className="services"
          onMouseEnter={handleServicesEnter}
          onMouseLeave={handleServicesLeave}
        >
          <a href='/services' className="tw-block tw-bg-gray-200 tw-hover:bg-gray-300 tw-py-2 tw-px-4 tw-rounded">OUR SERVICES</a>
          {isServicesOpen && (
            <div
              className="servicesDropdown"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
