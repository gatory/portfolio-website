export default function ProfileSelection() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 p-6 md:p-24 selection:bg-accent selection:text-white">
      {/* Top Header Section */}
      <div className="flex flex-col items-center text-center space-y-3 mb-16">
        <h2 className="font-bebas text-3xl md:text-4xl text-accent tracking-wider">
          Kuan.Code
        </h2>

        {/* Changed text-primary to text-white since primary is your background white */}
        <h1 className="font-bebas text-5xl md:text-7xl text-white tracking-wide">
          Who's Visiting?
        </h1>

        {/* Fixed weight class: font-barlow + font-medium */}
        <p className="font-barlow font-medium text-sm md:text-base text-zinc-400 tracking-widest uppercase">
          Pick your profile to continue
        </p>
      </div>

      {/* Profile Selection Grid */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10 w-full max-w-3xl">
        {/* Recruiter Profile */}
        <button className="group flex flex-col items-center space-y-3 focus:outline-none">
          <div className="w-28 h-28 md:w-36 md:h-36 bg-accent rounded-xl flex items-center justify-center border-4 border-transparent group-hover:border-white transition-all duration-200 shadow-md">
            <span className="font-bebas text-5xl text-white">R</span>
          </div>
          <span className="font-barlow font-medium text-lg text-zinc-400 group-hover:text-white transition-colors">
            Recruiter
          </span>
        </button>

        {/* Teammate Profile */}
        <button className="group flex flex-col items-center space-y-3 focus:outline-none">
          <div className="w-28 h-28 md:w-36 md:h-36 bg-blue-600 rounded-xl flex items-center justify-center border-4 border-transparent group-hover:border-white transition-all duration-200 shadow-md">
            <span className="font-bebas text-5xl text-white">T</span>
          </div>
          <span className="font-barlow font-medium text-lg text-zinc-400 group-hover:text-white transition-colors">
            Teammate
          </span>
        </button>

        {/* Stalker Profile */}
        <button className="group flex flex-col items-center space-y-3 focus:outline-none">
          <div className="w-28 h-28 md:w-36 md:h-36 bg-zinc-800 rounded-xl flex items-center justify-center border-4 border-transparent group-hover:border-white transition-all duration-200 shadow-md">
            <span className="font-bebas text-5xl text-zinc-400 group-hover:text-white">
              🕵️‍♂️
            </span>
          </div>
          <span className="font-barlow font-medium text-lg text-zinc-400 group-hover:text-white transition-colors">
            Stalker
          </span>
        </button>
      </div>
    </main>
  );
}
