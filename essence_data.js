// essence_data.js
// J&J Archive - Essence Reinforcement Data
// 본질 강화: 유튜브 알고리즘 탈출 및 카테고리별 채널 큐레이션

window.ESSENCE_DATA = {
    categories: [
        { id: 'all', name: '전체' },
        { id: 'jachung', name: '자청 유니버스', color: 'bg-purple-100 text-purple-600' },
        { id: 'business', name: '비즈니스 통찰', color: 'bg-blue-100 text-blue-600' },
        { id: 'learning', name: '학습법/천재성', color: 'bg-teal-100 text-teal-700' },
        { id: 'tech', name: 'AI/테크', color: 'bg-sky-100 text-sky-700' },
        { id: 'speech', name: '스피치/화술', color: 'bg-green-100 text-green-600' },
        { id: 'economy', name: '경제/재테크', color: 'bg-yellow-100 text-yellow-700' },
        { id: 'humanities', name: '인문학', color: 'bg-amber-100 text-amber-700' },
        { id: 'radio', name: '지식라디오', color: 'bg-zinc-100 text-zinc-600' },
        { id: 'psychology', name: '심리학', color: 'bg-rose-100 text-rose-600' },
        { id: 'science', name: '과학', color: 'bg-indigo-100 text-indigo-600' },
        { id: 'health', name: '건강/뇌과학', color: 'bg-emerald-100 text-emerald-600' }
    ],
    channels: [
        // 학습법
        { title: "곽상빈의 천재혁명", category: "learning", url: "https://www.youtube.com/@sangbin_genius_revolution", desc: "변호사 회계사가 알려주는 상위 0.1% 공부법" },
        { title: "닥터가드너", category: "learning", url: "https://www.youtube.com/@drgardener", desc: "하버드 심리학 박사의 뇌과학 공부법" },

        // AI / 테크
        { title: "AI 겸임교수 이종범", category: "tech", url: "https://www.youtube.com/@aiadjunct", desc: "실전 AI 활용과 프롬프트 엔지니어링" },

        // 지식 라디오
        { title: "지식의 취향", category: "radio", url: "https://www.youtube.com/@지식의취향", desc: "편안하게 듣기 좋은 교양 라디오" },

        // 스피치
        { title: "흥버튼", category: "speech", url: "https://www.youtube.com/@HEUNGBURTON", desc: "말하기의 본질과 기술" },
        { title: "비치키", category: "speech", url: "https://www.youtube.com/@비치키", desc: "매력적인 화술과 소통" },

        // 자청 유니버스
        { title: "이상한마케팅", category: "jachung", url: "https://www.youtube.com/@isanghan_marketing", desc: "마케팅의 본질과 실전" },
        { title: "라이프해커 자청", category: "jachung", url: "https://www.youtube.com/@jachung__", desc: "역행자, 인생 공략집" },
        { title: "GPT 연대경영", category: "jachung", url: "https://www.youtube.com/@연대경영", desc: "AI와 경영의 접목" },

        // 비즈니스 통찰력
        { title: "일터뷰", category: "business", url: "https://www.youtube.com/@---_---", desc: "일하는 사람들의 인터뷰" },
        { title: "돈버는사람들", category: "business", url: "https://www.youtube.com/@돈버는사람들", desc: "실전 창업과 수익화" },
        { title: "휴먼스토리", category: "business", url: "https://www.youtube.com/@youtubehumanstory", desc: "성공한 사람들의 인생사" },
        { title: "요즘 것들의 돈버는 이야기", category: "business", url: "https://www.youtube.com/@mzmoneystory7", desc: "MZ세대의 사업 방식" },
        { title: "하꼰대", category: "business", url: "https://www.youtube.com/@hakkondae", desc: "현실적인 사업 조언" },
        { title: "한국사장학교 TV", category: "business", url: "https://www.youtube.com/@leaderstv3136", desc: "사장들을 위한 실전 경영학 인사이트" },
        { title: "EO 이오", category: "business", url: "https://www.youtube.com/@eo_korea", desc: "스타트업 창업가들의 솔직한 이야기" },
        { title: "안대장 TV", category: "business", url: "https://www.youtube.com/@angyuho85", desc: "영업 천재의 동기부여와 세일즈 비법" },

        // 경제
        { title: "슈카월드", category: "economy", url: "https://www.youtube.com/@syukaworld", desc: "경제와 세상 돌아가는 이야기" },
        { title: "소비더머니", category: "economy", url: "https://www.youtube.com/@%EC%86%8C%EB%B9%84%EB%8D%94%EB%A8%B8%EB%8B%88", desc: "브랜드와 소비의 역사" },
        { title: "옌마드", category: "economy", url: "https://www.youtube.com/@yenmad", desc: "경제적 자유와 마인드" },
        { title: "미과장", category: "economy", url: "https://www.youtube.com/@MIGWAJANG", desc: "미래에셋이 들려주는 투자와 경제" },

        // 인문학
        { title: "지식인사이드", category: "humanities", url: "https://www.youtube.com/@지식인사이드", desc: "깊이 있는 지식 대담" },
        { title: "EBS 다큐", category: "humanities", url: "https://www.youtube.com/@EBSDocumentary", desc: "세상을 보는 깊은 눈" },
        { title: "지식한입", category: "humanities", url: "https://www.youtube.com/@지식한입", desc: "가볍게 떠먹는 인문학" },
        { title: "일당백", category: "humanities", url: "https://www.youtube.com/@1DANG100", desc: "일생동안 알아야 할 백가지" },
        { title: "셜록현준", category: "humanities", url: "https://www.youtube.com/@Sherlock_HJ", desc: "공간과 인문학의 결합" },
        { title: "지식은 날리지", category: "humanities", url: "https://www.youtube.com/@jisikisknowledge1620", desc: "날카로운 지식 큐레이션과 통찰" },
        { title: "인문학이랑", category: "humanities", url: "https://www.youtube.com/@humanitieserang", desc: "삶을 풍요롭게 하는 인문학 질문들" },
        { title: "당신이 몰랐던 이야기", category: "humanities", url: "https://www.youtube.com/@dangmolee", desc: "역사 속 숨겨진 흥미로운 사실들" },
        { title: "책과삶", category: "humanities", url: "https://www.youtube.com/@책과삶", desc: "책 속에서 발견하는 인생의 지혜" },
        { title: "이혜성의 1% 북클럽", category: "humanities", url: "https://www.youtube.com/@1percentBookClub", desc: "상위 1%의 독서 인사이트" },
        { title: "궁금소", category: "humanities", url: "https://www.youtube.com/@궁금소", desc: "세상의 모든 궁금한 이야기" },

        // 건강
        { title: "김주환의 내면소통", category: "health", url: "https://www.youtube.com/@joohankim", desc: "회복탄력성과 마음근력" },
        { title: "정희원의 저속노화", category: "health", url: "https://www.youtube.com/@slow_doctor", desc: "느리게 늙는 건강법" },

        // 과학
        { title: "리뷰엉이", category: "science", url: "https://www.youtube.com/@%EB%A6%AC%EB%B7%B0%EC%97%89%EC%9D%B4", desc: "재미있는 과학 이야기" },
        { title: "1분과학", category: "science", url: "https://www.youtube.com/@1minscience", desc: "짧고 굵은 과학 지식" },
        { title: "한 눈에 보는 세상", category: "science", url: "https://www.youtube.com/@kurzgesagt_kr", desc: "지도로 보는 지정학적 과학과 세상" },

        // 심리학
        { title: "심리학 고양이", category: "psychology", url: "https://www.youtube.com/@심리학고양이", desc: "고양이로 배우는 심리" },
        { title: "길 인간학연구소", category: "psychology", url: "https://www.youtube.com/@gilshumanlab", desc: "인간 본성에 대한 탐구" },
        { title: "MBTI 일상툰", category: "psychology", url: "https://www.youtube.com/@MBTI일상툰", desc: "MBTI 유형별 공감 일상" }
    ]
};