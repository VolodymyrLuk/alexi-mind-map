import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { BeforeSection } from '@/components/BeforeSection';
import { AfterSection } from '@/components/AfterSection';
import { BridgeSection } from '@/components/BridgeSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { DemoSection } from '@/components/DemoSection';
import { PrivacySection } from '@/components/PrivacySection';
import { ContactSection } from '@/components/ContactSection';
import { FAQSection } from '@/components/FAQSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <BeforeSection />
        <AfterSection />
        <BridgeSection />
        <FeaturesSection />
        <DemoSection />
        <PrivacySection />
        <ContactSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
