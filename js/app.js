// ==========================================
// 메인 애플리케이션 진입점 & 공통 UI 제어
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // 저장된 테마 불러오기 적용
    const savedTheme = localStorage.getItem('nyong_phasmo_theme') || 'default';
    document.body.className = `theme-${savedTheme}`;
    const themeSelect = document.getElementById('theme-select');
    if (themeSelect) {
        themeSelect.value = savedTheme;
    }

    if (typeof initEvidenceButtons === 'function') initEvidenceButtons();
    if (typeof renderGhostList === 'function') renderGhostList();
    if (typeof renderGhostDictionary === 'function') renderGhostDictionary();

    renderEquipment('ALL');
    renderWeekly();
    renderMaps('ALL');
    renderApocalypse();
    renderFactory();
    renderDrops();
    renderGuides();
    renderIdCards();
    renderNews();

    fetchVisitorCounts();
});

// 🎨 테마 변경 및 저장 로직
function changeTheme(themeName) {
    document.body.className = `theme-${themeName}`;
    localStorage.setItem('nyong_phasmo_theme', themeName);
}

// 🗺️ karotte.org 맵 URL 매핑
function getKarotteMapUrl(rawName) {
    const mapMap = {
        "6 Tanglewood Drive": "https://phasmo.karotte.org/maps/6-tanglewood-drive/",
        "42 Edgefield Road": "https://phasmo.karotte.org/maps/42-edgefield-road/",
        "10 Ridgeview Court": "https://phasmo.karotte.org/maps/10-ridgeview-court/",
        "13 Willow Street": "https://phasmo.karotte.org/maps/13-willow-street/",
        "Camp Woodwind": "https://phasmo.karotte.org/maps/camp-woodwind/",
        "Grafton Farmhouse": "https://phasmo.karotte.org/maps/grafton-farmhouse/",
        "Bleasdale Farmhouse": "https://phasmo.karotte.org/maps/bleasdale-farmhouse/",
        "Point Hope": "https://phasmo.karotte.org/maps/point-hope/",
        "Maple Lodge Campsite": "https://phasmo.karotte.org/maps/maple-lodge-campsite/",
        "Prison": "https://phasmo.karotte.org/maps/prison/",
        "Brownstone High School": "https://phasmo.karotte.org/maps/brownstone-high-school/",
        "Sunny Meadows": "https://phasmo.karotte.org/maps/sunny-meadows-mental-institution/",
        "Sunny Meadows Restricted": "https://phasmo.karotte.org/maps/sunny-meadows-mental-institution/",
    };
    return mapMap[rawName] || "https://phasmo.karotte.org/";
}

// 3. 🛠️ 장비 가이드 렌더링 (좌우 4:6 분할 & 유튜브 배너 통합)
let currentSelectedEqIndex = 0;
let currentEqCategory = 'ALL';

function renderEquipment(category = 'ALL') {
    const container = document.getElementById('equipment-container');
    if (!container || typeof EQUIPMENT_DATA === 'undefined') return;
    container.innerHTML = '';
    currentEqCategory = category;

    const filteredEq = category === 'ALL'
        ? EQUIPMENT_DATA
        : EQUIPMENT_DATA.filter(e => e.category.includes(category));

    if (currentSelectedEqIndex >= filteredEq.length) {
        currentSelectedEqIndex = 0;
    }

    const wrapper = document.createElement('div');
    wrapper.className = 'weekly-split-layout eq-split-layout';

    const leftCol = document.createElement('div');
    leftCol.className = 'weekly-left-pane';
    leftCol.innerHTML = `
        <div class="guide-card" style="margin-bottom: 12px; border-left: 4px solid var(--accent-vibrant); padding: 12px 14px;">
            <div class="guide-card-title" style="font-size: 1.05rem; margin-bottom: 6px;">🛠️ 티어(Tier)별 장비 업그레이드 시스템</div>
            <div class="guide-card-body" style="font-size: 0.9rem; line-height: 1.55; color: var(--text-secondary);">
                • <strong>1티어:</strong> 아날로그/초기 기본 장비 (낮은 정밀도, 오차 발생)<br>
                • <strong>2티어:</strong> 표준 디지털 장비 (안정적인 탐지 성능과 시야 제공)<br>
                • <strong>3티어:</strong> 최첨단 하이엔드 장비 (원거리 탐색, 스캔 및 고성능 보조)
            </div>
        </div>

        <div class="map-filter-bar" style="margin-bottom: 10px; gap: 6px;">
            <button class="map-filter-btn ${category === 'ALL' ? 'active' : ''}" onclick="filterEqCategory('ALL')">전체 (${EQUIPMENT_DATA.length})</button>
            <button class="map-filter-btn ${category === '증거' ? 'active' : ''}" onclick="filterEqCategory('증거')">증거 수집</button>
            <button class="map-filter-btn ${category === '생존' || category === '시야' ? 'active' : ''}" onclick="filterEqCategory('생존')">생존/시야</button>
        </div>

        <div class="weekly-scroll-list" id="eq-scroll-list">
            ${filteredEq.map((eq, idx) => `
                <button type="button"
                        class="weekly-list-item ${idx === currentSelectedEqIndex ? 'active' : ''}"
                        onclick="selectEqItem(${idx})">
                    <span class="eq-category" style="font-size: 0.8rem; padding: 2px 7px;">${eq.category.split('/')[0]}</span>
                    <span class="ch-name-txt" style="font-size: 1.02rem;">${eq.name}</span>
                    <span class="ch-map-tag" style="font-size: 0.8rem;">Tier 1-3</span>
                </button>
            `).join('')}
        </div>
    `;

    const rightCol = document.createElement('div');
    rightCol.className = 'weekly-right-pane';
    rightCol.id = 'eq-detail-pane';

    wrapper.appendChild(leftCol);
    wrapper.appendChild(rightCol);
    container.appendChild(wrapper);

    updateEqDetail(currentSelectedEqIndex);
}

function selectEqItem(index) {
    currentSelectedEqIndex = index;
    document.querySelectorAll('#eq-scroll-list .weekly-list-item').forEach((btn, idx) => {
        if (idx === index) btn.classList.add('active');
        else btn.classList.remove('active');
    });
    updateEqDetail(index);
}

function filterEqCategory(cat) {
    currentSelectedEqIndex = 0;
    renderEquipment(cat);
}

