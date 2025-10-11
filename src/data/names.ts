export interface KoreanName {
  lastName: string;
  firstName: string;
  romanization: string;
  meaning: string;
  gender: 'male' | 'female' | 'unisex';
  style?: 'traditional' | 'modern' | 'trendy';
  theme?: 'nature' | 'wisdom' | 'strength' | 'beauty' | 'virtue';
}

export interface NamePreferences {
  gender: 'male' | 'female' | 'nonbinary';
  style?: 'traditional' | 'modern' | 'trendy' | 'any';
  theme?: 'nature' | 'wisdom' | 'strength' | 'beauty' | 'virtue' | 'any';
}

export const lastNames = [
  { korean: '김', romanization: 'Kim' },
  { korean: '이', romanization: 'Lee' },
  { korean: '박', romanization: 'Park' },
  { korean: '최', romanization: 'Choi' },
  { korean: '정', romanization: 'Jung' },
  { korean: '강', romanization: 'Kang' },
  { korean: '조', romanization: 'Jo' },
  { korean: '윤', romanization: 'Yoon' },
  { korean: '장', romanization: 'Jang' },
  { korean: '임', romanization: 'Lim' },
  { korean: '한', romanization: 'Han' },
  { korean: '오', romanization: 'Oh' },
  { korean: '서', romanization: 'Seo' },
  { korean: '신', romanization: 'Shin' },
  { korean: '권', romanization: 'Kwon' },
  { korean: '황', romanization: 'Hwang' },
  { korean: '안', romanization: 'Ahn' },
  { korean: '송', romanization: 'Song' },
  { korean: '류', romanization: 'Ryu' },
  { korean: '전', romanization: 'Jeon' },
  { korean: '홍', romanization: 'Hong' },
  { korean: '고', romanization: 'Ko' },
  { korean: '문', romanization: 'Moon' },
  { korean: '양', romanization: 'Yang' },
  { korean: '손', romanization: 'Son' },
  { korean: '배', romanization: 'Bae' },
  { korean: '백', romanization: 'Baek' },
  { korean: '허', romanization: 'Heo' },
  { korean: '남', romanization: 'Nam' },
  { korean: '심', romanization: 'Shim' },
];

