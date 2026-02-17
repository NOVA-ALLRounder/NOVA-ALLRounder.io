import { translations, type Locale } from './translations';

export type { Locale };

/**
 * Detect locale from URL pathname.
 * Paths starting with /en/ → 'en', everything else → 'ko'.
 */
export function getLocaleFromPath(pathname: string): Locale {
  // Strip base path if present (GitHub Pages)
  const cleaned = pathname.replace(/^\/[^/]+\.github\.io/, '');
  if (cleaned.startsWith('/en/') || cleaned === '/en') {
    return 'en';
  }
  return 'ko';
}

/**
 * Translate a key for the given locale. Returns the key itself as fallback.
 */
export function t(locale: Locale, key: string): string {
  return translations[locale]?.[key] ?? translations['ko']?.[key] ?? key;
}

/**
 * Build the equivalent path in the target locale.
 * ko: /product → en: /en/product
 * en: /en/product → ko: /product
 */
export function getLocalizedPath(currentPath: string, targetLocale: Locale, basePath: string = '/'): string {
  // Remove basePath prefix to get the app-relative path
  let appPath = currentPath;
  if (basePath !== '/' && currentPath.startsWith(basePath)) {
    appPath = '/' + currentPath.slice(basePath.length);
  }

  // Strip /en/ prefix if present
  const withoutLang = appPath.replace(/^\/en(\/|$)/, '/');

  if (targetLocale === 'en') {
    // Add /en/ prefix
    const enPath = '/en' + (withoutLang === '/' ? '/' : withoutLang);
    return basePath === '/' ? enPath : basePath + enPath.slice(1);
  } else {
    // Korean = root
    return basePath === '/' ? withoutLang : basePath + withoutLang.slice(1);
  }
}

/**
 * Get the language code name for HTML lang attribute.
 */
export function getHtmlLang(locale: Locale): string {
  return locale === 'ko' ? 'ko' : 'en';
}

/**
 * Get og:locale value for Open Graph.
 */
export function getOgLocale(locale: Locale): string {
  return locale === 'ko' ? 'ko_KR' : 'en_US';
}
