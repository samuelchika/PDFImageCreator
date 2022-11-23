import React from 'react'

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
        <div className="mx-auto w-[700px] min-h-[500px] bg-slate-400">
          <div class="full flex flex-col items-center border-4 border-green-700">
            <p class="bg-green-700 text-white font-bold font-mavin p-2 w-full">Contact Grabber</p>
            <div class="flex items-center justify-start p-2 bg-white w-full">
              {product.firstname + " " + product.lastname} 
            </div>
          </div>
            <div className='p-3 text-center'>{product.title}</div>
            <div class="w-full">
              <p className=" font-nunito p-4 text-sm text-justify">
                {product.description}
            </p>
            <div className="grid grid-cols-5 w-full justify-center">
              {product.images.map((img, index) => (
                <img src={img} alt={index} key={index} className="w-[120px] h-[120px] border-4 border-gray-300 rounded-md my-2 mx-auto" /> 
              ))}
            </div>

            </div>

        </div>
    </div>
  )
}

export default PDFContent