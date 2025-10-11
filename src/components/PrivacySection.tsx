import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Info } from 'lucide-react';

export const PrivacySection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t('privacy.title')}
            </h2>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-lg bg-muted/50 border flex gap-4">
              <Info className="h-6 w-6 shrink-0 text-primary mt-0.5" />
              <p className="text-sm text-muted-foreground">{t('privacy.telegram')}</p>
            </div>
            <div className="p-6 rounded-lg bg-muted/50 border flex gap-4">
              <Info className="h-6 w-6 shrink-0 text-primary mt-0.5" />
              <p className="text-sm text-muted-foreground">{t('privacy.health')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
