// import React from 'react';

// function ProductCard() {
//     const products = [
//         { id: 1, name: 'Safety Helmet', description: 'Our safety helmet offers durable head protection with adjustable straps for comfort. Ideal for construction and industrial environments.', image: 'https://ohsonline.com/-/media/OHS/OHS/Images/2023/12/12,-d-,13,-d-,23safetyhelmets.jpg' },
//         { id: 2, name: 'Fire Extinguishers', description: 'Be prepared for emergencies with our reliable fire extinguisher. Easy to use and effective, its a must-have for any workplace.', image: 'https://britanniaalarms.co.uk/wp-content/uploads/iStock-1188013372.jpg' },
//         { id: 3, name: 'Fire Fighting Project Work', description: 'Our expert team ensures seamless execution from start to finish, providing peace of mind and expertise for your workplace safety.', image: 'https://static.wixstatic.com/media/dee124_c8e044aa786048f286e7066636afd0e5~mv2.png/v1/fill/w_560,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/dee124_c8e044aa786048f286e7066636afd0e5~mv2.png' },
//         { id: 4, name: 'Eye Protection', description: 'Protect your vision with our reliable eye gear. Comfortable and effective, it ensures safety in any work environment.', image: 'https://images.pexels.com/photos/9242836/pexels-photo-9242836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
//         { id: 5, name: 'Respiratory Protection', description: 'Stay safe with our respiratory gear. Breathable and reliable, its essential for workplace protection.', image: 'https://ohsonline.com/-/media/OHS/OHS/Images/2021/05/terpin.jpg' },
//         { id: 6, name: 'Hand Protection', description: 'Keep your hands safe with our protective gear.its essential for workplace safety.', image: 'https://assets-global.website-files.com/647888ca92d03e3fca3f1ea0/647888ca92d03e3fca3f2440_shutterstock_1547048333.jpg' },
//         { id: 5, name: 'Smoke Detector System', description: 'Ensure safety with the Smoke Detector Systems advanced fire detection, real-time alerts, and easy installation.', image: 'https://cdn.hswstatic.com/gif/smoke-detector.jpg' },
//         { id: 7, name: 'CCTV cameras', description: 'offer robust surveillance solutions, providing monitoring and security for homes, businesses, and public spaces.', image: 'https://media.licdn.com/dms/image/D5612AQE6LuFc86nQ8g/article-cover_image-shrink_720_1280/0/1713351470524?e=2147483647&v=beta&t=-XsqA9_CEymucOL1WODkyZ01dJarLR-8Y7_2b9CkSS0' },
//         { id: 8, name: 'breathing apparatus', description: 'Provides essential respiratory protection in hazardous environments, ensuring safety and peace of mind for users.', image: 'https://heightsafety.net/wp-content/uploads/training-course-breathing-apparatus-1.jpg.webp' },
//     ];



//     const handleBuyNow = (product) => {
//         const ownerEmail = 'pak180301@gmail.com'; // Replace with your owner's email
//         const subject = `Interested in purchasing ${product.name}`;
//         const body = `Hi,\n\nI am interested in purchasing ${product.name}.\n\nPlease provide me with more information.\n\nThanks.`;
//         window.location.href = `mailto:${ownerEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
//     };

//     return (
//         <div className="container mx-auto py-8">
//             <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
//                 {products.map(product => (
//                     <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:drop-shadow-xl hover:brightness-110">
//                         <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
//                         <div className="p-4">
//                             <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
//                             <p className="text-gray-700 mb-4 ">{product.description}</p>
//                             <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-2" onClick={() => handleBuyNow(product)}>Order Now</button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default ProductCard;


import React from 'react';

function ProductCard() {
    const products = [
        { id: 1, name: 'Safety Helmet', description: 'Our safety helmet offers durable head protection with adjustable straps for comfort. Ideal for construction and industrial environments.', image: 'https://ohsonline.com/-/media/OHS/OHS/Images/2023/12/12,-d-,13,-d-,23safetyhelmets.jpg' },
        { id: 2, name: 'Fire Extinguishers', description: 'Be prepared for emergencies with our reliable fire extinguisher. Easy to use and effective, its a must-have for any workplace.', image: 'https://britanniaalarms.co.uk/wp-content/uploads/iStock-1188013372.jpg' },
        { id: 3, name: 'Fire Fighting Project Work', description: 'Our expert team ensures seamless execution from start to finish, providing peace of mind and expertise for your workplace safety.', image: 'https://static.wixstatic.com/media/dee124_c8e044aa786048f286e7066636afd0e5~mv2.png/v1/fill/w_560,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/dee124_c8e044aa786048f286e7066636afd0e5~mv2.png' },
        { id: 4, name: 'Eye Protection', description: 'Protect your vision with our reliable eye gear. Comfortable and effective, it ensures safety in any work environment.', image: 'https://images.pexels.com/photos/9242836/pexels-photo-9242836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { id: 5, name: 'Respiratory Protection', description: 'Stay safe with our respiratory gear. Breathable and reliable, its essential for workplace protection.', image: 'https://ohsonline.com/-/media/OHS/OHS/Images/2021/05/terpin.jpg' },
        { id: 6, name: 'Hand Protection', description: 'Keep your hands safe with our protective gear.its essential for workplace safety.', image: 'https://assets-global.website-files.com/647888ca92d03e3fca3f1ea0/647888ca92d03e3fca3f2440_shutterstock_1547048333.jpg' },
        { id: 5, name: 'Smoke Detector System', description: 'Ensure safety with the Smoke Detector Systems advanced fire detection, real-time alerts, and easy installation.', image: 'https://cdn.hswstatic.com/gif/smoke-detector.jpg' },
        { id: 7, name: 'CCTV cameras', description: 'offer robust surveillance solutions, providing monitoring and security for homes, businesses, and public spaces.', image: 'https://media.licdn.com/dms/image/D5612AQE6LuFc86nQ8g/article-cover_image-shrink_720_1280/0/1713351470524?e=2147483647&v=beta&t=-XsqA9_CEymucOL1WODkyZ01dJarLR-8Y7_2b9CkSS0' },
        { id: 8, name: 'breathing apparatus', description: 'Provides essential respiratory protection in hazardous environments, ensuring safety and peace of mind for users.', image: 'https://heightsafety.net/wp-content/uploads/training-course-breathing-apparatus-1.jpg.webp' },
    ];

    const handleBuyNow = (product) => {
        const ownerEmail = 'pak180301@gmail.com'; // Replace with your owner's email
        const subject = `Interested in purchasing ${product.name}`;
        const body = `Hi,\n\nI am interested in purchasing ${product.name}.\n\nPlease provide me with more information.\n\nThanks.`;
        window.location.href = `mailto:${ownerEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <div>
            <header className="bg-orange-700 text-white py-4">
                <div className="container mx-auto">
                    <h1 className="text-3xl font-semibold ml-3">Welcome to Our Safety Products Store</h1>
                    <p className="text-lg ml-3">Browse our collection of top-quality safety equipment</p>
                </div>
            </header>
            <div className="container mx-auto py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map(product => (
                        <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                            <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                                <p className="text-gray-700 mb-4">{product.description}</p>
                                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={() => handleBuyNow(product)}>Order Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductCard;


