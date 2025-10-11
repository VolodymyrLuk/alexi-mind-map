import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';

export const BridgeSection = () => {
  const { t } = useLanguage();

  const handleTelegramClick = () => {
    window.open('https://t.me/AlexiTrackBot?start=lp_home', '_blank');
  };

  const steps = [
    { title: 'bridge.step1.title', desc: 'bridge.step1.desc' },
    { title: 'bridge.step2.title', desc: 'bridge.step2.desc' },
    { title: 'bridge.step3.title', desc: 'bridge.step3.desc' },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {t('bridge.title')}
            </h2>
            <p className="text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto">
              {t('bridge.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold">{t(step.title)}</h3>
                  <p className="text-sm text-muted-foreground">{t(step.desc)}</p>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-6 -right-4 h-6 w-6 text-muted-foreground" />
                )}
              </div>
            ))}
          </div>

          <div className="space-y-6 p-8 rounded-2xl bg-muted/50 border">
            <p className="text-muted-foreground italic">{t('bridge.founder')}</p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Button size="lg" onClick={handleTelegramClick} className="w-full sm:w-auto">
                {t('bridge.cta')}
              </Button>
              <p className="text-sm text-primary font-medium">{t('bridge.urgency')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