function updateEqDetail(index) {
    const pane = document.getElementById('eq-detail-pane');
    if (!pane || typeof EQUIPMENT_DATA === 'undefined') return;

    const filteredEq = currentEqCategory === 'ALL'
        ? EQUIPMENT_DATA
        : EQUIPMENT_DATA.filter(e => e.category.includes(currentEqCategory));

    const eq = filteredEq[index] || filteredEq[0];
    if (!eq) return;

    const ytQuery = encodeURIComponent(`파스모포비아 ${eq.name.split('(')[0].trim()} 3티어 공략 뇽자`);

    pane.innerHTML = `
        <div class="weekly-detail-card">
            <div class="weekly-detail-header">
                <div>
                    <div style="font-size: 1.65rem; font-weight: 800; color: var(--text-primary);">${eq.name}</div>
                    <div style="font-size: 0.95rem; color: var(--accent-light); margin-top: 3px; font-weight: 600;">
                        분류: ${eq.category}
                    </div>
                </div>
                <span class="eq-category" style="font-size: 0.95rem; padding: 5px 12px;">${eq.category}</span>
            </div>

            <div style="margin: 14px 0 16px 0;">
                <a href="https://www.youtube.com/results?search_query=${ytQuery}" target="_blank" class="weekly-yt-banner-btn">
                    <span class="yt-banner-icon">🛠️</span>
                    <div class="yt-banner-textbox">
                        <div class="yt-banner-title">📺 유튜브에서 '${eq.name.split('(')[0].trim()}' 3티어 실전 가이드 보기</div>
                        <div class="yt-banner-sub">클릭 시 해당 장비의 뇽자 티어별 스펙 및 활용 팁 영상으로 이동합니다.</div>
                    </div>
                    <span class="yt-banner-arrow">영상 보기 ➔</span>
                </a>
            </div>

            <div class="dict-section-title">1. 티어(Tier)별 기본 스펙 요약</div>
            <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px;">
                <div class="eq-tier-box">
                    <div class="eq-tier-title">Tier 1</div>
                    <div class="eq-tier-desc">${eq.t1}</div>
                </div>
                <div class="eq-tier-box">
                    <div class="eq-tier-title">Tier 2</div>
                    <div class="eq-tier-desc">${eq.t2}</div>
                </div>
                <div class="eq-tier-box">
                    <div class="eq-tier-title">Tier 3</div>
                    <div class="eq-tier-desc">${eq.t3}</div>
                </div>
            </div>

            <div class="dict-section-title">2. 장비 스펙 & 심층 사용 가이드 (Deep Dive)</div>
            <div style="background: rgba(0, 0, 0, 0.4); padding: 16px; border-radius: 8px; border: 1px solid var(--card-border); font-size: 0.94rem; line-height: 1.65;">
                ${eq.detailedHtml || '<p style="color: var(--text-secondary);">해당 장비의 추가 상세 스펙 데이터가 준비 중입니다.</p>'}
            </div>
        </div>
    `;
}

// 4. 주간 도전 과제 렌더링
let currentSelectedChallengeId = 1;

function renderWeekly() {
    const container = document.getElementById('weekly-container');
    if (!container || typeof WEEKLY_CHALLENGES === 'undefined') return;
    container.innerHTML = '';

    const weeklyWrapper = document.createElement('div');
    weeklyWrapper.className = 'weekly-split-layout';

    const leftCol = document.createElement('div');
    leftCol.className = 'weekly-left-pane';
    leftCol.innerHTML = `
        <div class="guide-card" style="margin-bottom: 14px; border-left: 4px solid var(--accent-vibrant);">
            <div class="guide-card-title" style="font-size: 1.15rem;">🎯 주간 도전 과제 (Challenge Mode) 개요</div>
            <div class="guide-card-body" style="font-size: 0.95rem; line-height: 1.6;">
                • <strong>초기화 주기:</strong> 매주 월요일 오전 9시 (KST / 00:00 UTC)<br>
                • <strong>클리어 보상:</strong> <strong>$5,000 게임 머니 + 5,000 XP</strong> (지정 맵에서 유령 3회 특정 시 완료)<br>
                • <strong>장비 무료 제공:</strong> 요구되는 모든 장비가 무료 지급되며, <strong>사망해도 소지품 손실 패널티가 없습니다.</strong>
            </div>
        </div>

        <div style="font-size: 1.05rem; font-weight: 700; color: var(--accent-light); margin-bottom: 8px; display: flex; justify-content: space-between; align-items: center;">
            <span>📜 26종 챌린지 로테이션 목록</span>
            <span style="font-size: 0.88rem; color: var(--text-secondary); font-weight: normal;">* 클릭하여 상세 보기</span>
        </div>

        <div class="weekly-scroll-list" id="weekly-scroll-list">
            ${WEEKLY_CHALLENGES.map(ch => `
                <button type="button"
                        class="weekly-list-item ${ch.id === currentSelectedChallengeId ? 'active' : ''}"
                        onclick="selectChallenge(${ch.id})">
                    <span class="ch-id-badge">#${ch.id}</span>
                    <span class="ch-name-txt">${ch.nameKr}</span>
                    <span class="ch-map-tag">${ch.map.split('(')[0]}</span>
                </button>
            `).join('')}
        </div>
    `;

    const rightCol = document.createElement('div');
    rightCol.className = 'weekly-right-pane';
    rightCol.id = 'weekly-detail-pane';

    weeklyWrapper.appendChild(leftCol);
    weeklyWrapper.appendChild(rightCol);
    container.appendChild(weeklyWrapper);

    updateChallengeDetail(currentSelectedChallengeId);
}

function selectChallenge(id) {
    currentSelectedChallengeId = id;
    document.querySelectorAll('#weekly-scroll-list .weekly-list-item').forEach(btn => btn.classList.remove('active'));

    const clickedBtn = document.querySelector(`#weekly-scroll-list .weekly-list-item:nth-child(${id})`);
    if (clickedBtn) clickedBtn.classList.add('active');

    updateChallengeDetail(id);
}

