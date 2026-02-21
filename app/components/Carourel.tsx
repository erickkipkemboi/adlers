"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import Link from "next/link"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

import { Button } from "@/components/ui/button"

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 10000, stopOnInteraction: false })
  )

  const slides = [
    {
      src: "/images/1.jpg",
      title: "Master English",
      flag: "/flags/UK.jpg",
      description:
        "Study, work, and travel across the globe with fluent English. Access top universities and high-paying careers worldwide.",
    },
    {
      src: "/images/2.jpg",
      title: "Learn German",
      flag: "/flags/Germany.jpg",
      description:
        "Join Ausbildung, FSJ, and FSD programs in Germany. Earn while you learn in one of Europe’s strongest economies.",
    },
    {
      src: "/images/3.jpg",
      title: "Speak French",
      flag: "/flags/France.jpg",
      description:
        "Study in France, Canada, Belgium, and Switzerland while mastering the language of diplomacy and culture.",
    },
    {
      src: "/images/4.jpg",
      title: "Explore Spanish",
      flag: "/flags/Spain.jpg",
      description:
        "Connect with over 500 million Spanish speakers worldwide and unlock exchange opportunities globally.",
    },
  ]

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-screen h-screen overflow-hidden"
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index} className="w-full h-screen relative">
            <div className="w-full h-full relative">

              {/* Background Image */}
              <Image
                src={slide.src}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover"
              />

              {/* Navy + Gold Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0B3C5D]/90 via-black/80 to-black/90 flex flex-col items-center justify-center text-white px-6 text-center space-y-6">

                {/* Flag + Title */}
                <div className="flex items-center space-x-4">
                  <Image
                    src={slide.flag}
                    alt={`${slide.title} flag`}
                    width={55}
                    height={40}
                    className="rounded-sm shadow-lg"
                  />

                  <h2 className="text-4xl md:text-6xl font-bold tracking-wide">
                    {slide.title}
                  </h2>
                </div>

                {/* Gold Accent Line */}
                <div className="w-24 h-[3px] bg-[#C9A227] rounded-full" />

                {/* Description */}
                <p className="text-lg md:text-xl max-w-3xl text-gray-200 leading-relaxed">
                  {slide.description}
                </p>

                {/* CTA Button */}
                <Link href="/apply">
                  <Button
                    className="mt-4 bg-[#C9A227] hover:bg-[#B38B1D] text-[#0B3C5D] font-semibold text-lg px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl"
                  >
                    Apply Now →
                  </Button>
                </Link>

              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}