export const maleFirstNames = [
  // Trendy - Wisdom
  { korean: '민준', romanization: 'Min-jun', meaning: 'clever and handsome', style: 'trendy', theme: 'wisdom' },
  { korean: '현준', romanization: 'Hyun-jun', meaning: 'wise and talented', style: 'trendy', theme: 'wisdom' },
  { korean: '예준', romanization: 'Ye-jun', meaning: 'artistic and talented', style: 'trendy', theme: 'wisdom' },
  { korean: '지호', romanization: 'Ji-ho', meaning: 'wisdom and great', style: 'trendy', theme: 'wisdom' },
  { korean: '승우', romanization: 'Seung-woo', meaning: 'victory and excellence', style: 'trendy', theme: 'wisdom' },
  
  // Trendy - Virtue
  { korean: '서준', romanization: 'Seo-jun', meaning: 'auspicious and talented', style: 'trendy', theme: 'virtue' },
  { korean: '준서', romanization: 'Jun-seo', meaning: 'talented and auspicious', style: 'trendy', theme: 'virtue' },
  { korean: '민재', romanization: 'Min-jae', meaning: 'clever and talented', style: 'trendy', theme: 'virtue' },
  { korean: '이준', romanization: 'Yi-jun', meaning: 'profit and talented', style: 'trendy', theme: 'virtue' },
  { korean: '건우', romanization: 'Gun-woo', meaning: 'strong and house', style: 'trendy', theme: 'virtue' },
  
  // Trendy - Nature
  { korean: '시우', romanization: 'Si-woo', meaning: 'beginning and universe', style: 'trendy', theme: 'nature' },
  { korean: '하준', romanization: 'Ha-jun', meaning: 'summer and talented', style: 'trendy', theme: 'nature' },
  { korean: '은우', romanization: 'Eun-woo', meaning: 'silver universe', style: 'trendy', theme: 'nature' },
  { korean: '하율', romanization: 'Ha-yul', meaning: 'summer and discipline', style: 'trendy', theme: 'nature' },
  { korean: '시윤', romanization: 'Si-yoon', meaning: 'beginning and allow', style: 'trendy', theme: 'nature' },
  
  // Trendy - Strength
  { korean: '지훈', romanization: 'Ji-hoon', meaning: 'wise and meritorious', style: 'trendy', theme: 'strength' },
  { korean: '태윤', romanization: 'Tae-yoon', meaning: 'great and allow', style: 'trendy', theme: 'strength' },
  { korean: '현서', romanization: 'Hyun-seo', meaning: 'wise and auspicious', style: 'trendy', theme: 'strength' },
  
  // Modern - Wisdom
  { korean: '지훈', romanization: 'Ji-hoon', meaning: 'wise and meritorious', style: 'modern', theme: 'wisdom' },
  { korean: '현우', romanization: 'Hyun-woo', meaning: 'wise and superior', style: 'modern', theme: 'wisdom' },
  { korean: '지환', romanization: 'Ji-hwan', meaning: 'wisdom and bright', style: 'modern', theme: 'wisdom' },
  { korean: '민혁', romanization: 'Min-hyuk', meaning: 'clever and radiant', style: 'modern', theme: 'wisdom' },
  { korean: '정우', romanization: 'Jung-woo', meaning: 'righteous and house', style: 'modern', theme: 'wisdom' },
  { korean: '준영', romanization: 'Jun-young', meaning: 'talented and eternal', style: 'modern', theme: 'wisdom' },
  
  // Modern - Virtue
  { korean: '도윤', romanization: 'Do-yoon', meaning: 'path and allow', style: 'modern', theme: 'virtue' },
  { korean: '주원', romanization: 'Ju-won', meaning: 'precious and first', style: 'modern', theme: 'virtue' },
  { korean: '재윤', romanization: 'Jae-yoon', meaning: 'talent and allow', style: 'modern', theme: 'virtue' },
  { korean: '서진', romanization: 'Seo-jin', meaning: 'auspicious and precious', style: 'modern', theme: 'virtue' },
  { korean: '윤호', romanization: 'Yoon-ho', meaning: 'allow and great', style: 'modern', theme: 'virtue' },
  
  // Modern - Nature
  { korean: '우진', romanization: 'Woo-jin', meaning: 'universe and precious', style: 'modern', theme: 'nature' },
  { korean: '강민', romanization: 'Kang-min', meaning: 'strong river and clever', style: 'modern', theme: 'nature' },
  { korean: '하진', romanization: 'Ha-jin', meaning: 'summer and precious', style: 'modern', theme: 'nature' },
  { korean: '민호', romanization: 'Min-ho', meaning: 'clever and great lake', style: 'modern', theme: 'nature' },
  
  // Modern - Strength
  { korean: '승민', romanization: 'Seung-min', meaning: 'victory and clever', style: 'modern', theme: 'strength' },
  { korean: '태준', romanization: 'Tae-jun', meaning: 'great and talented', style: 'modern', theme: 'strength' },
  { korean: '승현', romanization: 'Seung-hyun', meaning: 'victory and wise', style: 'modern', theme: 'strength' },
  { korean: '강현', romanization: 'Kang-hyun', meaning: 'strong and wise', style: 'modern', theme: 'strength' },
  
  // Traditional - Wisdom
  { korean: '민성', romanization: 'Min-seong', meaning: 'clever and complete', style: 'traditional', theme: 'wisdom' },
  { korean: '성민', romanization: 'Seong-min', meaning: 'complete and clever', style: 'traditional', theme: 'wisdom' },
  { korean: '지성', romanization: 'Ji-seong', meaning: 'wisdom and complete', style: 'traditional', theme: 'wisdom' },
  { korean: '성준', romanization: 'Seong-jun', meaning: 'complete and talented', style: 'traditional', theme: 'wisdom' },
  { korean: '현석', romanization: 'Hyun-seok', meaning: 'wise and great', style: 'traditional', theme: 'wisdom' },
  
  // Traditional - Virtue
  { korean: '진우', romanization: 'Jin-woo', meaning: 'precious and house', style: 'traditional', theme: 'virtue' },
  { korean: '정민', romanization: 'Jung-min', meaning: 'righteous and clever', style: 'traditional', theme: 'virtue' },
  { korean: '성호', romanization: 'Seong-ho', meaning: 'complete and great', style: 'traditional', theme: 'virtue' },
  { korean: '재현', romanization: 'Jae-hyun', meaning: 'talent and wise', style: 'traditional', theme: 'virtue' },
  
  // Traditional - Nature
  { korean: '태양', romanization: 'Tae-yang', meaning: 'sun', style: 'traditional', theme: 'nature' },
  { korean: '동현', romanization: 'Dong-hyun', meaning: 'east and wise', style: 'traditional', theme: 'nature' },
  { korean: '상우', romanization: 'Sang-woo', meaning: 'always excellent', style: 'traditional', theme: 'nature' },
  { korean: '경수', romanization: 'Kyung-soo', meaning: 'respect and excellent', style: 'traditional', theme: 'nature' },
  
  // Traditional - Strength
  { korean: '태민', romanization: 'Tae-min', meaning: 'great and clever', style: 'traditional', theme: 'strength' },
  { korean: '용준', romanization: 'Yong-jun', meaning: 'dragon and talented', style: 'traditional', theme: 'strength' },
  { korean: '대호', romanization: 'Dae-ho', meaning: 'great and tiger', style: 'traditional', theme: 'strength' },
  { korean: '석진', romanization: 'Seok-jin', meaning: 'great and precious', style: 'traditional', theme: 'strength' },
] as const;