function updateChallengeDetail(id) {
    const pane = document.getElementById('weekly-detail-pane');
    if (!pane || typeof WEEKLY_CHALLENGES === 'undefined') return;

    const data = WEEKLY_CHALLENGES.find(c => c.id === id) || WEEKLY_CHALLENGES[0];
    const ytQuery = encodeURIComponent(`파스모포비아 주간 챌린지 ${data.nameEn} 뇽자`);

    pane.innerHTML = `
        <div class="weekly-detail-card">
            <div class="weekly-detail-header">
                <div>
                    <div style="font-size: 0.95rem; color: var(--accent-light); font-weight: 700;">CHALLENGE #${data.id}</div>
                    <div style="font-size: 1.65rem; font-weight: 800; color: var(--text-primary); margin-top: 2px;">${data.nameKr}</div>
                    <div style="font-size: 0.92rem; color: var(--text-secondary); font-style: italic; margin-top: 4px;">"${data.quote}"</div>
                </div>
                <span class="map-badge Medium" style="font-size: 1.0rem; padding: 7px 16px;">🗺️ ${data.map}</span>
            </div>

            <div style="margin: 14px 0 16px 0;">
                <a href="https://www.youtube.com/results?search_query=${ytQuery}" target="_blank" class="weekly-yt-banner-btn">
                    <span class="yt-banner-icon">▶️</span>
                    <div class="yt-banner-textbox">
                        <div class="yt-banner-title">📺 유튜브에서 '${data.nameEn}' 뇽자 공략 영상 보기</div>
                        <div class="yt-banner-sub">클릭 시 해당 주간 챌린지의 뇽자 실전 클리어 및 공략 검색창으로 바로 이동합니다.</div>
                    </div>
                    <span class="yt-banner-arrow">영상 보기 ➔</span>
                </a>
            </div>

            <div class="dict-section-title">1. 게임 환경 & 파라미터 세부 설정 (Status)</div>
            <div style="overflow-x: auto; margin-bottom: 14px;">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.92rem; color: var(--text-secondary); text-align: left;">
                    <tbody>
                        <tr style="border-bottom: 1px solid var(--card-border);">
                            <td style="padding: 8px 10px; font-weight: 700; color: var(--accent-light); width: 22%;">제공 증거 수</td>
                            <td style="padding: 8px 10px; color: var(--text-primary); width: 28%;">${data.evidences}</td>
                            <td style="padding: 8px 10px; font-weight: 700; color: var(--accent-light); width: 22%;">준비 시간</td>
                            <td style="padding: 8px 10px; color: var(--text-primary); width: 28%;">${data.setupTime}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid var(--card-border);">
                            <td style="padding: 8px 10px; font-weight: 700; color: var(--accent-light);">정신력 상태</td>
                            <td style="padding: 8px 10px; color: var(--text-primary);">${data.sanity}</td>
                            <td style="padding: 8px 10px; font-weight: 700; color: var(--accent-light);">이동 속도</td>
                            <td style="padding: 8px 10px; color: var(--text-primary);">${data.speed}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid var(--card-border);">
                            <td style="padding: 8px 10px; font-weight: 700; color: var(--accent-light);">은신처 상태</td>
                            <td style="padding: 8px 10px; color: var(--text-primary);">${data.hiding}</td>
                            <td style="padding: 8px 10px; font-weight: 700; color: var(--accent-light);">두꺼비집(차단기)</td>
                            <td style="padding: 8px 10px; color: var(--text-primary);">${data.breaker}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid var(--card-border);">
                            <td style="padding: 8px 10px; font-weight: 700; color: var(--accent-light);">저주받은 물건</td>
                            <td style="padding: 8px 10px; color: var(--text-primary);">${data.cursed}</td>
                            <td style="padding: 8px 10px; font-weight: 700; color: var(--accent-light);">문 상태 & 날씨</td>
                            <td style="padding: 8px 10px; color: var(--text-primary);">${data.doors} / ${data.weather}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="dict-section-title">2. 장비 지급 및 누락 조건 (Loadout)</div>
            <div style="background: var(--card-bg); padding: 13px 16px; border-radius: 8px; border: 1px solid var(--card-border); font-size: 0.94rem; line-height: 1.65; margin-bottom: 14px;">
                <div style="color: var(--accent-red); margin-bottom: 6px;">${data.missingItems}</div>
                <div style="color: var(--accent-green);">${data.availableItems}</div>
            </div>

            <div class="dict-section-title">3. 핵심 공략법 및 추천 전략 (Strategy)</div>
            <div style="background: var(--accent-glow); padding: 15px; border-radius: 8px; border-left: 4px solid var(--accent-vibrant); font-size: 0.96rem; line-height: 1.7; color: var(--text-primary);">
                💡 ${data.strategy}
            </div>
        </div>
    `;
}

// 5. 🗺️ 맵 정보 렌더링 (대형 바로가기 버튼 영역 적용)
let currentSelectedMapIndex = 0;
let currentMapCategory = 'ALL';

function getMapDisplayName(rawName) {
    const mapNameMap = {
        "6 Tanglewood Drive": "탱글우드 드라이브 (6 Tanglewood Drive)",
        "42 Edgefield Road": "엣지필드 로드 (42 Edgefield Road)",
        "10 Ridgeview Court": "리지뷰 코트 (10 Ridgeview Court)",
        "Nell's Diner": "넬스 다이너 (Nell's Diner)",
        "13 Willow Street": "윌로우 스트리트 (13 Willow Street)",
        "Camp Woodwind": "우드윈드 캠프장 (Camp Woodwind)",
        "Grafton Farmhouse": "그라프톤 농가 (Grafton Farmhouse)",
        "Bleasdale Farmhouse": "블리즈데일 농가 (Bleasdale Farmhouse)",
        "Point Hope": "포인트 호프 등대 (Point Hope)",
        "Point Hope - Restricted": "포인트 호프 등대 제한구역 (Point Hope - Restricted)",
        "Maple Lodge Campsite": "메이플 롯지 캠프장 (Maple Lodge Campsite)",
        "Prison": "감옥 (Prison)",
        "Prison - Restricted": "감옥 제한구역 (Prison - Restricted)",
        "Brownstone High School": "브라운스톤 고등학교 (Brownstone High School)",
        "Brownstone High School - Restricted": "고등학교 제한구역 (Brownstone High School - Restricted)",
        "Sunny Meadows Mental Institution": "써니 메도우 (Sunny Meadows Mental Institution)",
        "Sunny Meadows Mental Institution - Restricted": "써니 메도우 제한구역 (Sunny Meadows Mental Institution - Restricted)",
    };

    if (mapNameMap[rawName]) return mapNameMap[rawName];
    if (rawName.includes('(')) return rawName;
    return rawName;
}

