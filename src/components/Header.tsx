import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Button } from '@/components/ui/button';
import { Bot } from 'lucide-react';

export const Header = () => {
  const { t } = useLanguage();

  const handleTelegramClick = () => {
    window.open('https://t.me/AlexiTrackBot?start=lp_home', '_blank');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Bot className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">AlexiTrack</span>
        </div>
        
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Button onClick={handleTelegramClick} className="hidden md:flex">
            {t('header.cta')}
          </Button>
          <Button onClick={handleTelegramClick} size="sm" className="md:hidden">
            {t('header.cta')}
          </Button>
        </div>
      </div>
    </header>
  );
};
