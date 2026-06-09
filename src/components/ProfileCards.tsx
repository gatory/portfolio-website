import Link from "next/link";
import Image from "next/image";

export interface ProfileCardProps {
    name: string;
    description: string;
    bgColor: string;
    route: string;
    profilePicDir: string;
    available?: boolean;
}

export default function ProfileCard({ name, description, bgColor, route, profilePicDir, available = true }: ProfileCardProps) {
    const innerContent = (
        <>            
            <div className={`relative flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 ${bgColor} overflow-hidden rounded-xl border-4 border-transparent ${available ? 'group-hover:border-white' : ''} transition-all duration-200 shadow-md`}>
                {!available && (
                    <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-black/80 text-white text-[10px] sm:text-xs font-bold px-2 py-1 rounded-full z-20 uppercase tracking-widest shadow-lg border border-white/20">
                        TBD
                    </div>
                )}
                <Image 
                    src={profilePicDir} 
                    alt={`${name} profile`} 
                    fill 
                    className="object-cover"
                    priority
                    sizes="(max-width: 640px) 112px, (max-width: 768px) 128px, (max-width: 1024px) 160px, 192px" 
                />
                
                {/* Hover Mask */}
                <div className={`hidden sm:flex absolute inset-0 bg-black/75 items-center justify-center opacity-0 ${available ? 'group-hover:opacity-100' : ''} transition-opacity duration-300 z-10`}>
                    <span className="font-barlow font-semibold text-white text-xl text-center px-2 text-balance">
                        {description}
                    </span>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <span className={`font-barlow font-medium text-base sm:text-lg md:text-xl text-secondary ${available ? 'group-hover:text-white' : ''} transition-colors`}>
                    {name}
                </span>
                <span className="sm:hidden font-barlow text-sm text-secondary text-center mt-1 px-2 text-balance">
                    {description}
                </span>
            </div>
        </>
    );

    if (!available) {
        return (
            <div className="group flex flex-col items-center gap-3 md:gap-4 opacity-60 cursor-not-allowed">
                {innerContent}
            </div>
        );
    }

    return (
        <Link href={route} className="group flex flex-col items-center gap-3 md:gap-4 cursor-pointer">
            {innerContent}
        </Link>
    );
}