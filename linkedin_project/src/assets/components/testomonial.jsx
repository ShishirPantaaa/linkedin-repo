// TestimonialCard.jsx
import React from "react";
import ceosir from "./images/sir.jpg";

const TestimonialCard = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-2 border-green-600 rounded-xl p-6 sm:p-8 bg-green-200 shadow-xl">
        {/* Portrait + Name/Title */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-green-300 overflow-hidden">
            <img
              src={ceosir}
              alt="Founder & CEO"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="mt-3 sm:ml-2">
            <p className="text-lg font-semibold text-gray-800">Mr. Sagar Budha</p>
            <p className="text-sm text-gray-700">Founder & CEO</p>
            <p className="text-sm text-gray-700">of LinkedIn Education Consultancy</p>
          </div>
        </div>

        {/* Testimonial Text */}
        <blockquote className="text-gray-800 tracking-wide leading-relaxed text-sm sm:text-base text-center sm:text-left">
          <p className="uppercase font-medium">
            “For more than a decade, I’ve been privileged to turn the
            study-in-Korea dreams of Butwal’s students into reality as Founder &amp;
            CEO of <span className="font-semibold">LinkedIn Education Consultancy</span>.
            As the city’s oldest and most trusted Korea-focused consultancy,
            we’ve earned that reputation through absolute transparency,
            student-first guidance, and truly personalized care. Hundreds of our
            advisees now hold Korean study visas, scholarships, and flourishing
            careers — and each success story fuels my passion to serve even
            better. My deep familiarity with the Korean education system, plus
            an unwavering commitment to ethical counseling, is what sets our
            team apart. If you’re seeking experience you can measure and
            integrity you can feel, I warmly invite you to begin your journey
            with LinkedIn Education Consultancy.”
          </p>
        </blockquote>
      </div>
    </div>
  );
};

export default TestimonialCard;
