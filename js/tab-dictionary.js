// ==========================================
// 📖 2. 유령 도감 전용 스크립트 (독립 3열 고정 분배 방식: 셔플 방지)
// ==========================================

function renderGhostDictionary() {
    const container = document.getElementById('ghost-dictionary-container');
    if (!container || typeof GHOST_DATA === 'undefined') return;
    container.innerHTML = '';

    // 1열, 2열, 3열을 감쌀 메인 래퍼 생성
    const columnsWrapper = document.createElement('div');
    columnsWrapper.className = 'dict-columns-container';

    // 3개의 독립 컬럼 생성
    const colElements = [
        document.createElement('div'),
        document.createElement('div'),
        document.createElement('div')
    ];

    colElements.forEach(col => {
        col.className = 'dict-column';
        columnsWrapper.appendChild(col);
    });

    // 30종 유령을 1, 2, 3열에 순차 고정 배분 (0 -> 1열, 1 -> 2열, 2 -> 3열)
    GHOST_DATA.forEach((ghost, index) => {
        const details = document.createElement('details');
        details.className = 'dict-details';

        const detailBodyHtml = ghost.isCustomDetailed && ghost.detailedHtml ? ghost.detailedHtml : `
            <div class="dict-section-title">증거 목록</div>
            <p class="dict-text">${ghost.evidences.join(', ')}</p>
            <div class="dict-section-title">고유 특성 & 대응법</div>
            <p class="dict-text">${ghost.specialTrait}</p>
        `;

        details.innerHTML = `
            <summary class="dict-summary-btn">
                <div class="dict-btn-left">
                    <img src="images/ghosts/${ghost.engName}.webp"
                         onerror="this.onerror=null; this.src='images/ghosts/Spirit.webp'"
                         class="dict-btn-icon"
                         alt="${ghost.name}">
                    <div>
                        <span class="dict-btn-title">${ghost.name}</span>
                        <span class="dict-btn-eng">(${ghost.engName})</span>
                    </div>
                </div>
                <div class="dict-btn-right">
                    <span class="dict-toggle-badge">상세 공략 ▾</span>
                </div>
            </summary>
            <div class="dict-content-body">
                <div class="dict-spec-bar">
                    <div class="dict-spec-item"><strong>헌팅 정신력:</strong> ${ghost.huntSanity}</div>
                    <div class="dict-spec-item"><strong>이동 속도:</strong> ${ghost.speed}</div>
                    <div class="dict-spec-item"><strong>고정 증거:</strong> ${ghost.forcedEvidence}</div>
                </div>
                ${detailBodyHtml}
            </div>
        `;

        // 타겟 컬럼에 카드 삽입
        const targetCol = colElements[index % 3];
        targetCol.appendChild(details);
    });

    container.appendChild(columnsWrapper);
}
