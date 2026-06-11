import GithubButton from "@/components/GithubButton";
import PlayButton from "@/components/PlayButton";

export default function ComponentsPreview() {
    return (
        <main>
            <PlayButton projectOverviewRoute="/projects/JetAutoPro">
            </PlayButton>
    
            <GithubButton githubRepoLink="https://github.com/Connect-Me-Tutoring/connect-me-tutor-portal"></GithubButton>
        </main>
    )
}
