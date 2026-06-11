"use client"

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import PlayButton from "../PlayButton";
import GithubButton from "../GithubButton";

export default function HeroSection() {
    const slides = [
        {
            subtitle: "Full-Stack Developer & Designer",
            description:
                "Crafting high-performance web experiences for 5+ years. Specializing in React, Node.js and scalable system design.",
            background: "/images/thumb-fullstack.jpg",
        },
        {
            subtitle: "Embedded Systems Engineer",
            description:
                "Building the gap between hardware and software. Specializing in robotics, firmware, and IoT automation systems.",
            background: "/images/thumb-robot.jpg",
        },
        {
            subtitle: "Data Analyst",
            description:
                "Transforming complex datasets into insights. Specializing in Python, machine learning, and visualization tools.",
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
            <div className="absolute insert-0 w-full h-full -z-10">
                <Image
                    src={slides[currentSlide].background}
                    alt={`${slides[currentSlide].subtitle} Background`}
                    fill
                    className="object-cover transition-all ease-in-out"
                    priority
                />

                {/* Gradient overlay */}
                <div className="bg-linear-to-t lg:bg-linear-to-r from-background via-background via-20% lg:via-15% to-background-0 w-full h-full absolute" />
            </div>

            <div className="flex flex-col justify-center items-center lg:items-start lg:max-w-[60%] text-primary pb-16 lg:p-16 gap-3 lg:gap-8 z-10 select-none">
                <h1 className="font-bebas text-6xl lg:text-9xl text-primary tracking-wider">
                    Kuan
                    <span className="lg:hidden"> </span>
                    <br className="hidden lg:block" />
                    Wei
                </h1>
                <h3 className="font-bebas text-3xl lg:text-6xl text-accent tracking-wider">
                    {slides[currentSlide].subtitle}
                </h3>
                <p className="text-base text-secondary tracking-wide p-4 lg:mr-60 lg:text-2xl text-center lg:text-left">
                    {slides[currentSlide].description}
                </p>

                <div className="flex gap-4">
                    <PlayButton projectOverviewRoute="/projects/JetAutoPro"/>
                    <GithubButton githubRepoLink="https://github.com/gatory" />
                </div>
                
                {/* Carousel Indicator (Mobile) */}
                <div className="lg:hidden flex gap-2 mt-4">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? "w-6 bg-accent" : "w-2 bg-primary/40"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
