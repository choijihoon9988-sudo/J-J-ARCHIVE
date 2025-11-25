// essence_data.js
// J&J Archive - Essence Reinforcement Data
// 본질 강화: 유튜브 알고리즘 탈출 및 카테고리별 채널 큐레이션

window.ESSENCE_DATA = {
    categories: [
        { id: 'all', name: '전체' },
        { id: 'jachung', name: '자청 유니버스', color: 'bg-purple-100 text-purple-600' },
        { id: 'business', name: '비즈니스 통찰', color: 'bg-blue-100 text-blue-600' },
        { id: 'speech', name: '스피치/화술', color: 'bg-green-100 text-green-600' },
        { id: 'economy', name: '경제/재테크', color: 'bg-yellow-100 text-yellow-700' },
        { id: 'humanities', name: '인문학', color: 'bg-amber-100 text-amber-700' },
        { id: 'psychology', name: '심리학', color: 'bg-rose-100 text-rose-600' },
        { id: 'science', name: '과학', color: 'bg-indigo-100 text-indigo-600' },
        { id: 'health', name: '건강/뇌과학', color: 'bg-emerald-100 text-emerald-600' }
    ],
    channels: [
        // 스피치
        { title: "흥버튼", category: "speech", url: "https://www.youtube.com", desc: "말하기의 본질과 기술" },
        { title: "비치키", category: "speech", url: "https://www.youtube.com", desc: "매력적인 화술과 소통" },

        // 자청 유니버스
        { title: "이상한마케팅", category: "jachung", url: "https://www.youtube.com", desc: "마케팅의 본질과 실전" },
        { title: "라이프해커 자청", category: "jachung", url: "https://www.youtube.com", desc: "역행자, 인생 공략집" },
        { title: "GPT 연대경영", category: "jachung", url: "https://www.youtube.com", desc: "AI와 경영의 접목" },

        // 비즈니스 통찰력
        { title: "일터뷰", category: "business", url: "https://www.youtube.com", desc: "일하는 사람들의 인터뷰" },
        { title: "돈버는사람들", category: "business", url: "https://www.youtube.com", desc: "실전 창업과 수익화" },
        { title: "휴먼스토리", category: "business", url: "https://www.youtube.com", desc: "성공한 사람들의 인생사" },
        { title: "요즘 것들의 돈버는 이야기", category: "business", url: "https://www.youtube.com", desc: "MZ세대의 사업 방식" },
        { title: "하꼰대", category: "business", url: "https://www.youtube.com", desc: "현실적인 사업 조언" },

        // 경제
        { title: "슈카월드", category: "economy", url: "https://www.youtube.com", desc: "경제와 세상 돌아가는 이야기" },
        { title: "소비더머니", category: "economy", url: "https://www.youtube.com", desc: "브랜드와 소비의 역사" },
        { title: "옌마드", category: "economy", url: "https://www.youtube.com", desc: "경제적 자유와 마인드" },

        // 인문학
        { title: "지식인사이드", category: "humanities", url: "https://www.youtube.com", desc: "깊이 있는 지식 대담" },
        { title: "EBS 다큐", category: "humanities", url: "https://www.youtube.com", desc: "세상을 보는 깊은 눈" },
        { title: "지식한입", category: "humanities", url: "https://www.youtube.com", desc: "가볍게 떠먹는 인문학" },
        { title: "일당백", category: "humanities", url: "https://www.youtube.com", desc: "일생동안 알아야 할 백가지" },
        { title: "셜록현준", category: "humanities", url: "https://www.youtube.com", desc: "공간과 인문학의 결합" },

        // 건강
        { title: "김주환의 내면소통", category: "health", url: "https://www.youtube.com", desc: "회복탄력성과 마음근력" },
        { title: "정희원의 저속노화", category: "health", url: "https://www.youtube.com", desc: "느리게 늙는 건강법" },

        // 과학
        { title: "리뷰엉이", category: "science", url: "https://www.youtube.com", desc: "재미있는 과학 이야기" },
        { title: "1분과학", category: "science", url: "https://www.youtube.com", desc: "짧고 굵은 과학 지식" },

        // 심리학
        { title: "심리학 고양이", category: "psychology", url: "https://www.youtube.com", desc: "고양이로 배우는 심리" },
        { title: "길 인간학연구소", category: "psychology", url: "https://www.youtube.com", desc: "인간 본성에 대한 탐구" }
    ]
};