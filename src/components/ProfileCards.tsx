import Link from "next/link";
import Image from "next/image";

export interface ProfileCardProps {
    name: string;
    description: string;
    bgColor: string;
    route: string;
    profilePicDir: string;
}

export default function ProfileCard({ name, description, bgColor, route, profilePicDir }: ProfileCardProps) {
    return (
        <Link href={route} className="group flex flex-col items-center gap-3 md:gap-4">            
            <div className={`relative flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 ${bgColor} overflow-hidden rounded-xl border-4 border-transparent group-hover:border-white transition-all duration-200 shadow-md`}>
                <Image src={profilePicDir} alt={`${name} profile`} fill className="object-cover" />
                
                {/* Hover Mask */}
                <div className="hidden sm:flex absolute inset-0 bg-black/75 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <span className="font-barlow font-semibold text-white text-xl text-center px-2 text-balance">
                        {description}
                    </span>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <span className="font-barlow font-medium text-base sm:text-lg md:text-xl text-secondary group-hover:text-white transition-colors">
                    {name}
                </span>
                <span className="sm:hidden font-barlow text-sm text-secondary text-center mt-1 px-2 text-balance">
                    {description}
                </span>
            </div>
        </Link>
    );
}