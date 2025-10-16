import { useLanguage } from '@/contexts/LanguageContext';
import { Activity, Brain, Calendar, FileText, Pause, Play } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useEffect, useState, useCallback } from 'react';

export const DemoSection = () => {
  const { t } = useLanguage();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

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

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });

    // Keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        api.scrollPrev();
      } else if (e.key === 'ArrowRight') {
        api.scrollNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [api]);

  // Auto-play functionality
  useEffect(() => {
    if (!api || !isPlaying) {
      return;
    }

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [api, isPlaying]);

  const togglePlayPause = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  const slideLabel = t('demo.slideLabel')
    .replace('{{current}}', String(current + 1))
    .replace('{{total}}', String(count));

  return (
    <section 
      id="demo-section" 
      className="py-16 md:py-24 bg-muted/30"
      aria-roledescription="carousel section"
    >
      <div className="container px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('demo.title')}</h2>
            <p className="text-muted-foreground text-lg">{t('demo.subtitle')}</p>
          </div>
          
          <div 
            className="relative" 
            role="group" 
            aria-roledescription="carousel"
            aria-label={t('demo.title')}
          >
            <Carousel 
              className="w-full" 
              opts={{ loop: true, align: 'start' }}
              setApi={setApi}
            >
              <CarouselContent aria-live={isPlaying ? 'off' : 'polite'}>
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <CarouselItem 
                      key={index} 
                      className="md:basis-1/2 lg:basis-1/3"
                      role="group"
                      aria-roledescription="slide"
                      aria-label={`${index + 1} of ${features.length}`}
                    >
                      <Card className="border-none shadow-lg">
                        <CardContent className="p-8">
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
                            <Icon className="h-8 w-8 text-primary" aria-hidden="true" />
                          </div>
                          <h3 className="text-xl font-semibold mb-3">{t(feature.titleKey)}</h3>
                          <p className="text-muted-foreground">{t(feature.descKey)}</p>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              
              <div className="flex items-center justify-center gap-4 mt-8">
                <CarouselPrevious 
                  className="static translate-y-0"
                  aria-label={t('demo.previous')}
                />
                
                <Button
                  variant="outline"
                  size="icon"
                  onClick={togglePlayPause}
                  aria-label={isPlaying ? t('demo.pause') : t('demo.play')}
                  aria-pressed={isPlaying}
                >
                  {isPlaying ? (
                    <Pause className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <Play className="h-4 w-4" aria-hidden="true" />
                  )}
                </Button>
                
                <CarouselNext 
                  className="static translate-y-0"
                  aria-label={t('demo.next')}
                />
              </div>

              <div className="flex justify-center gap-2 mt-4" role="tablist" aria-label="Carousel slides">
                {Array.from({ length: count }).map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === current 
                        ? 'bg-primary w-8' 
                        : 'bg-primary/30 hover:bg-primary/50'
                    }`}
                    onClick={() => api?.scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    aria-current={index === current ? 'true' : 'false'}
                    role="tab"
                  />
                ))}
              </div>

              <p className="text-center text-sm text-muted-foreground mt-2" aria-live="polite" aria-atomic="true">
                {slideLabel}
              </p>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};
