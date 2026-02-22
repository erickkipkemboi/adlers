import React from 'react';

function Content2() {
  return (
    <div className="max-w-7xl mx-auto p-4 text-xl">

      <div className="bg-gray-100 p-6 md:p-8 lg:p-10 rounded-lg shadow-lg">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-6 text-black">
          What We Do
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  
          {/* Card 1 */}
          <div className="bg-gray-10 p-6 md:p-8 rounded-lg shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
            <div className="text-left">
              <h3 className="font-semibold text-lg md:text-xl mb-4">
                German Language Courses (A1–B2)
              </h3>
              <p className="text-sm md:text-base text-gray-700">
                We provide structured German language training from beginner (A1) 
                to upper-intermediate (B2) levels.
              </p>
              <p className="text-sm md:text-base text-gray-700 mt-2">
                Our experienced instructors focus on grammar, vocabulary, 
                speaking, listening, reading, and writing skills to ensure 
                complete language mastery.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-10 p-6 md:p-8 rounded-lg shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
            <div className="text-start">
              <h3 className="font-semibold text-lg md:text-xl mb-4">
                Preparation for Germany Opportunities
              </h3>
              <p className="text-sm md:text-base text-gray-700">
                We prepare students for Ausbildung programs, university studies, 
                and skilled employment opportunities in Germany.
              </p>
              <p className="text-sm md:text-base text-gray-700 mt-2">
                Our training ensures you meet the language requirements 
                needed to confidently apply and succeed in Germany.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-10 p-6 md:p-8 rounded-lg shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
            <div className="text-start">
              <h3 className="font-semibold text-lg md:text-xl mb-4">
                Guided Pathway to Germany
              </h3>
              <p className="text-sm md:text-base text-gray-700">
                From language learning to application support, we guide you 
                step-by-step toward achieving your academic or professional 
                goals in Germany.
              </p>
              <p className="text-sm md:text-base text-gray-700 mt-2">
                Start your journey today and build a strong future 
                through the power of the German language.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Content2;