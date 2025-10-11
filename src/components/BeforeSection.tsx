import { useLanguage } from '@/contexts/LanguageContext';
import { AlertCircle } from 'lucide-react';

export const BeforeSection = () => {
  const { t } = useLanguage();

  const painPoints = [
    'before.pain1',
    'before.pain2',
    'before.pain3',
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {t('before.title')}
          </h2>

          <div className="space-y-6 text-left">
            {painPoints.map((key, index) => (
              <div key={key} className="flex gap-4 p-6 rounded-lg bg-muted/50 border">
                <AlertCircle className="h-6 w-6 shrink-0 text-destructive mt-0.5" />
                <p className="text-muted-foreground">{t(key)}</p>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-lg bg-primary/5 border border-primary/20">
            <p className="text-foreground font-medium">{t('before.belief')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
