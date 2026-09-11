// ==========================================
// 🔍 1. 증거 분석 & 유령 계산기 전용 스크립트 (4열 독립 고정 분배 방식)
// ==========================================

let includedEvidences = [];
let excludedEvidences = [];
let activeFilters = {
    hasAccel: false,
    hasSpecialSpeed: false,
    hasForcedEv: false,
    hasTargetRoam: false
};

// 👻 1줄 극초압축 핵심 필살기 매핑 (한글/영문 완벽 대응)
const GHOST_SIGNATURE_SKILLS = {
    // 스피릿
    "스피릿": "향초 피격 시 180초(3분) 사냥 불가",
    "Spirit": "향초 피격 시 180초(3분) 사냥 불가",

    // 레이스
    "레이스": "소금 안 밟음 & UV 발자국 없음",
    "Wraith": "소금 안 밟음 & UV 발자국 없음",

    // 팬텀
    "팬텀": "사진 찍으면 즉시 투명화 (깜빡임 김)",
    "Phantom": "사진 찍으면 즉시 투명화 (깜빡임 김)",

    // 폴터가이스트
    "폴터가이스트": "여러 물건 동시 폭발 투척 (폴터샷)",
    "Poltergeist": "여러 물건 동시 폭발 투척 (폴터샷)",

    // 밴시
    "밴시": "마이크로폰 전용 비명 & 1명 스토킹",
    "Banshee": "마이크로폰 전용 비명 & 1명 스토킹",

    // 진 / 지니
    "진": "차단기 On 시 원거리 2.5m/s 고속 돌진",
    "지니": "차단기 On 시 원거리 2.5m/s 고속 돌진",
    "Jinn": "차단기 On 시 원거리 2.5m/s 고속 돌진",

    // 매어 (1줄 압축)
    "매어": "불 스위치 0.1초 즉시 끔 (딸깍)",
    "Mare": "불 스위치 0.1초 즉시 끔 (딸깍)",

    // 레버넌트
    "레버넌트": "시야 없을 때 1.0 ➔ 발견 시 3.0m/s 폭주",
    "Revenant": "시야 없을 때 1.0 ➔ 발견 시 3.0m/s 폭주",

    // 셰이드
    "셰이드": "같은 방에 플레이어 있으면 상호작용 0%",
    "Shade": "같은 방에 플레이어 있으면 상호작용 0%",

    // 데몬
    "데몬": "정신력 100% 즉시 사냥 & 향초 저지 60초",
    "Demon": "정신력 100% 즉시 사냥 & 향초 저지 60초",

    // 유레이
    "유레이": "열린 문 끝까지 쾅 닫음 (정신력 -15%)",
    "Yurei": "열린 문 끝까지 쾅 닫음 (정신력 -15%)",

    // 오니
    "오니": "연기구체 없음 & 사냥 시 실체 계속 보임",
    "Oni": "연기구체 없음 & 사냥 시 실체 계속 보임",

    // 요괴
    "요괴": "말소리 사냥(80%) & 2.5m 밖 전자기기 감지X",
    "Yokai": "말소리 사냥(80%) & 2.5m 밖 전자기기 감지X",

    // 한투 / 하투
    "한투": "추운 방 2.7m/s 가속 & 헌팅 중 냉기 입김",
    "하투": "추운 방 2.7m/s 가속 & 헌팅 중 냉기 입김",
    "Hantu": "추운 방 2.7m/s 가속 & 헌팅 중 냉기 입김",

    // 고료
    "고료": "방 변경 불가 & 비디오 카메라로만 도트",
    "Goryo": "방 변경 불가 & 비디오 카메라로만 도트",

    // 마일링 / 밀링
    "마일링": "발소리가 전자기기 깜빡임(10m) 때만 들림",
    "밀링": "발소리가 전자기기 깜빡임(10m) 때만 들림",
    "Myling": "발소리가 전자기기 깜빡임(10m) 때만 들림",

    // 원령 / 온료
    "원령": "불씨 3개 끄면 즉시 사냥 (촛불=십자가)",
    "온료": "불씨 3개 끄면 즉시 사냥 (촛불=십자가)",
    "Onryo": "불씨 3개 끄면 즉시 사냥 (촛불=십자가)",

    // 트윈스
    "트윈스": "본체(1.5m/s)·분신(1.9m/s) 엇박 사냥",
    "The Twins": "본체(1.5m/s)·분신(1.9m/s) 엇박 사냥",

    // 라이주
    "라이주": "켜진 전자기기 근처에서 2.5m/s 급가속",
    "Raiju": "켜진 전자기기 근처에서 2.5m/s 급가속",

    // 오바케
    "오바케": "6손가락 지문 & 헌팅 중 외형 변신",
    "Obake": "6손가락 지문 & 헌팅 중 외형 변신",

    // 미믹
    "미믹": "항상 가짜 고스트 오브 스폰 & 능력 복사",
    "The Mimic": "항상 가짜 고스트 오브 스폰 & 능력 복사",

    // 모로이
    "모로이": "정신력 0% 시 2.25m/s & 주파수 감염 저주",
    "Moroi": "정신력 0% 시 2.25m/s & 주파수 감염 저주",

    // 데오겐
    "데오겐": "어디 숨든 추적 ➔ 2.5m 앞 0.4m/s 기어감",
    "Deogen": "어디 숨든 추적 ➔ 2.5m 앞 0.4m/s 기어감",

    // 타예
    "타예": "초반 2.75m/s ➔ 룸 상주 노화 시 1.0m/s 둔화",
    "Thaye": "초반 2.75m/s ➔ 룸 상주 노화 시 1.0m/s 둔화",

    // 추가 유령군
    "다얀": "근처 정지 시 1.2 감속 ➔ 움직이면 2.25m/s 폭주",
    "Dayan": "근처 정지 시 1.2 감속 ➔ 움직이면 2.25m/s 폭주",
    "데일드가스트": "초반엔 빠르고 ➔ 물건 치울수록 느려짐",
    "Deildegast": "초반엔 빠르고 ➔ 물건 치울수록 느려짐",
    "갈루": "방어 장비 쓰면 격노 가속 & 소금 안 밟음",
    "Gallu": "방어 장비 쓰면 격노 가속 & 소금 안 밟음",
    "오밤보": "평온(느림)과 분노(사냥 증가·초가속) 주기적 전환",
    "Obambo": "평온(느림)과 분노(사냥 증가·초가속) 주기적 전환",
    "아스왕": "은신처 숨으면 살해 불가 & 가속 속도 최고속",
    "Aswang": "은신처 숨으면 살해 불가 & 가속 속도 최고속",
    "코르모스": "시야는 장님 ➔ 발소리/달리기로 위치 탐지",
    "Kormos": "시야는 장님 ➔ 발소리/달리기로 위치 탐지"
};

