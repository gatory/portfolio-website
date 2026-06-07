"use client";

import { useState } from "react";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

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
    <nav className="flex items-center justify-between p-4 text-primary z-50">
      <h2 className="font-bebas text-3xl sm:text-5xl text-accent tracking-wider">
        Kuan.Code
      </h2>

      {/* Menu Toggle Button */}
      <button
        onClick={toggleMenu}
        className="sm:hidden relative w-9 h-9 flex flex-col justify-center items-center z-50 focus:outline-none"
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

      {/* Right Leaf Menu Overlay */}
      <div
        className={`sm:hidden fixed top-0 right-0 h-screen w-[75vw] flex flex-col bg-[#141414] border-l border-white/8 transform transition-transform shadow-2xl duration-300 ease-in-out z-40 ${
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

      {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 transition-opacity"
        />
      )}
    </nav>
  );
}
