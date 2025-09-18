import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';
import HomeSection from '@/components/sections/home-section';
import LeadershipSection from '@/components/sections/leadership-section';
import OrganizationTypesSection from '@/components/sections/organization-types-section';
import SkillsSection from '@/components/sections/skills-section';
import DigitalServicesSection from '@/components/sections/digital-services-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <AppHeader />
      <main className="container mx-auto px-6 py-12">
        <HomeSection />
        <LeadershipSection />
        <OrganizationTypesSection />
        <SkillsSection />
        <DigitalServicesSection />
      </main>
      <AppFooter />
    </div>
  );
}