function getMapSearchKeyword(rawName) {
    const searchNameMap = {
        "6 Tanglewood Drive": "탱글우드",
        "42 Edgefield Road": "엣지필드",
        "10 Ridgeview Court": "리지뷰",
        "Nell's Diner": "넬스다이너",
        "13 Willow Street": "윌로우",
        "Camp Woodwind": "우드윈드",
        "Grafton Farmhouse": "그라프톤",
        "Bleasdale Farmhouse": "블리즈데일",
        "Point Hope": "포인트호프",
        "Point Hope Restricted": "등대 제한구역",
        "Maple Lodge Campsite": "메이플롯지",
        "Prison": "감옥",
        "Prison Restricted": "감옥 제한구역",
        "Brownstone High School": "고등학교",
        "Brownstone High School Restricted": "고등학교 제한구역",
        "Sunny Meadows": "써니메도우",
        "Sunny Meadows Restricted": "써니메도우 제한구역"
    };

    return searchNameMap[rawName] || rawName.split(' ')[0];
}

function renderMaps(category = 'ALL') {
    const container = document.getElementById('maps-container');
    if (!container || typeof MAP_DATA === 'undefined') return;
    container.innerHTML = '';
    currentMapCategory = category;

    const filteredMaps = category === 'ALL'
        ? MAP_DATA
        : MAP_DATA.filter(m => m.category === category);

    if (currentSelectedMapIndex >= filteredMaps.length) {
        currentSelectedMapIndex = 0;
    }

    const wrapper = document.createElement('div');
    wrapper.className = 'weekly-split-layout map-split-layout';

    const leftCol = document.createElement('div');
    leftCol.className = 'weekly-left-pane';
    leftCol.innerHTML = `
        <div class="guide-card" style="margin-bottom: 12px; border-left: 4px solid var(--accent-vibrant); padding: 12px 14px;">
            <div class="guide-card-title" style="font-size: 1.05rem; margin-bottom: 6px;">📦 은신처(Hiding Spot) 공통 규칙</div>
            <div class="guide-card-body" style="font-size: 0.9rem; line-height: 1.55; color: var(--text-secondary);">
                • <strong>초보자:</strong> 차단 없음 (모든 은신처 100% 개방)<br>
                • <strong>중급자/전문가:</strong> 2~3곳 차단 | <strong>악몽/광기:</strong> 4곳 차단<br>
                • <strong>멀티 인원 보너스:</strong> 3인 플레이 시 +1곳 / 4인 시 +2곳 추가 개방
            </div>
        </div>

        <div class="map-filter-bar" style="margin-bottom: 10px; gap: 6px;">
            <button class="map-filter-btn ${category === 'ALL' ? 'active' : ''}" onclick="filterMapCategory('ALL')">전체 (${MAP_DATA.length})</button>
            <button class="map-filter-btn ${category === 'Small' ? 'active' : ''}" onclick="filterMapCategory('Small')">소형</button>
            <button class="map-filter-btn ${category === 'Medium' ? 'active' : ''}" onclick="filterMapCategory('Medium')">중형</button>
            <button class="map-filter-btn ${category === 'Large' ? 'active' : ''}" onclick="filterMapCategory('Large')">대형</button>
        </div>

        <div class="weekly-scroll-list" id="map-scroll-list">
            ${filteredMaps.map((m, idx) => `
                <button type="button"
                        class="weekly-list-item ${idx === currentSelectedMapIndex ? 'active' : ''}"
                        onclick="selectMapItem(${idx})">
                    <span class="map-badge ${m.category}" style="font-size: 0.82rem; padding: 2px 8px;">${m.category}</span>
                    <span class="ch-name-txt" style="font-size: 1.02rem;">${getMapDisplayName(m.name)}</span>
                    <span class="ch-map-tag" style="font-size: 0.82rem;">${m.rooms || ''}</span>
                </button>
            `).join('')}
        </div>
    `;

    const rightCol = document.createElement('div');
    rightCol.className = 'weekly-right-pane';
    rightCol.id = 'map-detail-pane';

    wrapper.appendChild(leftCol);
    wrapper.appendChild(rightCol);
    container.appendChild(wrapper);

    updateMapDetail(currentSelectedMapIndex);
}

function selectMapItem(index) {
    currentSelectedMapIndex = index;
    document.querySelectorAll('#map-scroll-list .weekly-list-item').forEach((btn, idx) => {
        if (idx === index) btn.classList.add('active');
        else btn.classList.remove('active');
    });
    updateMapDetail(index);
}

function filterMapCategory(cat) {
    currentSelectedMapIndex = 0;
    renderMaps(cat);
}

