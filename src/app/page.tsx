import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';
import HomeSection from '@/components/sections/home-section';
import LeadershipSection from '@/components/sections/leadership-section';
import OrganizationTypesSection from '@/components/sections/organization-types-section';
import SkillsSection from '@/components/sections/skills-section';
import DigitalServicesSection from '@/components/sections/digital-services-section';
import PlatformComparisonSection from '@/components/sections/platform-comparison-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <AppHeader />
      <main>
        <div className="bg-background">
          <div className="container mx-auto px-4 sm:px-6 py-12">
            <HomeSection />
          </div>
        </div>
        <div className="bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 py-12">
            <LeadershipSection />
          </div>
        </div>
        <div className="bg-background">
          <div className="container mx-auto px-4 sm:px-6 py-12">
            <OrganizationTypesSection />
          </div>
        </div>
        <div className="bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 py-12">
            <PlatformComparisonSection />
          </div>
        </div>
        <div className="bg-background">
          <div className="container mx-auto px-4 sm:px-6 py-12">
            <SkillsSection />
          </div>
        </div>
        <div className="bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 py-12">
            <DigitalServicesSection />
          </div>
        </div>
      </main>
      <AppFooter />
    </div>
  );
}
