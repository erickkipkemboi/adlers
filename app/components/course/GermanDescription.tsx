import React from 'react';

function GermanDescription() {
  return (
    <div className="max-w-7xl mx-auto p-4">

      {/* Section Header */}
      <div className="text-2xl text-center mb-8 font-semibold text-[#0B3C5D]">
        <h3>German Course Levels</h3>
      </div>

      {/* Four-Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* A1 */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-lg font-semibold mb-3 text-[#0B3C5D]">A1 – Beginner Level</h3>
          <ul className="list-disc text-sm pl-5 space-y-2 text-gray-700">
            <li>Introduction to basic German vocabulary and grammar.</li>
            <li>Pronunciation and everyday expressions.</li>
            <li>Simple conversations: greetings, self-introduction, daily life.</li>
            <li>Listening and speaking practice sessions.</li>
          </ul>
          <div className="mt-4 text-sm font-medium text-[#C9A227]">
            Duration: 1.5 Months (Online)
          </div>
          <div className="text-base font-bold text-[#0B3C5D]">
            KES 15,000
          </div>
        </div>

        {/* A2 */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-lg font-semibold mb-3 text-[#0B3C5D]">A2 – Elementary Level</h3>
          <ul className="list-disc text-sm pl-5 space-y-2 text-gray-700">
            <li>Expansion of vocabulary for daily communication.</li>
            <li>Understanding short texts and conversations.</li>
            <li>Writing simple letters and messages.</li>
            <li>Structured grammar development.</li>
          </ul>
          <div className="mt-4 text-sm font-medium text-[#C9A227]">
            Duration: 1.5 Months (Online)
          </div>
          <div className="text-base font-bold text-[#0B3C5D]">
            KES 15,000
          </div>
        </div>

        {/* B1 */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-lg font-semibold mb-3 text-[#0B3C5D]">B1 – Intermediate Level</h3>
          <ul className="list-disc text-sm pl-5 space-y-2 text-gray-700">
            <li>Advanced grammar structures and sentence formation.</li>
            <li>Discussing work, education, and social topics.</li>
            <li>Essay writing and formal communication.</li>
            <li>Preparation for B1 certification exams.</li>
          </ul>
          <div className="mt-4 text-sm font-medium text-[#C9A227]">
            Duration: 2 Months (Online)
          </div>
          <div className="text-base font-bold text-[#0B3C5D]">
            KES 20,000
          </div>
        </div>

        {/* B2 */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-lg font-semibold mb-3 text-[#0B3C5D]">B2 – Upper Intermediate Level</h3>
          <ul className="list-disc text-sm pl-5 space-y-2 text-gray-700">
            <li>Fluent communication in professional and academic settings.</li>
            <li>Complex text analysis and advanced vocabulary.</li>
            <li>Presentation and debate practice sessions.</li>
            <li>Preparation for university and professional pathways in Germany.</li>
          </ul>
          <div className="mt-4 text-sm font-medium text-[#C9A227]">
            Duration: 2 Months (Online)
          </div>
          <div className="text-base font-bold text-[#0B3C5D]">
            KES 20,000
          </div>
        </div>

      </div>
    </div>
  );
}

export default GermanDescription;