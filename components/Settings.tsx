import React, { useState } from 'react'
import { Textbox3 } from './Textbox'
import { ConfirmButton } from './Button'
import AddressForm from './AddressInput'
import { Bar } from './Bar'
import { useSession, signOut} from 'next-auth/react'
import { useRouter } from 'next/router'


interface AccountInfo {
    name: string,
    email: string,
    streetNumber: string | null,
    streetName: string | null,
    city: string | null,
    ZIP: string | null,
    state: string | null,
    phoneNumber: string | null,
    addressAvailable: boolean
}


export const Settings = ({name, email, streetNumber, streetName, city, ZIP, state, phoneNumber, addressAvailable}: AccountInfo) => {

    const router = useRouter();
    const {data:session} = useSession()
   


    const formatAddress = (streetNumber: string, streetName: string | null, city: string, state: string, ZIP: number) => {
        if (streetName) {
            const formattedStreetNumber = streetNumber ? streetNumber.toString() : '';
            const formattedZIP = ZIP ? ZIP.toString() : '';
            return `${formattedStreetNumber} ${streetName}, ${city}, ${state} ${formattedZIP}`;
          }
          return "No address";
      };
    console.log('street name', streetName)
    console.log(addressAvailable)

   
    const [emailChange, handleEmailChange] = useState(false)
    const [passwordChange, handlePasswordChange] = useState(false)
    const [addressChange, handleAddressChange] = useState(false)




    const handleDelete = async (event:any) => {
        event.preventDefault()
        signOut()

        try {
            const response = await fetch(`api/user/deleteUser?email=${encodeURIComponent(session?.user?.email)}`)

            if (!response.ok) {
                throw new Error('Network response was not okay')
            } else {
                alert("Account Deleted")
                router.push('/');
            }

        } catch(err) {
            console.log('failed to delete user',err)
        }

        
    }

    return (

    

    <div className="accountSettings tw-p-16 ">

        <h2 className='tw-text-[2rem] tw-mb-8'>Account Settings</h2>

        <div className="email tw-mb-8">
            <h5 className='tw-text-[1.5rem] tw-mb-4'>Email Address</h5>
            <div className="tw-flex tw-gap-16">
                <p className='tw-text-[1.3rem]'>Your email is <span className='tw-font-bold'>{email}</span></p>
                {/*<a href="#" onClick={() => handleEmailChange(!emailChange)}>Change</a>*/}
            </div>
            { emailChange && <>
                <div className="tw-mb-8"></div>
                <Textbox3 name='newEmail'/>
                <ConfirmButton name="Save"/>
            </>}

        </div>
        

        {/*<Bar />
        
        <div className="password tw-my-8">
            {<div className="tw-flex tw-gap-16">
                <h5 className='tw-text-[1.5rem]'>Password</h5>
                <a href="#" onClick={() => handlePasswordChange(!passwordChange)} className='tw-block tw-flex tw-items-center'>Change</a>
            </div>}
            { passwordChange && <> 
            <div className="tw-mb-8"></div>
            <div className="tw-flex">
                <Textbox3 name='newPassword'/>
                <Textbox3 name='newPasswordConfirm' />
            </div>
            <ConfirmButton name="Save"/></>}
            </div>*/}

        <Bar />

        <div className="address tw-my-8">
            <h5 className='tw-text-[1.5rem] tw-mb-4'>Delivery Address</h5>
            <div className="tw-flex tw-gap-16">
                <p className='tw-text-[1.3rem]'>Your delivery address: <span className='tw-font-bold'>{ addressAvailable ? `${streetNumber} ${streetName}, ${city}, ${state} ${ZIP}` : "We do not have your address yet"}</span>.</p>
                <a href="#" onClick={() => handleAddressChange(!addressChange)} className='tw-text-[1.3rem]'>Change or Add</a>
            </div>

            {addressChange && <>
                <div className="tw-mb-8"></div>
                <AddressForm />
            </> }

            
        </div>

        <Bar />
        
        <div className="deleteAccount tw-my-8">
            <h5 className='tw-text-[1.5rem] tw-mb-4'>Delete Account</h5>
            <p>Do you want to delete your account?</p>
            <p>Deleting your account will remove all the content associated with it.</p>
            
            <div className="tw-mb-4"></div>
            <button href="#" className='tw-text-orange-600' onClick={handleDelete}>I want to delete my account</button>
        </div>

    </div>
   

    
    
  )
}
