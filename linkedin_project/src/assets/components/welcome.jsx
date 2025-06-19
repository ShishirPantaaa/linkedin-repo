import React from 'react';
import StudyAbroadImg from './images/Study Abroad (2).png'
import LoopPhoto from './images/loop photo.png';

const WelcomeSection = () => {
  return (
    <div className=" px-4 w-full">
      {/* Top Image Section */}
      <div className="w-screen overflow-hidden ">
  <img 
    src={StudyAbroadImg} 
    alt="Study Abroad" 
    className="w-full h-auto object-cover" 
  />
</div>


      {/* Loop Photo and Text Section */}
      <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-left mt-10 gap-6 md:gap-10 w-full">
        
        {/* Loop Image - Flex Block */}
        <div className="flex justify-center md:justify-start w-full md:w-auto">
          <img src={LoopPhoto} alt="Loop" className="w-[500px] h-auto" />
        </div>

        {/* Text Content */}
        <div className="max-w-2xl w-full">
          <h3 className="uppercase text-2xl md:text-3xl font-bold text-green-900 mb-2">Welcome to</h3>
          <h1 className="uppercase text-3xl md:text-4xl font-extrabold text-green-900">Linkedin Education Consultancy</h1>
          <h2 className="text-lime-600 text-lg md:text-xl mt-4">Empowering Futures Through Global Education</h2>

          <p className="text-black text-base md:text-lg mt-6 text-left">
            At LinkedIn Education Consultancy, we are dedicated to guiding students toward world-class academic opportunities across the globe.
            With more than 10 years of proven expertise, we specialize in helping aspiring students pursue their education in top destinations 
            such as Australia, Japan, the UK, and South Korea.
          </p>

          <p className="text-black text-base md:text-lg mt-4 text-left">
            Our commitment goes beyond consultation—we offer personalized support, expert career counseling, and top-tier test
            preparation classes for IELTS, PTE, and language classes ensuring every student is equipped to succeed.
          </p>

          <p className="text-black text-base md:text-lg mt-4 text-left">
            Whether you're just starting your journey or planning your next academic move, LinkedIn Education 
            Consultancy is here to support you every step of the way. <br />
            <span className="font-semibold">Your Future, Our Mission.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
