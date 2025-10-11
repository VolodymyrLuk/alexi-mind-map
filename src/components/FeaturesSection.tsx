import { useLanguage } from '@/contexts/LanguageContext';
import { Layers, Hand, Tag, Calendar, FileText } from 'lucide-react';

const iconMap = {
  1: Layers,
  2: Hand,
  3: Tag,
  4: Calendar,
  5: FileText,
};

export const FeaturesSection = () => {
  const { t } = useLanguage();

  const features = [1, 2, 3, 4, 5];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {t('features.title')}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((num) => {
            const Icon = iconMap[num as keyof typeof iconMap];
            return (
              <div
                key={num}
                className="p-6 rounded-xl bg-card border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">
                    {t(`features.${num}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t(`features.${num}.desc`)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
