import { useLanguage } from '@/contexts/LanguageContext';
import { Play } from 'lucide-react';

export const DemoSection = () => {
  const { t } = useLanguage();

  return (
    <section id="demo-section" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border shadow-lg">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-background/90 backdrop-blur flex items-center justify-center mx-auto">
                <Play className="h-10 w-10 text-primary" />
              </div>
              <p className="text-lg font-medium text-muted-foreground">
                {t('hero.cta.secondary')}
              </p>
              <p className="text-sm text-muted-foreground">
                Video placeholder - coming soon
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