function updateMapDetail(index) {
    const pane = document.getElementById('map-detail-pane');
    if (!pane || typeof MAP_DATA === 'undefined') return;

    const filteredMaps = currentMapCategory === 'ALL'
        ? MAP_DATA
        : MAP_DATA.filter(m => m.category === currentMapCategory);

    const map = filteredMaps[index] || filteredMaps[0];
    if (!map) return;

    const mapKey = getMapSearchKeyword(map.name);
    const mapYtQuery = encodeURIComponent(`파스모포비아 ${mapKey} 뺑뺑이 뇽자`);
    const karotteUrl = getKarotteMapUrl(map.name);

    // 🗺️ 회색 오류 화면 대신 공간을 넓게 쓴 대형 인터랙티브 바로가기 영역
    const mapAreaHtml = `
        <div style="margin: 16px 0; border: 2px dashed var(--accent-vibrant); border-radius: 12px; padding: 45px 20px; background: rgba(109, 76, 251, 0.06); text-align: center; display: flex; flex-direction: column; align-items: center; gap: 16px;">
            <div style="font-size: 3.2rem;">🗺️</div>
            <div style="font-size: 1.4rem; font-weight: 800; color: var(--accent-light);">
                ${getMapDisplayName(map.name)} 인터랙티브 정밀 구조도
            </div>
            <div style="font-size: 0.95rem; color: var(--text-secondary); max-width: 500px; line-height: 1.5;">
                phasmo.karotte.org 사이트의 보안 정책상 외부 창 임베딩이 차단되어 있습니다. 아래 버튼을 눌러 지도를 크게 확인하세요!
            </div>
            <a href="${karotteUrl}" target="_blank"
               style="display: inline-block; padding: 16px 45px; background: var(--accent-vibrant); color: #fff; text-decoration: none; border-radius: 10px; font-weight: 700; font-size: 1.15rem; transition: all 0.2s ease; box-shadow: 0 4px 20px var(--accent-glow);">
                🌐 '${getMapDisplayName(map.name)}' 지도 크게 보기 (새 창) ➔
            </a>
        </div>
    `;

    pane.innerHTML = `
        <div class="weekly-detail-card">
            <div class="weekly-detail-header">
                <div>
                    <div style="font-size: 1.65rem; font-weight: 800; color: var(--text-primary);">${getMapDisplayName(map.name)}</div>
                    <div style="font-size: 0.95rem; color: var(--accent-light); margin-top: 3px; font-weight: 600;">
                        구조: ${map.size} (${map.rooms})
                    </div>
                </div>
                <span class="map-badge ${map.category}" style="font-size: 1.0rem; padding: 7px 16px;">${map.category}</span>
            </div>

            <!-- 지도 공간 영역 -->
            ${mapAreaHtml}

            <div style="margin-bottom: 16px;">
                <a href="https://www.youtube.com/results?search_query=${mapYtQuery}" target="_blank" class="weekly-yt-banner-btn">
                    <span class="yt-banner-icon">🌀</span>
                    <div class="yt-banner-textbox">
                        <div class="yt-banner-title">📺 유튜브에서 '${mapKey}' 뺑뺑이 & 루핑 공략 영상 보기</div>
                        <div class="yt-banner-sub">클릭 시 해당 맵의 뇽자 은신처 드리블 및 뺑뺑이 가이드 검색 결과로 이동합니다.</div>
                    </div>
                    <span class="yt-banner-arrow">영상 보기 ➔</span>
                </a>
            </div>

            <div class="dict-section-title">💡 맵 핵심 탐색 팁 (Exploration Tip)</div>
            <div style="background: var(--accent-glow); padding: 13px 15px; border-radius: 8px; border-left: 4px solid var(--accent-vibrant); font-size: 0.95rem; line-height: 1.65; color: var(--text-primary); margin-bottom: 16px;">
                ${map.tip}
            </div>

            <div class="dict-section-title">📋 룸 목록, 은신처 & 저주 물건 상세 공략</div>
            <div style="background: var(--card-bg); padding: 14px 16px; border-radius: 8px; border: 1.5px solid var(--card-border); font-size: 0.92rem; line-height: 1.65; color: var(--text-primary);">
                ${map.detailedHtml || '<p style="color: var(--text-secondary);">상세 정보 업데이트 준비 중입니다.</p>'}
            </div>
        </div>
    `;
}

// 6. 아포칼립스 렌더링 (최종 완성본)
const APOCALYPSE_RELATED_VIDEOS = [
    { title: "아포칼립스 15배율 뺑뺑이", id: "zoXY56jyHKo" },
    { title: "써니 메도우 맵 완벽 정복", id: "zoXY56jyHKo" },
    { title: "유령별 특징 구분 꿀팁", id: "zoXY56jyHKo" }
];

