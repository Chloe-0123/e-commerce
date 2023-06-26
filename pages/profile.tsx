import React, { useState, useEffect } from 'react';
import Header from '@/components/header';
import { Settings } from '@/components/Settings';
import { Orders } from '@/components/Orders';

const Profile = () => {
  const [setting, handleSetting] = useState(true);
  const [orders, handleOrders] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch('../api/user/getUser')
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error('Error fetching user data:', error));
  }, []);

  
  function handleOrdersClick() {
    if (orders) {
      return;
    }
    handleSetting(!setting);
    handleOrders(!orders);
  }

  function handleSettingsClick() {
    if (setting) {
      return;
    }
    handleOrders(!orders);
    handleSetting(!setting);
  }

  console.log(userData)

  return (
    <>
      <Header />
      <div className="tw-flex" style={{ height: 'calc(100vh - 106px)' }}>
        <div className="righttab tw-w-[20%] tw-bg-slate-200 tw-h-full ">
          <ul>
            <li>
              <a href="#" onClick={handleSettingsClick}>
                Account Settings
              </a>
            </li>
            <li>
              <a href="#" onClick={handleOrdersClick}>
                Orders
              </a>
            </li>
          </ul>
        </div>
        <div className="leftpage tw-w-[80%] tw-h-full">
          {setting && userData ? (
            <Settings
              email={`${userData[0].email}`}
              name="blah"
              streetName={`${userData[0].streetName}`}
              streetNumber={`${userData[0].streetNumber}`}
              phoneNumber={`${userData[0].phoneNumber}`}
              city={`${userData[0].city}`}
              state={`${userData[0].state}`}
              ZIP={`${userData[0].ZIP}`}
            />
          ) : (
            <Orders />
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
