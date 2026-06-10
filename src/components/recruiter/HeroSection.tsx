import Image from "next/image";

export default function HeroSection() {
  const slides = [
    {
      subtitle: "Full-Stack Developer & Designer",
      thumbnail: "/images/thumb-fullstack.jpg",
    },
    {
      subtitle: "Embedded Systems Engineer",
      thumbnail: "/images/thumb-robot.jpg",
    },
    {
      subtitle: "Data Analyst",
      thumbnail: "/images/thumb-matrix.jpg",
    },
  ];

  return (
    <section className="relative h-screen flex flex-col justify-end">
      <div className="bg-linear-to-t from-background via-background via-20% to-background-0 w-full h-full absolute">
        <Image
          src="/images/thumb-matrix.jpg"
          alt="Hero Background"
          fill
          className="object-cover -z-10"
          priority
        />{" "}
      </div>
      <div className="flex flex-col justify-center items-center text-primary pb-8 gap-3 z-10">
        {/* content — sits at bottom via justify-end */}
        <h1 className="font-bebas text-8xl text-primary tracking-wider">
          Kuan Wei
        </h1>
        <h3 className="font-bebas text-3xl text-accent tracking-wider">
          Full Stack Developer
        </h3>
        <p className="text-xl text-secondary tracking-wide p-4 text-center">
          Crafting high-performance web experience for 5+ years.
          Specializing in React, Node.js and scalable system design
        </p>
      </div>
    </section>
  );
}
