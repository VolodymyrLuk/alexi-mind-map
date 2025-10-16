import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

export const Hero = () => {
  const { t } = useLanguage();

  const handleTelegramClick = () => {
    window.open('https://t.me/AlexiTrackBot?start=lp_home', '_blank');
  };

  const handleFeaturesClick = () => {
    document.getElementById('demo-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const benefits = [
    { key: 'hero.benefit2', descKey: 'hero.benefit2.desc' },
    { key: 'hero.benefit3', descKey: 'hero.benefit3.desc' },
    { key: 'hero.benefit4', descKey: 'hero.benefit4.desc' },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                {t('hero.headline')}
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                {t('hero.subheadline')}
              </p>
            </div>

            <ul className="space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit.key} className="flex gap-3">
                  <Check className="h-6 w-6 shrink-0 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">{t(benefit.key)}</p>
                    <p className="text-sm text-muted-foreground">{t(benefit.descKey)}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={handleTelegramClick} className="text-base">
                {t('hero.cta.primary')}
              </Button>
              <Button size="lg" variant="outline" onClick={handleFeaturesClick} className="text-base">
                {t('hero.cta.secondary')}
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="AlexiTrack visualization"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
