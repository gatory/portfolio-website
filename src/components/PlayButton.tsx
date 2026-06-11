import Link from "next/link";

export interface PlayButtonProps {
    projectOverviewRoute: string
}

export default function PlayButton({projectOverviewRoute}: PlayButtonProps) {
    return (
        <Link 
            href={projectOverviewRoute}
            className="w-10 h-10 bg-[#3183FF] rounded-full flex items-center justify-center hover:scale-105 transition-transform"
            aria-label="Go to Project Overview"
        >
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="black" 
                className="w-6 h-6"
            >
                <path d="M8 5v14l11-7z" />
            </svg>
        </Link>
    )
}