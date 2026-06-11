import Image from "next/image"
import Link from "next/link";

export interface GithubButtonProps {
    githubRepoLink: string
}

export default function GithubButton({githubRepoLink}: GithubButtonProps) {
    return (
        <Link 
            href={githubRepoLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="w-45 h-10 bg-[#FCB406] rounded-2xl flex items-center justify-center hover:scale-105 transition-transform"
            aria-label="Go to Project Overview"
        >
            <Image src="/images/github-icon.svg" alt="github icon" width={26} height={26} className="mr-2"/>
            <h2 className="font-barlow font-medium text-2xl text-black">GitHub Repo</h2>
        </Link>
    )
}