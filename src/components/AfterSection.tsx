import { useLanguage } from '@/contexts/LanguageContext';
import { Sparkles } from 'lucide-react';

export const AfterSection = () => {
  const { t } = useLanguage();

  const outcomes = [
    'after.outcome1',
    'after.outcome2',
    'after.outcome3',
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {t('after.title')}
          </h2>

          <div className="space-y-6 text-left">
            {outcomes.map((key, index) => (
              <div key={key} className="flex gap-4 p-6 rounded-lg bg-primary/5 border border-primary/20">
                <Sparkles className="h-6 w-6 shrink-0 text-primary mt-0.5" />
                <p className="text-foreground">{t(key)}</p>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
            <p className="text-foreground font-medium">{t('after.paradigm')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
