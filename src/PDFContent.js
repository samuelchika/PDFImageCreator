import React from 'react';
import { FaUser, FaPhoneAlt, FaHandshake } from 'react-icons/fa';
import { ImLocation } from 'react-icons/im';

const PDFContent = () => {
  const product = {
    "id": 2,
    "product_id": 24,
    "vehicle_id": 8,
    "owner": 2,
    "category": 1,
    "title": "Neatly Used Toyota Camry",
    "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search ",
    "price": "1000000000",
    "images": [
      "https://res.cloudinary.com/samchik/image/upload/v1667320838/vehicles/6848df0d-d807-4365-af5d-3cb97ff7ac41-camry.jpg.jpg",
      "https://res.cloudinary.com/samchik/image/upload/v1667320838/vehicles/4f51c64b-e880-4f75-ad09-3a01e541ff8c-camry1.jpeg.jpg",
      "https://res.cloudinary.com/samchik/image/upload/v1667320838/vehicles/d1c142d9-5986-4b57-8675-28768145d808-camry2.jpeg.jpg",
      "https://res.cloudinary.com/samchik/image/upload/v1667320838/vehicles/d037455c-c687-4146-b5dc-aaccdd1fffc0-trunck.jpg.jpg",
      "https://res.cloudinary.com/samchik/image/upload/v1667320838/vehicles/65b3b922-e5a1-4d07-9fa1-724761fef89b-camry2.jpg.jpg"
    ],
    "location": "Ikeja, Lagos",
    "urgent": "1",
    "negotiable": "1",
    "created_at": "2022-10-28T09:52:15.000Z",
    "active": "0",
    "email": "samuelemyrs@gmail.com",
    "phone": "1",
    "subcategory": 1001,
    "vehicleCondition": "0",
    "vehicleFeatures": [
      "Reverse Camera",
      "Air Conditioning",
      "Alloy Wheels",
      "Parking Sensor",
      "Sunroof",
      "Andriod Audio",
      "Power Steering",
      "Apple Car Play",
      "Keyless Entry",
      "Central Lock"
    ],
    "vehicleSpecification": "JBTJ1234567890",
    "firstname": "Samuel",
    "lastname": "Ezeja",
    "dateOfBirth": "2004-09-30T23:00:00.000Z",
    "subscribe": "0",
    "verified": "1",
    "isAdmin": "0",
    "blocked": "0",
    "user_id": 2,
    "number": "8096546949",
    "isDefault": "1",
    "phone_type": 1,
    "vehicleId": 8,
    "userId": 2,
    "viaEmail": "1",
    "viaPhone": "1"
  }



  return (
    <div>
        <div className="mx-auto w-[700px] min-h-[500px] border-4 border-green-700">
          <div class="full flex flex-col items-center ">
            <p class="bg-green-700 text-gray-100 tracking-widest font-bold font-nunito p-2 w-full">ISOWO NG</p>
            <div class="flex items-center justify-center gap-x-6 p-2 bg-white w-full">
             <span className='flex items-center justify-start'><FaUser /> &nbsp; {product.firstname + " " + product.lastname} </span>
             <span className='flex items-center justify-start'><FaPhoneAlt /> &nbsp; 0{product.number} </span>
             
             {product.negotiable === "1"  && (<span className='flex items-center justify-start'><FaHandshake /> &nbsp; Negotiable</span> )} 
            </div>
            <div className='flex items-center justify-center w-full'><ImLocation /> &nbsp; {product.location} </div>
          </div>
            <div className='p-2 text-center text-2xl'>{product.title}</div>
            <div class="w-full">
              <p className=" font-nunito px-4 text-sm text-justify">
                {product.description}
            </p>
            <div className="grid grid-cols-5 w-full justify-center">
              {product.images.map((img, index) => (
                <img src={img} alt={index} key={index} className="w-[120px] h-[120px] border-4 border-gray-300 rounded-md my-2 mx-auto" /> 
              ))}
            </div>
            </div>
            <div class="w-full flex items-center justify-between ">
              <div class="bg-green-700 text-white">
                <h2 class="text-lg">Vehicle Features</h2>
                <ul id="features" class="gap-x-8 grid grid-cols-2 text-sm list-disc p-4">
                { product.vehicleFeatures.map((feature, index) => (
                  <li className='text-left' key={index}>{feature}</li>
                ))}
              </ul>
              </div>
              <div class="flex flex-col items-end justify-start pb-3">              
              <span class="text-blue-700 border-2 border-blue-700 px-4 py-2 my-auto ">Grabber ID: IS056</span>
              <div class="bg-gray-200 p-2 mt-1 border-2 border-white">
              <h2 class="text-black py-1">Find out More...</h2>
              <p class="text-blue-700 w-full text-xs bg-white pb-1 px-2"><a href="http://isowo.ng/grab/grabbedProduct/MTVc89jksaghalkdhaj">http://isowo.ng/grab/grabbedProduct/MTVc89jksaghalkdhaj</a></p>

              </div>
                            <p class="text-xs font-bold bg-red-600  pb-2 px-2">Verify the grabber ID on: <span class=" text-white px-1">https://isowo.ng/verifyGrabber</span></p>
              </div>
              
            </div>

        </div>
    </div>
  )
}

export default PDFContent