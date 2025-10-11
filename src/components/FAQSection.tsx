import { useLanguage } from '@/contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const FAQSection = () => {
  const { t } = useLanguage();

  const faqs = [1, 2, 3, 4];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t('faq.title')}
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((num) => (
              <AccordionItem key={num} value={`item-${num}`}>
                <AccordionTrigger className="text-left">
                  {t(`faq.q${num}`)}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {t(`faq.a${num}`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