function renderApocalypse() {
    const container = document.getElementById('apocalypse-container');
    if (!container || typeof APOCALYPSE_DATA === 'undefined') return;
    container.innerHTML = '';

    const data = APOCALYPSE_DATA;
    const mainYtId = "zoXY56jyHKo"; // 메인 공략 영상 ID

    const wrapper = document.createElement('div');
    wrapper.className = 'weekly-split-layout apocalypse-split-layout';

    // 1. 좌측 패널 (완벽 가이드 본문 + 상세 공략)
    const leftCol = document.createElement('div');
    leftCol.className = 'weekly-left-pane';
    leftCol.style.flex = '0 0 calc(50% - 10px)';
    leftCol.style.width = 'calc(50% - 10px)';
    leftCol.style.maxWidth = 'calc(50% - 10px)';
    leftCol.innerHTML = `
        <div class="guide-card" style="margin-bottom: 16px; border-left: 4px solid var(--accent-vibrant); padding: 16px;">
            <div class="guide-card-title" style="font-size: 1.15rem; margin-bottom: 8px;">💀 💀 아포칼립스 챌린지 (Apocalypse Challenge) 완벽 가이드</div>
            <div class="guide-card-body" style="font-size: 0.92rem; line-height: 1.6; color: var(--text-secondary);">
                • <strong>도전 목표:</strong> 써니 메도우 정신병원 본관 전역을 무대로 극악의 조건 속에서 트로피 배율 달성<br>
                • <strong>필수 조건:</strong> 유령 종류 특정, 목표 3가지 완료, 사냥/이벤트 중 사진 촬영 후 생존 탈출
            </div>
        </div>

        <div class="weekly-detail-card">
            <div class="dict-section-title" style="margin-top: 0;">📋 상세 공략 및 가이드 (DETAILED GUIDE)</div>
            <div style="background: var(--card-bg); padding: 14px 16px; border-radius: 8px; border: 1.5px solid var(--card-border); font-size: 0.92rem; line-height: 1.65; color: var(--text-primary);">
                ${data.detailedHtml}
            </div>
        </div>
    `;

    // 2. 우측 패널 (실시간 생방송 연동 박스 + 유튜브 공략 링크 배너 + 실시간 플레이어 + 함께 보면 좋은 공략 영상 그리드)
    const rightCol = document.createElement('div');
    rightCol.className = 'weekly-right-pane';
    rightCol.style.flex = '0 0 calc(50% - 10px)';
    rightCol.style.width = 'calc(50% - 10px)';
    rightCol.style.maxWidth = 'calc(50% - 10px)';
    rightCol.innerHTML = `
        <!-- 실시간 생방송 연동 박스 -->
        <div class="guide-card" style="margin-bottom: 16px; border-left: 4px solid var(--accent-green); padding: 16px;">
            <div class="guide-card-title" style="font-size: 1.05rem; margin-bottom: 6px; color: var(--accent-green);">📺 실시간 뇽자 생방송 연동</div>
            <div class="guide-card-body" style="font-size: 0.9rem; line-height: 1.5; color: var(--text-secondary); margin-bottom: 12px;">
                아포칼립스 15배율 트로피 트라이 실전 공략을 생방송 화면과 함께 실시간으로 확인해보세요!
            </div>
            <a href="https://chzzk.naver.com/live/14fd4427ab76277bee9567d27dcbf0e8" target="_blank" class="yt-btn" style="text-align: center; text-decoration: none; display: block; padding: 10px; font-size: 0.92rem; background: rgba(52, 211, 153, 0.15); border-color: var(--accent-green); color: var(--accent-green); font-weight: 700; border-radius: 8px;">
                🟢 치지직 실시간 생방송 바로가기
            </a>
        </div>

        <!-- 유튜브 메인 공략 링크 배너 -->
        <div style="margin-bottom: 16px;">
            <a href="https://www.youtube.com/watch?v=${mainYtId}" target="_blank" class="weekly-yt-banner-btn">
                <span class="yt-banner-icon">▶️</span>
                <div class="yt-banner-textbox">
                    <div class="yt-banner-title">📺 유튜브에서 '아포칼립스 15배율' 뇽자 실전 공략 보기</div>
                    <div class="yt-banner-sub">클릭 시 뇽자의 황금트로피 획득 완벽 공략 영상으로 이동합니다.</div>
                </div>
                <span class="yt-banner-arrow">영상 보기 ➔</span>
            </a>
        </div>

        <!-- 실시간 라이브 스트리밍 플레이어 -->
        <div class="weekly-detail-card" style="margin-bottom: 16px;">
            <div class="weekly-detail-header" style="margin-bottom: 14px;">
                <div>
                    <div style="font-size: 1.3rem; font-weight: 800; color: var(--text-primary);">🔴 실시간 라이브 스트리밍</div>
                    <div style="font-size: 0.88rem; color: var(--accent-light); margin-top: 2px;">뇽자의 치지직 생방송 화면을 실시간으로 시청하세요.</div>
                </div>
                <span class="map-badge Medium" style="font-size: 0.9rem; padding: 5px 12px;">LIVE</span>
            </div>
            <div style="position: relative; width: 100%; padding-bottom: 56.25%; border-radius: 10px; overflow: hidden; border: 1.5px solid var(--card-border); background-color: #000;">
                <iframe src="https://chzzk.naver.com/live/14fd4427ab76277bee9567d27dcbf0e8/player" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" allow="autoplay; fullscreen" allowfullscreen></iframe>
            </div>
        </div>

        <!-- 함께 보면 좋은 공략 영상 그리드 -->
        <div class="weekly-detail-card">
            <div class="dict-section-title" style="margin-top: 0;">🔗 함께 보면 좋은 뇽자 공략 영상</div>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 10px;">
                ${APOCALYPSE_RELATED_VIDEOS.map(v => `
                    <a href="https://www.youtube.com/watch?v=${v.id}" target="_blank" style="text-decoration: none; background: var(--bg-color); border: 1.5px solid var(--card-border); border-radius: 8px; padding: 8px; display: block; transition: all 0.2s ease;" onmouseover="this.style.borderColor='var(--accent-light)'; this.style.transform='translateY(-2px)';" onmouseout="this.style.borderColor='var(--card-border)'; this.style.transform='translateY(0)';">
                        <img src="https://img.youtube.com/vi/${v.id}/mqdefault.jpg" style="width: 100%; border-radius: 6px; display: block;">
                        <div style="font-size: 0.8rem; color: var(--text-primary); margin-top: 6px; text-align: center; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-weight: 600;">${v.title}</div>
                    </a>
                `).join('')}
            </div>
        </div>
    `;

    wrapper.appendChild(leftCol);
    wrapper.appendChild(rightCol);
    container.appendChild(wrapper);
}

// 7. 드롭스 렌더링
function renderDrops() {
    const container = document.getElementById('drops-container');
    if (!container || typeof DROPS_DATA === 'undefined') return;
    container.innerHTML = '';

    DROPS_DATA.forEach(item => {
        const card = document.createElement('div');
        card.className = 'guide-card';
        card.innerHTML = `
            <div class="guide-card-title">🎁 ${item.title}</div>
            <div style="font-size: 0.85rem; color: var(--accent-light); margin-bottom: 8px;">📅 기간: ${item.period} (${item.date})</div>
            <div class="guide-card-body" style="margin-bottom: 12px;">${item.content}</div>
            <a href="${item.url}" target="_blank" class="weekly-yt-banner-btn" style="padding: 8px 12px;">
                <span class="yt-banner-icon">🌐</span>
                <div class="yt-banner-textbox">
                    <div class="yt-banner-title" style="font-size: 0.92rem;">공식 트위치 드롭스 안내 페이지</div>
                </div>
                <span class="yt-banner-arrow" style="font-size: 0.85rem; padding: 4px 8px;">이동 ➔</span>
            </a>
        `;
        container.appendChild(card);
    });
}

// 8. 핵심 공략 렌더링
function renderGuides() {
    const container = document.getElementById('guide-container');
    if (!container || typeof GUIDE_DATA === 'undefined') return;
    container.innerHTML = '';

    GUIDE_DATA.forEach(g => {
        const card = document.createElement('div');
        card.className = 'guide-card';
        card.innerHTML = `
            <div class="guide-card-title">🔥 ${g.title}</div>
            <div class="guide-card-body">${g.body}</div>
        `;
        container.appendChild(card);
    });
}

// 9. ID 카드 & 배지 렌더링
function renderIdCards() {
    const container = document.getElementById('idcard-container');
    if (!container || typeof IDCARD_DATA === 'undefined') return;
    container.innerHTML = '';

    IDCARD_DATA.forEach(id => {
        const card = document.createElement('div');
        card.className = 'eq-card';
        card.innerHTML = `
            <div class="eq-header">
                <div class="eq-name">${id.name}</div>
                <span class="eq-category">${id.category}</span>
            </div>
            <div class="eq-tier-box">
                <div class="eq-tier-title">단계 1</div>
                <div class="eq-tier-desc">${id.t1}</div>
            </div>
            <div class="eq-tier-box">
                <div class="eq-tier-title">단계 2</div>
                <div class="eq-tier-desc">${id.t2}</div>
            </div>
            <div class="eq-tier-box">
                <div class="eq-tier-title">단계 3</div>
                <div class="eq-tier-desc">${id.t3}</div>
            </div>
        `;
        container.appendChild(card);
    });
}

