import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";

// Activity 2: Create array to add your data
const experienceData = [
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML", level: "Intermediate" },
      { name: "CSS", level: "Intermediate" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "Bootstrap", level: "Intermediate" },
      { name: "React JS", level: "Beginner" },
      { name: "Tailwind", level: "Beginner" },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node JS", level: "Intermediate" },
      { name: "MySQL", level: "Beginner" },
      { name: "Python", level: "Intermediate" },
      { name: "C++", level: "Beginner" },
      { name: "MongoDB", level: "Beginner" },
    ],
  },
];

function Experience() {
  return (
    <div id="experience" className="py-20 bg-black text-white">
      <h2 className="text-center text-4xl font-bold mb-12">My Experience</h2>
      <div className="container mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 px-8 md:px-16 lg:px-24">
        {/* Activity 2: How to use map function to iterate over array and create card for each project */}
        {experienceData.map((category, index) => (
          <div
            key={index}
            className="bg-gray-800 hover:shadow-lg transform hover:scale-105 transition duration-300 rounded-xl p-8 shadow-md"
          >
            <h3 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-2xl font-bold mb-6">
              {category.category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {category.skills.map((skill, idx) => (
                <article key={idx} className="flex gap-4 items-center">
                  <BsFillPatchCheckFill className="text-blue-400 text-xl mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold">{skill.name}</h4>
                    <small className="text-sm text-gray-400">
                      {skill.level}
                    </small>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
