import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const CTASection = () => {
  const { t } = useLanguage();

  const handleTelegramClick = () => {
    window.open('https://t.me/AlexiTrackBot?start=lp_home', '_blank');
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/80">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8 text-primary-foreground">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {t('bridge.cta')}
          </h2>
          <p className="text-lg text-primary-foreground/90">
            {t('bridge.urgency')}
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={handleTelegramClick}
            className="text-base"
          >
            {t('hero.cta.primary')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
