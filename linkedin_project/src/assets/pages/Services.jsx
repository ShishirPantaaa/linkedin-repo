import React from 'react'
import Footer from '../components/footer'
import conseling from "./photo/consuling.png"
import studysupp from "./photo/study.png"
import travelsupp from "./photo/travelling.png"
import scholarship from "./photo/scholarship.png"
import techsupport from "./photo/technical.png"
import {
  GraduationCap,
  Globe,
  Plane,
  Briefcase,
  School,
  MonitorPlay,
} from "lucide-react";

function Services() {
  return (
   <>
    <div className="mt-10 px-4 sm:px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-8 items-center w-full">
         
          {/* Text Section */}
          <div>
            <h2 className="text-3xl font-bold flex items-center gap-2 text-blue-800 mb-4">
              <GraduationCap className="w-6 h-6" />
              🎓 Core Services
            </h2>

            <h3 className="text-xl font-semibold text-blue-700 mb-2">Career Counseling</h3>
            <ul className="list-disc list-inside space-y-1 text-sm mb-4">
              <li>One-on-one career guidance sessions</li>
              <li>Aptitude and interest assessments</li>
              <li>Counseling for course selection (Science, Arts, Commerce, etc.)</li>
            </ul>

            <h3 className="text-xl font-semibold text-blue-700 mb-2">University & College Selection</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Assistance in choosing the right country, university, and course</li>
              <li>Profile evaluation and matching with institution requirements</li>
            </ul>
          </div>
           {/* Image Section */}
          <div className="w-full h-64 md:h-80 lg:h-96">
            <img
              src={conseling}
              alt="Core Services"
              className="rounded-xl shadow-md w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
      <div className="mt-10">
        <div className="grid md:grid-cols-2 gap-8 items-center px-4 sm:px-6 lg:px-12">
  {/* Image Container */}
 
  {/* Text Content */}
  <div>
    <h2 className="text-3xl font-bold flex items-center gap-2 text-green-800 mb-4">
      <Globe className="w-6 h-6" />
      🌍 International Study Support
    </h2>

    <h3 className="text-xl font-semibold text-green-700 mb-2">Study Abroad Consulting</h3>
    <ul className="list-disc list-inside space-y-1 text-sm mb-4">
      <li>Country-specific consulting (UK, South Korea, Japan, Australia, etc.)</li>
      <li>Visa requirement briefings</li>
    </ul>

    <h3 className="text-xl font-semibold text-green-700 mb-2">Visa Assistance</h3>
    <ul className="list-disc list-inside space-y-1 text-sm">
      <li>Visa documentation support</li>
      <li>Mock interviews & visa form submission</li>
      <li>SOP guidance for visa success</li>
    </ul>
  </div>
   <div className="w-full h-64 md:h-80 lg:h-96">
    <img
      src={studysupp}
      alt="International Support"
      className="rounded-xl shadow-md w-full h-full object-cover"
    />
  </div>

</div>

      </div>
      <div className="mt-10">
        <div className="grid md:grid-cols-2 gap-8 items-center px-4 sm:px-6 lg:px-12">
  {/* Image Section */}
 

  {/* Text Section */}
  <div>
    <h2 className="text-3xl font-bold flex items-center gap-2 text-orange-800 mb-4">
      <Plane className="w-6 h-6" />
      ✈️ Travel & Settlement Services
    </h2>

    <h3 className="text-xl font-semibold text-orange-700 mb-2">Accommodation & Travel Booking Help</h3>
    <ul className="list-disc list-inside space-y-1 text-sm mb-4">
      <li>Help in booking student hostels or temporary stays</li>
      <li>Airport pickup arrangement (if available)</li>
    </ul>

    <h3 className="text-xl font-semibold text-orange-700 mb-2">Post-Arrival Assistance</h3>
    <ul className="list-disc list-inside space-y-1 text-sm">
      <li>Help in setting up bank accounts, SIM cards</li>
      <li>Orientation for local transportation, health services, etc.</li>
    </ul>
  </div>
   <div className="w-full h-64 md:h-80 lg:h-96">
    <img
      src={travelsupp}
      alt="Travel Services"
      className="rounded-xl shadow-md w-full h-full object-cover"
    />
  </div>
</div>

      </div>
      <div className="mt-10">
        <div className="grid md:grid-cols-2 gap-8 items-center px-4 sm:px-6 lg:px-12">
  {/* Image Section */}
  

  {/* Text Section */}
  <div>
    <h2 className="text-3xl font-bold flex items-center gap-2 text-purple-800 mb-4">
      <Briefcase className="w-6 h-6" />
      💼 Additional Services
    </h2>
    <ul className="list-disc list-inside space-y-1 text-sm">
      <li>Internship recommendations during study</li>
      <li>CV/resume preparation</li>
      <li>Career workshops</li>
      <li>Language training (English & local)</li>
      <li>Visa renewal and parental assistance</li>
    </ul>
  </div>
  <div className="w-full h-64 md:h-80 lg:h-96">
    <img
      src={scholarship}
      alt="Additional Services"
      className="rounded-xl shadow-md w-full h-full object-cover"
    />
  </div>
</div>

      </div>
      <div className="mt-10 mb-2">
        <div className="grid md:grid-cols-2 gap-8 items-center px-4 sm:px-6 lg:px-12">
  

  {/* Content */}
  <div>
    <h2 className="text-3xl font-bold flex items-center gap-2 text-gray-800 mb-4">
      <MonitorPlay className="w-6 h-6" />
      🖥️ Technical Add-ons
    </h2>
    <ul className="list-disc list-inside space-y-1 text-sm">
      <li>Online Profile Builder</li>
      <li>Live Chat or Video Counseling</li>
      <li>Document Upload & Tracker</li>
    </ul>
   
  </div>
   {/* Image */}
  <div className="w-full h-64 md:h-80 lg:h-96">
    <img
      src={techsupport}
      alt="Tech Add-ons"
      className="rounded-xl shadow-md w-full h-full object-cover"
    />
  </div>
</div>

      </div>
   <Footer/>
   </>
  )
}

export default Services
