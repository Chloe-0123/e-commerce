import { useState } from 'react';
import { ConfirmButton } from './Button';
import { useSession } from 'next-auth/react';

interface Address {
  streetNumber: string;
  streetName: string;
  city: string;
  state: string;
  ZIP: string;
  email: string | undefined | null;
  
}

export default function AddressForm() {

  const {data:session} = useSession()

  const initialAddress: Address = {
    streetNumber: '',
    streetName: '',
    city: '',
    state: '',
    ZIP: '',
    email: null,
  };

  if (session?.user?.email) {
    initialAddress.email = session.user.email;
  }

  const [address, setAddress] = useState<Address>(initialAddress);


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    // Process the address data (e.g., submit to the server)

    try {

      const response = await fetch('api/user/storeAddress', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(address)

      })
      if (!response.ok) {
        // Handle the case when the server returns an error
        throw new Error('Network response was not okay');
      } else {
        location.reload();
      }
    } catch (error) {
      console.log('Address input failed: ', error)
    }
   
  };

  console.log(address)

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
      <div className="submit">
    <button className="tw-px-9 tw-py-3 tw-border-solid tw-border-2 tw-border-black tw-rounded-md">Save</button>
  </div>
    </form>
  );
}
