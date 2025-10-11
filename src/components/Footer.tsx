import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Bot } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t bg-background py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Bot className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">AlexiTrack</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {t('footer.tagline')}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('footer.privacy')}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('footer.terms')}
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4 md:col-span-2">
            <h4 className="font-semibold">{t('privacy.title')}</h4>
            <p className="text-xs text-muted-foreground">
              {t('footer.disclaimer')}
            </p>
            <LanguageSwitcher />
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AlexiTrack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
