import en from './lang/en.json';
import fr from './lang/fr.json';
import kr from './lang/kr.json';
import en_numberFormats from './lang/en-number-formats.json';
import fr_numberFormats from './lang/fr-number-formats.json';
import kr_numberFormats from './lang/kr-number-formats.json';
import fr_ca_numberFormats from './lang/fr-ca-number-formats.json';
import { Locales } from '/@/enums/locales';

export const messages = {
  [Locales.EN]: en,
  [Locales.EN_US]: en,
  [Locales.FR_CA]: fr,
  [Locales.FR]: fr,
  [Locales.KR]: kr,
};

export const numberFormats = {
  [Locales.EN]: en_numberFormats,
  [Locales.EN_US]: en_numberFormats,
  [Locales.FR_CA]: fr_ca_numberFormats,
  [Locales.FR]: fr_numberFormats,
  [Locales.KR]: kr_numberFormats,
};

export const defaultLocale = Locales.KR;
