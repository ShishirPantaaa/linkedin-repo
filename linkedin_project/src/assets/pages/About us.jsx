import React from 'react';
import Footer from '../components/footer';
import SecLogo from './photo/secondary logo.jpg';
import TeamSection from '../components/team';
import SuccessStoriesSection from '../components/success';
function About() {
  return (
    <div className="px-4 py-10">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 max-w-7xl mx-auto">
        {/* Image */}
        <div className="flex-shrink-0 w-full md:w-1/2">
          <img
            src={SecLogo}
            alt="this is an image"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Text */}
        <div className="text-green-950 font-semibold text-base md:text-lg w-full md:w-1/2 mt-20">
          <p>
            Established in 2015, Linkedin Education Consultancy is a trusted educational consultancy dedicated to guiding students toward global academic success.
            With nearly a decade of experience, we have helped hundreds of students achieve their dream of studying abroad.
          </p>
          <p className="mt-6">
            Our primary destinations include South Korea, Japan, Australia, and the UK—countries known for their quality education and career opportunities.
            We take pride in our personalized counseling, transparent process, and expert visa guidance.
            All of our students have expressed high satisfaction with their study experiences, academic environments, and career paths—making us a preferred choice for students and parents across Nepal.
          </p>
        </div>
      </div>
        <TeamSection />
      <div >
        <div className="">
         <SuccessStoriesSection/>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default About;
