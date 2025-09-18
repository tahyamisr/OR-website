import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';
import CommitteeOverview from '@/components/sections/committee-overview';
import MemberProfiles from '@/components/sections/member-profiles';
import OrganizationalStructure from '@/components/sections/organizational-structure';
import EventPlanningGuide from '@/components/sections/event-planning-guide';
import DigitalServicesHub from '@/components/sections/digital-services-hub';
import SkillsDirectory from '@/components/sections/skills-directory';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <AppHeader />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 md:py-20 space-y-24">
          <CommitteeOverview />
          <MemberProfiles />
          <OrganizationalStructure />
          <EventPlanningGuide />
          <SkillsDirectory />
          <DigitalServicesHub />
        </div>
      </main>
      <AppFooter />
    </div>
  );
}
