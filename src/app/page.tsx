import ProfileCard from "@/components/ProfileCards";

export default function ProfileSelection() {
    const pathways = [
        {
            title: "Recruiter",
            subtitle: "Skills, experience, & CV",
            route: "/recruiter",
            bgColor: "bg-[#477CC0]",
            profilePicDir: "/images/profile-pictures/recruiter-profile.jpeg",
            available: true,
        },
        {
            title: "Teammate / Founder",
            subtitle: "Hackathons & big ideas",
            route: "/teammate",
            bgColor: "bg-[#96D49D]",
            profilePicDir: "/images/profile-pictures/teammate-profile.jpeg",
            available: false,
        },
        {
            title: "Stalker",
            subtitle: "Just curious, no judgement",
            route: "/stalker",
            bgColor: "bg-[#7B46B4]",
            profilePicDir: "/images/profile-pictures/stalker-profile.jpeg",
            available: false,
        },
    ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 md:p-24 selection:bg-accent selection:text-white">
      {/* Top Header Section */}
      <div className="flex flex-col items-center text-center space-y-3 mb-16">
        <h2 className="font-bebas text-3xl md:text-5xl text-accent tracking-wider">
          Kuan.Code
        </h2>

        <h1 className="font-bebas text-5xl md:text-7xl text-white tracking-wide">
          Who's Visiting?
        </h1>

        <p className="font-barlow font-medium text-sm md:text-base text-zinc-400 tracking-widest uppercase">
          Pick your profile to continue
        </p>
      </div>

      {/* Profile Selection Grid */}
      <div className="flex flex-row flex-wrap items-center justify-center gap-6 md:gap-10 w-full max-w-4xl">
        {pathways.map((pathway) => (
          <ProfileCard
            key={pathway.title}
            name={pathway.title}
            description={pathway.subtitle}
            bgColor={pathway.bgColor}
            route={pathway.route}
            profilePicDir={pathway.profilePicDir}
            available={pathway.available}
          />
        ))}
      </div>
    </main>
  );
}
