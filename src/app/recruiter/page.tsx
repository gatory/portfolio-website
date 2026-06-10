import HeroSection from "@/components/recruiter/HeroSection";
import Navbar from "@/components/recruiter/Navbar";
import ProjectSection from "@/components/recruiter/ProjectSection";

export default function RecruiterProfile() {
    return (
        <main>
            <Navbar />
            <HeroSection />
            <ProjectSection />
        </main>
    )
}