// 10. 📢 패치 소식 (공식 Kinetic Games 뉴스 그리드 뷰 렌더링)
// 10. 📢 패치 소식 (상단 고정 안내 바 + 아코디언 리스트 뷰 렌더링)
function renderNews() {
    const container = document.getElementById('news-container');
    if (!container || typeof NEWS_DATA === 'undefined') return;
    container.innerHTML = '';

    // 상단 고정 안내 박스
    const headerBox = document.createElement('div');
    headerBox.style.width = "100%";
    headerBox.style.marginBottom = "14px";
    headerBox.innerHTML = `
        <div class="guide-card" style="border-left: 4px solid var(--accent-vibrant); padding: 14px 18px;">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
                <div>
                    <div class="guide-card-title" style="font-size: 1.18rem; margin-bottom: 4px;">📢 Kinetic Games 공식 최신 뉴스 & 패치 피드</div>
                    <div class="guide-card-body" style="font-size: 0.92rem; color: var(--text-secondary);">
                        공식 개발진이 작성한 최신 패치 노트, 로드맵 및 개발자 프리뷰 원문 링크입니다. 항목을 클릭하면 상세 내용과 원문으로 이동할 수 있습니다.
                    </div>
                </div>
                <a href="https://kineticgames.co.uk/news" target="_blank" class="map-filter-btn active" style="text-decoration: none; padding: 8px 16px; font-size: 0.95rem;">
                    🌐 공식 뉴스 전체보기 ➔
                </a>
            </div>
        </div>
    `;
    container.appendChild(headerBox);

    // 하단 아코디언 리스트 컨테이너
    const accordionContainer = document.createElement('div');
    accordionContainer.className = 'news-accordion-container';

    NEWS_DATA.forEach((n, idx) => {
        const itemId = `news-item-${idx}`;
        const item = document.createElement('div');
        item.className = 'news-accordion-item';
        item.id = itemId;

        // detailedHtml이 있으면 그걸 쓰고, 없으면 기존 desc 요약 박스를 보여줌
        const bodyContentHtml = n.detailedHtml ? n.detailedHtml : `
            <div class="news-section-box">
                <div class="news-sub-title">주요 요약 및 내용</div>
                <p>${n.desc}</p>
            </div>
        `;

        item.innerHTML = `
            <button type="button" class="news-accordion-header" onclick="toggleNews('${itemId}')">
                <div class="news-header-left">
                    <span class="news-badge">${n.category}</span>
                    <span class="news-title-text">${n.title}</span>
                </div>
                <div class="news-header-right">
                    <span class="news-date">${n.date}</span>
                    <span class="news-arrow">▼</span>
                </div>
            </button>
            <div class="news-accordion-body">
                <div class="news-body-content">
                    ${bodyContentHtml}
                    <div class="news-footer-link">
                        <a href="${n.url}" target="_blank" class="official-link-btn">
                            Kinetic Games 공식 원문 보기 ➔
                        </a>
                    </div>
                </div>
            </div>
        `;
        accordionContainer.appendChild(item);
    });

    container.appendChild(accordionContainer);
}

