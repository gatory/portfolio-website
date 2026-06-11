"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import PlayButton from "../PlayButton";
import GithubButton from "../GithubButton";

export default function HeroSection() {
  const slides = [
    {
      subtitle: "Full-Stack Developer",
      description:
        "Crafting high-performance web experiences for 5+ years. Specializing in React, Node.js and scalable system design.",
      thumbnail: "/images/thumb-duck1.jpg",
      background: "/images/UBCInsights/thumb-fullstack.jpg",
    },
    {
      subtitle: "Embedded Systems Engineer",
      description:
        "Building the gap between hardware and software. Specializing in robotics, firmware automation systems.",
      thumbnail: "/images/thumb-duck2.png",
      background: "/images/JetAutoPro/background-embedded.jpg",
    },
    {
      subtitle: "Data Analyst",
      description:
        "Transforming complex datasets into insights. Specializing in Python, machine learning, and visualization tools.",
      thumbnail: "/images/thumb-duck3.jpg",
      background: "/images/thumb-matrix.jpg",
    },
  ];

  //   Swipe Logic
  const [currentSlide, setCurrentSlide] = useState(0);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Helper function for slide navigation
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length,
    );
  };

  // Auto rotation controller
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  // Swipe gesture handler
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (swipeDistance > minSwipeDistance) {
      nextSlide();
    } else if (swipeDistance < -minSwipeDistance) {
      prevSlide();
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section
      className="relative h-screen flex flex-col justify-end lg:justify-center overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <Image
          src={slides[currentSlide].background}
          alt={`${slides[currentSlide].subtitle} Background`}
          fill
          className="hidden lg:block object-cover transition-all ease-in-out"
          priority
        />

        <Image
          src={slides[currentSlide].thumbnail}
          alt={`${slides[currentSlide].subtitle} Background`}
          fill
          className="lg:hidden object-cover transition-all ease-in-out"
          priority
        />

        {/* Gradient overlay */}
        {/* Mobile gradient */}
        <div className="lg:hidden absolute inset-0 bg-linear-to-t from-background via-background/90 via-25% to-transparent" />

        {/* Desktop gradient */}
        <div className="hidden lg:block absolute inset-0 bg-linear-to-r from-background from-25% via-background/60 via-50% to-transparent" />
        <div className="hidden lg:block absolute inset-0 bg-linear-to-t from-background via-background/40 via-15% to-transparent" />
      </div>

      <div className="flex flex-col justify-center items-center lg:items-start lg:max-w-[75%] text-primary pb-16 lg:pb-0 lg:pt-24 lg:pl-16 lg:gap-8 z-10 select-none">
        <h1 className="font-bebas text-6xl lg:text-9xl text-primary tracking-wider">
          Kuan
          <span className="lg:hidden"> </span>
          <br className="hidden lg:block" />
          Wei
        </h1>
        <h3 className="font-bebas text-3xl lg:text-6xl text-accent tracking-wider">
          {slides[currentSlide].subtitle}
        </h3>
        <p className="hidden lg:block text-base text-secondary tracking-wide max-w-lg lg:text-2xl text-center lg:text-left">
          {slides[currentSlide].description}
        </p>

        <div className="flex gap-4 pt-5 lg:pt-0">
          <PlayButton projectOverviewRoute="/projects/JetAutoPro" />
          <GithubButton githubRepoLink="https://github.com/gatory" />
        </div>

        {/* Carousel Indicator (Mobile) */}
        <div className="lg:hidden flex gap-2 mt-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? "w-6 bg-accent" : "w-2 bg-primary/60"
              }`}
            />
          ))}
        </div>

        {/* Desktop Thumbnail Strip */}
        <div className="hidden lg:flex items-end absolute bottom-10 right-16 gap-8 z-10">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
                index === currentSlide
                  ? "w-32 h-16 ring-2 ring-white opacity-100"
                  : "w-24 h-12 opacity-50 hover:opacity-80 hover:w-26 hover:h-13"
              }`}
            >
              <Image
                src={slide.background}
                alt={slide.subtitle}
                fill
                className="object-cover"
                sizes="96px"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
