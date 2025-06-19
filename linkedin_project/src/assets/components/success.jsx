import React, { useState } from "react";
import bach2025a from "./images/2025 march intake.jpg";
import batch2025b from "./images/2025 march intake1.jpg";
import batch2024a from "./images/2024 september intake.jpg";
import batch2024b from "./images/2024 september intake1.jpg";
import batch2024c from "./images/2024 march intake.jpg";
import batch2024d from "./images/2024 march intake1.jpg";
import photo1 from "./images/unknown11.jpg";
import photo2 from "./images/unknown21.jpg";
import photo3 from "./images/unknown12.jpg";
import photo4 from "./images/khaladi.jpg";
import photo5 from "./images/pujandai.png";
import photo6 from "./images/pujan dai1.jpg";
import photo7 from "./images/pujandaibatch.jpg";
import photo8 from "./images/jen.jpg";
import photo9 from "./images/last.jpg";
import photo10 from "./images/jenuniversity.jpg";

const successStories = [
  { id: 1, name: "Batch 2025 March Intake", image: bach2025a, message: "Successfully move to south korea! Thank You for Trusting Us" },
  { id: 2, name: "Batch 2025 march Intake", image: batch2025b, message: "Successfully move to south korea! Thank You for Trusting Us" },
  { id: 3, name: "Batch 2024 September Intake", image: batch2024a, message: "Visa approved for south korea Thank You for Trusting Us" },
  { id: 4, name: "Batch 2024 September Intake", image: batch2024b, message: "Living the dream life in South korea! Thank You for Trusting Us" },
  { id: 5, name: "Batch 2024 March Intake", image: batch2024c, message: "Living the dream life in South korea! Thank You for Trusting Us" },
  { id: 6, name: "Batch 2024 March Intake", image: batch2024d, message: "Living the dream life in South korea! Thank You for Trusting Us" },
  { id: 7, name: "Batch 2024 September Intake", image: photo1, message: "Living the dream life in South korea! Thank You for Trusting Us" },
  { id: 8, name: "Batch 2024 September Intake", image: photo2, message: "Living the dream life in South korea! Thank You for Trusting Us" },
  { id: 9, name: "Batch 2024 September Intake", image: photo3, message: "Nepal vs Thailand match" },
  { id: 10, name: "Batch 2024 September Intake", image: photo4, message: "Nepal vs Thailand match " },
  { id: 11, name: "Mr. Pujan Neupana", image: photo5, message: "our success cheju halla university Topper Thank You for Trusting Us " },
  { id: 12, name: "Batch 2024 September Intake", image: photo6, message: "Living the dream life in South korea! Thank You for Trusting Us" },
  { id: 13, name: "Batch 2024 September Intake", image: photo7, message: "Living the dream life in South korea! Thank You for Trusting Us" },
  { id: 14, name: "Welcome program ", image: photo8, message: "at Daejin University for Nepali students  Thank You for Trusting Us" },
  { id: 15, name: "Our Success ", image: photo9, message: "for students Happy face! Thank You for Trusting Us" },
  { id: 16, name: "Our Achievements", image: photo10, message: "for Daejin University Thank You for Trusting Us" },
];

const SuccessStoriesSection = () => {
  const [activeCardId, setActiveCardId] = useState(null);

  const handleToggle = (id) => {
    setActiveCardId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="bg-green-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-8">
          Our Success Stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {successStories.map((story) => (
            <div
              key={story.id}
              className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer"
              onClick={() => handleToggle(story.id)}
            >
              <img
                src={story.image}
                alt={story.name}
                className="w-full h-80 object-cover"
              />
              <div
                className={`absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center text-white transition-opacity duration-300 ${
                  activeCardId === story.id
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              >
                <h3 className="text-xl font-semibold mb-1">{story.name}</h3>
                <p className="text-sm px-4">{story.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
