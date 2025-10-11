# 🇰🇷 Korean Name Generator

외국인과 한류 팬을 위한 한국 이름 생성기! K-pop과 K-drama를 사랑하는 전 세계 팬들이 자신만의 특별한 한국 이름을 찾을 수 있습니다.

## ✨ 주요 기능

### 🎯 필수 기능 (MVP)
- **이름 생성**: 성별 선택(남성/여성/논바이너리) → 랜덤 한국 이름 추천
- **스타일 선택**: Traditional, Modern, Trendy 중 선택
- **테마 선택**: Nature, Wisdom, Strength, Beauty, Virtue 중 선택
- **발음 가이드**: 로마자 표기로 정확한 발음 제공
- **의미 설명**: 각 이름의 의미를 영어로 표시
- **추천 이름**: 비슷한 스타일/테마의 이름 3개 추천
- **클립보드 복사**: 생성된 이름을 클립보드로 복사

### 🎨 디자인 특징
- 현대적이고 아름다운 그라데이션 UI
- 다크 모드 완벽 지원
- 완전 반응형 디자인 (모바일/태블릿/데스크톱)
- 부드러운 애니메이션과 호버 효과
- K-pop/K-drama 팬을 위한 친근한 인터페이스

## 📊 데이터

- **30개 성씨**: 김, 이, 박, 최, 정, 강, 조, 윤, 장, 임, 한, 오, 서, 신, 권, 황, 안, 송, 류, 전, 홍, 고, 문, 양, 손, 배, 백, 허, 남, 심
- **남성 이름 57개**: 각 이름마다 스타일/테마/의미 포함
  - Trendy: 18개 (Wisdom 5, Virtue 5, Nature 5, Strength 3)
  - Modern: 23개 (Wisdom 6, Virtue 5, Nature 4, Strength 4)
  - Traditional: 16개 (Wisdom 5, Virtue 4, Nature 4, Strength 4)
- **여성 이름 63개**: 각 이름마다 스타일/테마/의미 포함
  - Trendy: 20개 (Beauty 5, Wisdom 6, Nature 5, Virtue 4)
  - Modern: 27개 (Beauty 6, Wisdom 6, Nature 5, Virtue 5)
  - Traditional: 16개 (Beauty 5, Wisdom 5, Nature 4, Virtue 4)
- 모든 이름에 로마자 표기 및 영어 의미 제공
- **총 조합 가능한 이름 수**: 3,600개 이상! (30 성씨 × 120 이름)

## 🚀 시작하기

### 개발 서버 실행

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 사용 방법

1. **성별 선택**: Male, Female, Non-binary 중 선택
2. **스타일 선택**: 원하는 이름 스타일 선택 (또는 Any)
3. **테마 선택**: 원하는 이름 테마 선택 (또는 Any)
4. **생성 버튼 클릭**: "✨ Generate My Name!" 클릭
5. **결과 확인**: 한국 이름과 발음, 의미 확인
6. **이름 복사**: "📋 Copy to Clipboard" 버튼으로 이름 복사
7. **추천 이름 탐색**: 비슷한 이름 3개 중 마음에 드는 이름 선택

## 🛠️ 기술 스택

- **Framework**: Next.js 15.5.4 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Runtime**: Turbopack

## 📁 프로젝트 구조

```
korean-name-generator/
├── src/
│   ├── app/
│   │   ├── page.tsx          # 메인 페이지 (UI 컴포넌트)
│   │   ├── layout.tsx         # 레이아웃
│   │   └── globals.css        # 글로벌 스타일
│   └── data/
│       └── names.ts           # 한국 이름 데이터 및 로직
├── public/                    # 정적 파일
└── package.json
```

## 🔍 SEO 최적화

이 프로젝트는 다음과 같은 SEO 최적화가 적용되어 있습니다:

### ✅ 구현된 SEO 기능

1. **메타데이터 최적화**
   - 상세한 title과 description
   - 키워드 최적화
   - Open Graph 태그 (Facebook, LinkedIn 공유)
   - Twitter Cards (Twitter 공유)

2. **검색 엔진 크롤링**
   - `robots.txt` - 크롤러 가이드라인
   - `sitemap.xml` - 사이트 구조 맵
   - Canonical URL 설정

3. **구조화된 데이터 (JSON-LD)**
   - Schema.org WebApplication 마크업
   - 검색 결과 rich snippets 지원

4. **성능 최적화**
   - Next.js App Router 사용
   - 이미지 최적화
   - 폰트 최적화 (Geist)

5. **PWA 지원**
   - Web App Manifest
   - 모바일 최적화
   - 다크 모드 지원

### 📝 배포 전 체크리스트

배포하기 전에 다음 항목들을 확인하세요:

1. **Google Search Console 설정**
   ```tsx
   // src/app/layout.tsx
   verification: {
     google: 'your-google-site-verification-code', // 여기에 실제 코드 입력
   }
   ```

2. **도메인 URL 업데이트**
   - `src/app/layout.tsx`의 `metadataBase` URL 변경
   - `src/app/robots.ts`의 sitemap URL 변경
   - `src/app/sitemap.ts`의 URL 변경
   - `src/app/page.tsx`의 JSON-LD URL 변경

3. **소셜 미디어 이미지 생성**
   - `/public/og-image.png` (1200x630px) 생성
   - `/public/icon-192.png` (192x192px) 생성
   - `/public/icon-512.png` (512x512px) 생성
   - `/public/apple-touch-icon.png` (180x180px) 생성

4. **Analytics 설정** (선택사항)
   - Google Analytics
   - Vercel Analytics

### 🎯 SEO 팁

- **콘텐츠 품질**: 고유하고 가치있는 콘텐츠 제공
- **키워드**: "Korean name generator", "K-pop name" 등 타겟 키워드 사용
- **모바일 최적화**: 반응형 디자인 완성
- **속도**: Core Web Vitals 최적화
- **외부 링크**: 관련 사이트에서 링크 획득

## 🌐 배포

Vercel Platform을 사용하여 쉽게 배포할 수 있습니다:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

배포 후 다음을 수행하세요:
1. Google Search Console에 사이트 등록
2. Bing Webmaster Tools에 사이트 등록
3. sitemap.xml 제출
4. 소셜 미디어에서 공유하여 백링크 획득

## 📝 라이선스

MIT License

## 💜 만든 사람

Made with 💜 for K-pop & K-drama fans worldwide!

---

**Enjoy discovering your Korean name! 🎉**