export const femaleFirstNames = [
  // Trendy - Beauty
  { korean: '서연', romanization: 'Seo-yeon', meaning: 'auspicious and beautiful', style: 'trendy', theme: 'beauty' },
  { korean: '수아', romanization: 'Soo-ah', meaning: 'excellent and elegant', style: 'trendy', theme: 'beauty' },
  { korean: '지안', romanization: 'Ji-an', meaning: 'wisdom and peace', style: 'trendy', theme: 'beauty' },
  { korean: '아린', romanization: 'A-rin', meaning: 'elegant and beautiful jade', style: 'trendy', theme: 'beauty' },
  { korean: '유진', romanization: 'Yoo-jin', meaning: 'abundant and precious', style: 'trendy', theme: 'beauty' },
  
  // Trendy - Wisdom
  { korean: '민서', romanization: 'Min-seo', meaning: 'clever and auspicious', style: 'trendy', theme: 'wisdom' },
  { korean: '지우', romanization: 'Ji-woo', meaning: 'wisdom and house', style: 'trendy', theme: 'wisdom' },
  { korean: '지아', romanization: 'Ji-ah', meaning: 'wisdom and elegant', style: 'trendy', theme: 'wisdom' },
  { korean: '지유', romanization: 'Ji-yoo', meaning: 'wisdom and abundant', style: 'trendy', theme: 'wisdom' },
  { korean: '시은', romanization: 'Si-eun', meaning: 'beginning and grace', style: 'trendy', theme: 'wisdom' },
  { korean: '지원', romanization: 'Ji-won', meaning: 'wisdom and first', style: 'trendy', theme: 'wisdom' },
  
  // Trendy - Nature
  { korean: '채원', romanization: 'Chae-won', meaning: 'color and first', style: 'trendy', theme: 'nature' },
  { korean: '하윤', romanization: 'Ha-yoon', meaning: 'summer and allow', style: 'trendy', theme: 'nature' },
  { korean: '하린', romanization: 'Ha-rin', meaning: 'summer and beautiful jade', style: 'trendy', theme: 'nature' },
  { korean: '민지', romanization: 'Min-ji', meaning: 'clever and wisdom', style: 'trendy', theme: 'nature' },
  { korean: '채은', romanization: 'Chae-eun', meaning: 'color and grace', style: 'trendy', theme: 'nature' },
  
  // Trendy - Virtue
  { korean: '윤서', romanization: 'Yoon-seo', meaning: 'allow and auspicious', style: 'trendy', theme: 'virtue' },
  { korean: '서윤', romanization: 'Seo-yoon', meaning: 'auspicious and allow', style: 'trendy', theme: 'virtue' },
  { korean: '예린', romanization: 'Ye-rin', meaning: 'art and beautiful jade', style: 'trendy', theme: 'virtue' },
  { korean: '예서', romanization: 'Ye-seo', meaning: 'art and auspicious', style: 'trendy', theme: 'virtue' },
  
  // Modern - Beauty
  { korean: '예은', romanization: 'Ye-eun', meaning: 'art and grace', style: 'modern', theme: 'beauty' },
  { korean: '예린', romanization: 'Ye-rin', meaning: 'art and beautiful jade', style: 'modern', theme: 'beauty' },
  { korean: '소은', romanization: 'So-eun', meaning: 'smile and grace', style: 'modern', theme: 'beauty' },
  { korean: '지수', romanization: 'Ji-soo', meaning: 'wisdom and excellent', style: 'modern', theme: 'beauty' },
  { korean: '혜원', romanization: 'Hye-won', meaning: 'bright and first', style: 'modern', theme: 'beauty' },
  { korean: '수진', romanization: 'Soo-jin', meaning: 'excellent and precious', style: 'modern', theme: 'beauty' },
  
  // Modern - Wisdom
  { korean: '서현', romanization: 'Seo-hyun', meaning: 'auspicious and wise', style: 'modern', theme: 'wisdom' },
  { korean: '지민', romanization: 'Ji-min', meaning: 'wisdom and jade', style: 'modern', theme: 'wisdom' },
  { korean: '지혜', romanization: 'Ji-hye', meaning: 'wisdom and grace', style: 'modern', theme: 'wisdom' },
  { korean: '민지', romanization: 'Min-ji', meaning: 'clever and wisdom', style: 'modern', theme: 'wisdom' },
  { korean: '혜진', romanization: 'Hye-jin', meaning: 'bright and precious', style: 'modern', theme: 'wisdom' },
  { korean: '수민', romanization: 'Soo-min', meaning: 'excellent and clever', style: 'modern', theme: 'wisdom' },
  
  // Modern - Nature
  { korean: '하은', romanization: 'Ha-eun', meaning: 'summer and grace', style: 'modern', theme: 'nature' },
  { korean: '가은', romanization: 'Ga-eun', meaning: 'beautiful autumn and grace', style: 'modern', theme: 'nature' },
  { korean: '소희', romanization: 'So-hee', meaning: 'smile and joy', style: 'modern', theme: 'nature' },
  { korean: '민경', romanization: 'Min-kyung', meaning: 'clever and respect', style: 'modern', theme: 'nature' },
  { korean: '수현', romanization: 'Soo-hyun', meaning: 'excellent and wise', style: 'modern', theme: 'nature' },
  
  // Modern - Virtue
  { korean: '유나', romanization: 'Yoo-na', meaning: 'abundant and graceful', style: 'modern', theme: 'virtue' },
  { korean: '다은', romanization: 'Da-eun', meaning: 'many and grace', style: 'modern', theme: 'virtue' },
  { korean: '채윤', romanization: 'Chae-yoon', meaning: 'color and allow', style: 'modern', theme: 'virtue' },
  { korean: '예나', romanization: 'Ye-na', meaning: 'art and graceful', style: 'modern', theme: 'virtue' },
  { korean: '은서', romanization: 'Eun-seo', meaning: 'grace and auspicious', style: 'modern', theme: 'virtue' },
  
  // Traditional - Beauty
  { korean: '소연', romanization: 'So-yeon', meaning: 'smile and beautiful', style: 'traditional', theme: 'beauty' },
  { korean: '수빈', romanization: 'Soo-bin', meaning: 'excellent and refined', style: 'traditional', theme: 'beauty' },
  { korean: '미영', romanization: 'Mi-young', meaning: 'beautiful and eternal', style: 'traditional', theme: 'beauty' },
  { korean: '혜숙', romanization: 'Hye-sook', meaning: 'bright and pure', style: 'traditional', theme: 'beauty' },
  { korean: '지영', romanization: 'Ji-young', meaning: 'wisdom and eternal', style: 'traditional', theme: 'beauty' },
  
  // Traditional - Wisdom
  { korean: '은지', romanization: 'Eun-ji', meaning: 'grace and wisdom', style: 'traditional', theme: 'wisdom' },
  { korean: '민지', romanization: 'Min-ji', meaning: 'clever and wisdom', style: 'traditional', theme: 'wisdom' },
  { korean: '정은', romanization: 'Jung-eun', meaning: 'righteous and grace', style: 'traditional', theme: 'wisdom' },
  { korean: '지현', romanization: 'Ji-hyun', meaning: 'wisdom and wise', style: 'traditional', theme: 'wisdom' },
  { korean: '수정', romanization: 'Soo-jung', meaning: 'excellent and righteous', style: 'traditional', theme: 'wisdom' },
  
  // Traditional - Nature
  { korean: '은경', romanization: 'Eun-kyung', meaning: 'grace and respect', style: 'traditional', theme: 'nature' },
  { korean: '미경', romanization: 'Mi-kyung', meaning: 'beautiful and respect', style: 'traditional', theme: 'nature' },
  { korean: '윤정', romanization: 'Yoon-jung', meaning: 'allow and righteous', style: 'traditional', theme: 'nature' },
  { korean: '선영', romanization: 'Sun-young', meaning: 'good and eternal', style: 'traditional', theme: 'nature' },
  
  // Traditional - Virtue
  { korean: '은혜', romanization: 'Eun-hye', meaning: 'grace and kindness', style: 'traditional', theme: 'virtue' },
  { korean: '정민', romanization: 'Jung-min', meaning: 'righteous and clever', style: 'traditional', theme: 'virtue' },
  { korean: '예진', romanization: 'Ye-jin', meaning: 'art and precious', style: 'traditional', theme: 'virtue' },
  { korean: '윤희', romanization: 'Yoon-hee', meaning: 'allow and joy', style: 'traditional', theme: 'virtue' },
] as const;

