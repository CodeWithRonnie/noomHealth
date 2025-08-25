import Header from '../src/theme/components/modules/Header/Header';
import Hero from '../src/theme/components/modules/Hero/Hero';
import PathSection from '../src/theme/components/modules/PathSection/PathSection';
import StatsSection from '../src/theme/components/modules/StatsSection/StatsSection';
import PlatformSection from '../src/theme/components/modules/PlatformSection/PlatformSection';
import WeightLossSection from '../src/theme/components/modules/WeightLossSection/WeightLossSection';
import TrustedSection from '../src/theme/components/modules/TrustedSection/TrustedSection';
import ROISection from '../src/theme/components/modules/ROISection/ROISection';
import MedicalEndorsementSection from '../src/theme/components/modules/MedicalEndorsementSection/MedicalEndorsementSection';
import TestimonialsSection from '../src/theme/components/modules/TestimonialsSection/TestimonialsSection';
import ResourcesSection from '../src/theme/components/modules/ResourcesSection/ResourcesSection';
import CTASection from '../src/theme/components/modules/CTASection/CTASection';
import Footer from '../src/theme/components/modules/Footer/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PathSection />
      <StatsSection />
      <PlatformSection />
      <WeightLossSection />
      <TrustedSection />
      <ROISection />
      <MedicalEndorsementSection />
      <TestimonialsSection />
      <ResourcesSection />
      <CTASection />
      <Footer />
    </div>
  );
}