// 증거 버튼 클릭 상태 토글 초기화
function initEvidenceButtons() {
    const buttons = document.querySelectorAll('.evidence-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const ev = btn.getAttribute('data-evidence');
            if (!includedEvidences.includes(ev) && !excludedEvidences.includes(ev)) {
                includedEvidences.push(ev);
                btn.classList.add('included');
            } else if (includedEvidences.includes(ev)) {
                includedEvidences = includedEvidences.filter(e => e !== ev);
                btn.classList.remove('included');
                excludedEvidences.push(ev);
                btn.classList.add('excluded');
            } else {
                excludedEvidences = excludedEvidences.filter(e => e !== ev);
                btn.classList.remove('excluded');
            }
            renderGhostList();
        });
    });

    const resetBtn = document.getElementById('reset-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            includedEvidences = [];
            excludedEvidences = [];
            buttons.forEach(btn => {
                btn.classList.remove('included', 'excluded');
            });
            activeFilters = { hasAccel: false, hasSpecialSpeed: false, hasForcedEv: false, hasTargetRoam: false };
            document.querySelectorAll('.filter-chip input').forEach(input => input.checked = false);
            renderGhostList();
        });
    }
}

// 특수 필터 토글
function toggleFilter(filterKey) {
    activeFilters[filterKey] = !activeFilters[filterKey];
    renderGhostList();
}

