import { useState } from 'react';
import { ConfirmButton } from './Button';

interface Address {
  streetNumber: string;
  streetName: string;
  city: string;
  state: string;
  ZIP: string;
  
}

export default function AddressForm() {
  const [address, setAddress] = useState<Address>({
    streetNumber: '',
    streetName: '',
    city: '',
    state: '',
    ZIP: '',
    
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Process the address data (e.g., submit to the server)
    console.log(address);
  };

  return (
    <form onSubmit={handleSubmit} className='tw-flex tw-flex-col tw-gap-6'>
      <div className='tw-flex tw-flex-col tw-gap-4'>
        <label htmlFor="streetNumber">Street Number</label>
        <input
          type="text"
          id="streetNumber"
          name="streetNumber"
          value={address.streetNumber}
          onChange={handleChange}
          className="tw-input tw-input-bordered tw-w-[300px]"
        />
      </div>
      <div className='tw-flex tw-flex-col tw-gap-4'>
        <label htmlFor="streetName">Street Name</label>
        <input
          type="text"
          id="streetName"
          name="streetName"
          value={address.streetName}
          onChange={handleChange}
          className="tw-input tw-input-bordered tw-w-[300px]"
        />
      </div>
      <div className='tw-flex tw-flex-col tw-gap-4'>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          value={address.city}
          onChange={handleChange}
          className="tw-input tw-input-bordered tw-w-[300px]"
        />
      </div>
      <div className='tw-flex tw-flex-col tw-gap-4'>
        <label htmlFor="state">State</label>
        <input
          type="text"
          id="state"
          name="state"
          value={address.state}
          onChange={handleChange}
          className="tw-input tw-input-bordered tw-w-[300px]"
        />
      </div>
      <div className='tw-flex tw-flex-col tw-gap-4'>
        <label htmlFor="ZIP">Postal Code</label>
        <input
          type="text"
          id="ZIP"
          name="ZIP"
          value={address.ZIP}
          onChange={handleChange}
          className="tw-input tw-input-bordered tw-w-[300px]"
        />
      </div>
      
      <div className="tw-mt-12"></div>
      <ConfirmButton />
    </form>
  );
}
