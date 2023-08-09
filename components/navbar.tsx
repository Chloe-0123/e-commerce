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
          <a href='/shop/1' className="tw-block tw-hover:bg-gray-300 tw-py-2 tw-px-4 tw-rounded tw-text-[1rem]"> LIVING </a>
          {isLivingOpen && (
            <div
              className="livingDropdown"
              onMouseEnter={handleLivingEnter}
              onMouseLeave={handleLivingLeave}
            >
              <DropdownMenu
                options={['Shop All', 'Sofa', 'Table', 'Chair']} section={"/shop/1"}
              />
            </div>
          )}
        </div>

        <div
          className="dining"
          onMouseEnter={handleDiningEnter}
          onMouseLeave={handleDiningLeave}
        >
          <a href='/shop/2' className="tw-block tw-hover:bg-gray-300 tw-py-2 tw-px-4 tw-rounded tw-text-[1rem]"> DINING </a>
          {isDiningOpen && (
            <div
              className="diningDropdown"
              onMouseEnter={handleDiningEnter}
              onMouseLeave={handleDiningLeave}
            >
              <DropdownMenu
                options={['Shop All']} section={"/shop/2"}
              />
            </div>
          )}
        </div>

        <div
          className="bedroom"
          onMouseEnter={handleBedroomEnter}
          onMouseLeave={handleBedroomLeave}
        >
          <a href='/shop/3' className="tw-block  tw-hover:bg-gray-300 tw-py-2 tw-px-4 tw-rounded tw-text-[1rem]"> BEDROOM </a>
          {isBedroomOpen && (
            <div
              className="bedroomDropdown"
              onMouseEnter={handleBedroomEnter}
              onMouseLeave={handleBedroomLeave}
            >
              <DropdownMenu
                options={['Shop All', 'Bed', 'Dresser', 'Chair']} section={"/shop/3"}
              />
            </div>
          )}
        </div>

        <div
          className="services"
          onMouseEnter={handleServicesEnter}
          onMouseLeave={handleServicesLeave}
        >
          <a href='/services' className="tw-block tw-hover:bg-gray-300 tw-py-2 tw-px-4 tw-rounded tw-text-[1rem]">OUR SERVICES</a>
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