// 증거 분석 유령 카드 렌더링 (독립 4열 Flex 분배)
function renderGhostList() {
    const container = document.getElementById('ghost-list-container');
    const countEl = document.getElementById('ghost-count');
    if (!container || typeof GHOST_DATA === 'undefined') return;

    container.innerHTML = '';

    const filtered = GHOST_DATA.filter(ghost => {
        for (let ev of includedEvidences) {
            if (!ghost.evidences.includes(ev)) return false;
        }
        for (let ev of excludedEvidences) {
            if (ghost.evidences.includes(ev)) return false;
        }
        if (activeFilters.hasAccel && !ghost.hasAccel) return false;
        if (activeFilters.hasSpecialSpeed && !ghost.hasSpecialSpeed) return false;
        if (activeFilters.hasForcedEv && !ghost.hasForcedEv) return false;
        if (activeFilters.hasTargetRoam && !ghost.hasTargetRoam) return false;

        return true;
    });

    if (countEl) countEl.innerText = filtered.length;

    // 4열을 감싸는 메인 래퍼
    const columnsWrapper = document.createElement('div');
    columnsWrapper.className = 'ghost-columns-container';

    // 4개의 독립 컬럼 생성 (1열, 2열, 3열, 4열)
    const colElements = [
        document.createElement('div'),
        document.createElement('div'),
        document.createElement('div'),
        document.createElement('div')
    ];

    colElements.forEach(col => {
        col.className = 'ghost-col';
        columnsWrapper.appendChild(col);
    });

    filtered.forEach((ghost, index) => {
        const card = document.createElement('div');
        card.className = 'ghost-card';

        const evidencesHtml = ghost.evidences.map(ev => {
            const isMatched = includedEvidences.includes(ev) ? 'matched' : '';
            return `<span class="ev-tag ${isMatched}">${ev}</span>`;
        }).join(' ');

        // 1줄 확정 필살기 매핑 (공백 제거 후 검색 + engName 교차 검색)
        const cleanName = ghost.name ? ghost.name.trim() : '';
        const cleanEng = ghost.engName ? ghost.engName.trim() : '';
        const signatureSkill = GHOST_SIGNATURE_SKILLS[cleanName] || GHOST_SIGNATURE_SKILLS[cleanEng] || "고유 특수 패턴 보유";

        // 유튜브 검색 쿼리: 파스모포비아 (유령이름) 공략 필살기 뇽자
        const ytQuery = encodeURIComponent(`파스모포비아 ${ghost.name} 공략 필살기 뇽자`);

        card.innerHTML = `
            <div class="ghost-card-header">
                <img src="images/ghosts/${ghost.engName}.webp"
                     onerror="this.onerror=null; this.src='images/ghosts/Spirit.webp'"
                     class="ghost-icon"
                     alt="${ghost.name}">
                <div class="ghost-name">${ghost.name}</div>
                <div class="ghost-badge-group">
                    <span class="ghost-speed">속도: ${ghost.speed}</span>
                    <span class="ghost-sanity">정신력: ${ghost.sanity}</span>
                </div>
            </div>
            <div class="ghost-evidences">${evidencesHtml}</div>

            <!-- 🔥 에메랄드/민트 1줄 필살기 박스 -->
            <div class="ghost-signature-box">
                <span class="ghost-signature-tag">필살기</span>
                <span class="ghost-signature-desc">${signatureSkill}</span>
            </div>

            <!-- 📺 유튜브 배너 버튼 -->
            <div class="main-youtube-wrapper" style="margin: 8px 0 10px 0;">
                <a href="https://www.youtube.com/results?search_query=${ytQuery}" target="_blank" class="ghost-yt-banner-btn">
                    <span class="ghost-yt-title">${ghost.name} 공략 및 필살기 보러가기 ➔</span>
                </a>
            </div>

            <details class="ghost-details">
                <summary class="ghost-summary">
                    <span>💡 상세 정보 및 특징</span>
                    <span class="more-btn">더보기 ▾</span>
                </summary>
                <div class="ghost-tip-content" style="font-size:0.95rem; line-height:1.6; margin-top:8px;">${ghost.tip}</div>
            </details>
        `;

        // 4개 열에 순환 배분 (0 -> 1열, 1 -> 2열, 2 -> 3열, 3 -> 4열)
        const targetCol = colElements[index % 4];
        targetCol.appendChild(card);
    });

    container.appendChild(columnsWrapper);
}
