import React from 'react';
import './TransparentCards.css'; // Import the CSS file for styling

const TransparentCards = () => {
    const cardData = [
        { logo: 'logo1.jpg', heading: 'AI-Powered Writing', description: 'Generate high-quality content with advanced AI technology.' },
        { logo: 'logo2.png', heading: 'Custom Genres', description: 'Create stories in any genre or blend multiple styles.' },
        { logo: 'logo3.png', heading: 'Instant Download', description: 'Get your completed book in various formats instantly.' },
        { logo: 'logo4.png', heading: 'Multilingual', description: 'Generate content in multiple languages effortlessly.' },
    ];

    return (
        <div className="bg-[#1e0533] flex gap-6 justify-center p-4 w-full items-center">
            {cardData.map((card, index) => (
                <div key={index} className="card bg-[#381257] rounded-lg p-4 text-center shadow-lg transition-transform duration-300 hover:scale-105">
                    <img src={card.logo} alt={`Logo ${index + 1}`} className="logo" />
                    <h3 className="heading">{card.heading}</h3>
                    <p className="description">{card.description}</p>
                </div>
            ))}
        </div>
    );
};

export default TransparentCards;

// import React from 'react';
// import './TransparentCards.css'; // Import the CSS file for styling

// const TransparentCards = () => {
//     const cardData = [
//         { logo: 'logo1.jpg', heading: 'AI-Powered Writing', description: 'Generate high-quality content with advanced AI technology.' },
//         { logo: 'logo2.png', heading: 'Custom Genres', description: 'Create stories in any genre or blend multiple styles.' },
//         { logo: 'logo3.png', heading: 'Instant Download', description: 'Get your completed book in various formats instantly.' },
//         { logo: 'logo4.png', heading: 'Multilingual', description: 'Generate content in multiple languages effortlessly.' },
//     ];

//     return (
//         <div className="bg-[#1e0533] flex gap-6 justify-center p-4 w-full items-center">
//             {cardData.map((card, index) => (
//                 <div key={index} className="card bg-[#381257]  rounded-lg p-4 text-center shadow-lg transition-transform duration-300 hover:scale-105 ">
//                     <img src={card.logo} alt={`Logo ${index + 1}`} className="logo bg-white mb-2 w-24 flex size-fit" />
//                     <h3 className="heading text-lg font-bold mb-2 text-white">{card.heading}</h3>
//                     <p className="description text-gray-400 text-sm font-semiboldleading-relaxed">{card.description}</p>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default TransparentCards;
