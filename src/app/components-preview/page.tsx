import ProfileCard from "@/components/ProfileCards";

export default function ComponentsPreview() {
  return (
    <main className="flex flex-row min-h-screen items-center justify-center space-x-10  ">
      <ProfileCard
        name="Recruiter"
        description="Skills, experience, & CV"
        bgColor="bg-accent"
        route="/"
        profilePicDir="/images/stalker-profile.jpeg"
      />
      <ProfileCard
        name="Recruiter"
        description="Skills, experience, & CV"
        bgColor="bg-accent"
        route="/"
        profilePicDir="/images/stalker-profile.jpeg"
      />
      <ProfileCard
        name="Recruiter"
        description="Skills, experience, & CV"
        bgColor="bg-accent"
        route="/"
        profilePicDir="/images/stalker-profile.jpeg"
      />
    </main>
  );
}
