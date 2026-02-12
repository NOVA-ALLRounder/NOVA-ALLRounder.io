# NOVA Launch Site (Phase 1)

Astro + Tailwind 기반의 정적 제품 런칭 페이지입니다.  
GitHub Pages(`organization.github.io`) 배포를 기준으로 구성되어 있습니다.

## Tech Stack

- Astro (static output)
- Tailwind CSS
- Astro file-based routing
- GitHub Actions + GitHub Pages

## Run Locally

```bash
npm ci
npm run dev
```

개발 서버: `http://localhost:4321`

## Build

```bash
npm run build
npm run preview
```

빌드 산출물: `dist/`

## Routing

- `/` Home
- `/product` Product
- `/solutions` Solutions (B2B)
- `/pricing` Pricing
- `/docs` Docs Landing
- `/docs/getting-started`
- `/docs/tutorials`
- `/docs/api`
- `/docs/faq`
- `/docs/changelog`
- `/updates` Updates
- `/company` Company (+ Contact 섹션 포함)

## Project Structure

```text
src/
  components/
    ui/
  layouts/
  pages/
    docs/
    updates/
  styles/
public/
.github/workflows/deploy.yml
astro.config.mjs
```

## GitHub Pages Deploy

워크플로우 파일: `.github/workflows/deploy.yml`

- `main` 브랜치 푸시 시 자동 배포
- GitHub Pages artifact 경로: `dist`
- `astro.config.mjs` 설정:
  - `output: 'static'`
  - `site: 'https://nova-allrounder.github.io'`
  - `base: '/'`

필수 저장소 설정:

1. GitHub Repository > `Settings` > `Pages`
2. Source를 `GitHub Actions`로 선택
3. `main` 브랜치에 푸시하면 자동 배포

## Notes

- 콘텐츠는 1차 빌드 기준 placeholder 중심으로 구성됨
- SEO 기본 메타/OG, `robots.txt`, `sitemap` 생성 포함
- `prefers-reduced-motion` 지원 및 키보드 포커스 스타일 적용
