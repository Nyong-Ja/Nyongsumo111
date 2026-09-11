// 🏭 레벨업 공장 공략 데이터 및 렌더링 파일

function renderFactory() {
    // HTML에 설정한 팩토리 전용 컨테이너를 정확히 타겟팅
    const container = document.getElementById('factory-container') || document.getElementById('tab-factory');
    if (!container) return;

    container.innerHTML = '';

    const wrapper = document.createElement('div');
    wrapper.style.display = 'grid';
    wrapper.style.gridTemplateColumns = '1.2fr 1fr';
    wrapper.style.gap = '20px';
    wrapper.style.width = '100%';

    // 반응형 대응 (모바일 화면일 때 세로로 정렬)
    if (window.innerWidth <= 1024) {
        wrapper.style.gridTemplateColumns = '1fr';
    }

    wrapper.innerHTML = `
        <!-- 왼쪽 패널: 핵심 공략 및 루틴 -->
        <div style="display: flex; flex-direction: column; gap: 16px;">

            <!-- 상단 안내 카드 -->
            <div class="guide-card" style="border-left: 4px solid var(--accent-vibrant); padding: 16px;">
                <div class="guide-card-title" style="font-size: 1.15rem; margin-bottom: 8px;">🏭 뇽자의 빠른 레벨업 & 경험치 공장 가이드</div>
                <div class="guide-card-body" style="font-size: 0.94rem; line-height: 1.6; color: var(--text-secondary);">
                    • 파스모포비아에서 가장 짧은 시간에 최대의 경험치(XP)와 돈을 파밍할 수 있는 고속 레벨업 공략 노하우입니다.<br>
                    • 안전성과 효율을 극대화한 커스텀 세팅과 동선으로 광속 레벨업을 달성해 보세요!
                </div>
            </div>

            <!-- 상세 공략 카드 -->
            <div class="weekly-detail-card" style="background: var(--card-bg); border: 1.5px solid var(--card-border); border-radius: 12px; padding: 20px;">
                <div class="dict-section-title" style="margin-top: 0; font-size: 1.05rem; margin-bottom: 14px; color: var(--text-primary);">
                    📋 고속 경험치 파밍 핵심 루틴 & 세팅
                </div>

                <div style="display: flex; flex-direction: column; gap: 12px; font-size: 0.94rem; line-height: 1.65; color: var(--text-primary);">
                    <div style="background: var(--inner-card-bg, #080a18); padding: 12px 14px; border-radius: 8px; border: 1.5px solid var(--card-border);">
                        <strong style="color: var(--accent-vibrant);">1. 맵 선정 및 동선 압축</strong><br>
                        소형 맵(탱글우드 드라이브 등)을 활용하여 유령의 방과 증거 위치를 최단 시간 내에 파악합니다. 불필요한 파밍 동선을 줄이는 것이 핵심입니다.
                    </div>

                    <div style="background: var(--inner-card-bg, #080a18); padding: 12px 14px; border-radius: 8px; border: 1.5px solid var(--card-border);">
                        <strong style="color: var(--accent-vibrant);">2. 고효율 커스텀 난이도 배율</strong><br>
                        안정적으로 클리어할 수 있는 선에서 최대 배율을 끌어낼 수 있도록 커스텀 옵션을 조절하여 판당 획득 경험치 효율을 극대화합니다.
                    </div>

                    <div style="background: var(--inner-card-bg, #080a18); padding: 12px 14px; border-radius: 8px; border: 1.5px solid var(--card-border);">
                        <strong style="color: var(--accent-vibrant);">3. 부가 목표 및 사진 풀(Full) 챙기기</strong><br>
                        뼈 찾기, 더러운 물, 유령 사진 등 추가 보상을 주는 부가 요소를 놓치지 않고 클리어 시 최종 보상 배율을 폭발적으로 높입니다.
                    </div>
                </div>
            </div>

        </div>

        <!-- 오른쪽 패널: 영상 연동 -->
        <div style="display: flex; flex-direction: column; gap: 16px;">

            <div class="weekly-detail-card" style="background: var(--card-bg); border: 1.5px solid var(--card-border); border-radius: 12px; padding: 20px;">
                <div class="dict-section-title" style="margin-top: 0; font-size: 1.05rem; margin-bottom: 14px; color: var(--text-primary);">
                    📺 실전 공략 영상 시청
                </div>

                <div style="display: flex; flex-direction: column; gap: 10px;">
                    <a href="https://youtu.be/jN_0MlvYjRA" target="_blank" rel="noopener noreferrer" class="weekly-yt-banner-btn">
                        <span class="yt-banner-icon">🏆</span>
                        <div class="yt-banner-textbox">
                            <div class="yt-banner-title">모든 공장맵 티어표 & 공략</div>
                            <div class="yt-banner-sub">1분당 경험치 2,700까지! 공장맵 세팅과 티어를 한눈에 확인하세요.</div>
                        </div>
                        <span class="yt-banner-arrow">영상 보기 ➜</span>
                    </a>

                    <a href="https://youtu.be/8XDH6niXRIw" target="_blank" rel="noopener noreferrer" class="weekly-yt-banner-btn">
                        <span class="yt-banner-icon">🗼</span>
                        <div class="yt-banner-textbox">
                            <div class="yt-banner-title">등대맵 신규 공장 공략</div>
                            <div class="yt-banner-sub">2분당 경험치 2,700! 새로 나온 등대맵에서 레벨업하는 방법을 확인하세요.</div>
                        </div>
                        <span class="yt-banner-arrow">영상 보기 ➜</span>
                    </a>
                </div>
            </div>

            <div class="weekly-detail-card" style="background: var(--card-bg); border: 1.5px solid var(--card-border); border-radius: 12px; padding: 20px;">
                <div class="dict-section-title" style="margin-top: 0; font-size: 1.05rem; margin-bottom: 10px; color: var(--text-primary);">
                    💡 방송 참여 안내
                </div>
                <div style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6;">
                    생방송 중 진행되는 실시간 레벨업 트라이 및 시청자 참여 세션에 함께 참여하여 노하우를 직접 확인해 보세요!
                </div>
            </div>

        </div>
    `;

    container.appendChild(wrapper);
}

// 메인 앱(app.js)의 탭 전환 시 'factory'가 눌리면 이 함수가 불리도록 연결해 주는 안전장치
document.addEventListener('DOMContentLoaded', () => {
    // 최초 로딩 시 팩토리 탭 컨테이너가 있으면 그려줌
    renderFactory();
});
