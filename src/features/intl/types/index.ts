import Lang from '../lang/ru.json';


export type MessageKeys = typeof Lang;
export type MessageName = keyof MessageKeys;

export enum LanguageConstants {
    'ru' = 'ru',
    'en-US' = 'en-US',
}

export type Languages = keyof typeof LanguageConstants;