// 네비게이션 탭 전환 로직
function switchTab(tabId) {
    document.querySelectorAll('.nav-tab').forEach(tab => {
        if (tab.getAttribute('data-tab') === tabId) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    const activeContent = document.getElementById(`tab-${tabId}`);
    if (activeContent) {
        activeContent.classList.add('active');
    }

    if (tabId === 'maps') {
        filterMapCategory('ALL');
    }
    if (tabId === 'equipment') {
        filterEqCategory('ALL');
    }
    if (tabId === 'factory') {
        renderFactory();
    }
}

// 상단 헤더 검색
function openSearchPanel() {
    toggleQuickPanel('search');
}

function handleHeaderSearch(val) {
    toggleQuickPanel('search');
    const panelInput = document.querySelector('.search-input-box');
    if (panelInput) {
        panelInput.value = val;
    }
    handleQuickSearch(val);
}

// 우측 슬라이드 패널 토글
function toggleQuickPanel(panelType) {
    const panel = document.getElementById('quick-slide-panel');
    const titleEl = document.getElementById('quick-panel-title');
    const contentEl = document.getElementById('quick-panel-content');

    if (!panel) return;

    if (panel.classList.contains('open') && panel.getAttribute('data-type') === panelType) {
        panel.classList.remove('open');
        return;
    }

    panel.setAttribute('data-type', panelType);
    panel.classList.add('open');

    if (panelType === 'search') {
        titleEl.innerText = "🔍 빠른 단어 검색";
        contentEl.innerHTML = `
            <input type="text" class="search-input-box" placeholder="검색어를 입력하세요..." onkeyup="handleQuickSearch(this.value)">
            <div id="quick-search-results"></div>
        `;
    } else if (panelType === 'news') {
        titleEl.innerText = "📢 최근 패치 안내";
        contentEl.innerHTML = "<p>패치 소식 탭에서 최신 패치 및 밸런스 내역을 확인하실 수 있습니다.</p>";
    } else if (panelType === 'stream') {
        titleEl.innerText = "📺 실시간 LIVE 방송";
        contentEl.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
                <div style="position: relative; width: 100%; padding-bottom: 56.25%; border-radius: 8px; overflow: hidden; border: 1.5px solid var(--card-border); background-color: #000;">
                    <iframe
                        src="https://chzzk.naver.com/live/14fd4427ab76277bee9567d27dcbf0e8/player"
                        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; overflow: hidden;"
                        scrolling="no"
                        allow="autoplay; fullscreen"
                        allowfullscreen>
                    </iframe>
                </div>
                <a href="https://chzzk.naver.com/live/14fd4427ab76277bee9567d27dcbf0e8" target="_blank" class="yt-btn" style="text-align: center; text-decoration: none; width: 100%; font-size: 0.95rem;">
                    🟢 치지직 생방송 보러가기
                </a>
                <p style="font-size: 0.88rem; color: var(--text-secondary); text-align: center; line-height: 1.4; margin-top: 4px;">
                    뇽자의 실시간 파스모포비아 방송을 시청하고 함께 소통해 보세요!
                </p>
            </div>
        `;
    } else if (panelType === 'contact') {
        titleEl.innerText = "✉️ 제보 및 공식 채널";
        contentEl.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 10px;">
                <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 4px;">
                    유령 정보, 신규 패치 데이터, 버그 제보 및 비즈니스 문의는 아래 채널을 이용해 주세요!
                </p>
                <a href="https://www.youtube.com/@nyongja1" target="_blank" class="yt-btn" style="text-align: left; justify-content: flex-start; padding: 10px 14px; text-decoration: none; border-color: rgba(248, 113, 113, 0.4); background-color: rgba(248, 113, 113, 0.12);">
                    <span style="font-size: 1.2rem; margin-right: 6px;">▶️</span>
                    <div>
                        <div style="color: #f87171; font-size: 0.95rem; font-weight: 700;">뇽자 유튜브</div>
                        <div style="font-size: 0.8rem; color: var(--text-secondary); font-weight: normal;">파스모포비아 공식 파트너 유튜브</div>
                    </div>
                </a>
                <a href="https://chzzk.me/nyongja" target="_blank" class="yt-btn" style="text-align: left; justify-content: flex-start; padding: 10px 14px; text-decoration: none; border-color: rgba(52, 211, 153, 0.4); background-color: rgba(6, 8, 20, 0.6);">
                    <span style="font-size: 1.2rem; margin-right: 6px;">🟢</span>
                    <div>
                        <div style="color: #34d399; font-size: 0.95rem; font-weight: 700;">뇽자 치지직 채널</div>
                        <div style="font-size: 0.8rem; color: var(--text-secondary); font-weight: normal;">뇽자 실시간 방송 보러가기</div>
                    </div>
                </a>
                <a href="https://discord.gg/YkgM5t6N33" target="_blank" class="yt-btn" style="text-align: left; justify-content: flex-start; padding: 10px 14px; text-decoration: none; border-color: rgba(109, 76, 251, 0.5); background-color: rgba(109, 76, 251, 0.15);">
                    <span style="font-size: 1.2rem; margin-right: 6px;">💬</span>
                    <div>
                        <div style="color: var(--accent-light); font-size: 0.95rem; font-weight: 700;">너굴단 디스코드</div>
                        <div style="font-size: 0.8rem; color: var(--text-secondary); font-weight: normal;">뇽자 & 너굴단 디스코드</div>
                    </div>
                </a>
                <a href="https://www.instagram.com/n_yong_ja" target="_blank" class="yt-btn" style="text-align: left; justify-content: flex-start; padding: 10px 14px; text-decoration: none; border-color: rgba(248, 113, 113, 0.4); background-color: rgba(248, 113, 113, 0.1);">
                    <span style="font-size: 1.2rem; margin-right: 6px;">📸</span>
                    <div>
                        <div style="color: #f87171; font-size: 0.95rem; font-weight: 700;">뇽스타그램</div>
                        <div style="font-size: 0.8rem; color: var(--text-secondary); font-weight: normal;">뇽자 인스타그램</div>
                    </div>
                </a>
                <a href="https://cafe.naver.com/phasmophobia1" target="_blank" class="yt-btn" style="text-align: left; justify-content: flex-start; padding: 10px 14px; text-decoration: none; border-color: rgba(52, 211, 153, 0.4); background-color: rgba(52, 211, 153, 0.1);">
                    <span style="font-size: 1.2rem; margin-right: 6px;">☕</span>
                    <div>
                        <div style="color: #34d399; font-size: 0.95rem; font-weight: 700;">네이버 팬카페</div>
                        <div style="font-size: 0.8rem; color: var(--text-secondary); font-weight: normal;">뇽자 공식 팬카페</div>
                    </div>
                </a>
                <a href="mailto:future2549@naver.com" class="yt-btn" style="text-align: left; justify-content: flex-start; padding: 10px 14px; text-decoration: none; border-color: rgba(166, 143, 255, 0.35); background-color: rgba(6, 8, 20, 0.6);">
                    <span style="font-size: 1.2rem; margin-right: 6px;">📧</span>
                    <div>
                        <div style="color: #ffffff; font-size: 0.95rem; font-weight: 700;">비즈니스 / 제보 이메일</div>
                        <div style="font-size: 0.8rem; color: var(--accent-light); font-weight: normal;">future2549@naver.com</div>
                    </div>
                </a>
            </div>
        `;
    }
}

function closeQuickPanel() {
    const panel = document.getElementById('quick-slide-panel');
    if (panel) panel.classList.remove('open');
}

function handleQuickSearch(query) {
    const resultsContainer = document.getElementById('quick-search-results');
    if (!resultsContainer || !query.trim()) {
        if (resultsContainer) resultsContainer.innerHTML = '';
        return;
    }

    const q = query.toLowerCase();
    const matched = GHOST_DATA.filter(g => g.name.toLowerCase().includes(q) || g.tip.toLowerCase().includes(q));

    resultsContainer.innerHTML = matched.map(g => `
        <div class="search-result-card">
            <div class="search-result-title">${g.name} (${g.engName})</div>
            <div style="font-size:0.9rem; color:var(--text-secondary);">${g.tip}</div>
        </div>
    `).join('');
}

async function fetchVisitorCounts() {
    const todayEl = document.getElementById('today-visitors');
    const totalEl = document.getElementById('total-visitors');
    if (!todayEl || !totalEl) return;

    const todayStr = new Date().toISOString().slice(0, 10);
    const todayKey = `nyong_phasmo_${todayStr}`;
    const totalKey = `nyong_phasmo_total`;

    try {
        const totalRes = await fetch(`https://api.counterapi.dev/v1/nyongja_guide/${totalKey}/up`);
        const totalData = await totalRes.json();
        totalEl.innerText = (totalData.count || 1).toLocaleString() + '명';

        const todayRes = await fetch(`https://api.counterapi.dev/v1/nyongja_guide/${todayKey}/up`);
        const todayData = await todayRes.json();
        todayEl.innerText = (todayData.count || 1).toLocaleString() + '명';
    } catch (err) {
        todayEl.innerText = '-';
        totalEl.innerText = '-';
    }
}

// ==========================================
// 📢 아코디언 토글 제어 함수 (이 부분을 자바스크립트 파일 맨 아래에 쏙 넣어주세요!)
// ==========================================
function toggleNews(itemId) {
    const item = document.getElementById(itemId);
    if (!item) return;
    item.classList.toggle('active');
}
