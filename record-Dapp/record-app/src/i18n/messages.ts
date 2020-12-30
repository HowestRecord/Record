import { AppLocale } from '../context/locale/AppLocale.enum';

import enMessages from './data/en.json';
import frMessages from './data/fr.json';
import nlMessages from './data/nl.json';

export const translations: Record<AppLocale, Record<string, string>> = {
  [AppLocale.en]: enMessages,
  [AppLocale.fr]: frMessages,
  [AppLocale.nl]: nlMessages,
};
