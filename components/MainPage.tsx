import { Cards } from "./Cards";
import Image from 'next/image';
import Link from "next/link";



const MainPage = () => {
    return (
      <>
        <div className="mainPage">
          <div className="slide1">
            <a href="#" className="mainPic block h-screen" style={{
              backgroundImage: "url('img/mainPage.jpg')",
              backgroundSize: 'cover',
            }}></a>
            <div className="mainPageText absolute top-64 left-16 flex flex-col gap-4">
              <h2 className='text-5xl'>New Arrivals</h2>
              <h6>SHOP COLLECTION</h6>
            </div>
          </div>


          <div className="slide2 h-screen mr-20 ml-20">
            <h2>Design-driven luxury for the modern home—handcrafted to the highest standards by our North Carolina artisans.</h2>
            <div className="cards flex gap-x-6 h-2/5">
            <Cards imgSrc="https://place-puppy.com/300x300" imgName="Sofas" imgDesc="Timeless shapes designed with unparalleled comfort."/>
            <Cards imgSrc="https://place-puppy.com/300x300" imgName="Chairs" imgDesc="Timeless shapes designed with unparalleled comfort."/>
            <Cards imgSrc="https://place-puppy.com/300x300" imgName="Bedroom" imgDesc="Timeless shapes designed with unparalleled comfort."/>
            </div>

            <div className="shopButton m-24 flex justify-center">
                <a href="#" className="px-9 py-3 border-solid border-2 border-black">Shop</a>
            </div>
            
            
            
          </div>

          <div className="shopByRoom flex bg-[rgb(250,249,247)] w-screen justify-center">
            <div className="img p-12">
                <Image src="https://place-puppy.com/300x500" alt="" width={300} height={500} />
            </div>
            <div className="getInspired flex flex-col justify-center gap-12">
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
  