"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const profiles = [
    { name: "Recruiter", image: "/images/recruiter-profile.jpeg", route: "/recruiter", available: true },
    { name: "Teammate", image: "/images/teammate-profile.jpeg", route: "/teammate", available: false },
    { name: "Stalker", image: "/images/stalker-profile.jpeg", route: "/stalker", available: false },
  ];
  const [selectedProfile, setSelectedProfile] = useState(profiles[0]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const sections = [
    {
      name: "Home",
      route: "#home",
    },
    {
      name: "Projects",
      route: "#projects",
    },
    {
      name: "Experience",
      route: "#experience",
    },
    {
      name: "Contact",
      route: "#contact",
    },
  ];

  return (
    <nav className="flex items-center justify-between md:justify-start md:gap-20 p-8 md:10 text-primary z-50">
      {/* Logo shows on both */}
      <h2 className="font-bebas text-4xl md:text-6xl text-accent tracking-wider">
        Kuan.Code
      </h2>

      {/* Mobile */}
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center z-50 focus:outline-none"
        aria-label="Toggle Menu"
      >
        <span
          className={`absolute top-1/2 left-1/2 bg-primary h-0.5 w-6 rounded-sm transform transition duration-300 ease-in-out ${
            isOpen
              ? "rotate-45 -translate-y-px -translate-x-1/2"
              : "-translate-y-2 -translate-x-1/2"
          }`}
        />

        <span
          className={`absolute top-1/2 left-1/2 bg-primary h-0.5 w-6 rounded-sm transform transition duration-300 ease-in-out ${
            isOpen
              ? "opacity-0 -translate-x-1/2"
              : "opacity-100 -translate-x-1/2"
          }`}
        />

        <span
          className={`absolute top-1/2 left-1/2 bg-primary h-0.5 w-6 rounded-sm transform transition duration-300 ease-in-out ${
            isOpen
              ? "-rotate-45 -translate-y-px -translate-x-1/2"
              : "translate-y-2 -translate-x-1/2"
          }`}
        />
      </button>

      {/* Mobile Right Leaf */}
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-[75vw] flex flex-col bg-[#141414] border-l border-white/8 transform transition-transform shadow-2xl duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Top Logo & Divider */}
        <div className="flex items-center justify-center h-20 mt-15 border-slate-700">
          <h2 className="font-bebas text-3xl text-accent tracking-wider">
            Kuan.Code
          </h2>
        </div>

        {/* Menu Links */}
        <div className="flex-1 flex flex-col justify-center">
          <ul className="flex flex-col gap-8 text-lg font-medium px-6">
            {sections.map((section) => (
              <li key={section.name} className="flex">
                <a
                  href={section.route}
                  onClick={() => {
                    setActiveSection(section.name);
                    toggleMenu();
                  }}
                  className={`w-full py-2 pl-4 border-l-4 transition-colors ${
                    activeSection === section.name
                      ? "border-accent text-accent"
                      : "border-transparent text-gray-300 hover:text-accent hover:border-accent/40"
                  }`}
                >
                  {section.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Background Blur */}
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 transition-opacity"
        />
      )}

      {/* Desktop */}
      {/* Desktop Sections */}
      <ul className="hidden md:flex flex-auto h-full justify-start items-center gap-10 p-0 m-0 text-2xl font-medium text-secondary tracking-wide">
        {sections.map((section) => (
          <li key={section.name} className="flex items-center justify-center">
            <a
              href={section.route}
              onClick={() => {
                setActiveSection(section.name);
              }}
              className={`block pb-0 px-1 border-b-4 transition-all duration-300 ${
                activeSection === section.name
                  ? "border-accent text-primary -translate-y-1"
                  : "border-transparent text-secondary hover:text-primary hover:border-accent/40"
              }`}
            >
              {section.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop Right Side */}
      <div className="hidden md:flex items-center gap-4 relative">
        <button 
          onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
          className={`h-10 w-10 relative rounded-xl overflow-hidden shrink-0 hover:ring-2 hover:ring-accent/50 transition-all focus:outline-none ${
            isProfileDropdownOpen ? "scale-110 ring-2 ring-accent/50" : "scale-100"
          }`}
        >
          <Image
            src={selectedProfile.image}
            alt={`${selectedProfile.name} Profile`}
            fill
            className="object-cover"
            priority
            sizes="40px"
          />
        </button>

        {/* Profile Dropdown Menu */}
        {isProfileDropdownOpen && (
          <>
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setIsProfileDropdownOpen(false)} 
            />
            <div className="absolute top-14 right-0 w-50 bg-[#141414] border border-white/10 rounded-xl shadow-2xl py-3 z-50 flex flex-col">
              {profiles.map((profile) => {
                const isSelected = selectedProfile.name === profile.name;
                
                const itemContent = (
                  <>
                    <div className="h-10 w-10 relative rounded-xl overflow-hidden shrink-0">
                      <Image
                        src={profile.image}
                        alt={profile.name}
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                    <div className="flex flex-col flex-1 text-left">
                      <span className="font-medium text-xl">{profile.name}</span>
                      {!profile.available && (
                        <span className="text-[10px] font-semibold text-accent/80 uppercase tracking-widest mt-0.5">
                          TBD
                        </span>
                      )}
                    </div>
                  </>
                );

                if (!profile.available) {
                  return (
                    <div key={profile.name} className="flex items-center gap-4 px-5 py-3 opacity-50 cursor-not-allowed">
                      {itemContent}
                    </div>
                  );
                }

                return (
                  <Link
                    href={profile.route}
                    key={profile.name}
                    onClick={() => {
                      setSelectedProfile(profile);
                      setIsProfileDropdownOpen(false);
                    }}
                    className={`flex items-center gap-4 px-5 py-3 hover:bg-white/5 transition-colors ${
                      isSelected ? "text-accent" : "text-gray-300"
                    }`}
                  >
                    {itemContent}
                  </Link>
                );
              })}
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
