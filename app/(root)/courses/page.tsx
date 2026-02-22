import React from 'react';
import Content3 from '@/app/components/Content3';
import GermanDescription from '@/app/components/course/GermanDescription';
 // optional if you have it

function Page() {
  return (
    <>
      <div className="relative">
        <Content3 />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h3 className="text-4xl font-bold">Our Courses</h3>
          <p className="text-xl">Home / Course</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-[-3rem] text-xl px-4">
       
          <GermanDescription />
      </div>
    </>
  );
}

export default Page;
