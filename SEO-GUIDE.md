# 📊 SEO 최적화 가이드

Korean Name Generator의 SEO를 최적화하기 위한 상세 가이드입니다.

## 🎯 구현된 SEO 기능

### 1. 메타데이터 최적화 ✅

**파일**: `src/app/layout.tsx`

```typescript
// 구현된 메타데이터
- Title: 검색 결과에 표시되는 제목
- Description: 검색 결과 미리보기 텍스트
- Keywords: 타겟 키워드 목록
- Open Graph: Facebook, LinkedIn 공유 시 표시
- Twitter Cards: Twitter 공유 시 표시
- Canonical URL: 중복 콘텐츠 방지
```

### 2. 검색 엔진 최적화 ✅

**파일**: `src/app/robots.ts`, `src/app/sitemap.ts`

- **robots.txt**: 검색 엔진 크롤러에게 허용/차단 정보 제공
- **sitemap.xml**: 사이트 구조를 검색 엔진에 알림
- 자동으로 `/robots.txt`와 `/sitemap.xml` 경로에서 접근 가능

### 3. 구조화된 데이터 (JSON-LD) ✅

**파일**: `src/app/page.tsx`

```json
{
  "@type": "WebApplication",
  "name": "Korean Name Generator",
  "description": "...",
  "aggregateRating": { ... }
}
```

이를 통해 Google 검색 결과에 리치 스니펫(별점, 가격 등)이 표시될 수 있습니다.

### 4. PWA (Progressive Web App) ✅

**파일**: `src/app/manifest.ts`

- 홈 화면에 추가 가능
- 오프라인 지원 준비
- 앱 같은 사용자 경험

## 📝 배포 전 필수 작업

### 1. Google Search Console 설정

1. [Google Search Console](https://search.google.com/search-console) 접속
2. 사이트 추가
3. 소유권 확인 코드를 받아서 `layout.tsx`에 추가:

```typescript
verification: {
  google: 'your-verification-code-here',
}
```

### 2. 도메인 URL 업데이트

배포 후 실제 도메인으로 다음 파일들의 URL을 변경하세요:

```bash
# 변경할 파일들
src/app/layout.tsx - metadataBase
src/app/robots.ts - sitemap URL
src/app/sitemap.ts - url
src/app/page.tsx - JSON-LD url
```

예시:
```typescript
// 변경 전
metadataBase: new URL('https://korean-name-generator.vercel.app')

// 변경 후 (실제 도메인으로)
metadataBase: new URL('https://yourdomain.com')
```

### 3. 이미지 생성 필수 ⚠️

다음 이미지들을 생성하여 `/public` 폴더에 추가하세요:

| 파일명 | 크기 | 용도 |
|--------|------|------|
| `og-image.png` | 1200x630px | Open Graph (SNS 공유) |
| `icon-192.png` | 192x192px | PWA 아이콘 (작음) |
| `icon-512.png` | 512x512px | PWA 아이콘 (큼) |
| `apple-touch-icon.png` | 180x180px | iOS 홈 화면 아이콘 |

**디자인 팁**:
- 브랜드 색상 사용 (보라색/분홍색 그라데이션)
- 큰 텍스트로 "Korean Name Generator" 표시
- 한글/영문 혼합
- 아이콘은 단순하고 명확하게

### 4. sitemap 제출

배포 후:
1. `https://yourdomain.com/sitemap.xml` 확인
2. Google Search Console에서 Sitemap 제출
3. Bing Webmaster Tools에서도 제출

## 🚀 추가 SEO 전략

### 1. 콘텐츠 마케팅

```markdown
블로그 포스트 아이디어:
- "한국 이름의 의미와 유래"
- "K-pop 스타들의 이름 의미"
- "전통적인 한국 이름 vs 현대적인 이름"
- "성별 중립적인 한국 이름"
```

### 2. 소셜 미디어 전략

- Reddit (r/Korean, r/kpop)에 공유
- Twitter/X에 해시태그와 함께 공유
- TikTok에 데모 영상 업로드
- Instagram에 결과 이미지 공유

### 3. 백링크 구축

```markdown
타겟 사이트:
- 한국어 학습 커뮤니티
- K-pop 팬 포럼
- 이름 관련 웹사이트
- 문화 교류 사이트
```

### 4. 성능 최적화

```bash
# Lighthouse 점수 확인
npx lighthouse https://yourdomain.com --view

# 목표 점수
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100
```

## 📊 Analytics 설정

### Google Analytics 4 (GA4)

1. GA4 계정 생성
2. Next.js에 GA4 추가:

```typescript
// src/app/layout.tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_ID}');
  `}
</Script>
```

### Vercel Analytics

```bash
npm install @vercel/analytics
```

```typescript
// src/app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

// body 안에 추가
<Analytics />
```

## 🎯 키워드 전략

### Primary Keywords (1차 키워드)
- Korean name generator
- Korean name
- K-pop name generator

### Secondary Keywords (2차 키워드)
- Korean name meaning
- Korean name pronunciation
- Traditional Korean names
- Modern Korean names
- Korean name culture

### Long-tail Keywords (롱테일 키워드)
- "Generate Korean name with meaning"
- "K-pop inspired Korean name"
- "Traditional vs modern Korean names"
- "Korean name for foreigners"

## ✅ SEO 체크리스트

배포 전 확인:
- [ ] 모든 URL을 실제 도메인으로 변경
- [ ] Google Search Console 인증 코드 입력
- [ ] OG 이미지 생성 및 업로드
- [ ] PWA 아이콘 생성 및 업로드
- [ ] robots.txt 테스트
- [ ] sitemap.xml 테스트
- [ ] 모바일 반응형 테스트
- [ ] 페이지 속도 테스트

배포 후 작업:
- [ ] Google Search Console에 사이트 등록
- [ ] Bing Webmaster Tools에 사이트 등록
- [ ] sitemap.xml 제출
- [ ] Google Analytics 설정
- [ ] 첫 블로그 포스트 작성
- [ ] 소셜 미디어에 공유
- [ ] Reddit/커뮤니티에 소개

## 📈 모니터링

주기적으로 확인:
1. **Search Console**: 검색 쿼리, 클릭수, 노출수
2. **Analytics**: 방문자수, 체류시간, 이탈률
3. **Lighthouse**: 성능 점수
4. **Rank Tracking**: 주요 키워드 순위

## 💡 SEO 유지보수

### 주간 작업
- Analytics 데이터 확인
- 검색 순위 모니터링

### 월간 작업
- 새로운 블로그 포스트 작성
- 백링크 확인
- 콘텐츠 업데이트

### 분기별 작업
- SEO 전략 재평가
- 경쟁사 분석
- 키워드 조사 업데이트

---

**참고 자료**:
- [Google Search Console 가이드](https://support.google.com/webmasters)
- [Next.js SEO 가이드](https://nextjs.org/learn/seo/introduction-to-seo)
- [Schema.org 문서](https://schema.org/)
- [Core Web Vitals](https://web.dev/vitals/)

