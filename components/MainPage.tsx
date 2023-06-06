import { Cards } from "./Cards";
import Image from 'next/image';
import Link from "next/link";



const MainPage = () => {
    return (
      <>
        <div className="mainPage">
          <div className="slide1">
            <a href="#" className="mainPic tw-block tw-h-screen" style={{
              backgroundImage: "url('img/mainPage.jpg')",
              backgroundSize: 'cover',
            }}></a>
            <div className="mainPageText tw-absolute tw-top-64 tw-left-16 tw-flex tw-flex-col tw-gap-4">
              <h2 className='tw-text-5xl'>New Arrivals</h2>
              <h6>SHOP COLLECTION</h6>
            </div>
        </div>


          <div className="slide2 tw-h-screen tw-mr-20 tw-ml-20">
            <h2>Design-driven luxury for the modern home—handcrafted to the highest standards by our North Carolina artisans.</h2>
            <div className="cards tw-flex tw-gap-x-6 tw-h-2/5">
            <Cards imgSrc="https://place-puppy.com/300x300" imgName="Sofas" imgDesc="Timeless shapes designed with unparalleled comfort."/>
            <Cards imgSrc="https://place-puppy.com/300x300" imgName="Chairs" imgDesc="Timeless shapes designed with unparalleled comfort."/>
            <Cards imgSrc="https://place-puppy.com/300x300" imgName="Bedroom" imgDesc="Timeless shapes designed with unparalleled comfort."/>
            </div>

            <div className="shopButton tw-m-24 tw-flex tw-justify-center">
                <a href="#" className="tw-px-9 tw-py-3 tw-border-solid tw-border-2 tw-border-black">Shop</a>
            </div>
            
            
            
          </div>

          <div className="shopByRoom tw-flex tw-bg-[rgb(250,249,247)] tw-w-screen tw-justify-center">
            <div className="img tw-p-12">
                <Image src="https://place-puppy.com/300x500" alt="" width={300} height={500} />
            </div>
            <div className="getInspired tw-flex tw-flex-col tw-justify-center tw-gap-12">
                <div className="getInspiredText">
                    <h2>Get Inspired</h2>
                    <p>Discover our favorite looks across the home to inspire your space.</p>
                </div>
                
                <div className="shopButton">
                <Link href="/shopByRoom">Shop by Room</Link>

                </div>
                
            </div>
            

        </div>
          
        </div>
      </>
    );
  };
  
  export default MainPage;
  