import { useLanguage, Language } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-full bg-secondary p-1">
      <Button
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('en')}
        className="rounded-full h-8 px-3 text-sm font-medium"
      >
        EN
      </Button>
      <Button
        variant={language === 'uk' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('uk')}
        className="rounded-full h-8 px-3 text-sm font-medium"
      >
        UK
      </Button>
    </div>
  );
};
