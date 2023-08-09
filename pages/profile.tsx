import React, { useState, useEffect, useContext } from 'react';
import Header from '@/components/header';
import { Settings } from '@/components/Settings';
import { Orders } from '@/components/Orders';
import { useSession, signOut, signIn } from 'next-auth/react';
import { UserContext } from '@/components/UserContext';
import { Cormorant } from 'next/font/google'

const cormorant = Cormorant({ subsets: ['latin'] })

const Profile = () => {


  const {data:session} = useSession()
  const { user, setUser } = useContext(UserContext)


  console.log('profile session', session)
  if (session) {
    console.log('logged in!')
  }
  const [setting, handleSetting] = useState(true);
  const [orders, handleOrders] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (session && session.user && session.user.email) {
      const userEmail = session.user.email;


      //fetch user using the getUser function in api file
      fetch(`api/user/getUser?email=${encodeURIComponent(userEmail)}`)
        .then((response) => response.json())
        .then((data) => {
          setUserData(data);
          setUser(data[0].id)
          setLoading(false); // Set loading to false once data is fetched
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
          setLoading(false); // Set loading to false if there's an error
        });
    }
  }, [session]); 

  console.log(user)

  
  
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

  

  return (
    <>
    <div className={cormorant.className}>
    <Header />
      {session ? (
        <div className="tw-flex" style={{ height: 'calc(100vh - 106px)' }}>
          <div className="righttab tw-w-[20%] tw-bg-orange-100 tw-h-full tw-flex tw-flex-col tw-justify-center">
            <ul className='tw-h-[300px] tw-flex tw-flex-col tw-gap-4 tw-ml-4'>
              <li>
                <a href="#" onClick={handleSettingsClick} className='tw-text-[1.5rem] tw-font-bold'>
                  Account Settings
                </a>
              </li>
              <li>
                <a href="#" onClick={handleOrdersClick} className='tw-text-[1.5rem] tw-font-bold'>
                  Orders
                </a>
              </li>
            </ul>
          </div>
          <div className="leftpage tw-w-[80%] tw-h-full">
            {setting && !loading ? ( // Check for the loading state here
              <Settings
                email={`${userData[0].email}`}
                name="blah"
                streetName={`${userData[0].streetName}`}
                streetNumber={`${userData[0].streetNumber}`}
                phoneNumber={`${userData[0].phoneNumber}`}
                city={`${userData[0].city}`}
                state={`${userData[0].state}`}
                ZIP={`${userData[0].ZIP}`}
                addressAvailable={userData[0].streetName ? true : false}
              />
            ) : (
              <Orders />
            )}
          </div>
        </div>
      ) : (
        <div>
          <p>You are not signed in.</p> <button onClick={() => signIn()}>Sign In</button>
        </div>
      )}

    </div>
      
    </>
  );

};

export default Profile;
