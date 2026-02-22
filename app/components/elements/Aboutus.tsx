import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function About() {
  return (
    <div className="max-w-screen-lg mx-auto py-6 px-6 sm:px-12 text-black bg-gray-50">

      {/* Section 1 */}
      <div className="flex-1 mb-6">
        <h2 className="text-2xl font-semibold text-start mb-2 text-black">
          Comprehensive German Courses
        </h2>
        <p className="text-gray-800">
          We offer structured German language programs from A1 to B2 levels,
          designed to support beginners and advanced learners alike.
          Our courses include grammar mastery, vocabulary building,
          speaking practice, listening comprehension, reading, and writing skills.
        </p>
      </div>

      {/* Section 2 */}
      <div className="flex-1 mb-6">
        <h2 className="text-2xl font-semibold text-start mb-2 text-black">
          Experienced German Instructors
        </h2>
        <p className="text-gray-800">
          Our instructors are highly trained and experienced in teaching
          German as a foreign language. They provide clear explanations,
          interactive lessons, and personalized support to help students
          build confidence and fluency.
        </p>
      </div>

      {/* Section 3 */}
      <div className="flex-1 mb-6">
        <h2 className="text-2xl font-semibold text-start mb-2 text-black">
          Flexible Online Learning
        </h2>
        <p className="text-gray-800">
          Learn German from anywhere with our flexible online classes.
          Whether you are preparing for Ausbildung, university studies,
          or employment opportunities in Germany, our programs allow
          you to study at your own pace with full academic support.
        </p>
      </div>

      {/* Section 4 */}
      <div className="flex-1 mb-6">
        <h2 className="text-2xl font-semibold text-start mb-2 text-black">
          Pathway to Germany
        </h2>
        <p className="text-gray-800">
          We guide students step-by-step toward achieving their goals
          in Germany. From language preparation to understanding
          application requirements, we help you build a strong foundation
          for academic and professional success abroad.
        </p>
      </div>

      <div className="mt-6 justify-end">
        <Link href="/platformfeatures">
          <Button className="bg-yellow-500 text-center font-semibold hover:bg-blue-700 items-start">
            Learn More
          </Button>
        </Link>
      </div>

    </div>
  )
}

export default About