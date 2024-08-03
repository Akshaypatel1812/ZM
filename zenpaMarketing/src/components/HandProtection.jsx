import React, { useState } from "react";
import Logo from "./Logo";

const HandProtection = () => {
  const product = {
    name: "Sample Product",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius incidunt tempore laudantium aperiam ducimus necessitatibus accusantium, nulla at quam labore dolor minus, aliquid reprehenderit! Eaque impedit velit, aliquam dolor eius non perspiciatis?.",
    price: 29.99,
    images: [
      {
        id: 1,
        src: "https://5.imimg.com/data5/SELLER/Default/2022/8/VF/OW/XW/5281222/asbestos-safety-hand-gloves-10-12-14-16-inch.png",
        name: "ASBESTOS COTTON",
      },
      {
        id: 2,
        src: "https://m.media-amazon.com/images/I/61S08vCiy0L._AC_UF350,350_QL80_.jpg",
        name: "MEXIFLEX CUT",
      },
      {
        id: 3,
        src: "https://cpimg.tistatic.com/08515346/b/4/ATG-Maxicut-Ultra-44-3745-Hand-Gloves.jpg",
        name: "MAXICUT",
      },
      {
        id: 4,
        src: "https://5.imimg.com/data5/SELLER/Default/2022/12/NM/IS/RF/56733760/maxicutultra44-3745.JPG",
        name: "MAXICUT ULTRA",
      },
      {
        id: 5,
        src: "https://5.imimg.com/data5/KK/AH/MY-8072747/full-nitrile-dipped-hand-gloves-cuff-type.jpg",
        name: "FULL DIPPED NITRILE",
      },
      {
        id: 6,
        src: "https://m.media-amazon.com/images/I/51yA-xHLq-L.jpg",
        name: "COTTON NITRILE COATED",
      },
      {
        id: 7,
        src: "https://5.imimg.com/data5/SELLER/Default/2022/2/YD/VX/JW/141627847/electrical-safety-hand-gloves-11kv-500x500.jpg",
        name: "ELECTRICAL",
      },
      {
        id: 8,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8VbH7H-zv_uubExk0OGpAbknWdCLLk7tAHQ&s",
        name: "HOUSE HOLD",
      },
      {
        id: 9,
        src: "https://protectorfiresafety.com/19085-thickbox_default/hand-gloves-pvc-supported-35-to-45-cm-protector.jpg",
        name: "PVC SUPPORTED",
      },
      {
        id: 10,
        src: "https://5.imimg.com/data5/IW/RO/MY-40359754/diamond-make-acid-alkali-proof-500x500.jpg",
        name: "ACID ALKALINE",
      },
    ],
  };

  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  const handleEmailClick = () => {
    const ownerEmail = "zenpamarketing@gmail.com"; // Replace with your owner's email
    const subject = `Interested in purchasing ${selectedImage.name}`;
    const body = `Hi,\n\nI am interested in purchasing ${selectedImage.name}.\n\nPlease provide me with more information.\n\nThanks.`;
    window.location.href = `mailto:${ownerEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <div className="relative mt-2">
        <div className="absolute top-2 right-2 p-2 bg-white border border-gray-300">
          <h4 className="font-semibold">GSTIN:- 24BWJPP6345P1ZS</h4>
        </div>
        <Logo />
      </div>
      <div>
        <div className="container mx-auto p-4 mt-8">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col items-center md:items-start md:w-1/3">
              <img
                src={selectedImage.src}
                alt={selectedImage.name}
                className="w-full h-auto mb-4 border-2 border-gray-300"
              />
              <div className="flex space-x-2">
                {product.images.map((image) => (
                  <img
                    key={image.id} // Use image.id as key
                    src={image.src}
                    alt={image.name}
                    className={`w-16 h-16 cursor-pointer border-2 ${
                      selectedImage.src === image.src
                        ? "border-blue-500"
                        : "border-gray-300"
                    }`}
                    onClick={() => setSelectedImage(image)}
                  />
                ))}
              </div>
            </div>
            <div className="md:w-2/3 md:pl-8 ml-6">
              <h1 className="text-2xl font-bold mb-2">{selectedImage.name}</h1>
              <p className="text-lg text-gray-700 mb-4">
                {product.description}
              </p>
              <p className="text-xl font-bold text-red-500 mb-4 mx-auto">
                ${product.price}
              </p>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleEmailClick}
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HandProtection;
