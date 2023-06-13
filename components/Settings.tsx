import React, { useState } from 'react'
import { Textbox3 } from './Textbox'
import { ConfirmButton } from './Button'
import AddressForm from './AddressInput'
import { Bar } from './Bar'


interface AccountInfo {
    name: string,
    email: string,
    streetNumber: number,
    streetName: string,
    city: string,
    ZIP: number,
    state: string,
    phoneNumber: number,
}


export const Settings = ({name, email, streetNumber, streetName, city, ZIP, state, phoneNumber}: AccountInfo) => {

    const [emailChange, handleEmailChange] = useState(false)
    const [passwordChange, handlePasswordChange] = useState(false)
    const [addressChange, handleAddressChange] = useState(false)

    return (

    

    <div className="accountSettings tw-p-16 ">

        <h2 className='tw-text-[2rem] tw-mb-8'>Account Settings</h2>

        <div className="email tw-mb-8">
            <h5 className='tw-text-[1.5rem] tw-mb-4'>Email Address</h5>
            <div className="tw-flex tw-gap-16">
                <p>Your email is <span className='tw-font-bold'>{email}</span></p>
                <a href="#" onClick={() => handleEmailChange(!emailChange)}>Change</a>
            </div>
            { emailChange && <>
                <div className="tw-mb-8"></div>
                <Textbox3 name='newEmail'/>
                <ConfirmButton name="Save"/>
            </>}

        </div>
        

        <Bar />
        
        <div className="password tw-my-8">
            <div className="tw-flex tw-gap-16">
                <h5 className='tw-text-[1.5rem]'>Password</h5>
                <a href="#" onClick={() => handlePasswordChange(!passwordChange)} className='tw-block tw-flex tw-items-center'>Change</a>
            </div>
            { passwordChange && <> 
            <div className="tw-mb-8"></div>
            <div className="tw-flex">
                <Textbox3 name='newPassword'/>
                <Textbox3 name='newPasswordConfirm' />
            </div>
            <ConfirmButton name="Save"/></>}
        </div>

        <Bar />

        <div className="address tw-my-8">
            <h5 className='tw-text-[1.5rem] tw-mb-4'>Delivery Address</h5>
            <div className="tw-flex tw-gap-16">
                <p>Your delivery address is <span className='tw-font-bold'>{streetNumber} {streetName}, {city}, {state} {ZIP}</span>.</p>
                <a href="#" onClick={() => handleAddressChange(!addressChange)}>Change</a>
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
            <a href="#" className='tw-text-orange-600'>I want to delete my account</a>
        </div>

    </div>
   

    
    
  )
}