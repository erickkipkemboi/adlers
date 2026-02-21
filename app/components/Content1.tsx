import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const Contentone = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-12 bg-[#F8FAFC] py-16 px-6 lg:px-20">

      {/* Image Side */}
      <div className="flex-1">
        <Image
          src="/images/5.jpg"
          alt="Students Learning Languages"
          width={800}
          height={500}
          className="rounded-2xl shadow-xl w-full object-cover"
        />
      </div>

      {/* Text Card Side */}
      <div className="flex-1">
        <Card className="shadow-2xl border border-[#C9A227]/20 rounded-2xl">

          <CardHeader>
            <h2 className="text-3xl font-bold text-[#0B3C5D] text-center tracking-wide">
              Who We Are
            </h2>

            <div className="w-20 h-[3px] bg-[#C9A227] mx-auto mt-3 rounded-full" />
          </CardHeader>

          <CardContent className="space-y-4 text-gray-700 text-base leading-relaxed">
            <p>
              At <span className="font-semibold text-[#0B3C5D]">LÖWE & ADLER</span>, 
              we are committed to helping students achieve fluency in 
              <span className="font-medium text-[#0B3C5D]"> German</span> and 
              <span className="font-medium text-[#0B3C5D]"> French</span>, 
              as well as outstanding performance in the 
              <span className="font-medium text-[#0B3C5D]"> IELTS examination</span>.
            </p>

            <p>
              Whether you are preparing for international study, career advancement, 
              or personal growth, our structured programs and expert instructors 
              ensure you gain confidence, competence, and global opportunities.
            </p>
          </CardContent>

          <CardFooter className="pt-6 justify-center">
            <Link
              href="/register"
              className="bg-[#C9A227] hover:bg-[#B38B1D] text-[#0B3C5D] font-semibold py-3 px-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg tracking-wide"
            >
              REGISTER NOW →
            </Link>
          </CardFooter>

        </Card>
      </div>

    </section>
  );
};

export default Contentone;