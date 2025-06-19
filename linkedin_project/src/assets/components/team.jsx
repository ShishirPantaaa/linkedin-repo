import React, { useState } from "react";
import { Facebook, Instagram, Phone } from "lucide-react";
import CeoImage from "./images/sagar sir.jpg";
import RecImage from "./images/bhumika.jpg";
import AccImage from "./images/sujana.jpg";
import Graphicdes from "./images/Shishir.jpg";
import japConsilor from "./images/Kajal.jpg";
import insImage from "./images/languageInstructor.jpg";
import susmsmiss from "./images/susmamiss.jpg"
import kamaladd from "./images/kamaladd.jpg"
const teamMembers = [
  {
    id: 1,
    name: "Kajal Shrestha",
    role: "Japanese counselor",
    image: japConsilor,
    facebook: "https://www.facebook.com/share/1ACTuXJSt4/",
    instagram: "https://www.instagram.com/mr._buda?igsh=em9la3c1eWp2ZTd4",
    phone: "tel:+9779851235191",
  },
  {
    id: 2,
    name: "Sujana Budha Magar",
    role: "Accountant",
    image: AccImage,
    facebook: "https://www.facebook.com/share/1HWLPjdaZs/",
    instagram: "https://instagram.com/elena",
    phone: "tel:+9779867268494",
  },
  {
    id: 3,
    name: "Sagar Budha Magar",
    role: "Founder and CEO",
    image: CeoImage,
    facebook: "https://www.facebook.com/share/16g2KiSRHF/",
    instagram: "https://www.instagram.com/mr._buda?igsh=em9la3c1eWp2ZTd4",
    phone: "tel:+9779851235191",
  },
  {
    id: 4,
    name: "Giriraj Sharma",
    role: "Language Instructor(About more than 15 years of experiences)",
    image: insImage,
    facebook: "https://www.facebook.com/share/16WwfFL2ma/",
    instagram: "https://instagram.com/riya",
    phone: "tel:+9779800000004",
  },
  {
    id: 5,
    name: "Sushma Banjade",
    role: "Document officer",
    image: susmsmiss,
    facebook: "https://www.facebook.com/share/1AqU2oUGaG/",
    instagram: "https://instagram.com/",
    phone: "tel:+9779869589972",
  },
  {
    id: 6,
    name: "Bhumika Thapa Magar",
    role: "Resepsionis ",
    image: RecImage,
    facebook: "https://www.facebook.com/share/16WwfFL2ma/",
    instagram: "https://instagram.com",
    phone: "tel:+9779800000004",
  },
  {
    id: 7,
    name: "Shishir Panta",
    role: "Digitalmarketer/Web Developer",
    image: Graphicdes,
    facebook: "https://www.facebook.com/share/19iwbHoEvA/",
    instagram:
      "https://www.instagram.com/panta_shishir?igsh=MXh6MTdhbnB1aWVmdg==",
    phone: "tel:+9779748809397",
  },
  {
    id: 8,
    name: "Kamala Thapa",
    role: " Office Helper",
    image: kamaladd,
    facebook: "https://facebook.com/binod",
    instagram: "https://instagram.com/binod",
    phone: "tel:+9779800000005",
  },
];

const TeamSection = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleToggle = (id) => {
    setActiveCard((prev) => (prev === id ? null : id));
  };

  return (
    <section className="bg-green-700 py-10 px-4">
      <div className="bg-lime-400 rounded-xl p-8 text-center max-w-[1500px] mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4">Meet our Team</h2>
        <p className="text-white text-xl mb-10">
          Our dedicated team of experts is here to guide you toward a successful
          academic journey abroad
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="relative group bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
              onClick={() => handleToggle(member.id)}
            >
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                {/* Hover + Tap Overlay */}
                <div
                  className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-6 transition-opacity duration-300 ${
                    activeCard === member.id
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  <a
                    href={member.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-500"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Facebook size={28} />
                  </a>
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-pink-500"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Instagram size={28} />
                  </a>
                  <a
                    href={member.phone}
                    className="text-white hover:text-green-400"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Phone size={28} />
                  </a>
                </div>
              </div>

              <div className="p-4 text-center">
                <h3 className="font-semibold text-green-700 text-lg">
                  {member.role}
                </h3>
                <p className="text-gray-600">{member.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