export function generateRandomName(
  gender: 'male' | 'female',
  preferences?: { style?: string; theme?: string }
): KoreanName {
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const firstNames = gender === 'male' ? maleFirstNames : femaleFirstNames;
  
  // 필터링: style과 theme에 따라
  let filtered = [...firstNames];
  
  if (preferences?.style && preferences.style !== 'any') {
    filtered = filtered.filter(name => name.style === preferences.style);
  }
  
  if (preferences?.theme && preferences.theme !== 'any') {
    filtered = filtered.filter(name => name.theme === preferences.theme);
  }
  
  // 필터링 결과가 없으면 전체에서 선택
  if (filtered.length === 0) {
    filtered = [...firstNames];
  }
  
  const firstName = filtered[Math.floor(Math.random() * filtered.length)];

  return {
    lastName: lastName.korean,
    firstName: firstName.korean,
    romanization: `${lastName.romanization} ${firstName.romanization}`,
    meaning: firstName.meaning,
    gender,
    style: firstName.style,
    theme: firstName.theme,
  };
}

export function getSimilarNames(
  currentName: KoreanName,
  count: number = 3
): KoreanName[] {
  const firstNames = currentName.gender === 'male' ? maleFirstNames : femaleFirstNames;
  
  // 같은 스타일이나 테마를 가진 이름 우선
  const filtered = firstNames.filter(
    (name) => name.korean !== currentName.firstName
  );
  
  // 같은 스타일/테마 우선 정렬
  filtered.sort((a, b) => {
    let scoreA = 0;
    let scoreB = 0;
    if (a.style === currentName.style) scoreA += 2;
    if (a.theme === currentName.theme) scoreA += 2;
    if (b.style === currentName.style) scoreB += 2;
    if (b.theme === currentName.theme) scoreB += 2;
    return scoreB - scoreA;
  });

  const shuffled = [...filtered].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, count);

  return selected.map((firstName) => {
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return {
      lastName: lastName.korean,
      firstName: firstName.korean,
      romanization: `${lastName.romanization} ${firstName.romanization}`,
      meaning: firstName.meaning,
      gender: currentName.gender,
      style: firstName.style,
      theme: firstName.theme,
    };
  });
}

