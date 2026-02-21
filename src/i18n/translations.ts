export type Locale = 'ko' | 'en';

export const translations: Record<Locale, Record<string, string>> = {
  ko: {
    // Nav
    'nav.github': 'GitHub',
    'nav.docs': 'Docs',
    'nav.enterprise': 'Enterprise',
    'nav.product': 'Product',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    'nav.signin': 'Sign in',
    'nav.signup': 'Sign up',

    // Language switcher
    'lang.ko': '한국어',
    'lang.en': 'English',

    // Footer sections
    'footer.product': '제품',
    'footer.product.overview': '개요',
    'footer.product.pricing': '요금제',
    'footer.product.updates': '업데이트',
    'footer.resources': '리소스',
    'footer.resources.docs': '문서',
    'footer.resources.getting-started': '시작 가이드',
    'footer.resources.api': 'API 레퍼런스',
    'footer.resources.faq': 'FAQ',
    'footer.contact': '문의',
    'footer.contact.hub': '문의 허브',
    'footer.contact.email': '이메일',
    'footer.contact.github': 'GitHub',
    'footer.legal': '법적 고지',
    'footer.legal.terms': '이용약관',
    'footer.legal.privacy': '개인정보처리방침',
    'footer.legal.license': '라이선스',
    'footer.copyright': '© {year} ALLRounder. 모든 권리 보유.',

    // Common
    'common.get-started': '시작하기',
    'common.learn-more': '더 알아보기',
    'common.skip-to-content': '본문으로 건너뛰기',
  },
  en: {
    // Nav
    'nav.github': 'GitHub',
    'nav.docs': 'Docs',
    'nav.enterprise': 'Enterprise',
    'nav.product': 'Product',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    'nav.signin': 'Sign in',
    'nav.signup': 'Sign up',

    // Language switcher
    'lang.ko': '한국어',
    'lang.en': 'English',

    // Footer sections
    'footer.product': 'Product',
    'footer.product.overview': 'Overview',
    'footer.product.pricing': 'Pricing',
    'footer.product.updates': 'Updates',
    'footer.resources': 'Resources',
    'footer.resources.docs': 'Documentation',
    'footer.resources.getting-started': 'Getting Started',
    'footer.resources.api': 'API Reference',
    'footer.resources.faq': 'FAQ',
    'footer.contact': 'Contact',
    'footer.contact.hub': 'Contact Hub',
    'footer.contact.email': 'Email',
    'footer.contact.github': 'GitHub',
    'footer.legal': 'Legal',
    'footer.legal.terms': 'Terms of Service',
    'footer.legal.privacy': 'Privacy Policy',
    'footer.legal.license': 'License',
    'footer.copyright': '© {year} ALLRounder. All rights reserved.',

    // Common
    'common.get-started': 'Get Started',
    'common.learn-more': 'Learn More',
    'common.skip-to-content': 'Skip to content',
  },
};
