import { useLanguage } from '@/contexts/LanguageContext';
import { Activity, Brain, Calendar, FileText } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

export const DemoSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Activity,
      titleKey: 'demo.step1.title',
      descKey: 'demo.step1.desc',
      color: 'from-primary/20 to-primary/5'
    },
    {
      icon: Brain,
      titleKey: 'demo.step2.title',
      descKey: 'demo.step2.desc',
      color: 'from-accent/20 to-accent/5'
    },
    {
      icon: Calendar,
      titleKey: 'demo.step3.title',
      descKey: 'demo.step3.desc',
      color: 'from-primary/20 to-primary/5'
    },
    {
      icon: FileText,
      titleKey: 'demo.step4.title',
      descKey: 'demo.step4.desc',
      color: 'from-accent/20 to-accent/5'
    }
  ];

  return (
    <section id="demo-section" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('demo.title')}</h2>
            <p className="text-muted-foreground text-lg">{t('demo.subtitle')}</p>
          </div>
          
          <Carousel className="w-full" opts={{ loop: true, align: 'start' }}>
            <CarouselContent>
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="border-none shadow-lg">
                      <CardContent className="p-8">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{t(feature.titleKey)}</h3>
                        <p className="text-muted-foreground">{t(feature.descKey)}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
