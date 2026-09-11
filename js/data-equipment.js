// ==========================================
// 🛠️ 2. 파스모포비아 전체 21종 장비 데이터베이스
// 기준: Ty Bayn / Zero-Network + Phasmophobia Fandom Wiki
// 수치 및 메커니즘은 2026년 9월 확인 기준
// ==========================================

const EQUIPMENT_DATA = [
    {
        name: "EMF 리더",
        category: "증거 확인 / 정보 수집",
        t1: "Tier 1: 탐지 1.7m / 아날로그 바늘 / 비전자기기 아님",
        t2: "Tier 2: 탐지 2m / 5단계 LED + 소리 / 전자기기",
        t3: "Tier 3: 탐지 3.5m / 최대 3개 EMF 지점 추적 / 거리·방향 표시 / 전자기기",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 핵심 수치</div>
            <div style="overflow-x:auto; margin-bottom:12px;">
                <table style="width:100%; border-collapse:collapse; font-size:0.88rem; color:#d4d4d8; text-align:left;">
                    <thead><tr style="border-bottom:1.5px solid var(--accent-vibrant); color:var(--accent-light);">
                        <th style="padding:6px 8px;">구분</th><th style="padding:6px 8px;">Tier I</th><th style="padding:6px 8px;">Tier II</th><th style="padding:6px 8px;">Tier III</th>
                    </tr></thead>
                    <tbody><tr>
                        <td style="padding:6px 8px;font-weight:700;color:#fff;">스펙</td>
                        <td style="padding:6px 8px;">탐지 1.7m / 아날로그 바늘 / 비전자기기 아님</td>
                        <td style="padding:6px 8px;">탐지 2m / 5단계 LED + 소리 / 전자기기</td>
                        <td style="padding:6px 8px;">탐지 3.5m / 최대 3개 EMF 지점 추적 / 거리·방향 표시 / 전자기기</td>
                    </tr></tbody>
                </table>
            </div>
            <div class="dict-section-title">2. 사용법 & 실전 메커니즘</div>
            <p class="dict-text">EMF 5는 EMF 2·3 발생 시 가능한 증거 판정이며, 단순히 높은 활동량을 뜻하지 않습니다. EMF 신호는 발생 후 일정 시간 유지되므로 상호작용 직후 확인하세요. 사냥 중 전자장비로 유령을 끌어당길 수 있습니다.</p>
            <div class="dict-section-title">3. 실전 판별 포인트</div>
            <p class="dict-text">• <strong>티어 차이는 단순한 상위호환이 아닙니다.</strong> 같은 장비라도 전자기기 여부, 감지 방식, 설치 방식이 달라 실제 조사법이 달라질 수 있습니다.<br>• 수치가 적용되는 범위는 장비의 <strong>티어·유령 상태·난이도</strong>에 따라 달라질 수 있으므로, 특정 유령의 특수 능력과 함께 확인하세요.</p>
        `
    },
    {
        name: "도트 프로젝터",
        category: "증거 확인",
        t1: "Tier 1: 5m / 좁은 빔 / 휴대 가능 / 켜서 들고 있으면 사냥 중 유령을 유인",
        t2: "Tier 2: 2.5m / 구형 주변광 / 설치형",
        t3: "Tier 3: 7m / 넓은 빔 / 회전 스캔 / 회전 중 상호작용으로 현재 각도에서 정지",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 핵심 수치</div>
            <div style="overflow-x:auto; margin-bottom:12px;">
                <table style="width:100%; border-collapse:collapse; font-size:0.88rem; color:#d4d4d8; text-align:left;">
                    <thead><tr style="border-bottom:1.5px solid var(--accent-vibrant); color:var(--accent-light);">
                        <th style="padding:6px 8px;">구분</th><th style="padding:6px 8px;">Tier I</th><th style="padding:6px 8px;">Tier II</th><th style="padding:6px 8px;">Tier III</th>
                    </tr></thead>
                    <tbody><tr>
                        <td style="padding:6px 8px;font-weight:700;color:#fff;">스펙</td>
                        <td style="padding:6px 8px;">5m / 좁은 빔 / 휴대 가능 / 켜서 들고 있으면 사냥 중 유령을 유인</td>
                        <td style="padding:6px 8px;">2.5m / 구형 주변광 / 설치형</td>
                        <td style="padding:6px 8px;">7m / 넓은 빔 / 회전 스캔 / 회전 중 상호작용으로 현재 각도에서 정지</td>
                    </tr></tbody>
                </table>
            </div>
            <div class="dict-section-title">2. 사용법 & 실전 메커니즘</div>
            <p class="dict-text">도트 증거 유령은 짧은 도트 상태에서 적외선 격자를 통과하는 모습이 보입니다. T2·T3는 설치형이며 T3는 스캔을 멈추면 소음 없이 고정할 수 있습니다. 고료는 플레이어가 현재 방에 없을 때 비디오 카메라를 통해 도트를 확인하는 것이 핵심입니다.</p>
            <div class="dict-section-title">3. 실전 판별 포인트</div>
            <p class="dict-text">• <strong>티어 차이는 단순한 상위호환이 아닙니다.</strong> 같은 장비라도 전자기기 여부, 감지 방식, 설치 방식이 달라 실제 조사법이 달라질 수 있습니다.<br>• 수치가 적용되는 범위는 장비의 <strong>티어·유령 상태·난이도</strong>에 따라 달라질 수 있으므로, 특정 유령의 특수 능력과 함께 확인하세요.</p>
        `
    },
    {
        name: "자외선 라이트",
        category: "증거 확인",
        t1: "Tier 1: 좁은 빔 / UV 충전 5초 / 전자기기",
        t2: "Tier 2: 형광봉 / 지속 60초 후 밝기 감소 / UV 충전 10초 / 비전자기기",
        t3: "Tier 3: 넓은 빔 / UV 충전 1.5초 / 전자기기",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 핵심 수치</div>
            <div style="overflow-x:auto; margin-bottom:12px;">
                <table style="width:100%; border-collapse:collapse; font-size:0.88rem; color:#d4d4d8; text-align:left;">
                    <thead><tr style="border-bottom:1.5px solid var(--accent-vibrant); color:var(--accent-light);">
                        <th style="padding:6px 8px;">구분</th><th style="padding:6px 8px;">Tier I</th><th style="padding:6px 8px;">Tier II</th><th style="padding:6px 8px;">Tier III</th>
                    </tr></thead>
                    <tbody><tr>
                        <td style="padding:6px 8px;font-weight:700;color:#fff;">스펙</td>
                        <td style="padding:6px 8px;">좁은 빔 / UV 충전 5초 / 전자기기</td>
                        <td style="padding:6px 8px;">형광봉 / 지속 60초 후 밝기 감소 / UV 충전 10초 / 비전자기기</td>
                        <td style="padding:6px 8px;">넓은 빔 / UV 충전 1.5초 / 전자기기</td>
                    </tr></tbody>
                </table>
            </div>
            <div class="dict-section-title">2. 사용법 & 실전 메커니즘</div>
            <p class="dict-text">UV 증거는 지문뿐 아니라 소금을 밟은 뒤의 발자국에도 사용할 수 있습니다. T2 형광봉은 비전자기기라 사냥 중 광원으로 특히 편리합니다. T1·T3는 전자기기이므로 사냥 중 유령을 끌어당길 수 있습니다. 오바케의 특수 지문은 6개의 손가락처럼 보일 수 있습니다.</p>
            <div class="dict-section-title">3. 실전 판별 포인트</div>
            <p class="dict-text">• <strong>티어 차이는 단순한 상위호환이 아닙니다.</strong> 같은 장비라도 전자기기 여부, 감지 방식, 설치 방식이 달라 실제 조사법이 달라질 수 있습니다.<br>• 수치가 적용되는 범위는 장비의 <strong>티어·유령 상태·난이도</strong>에 따라 달라질 수 있으므로, 특정 유령의 특수 능력과 함께 확인하세요.</p>
        `
    },
    {
        name: "주파수 측정기",
        category: "증거 확인 / 음성 대화",
        t1: "Tier 1: 3m / 응답률 50% / 낮은 음질",
        t2: "Tier 2: 4m / 응답률 60% / 화면 표시",
        t3: "Tier 3: 5m / 응답률 70% / 두 주파수 동시 스캔 + 노이즈 감소",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 핵심 수치</div>
            <div style="overflow-x:auto; margin-bottom:12px;">
                <table style="width:100%; border-collapse:collapse; font-size:0.88rem; color:#d4d4d8; text-align:left;">
                    <thead><tr style="border-bottom:1.5px solid var(--accent-vibrant); color:var(--accent-light);">
                        <th style="padding:6px 8px;">구분</th><th style="padding:6px 8px;">Tier I</th><th style="padding:6px 8px;">Tier II</th><th style="padding:6px 8px;">Tier III</th>
                    </tr></thead>
                    <tbody><tr>
                        <td style="padding:6px 8px;font-weight:700;color:#fff;">스펙</td>
                        <td style="padding:6px 8px;">3m / 응답률 50% / 낮은 음질</td>
                        <td style="padding:6px 8px;">4m / 응답률 60% / 화면 표시</td>
                        <td style="padding:6px 8px;">5m / 응답률 70% / 두 주파수 동시 스캔 + 노이즈 감소</td>
                    </tr></tbody>
                </table>
            </div>
            <div class="dict-section-title">2. 사용법 & 실전 메커니즘</div>
            <p class="dict-text">응답 조건은 유령과 같은 방, 티어별 거리 이내, 해당 방의 조명을 끈 상태입니다. &#x27;혼자&#x27; 응답 유령은 질문할 때 같은 방에 한 명만 있어야 합니다. 각 질문마다 티어별 응답 확률이 적용되므로 X/실패가 나왔다고 증거가 아닌 것은 아닙니다.</p>
            <div class="dict-section-title">3. 실전 판별 포인트</div>
            <p class="dict-text">• <strong>티어 차이는 단순한 상위호환이 아닙니다.</strong> 같은 장비라도 전자기기 여부, 감지 방식, 설치 방식이 달라 실제 조사법이 달라질 수 있습니다.<br>• 수치가 적용되는 범위는 장비의 <strong>티어·유령 상태·난이도</strong>에 따라 달라질 수 있으므로, 특정 유령의 특수 능력과 함께 확인하세요.</p>
        `
    },
    {
        name: "고스트 라이팅",
        category: "증거 확인",
        t1: "Tier 1: 3m / 상호작용률 낮음 / 성공률 51%",
        t2: "Tier 2: 4m / 상호작용률 중간 / 성공률 67%",
        t3: "Tier 3: 5m / 상호작용률 높음 / 성공률 76%",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 핵심 수치</div>
            <div style="overflow-x:auto; margin-bottom:12px;">
                <table style="width:100%; border-collapse:collapse; font-size:0.88rem; color:#d4d4d8; text-align:left;">
                    <thead><tr style="border-bottom:1.5px solid var(--accent-vibrant); color:var(--accent-light);">
                        <th style="padding:6px 8px;">구분</th><th style="padding:6px 8px;">Tier I</th><th style="padding:6px 8px;">Tier II</th><th style="padding:6px 8px;">Tier III</th>
                    </tr></thead>
                    <tbody><tr>
                        <td style="padding:6px 8px;font-weight:700;color:#fff;">스펙</td>
                        <td style="padding:6px 8px;">3m / 상호작용률 낮음 / 성공률 51%</td>
                        <td style="padding:6px 8px;">4m / 상호작용률 중간 / 성공률 67%</td>
                        <td style="padding:6px 8px;">5m / 상호작용률 높음 / 성공률 76%</td>
                    </tr></tbody>
                </table>
            </div>
            <div class="dict-section-title">2. 사용법 & 실전 메커니즘</div>
            <p class="dict-text">증거가 고스트 라이팅인 경우 유령은 약 45~90초 간격으로 책에 쓰기를 시도합니다. 책의 티어별 성공률은 51%·67%·76%입니다. 증거 유령은 책을 닫거나 범위 밖에 있으면 쓰지 않습니다. 반대로 라이팅이 없는 유령도 책을 던질 수 있으므로 &#x27;책을 던졌다 = 라이팅&#x27;은 아닙니다.</p>
            <div class="dict-section-title">3. 실전 판별 포인트</div>
            <p class="dict-text">• <strong>티어 차이는 단순한 상위호환이 아닙니다.</strong> 같은 장비라도 전자기기 여부, 감지 방식, 설치 방식이 달라 실제 조사법이 달라질 수 있습니다.<br>• 수치가 적용되는 범위는 장비의 <strong>티어·유령 상태·난이도</strong>에 따라 달라질 수 있으므로, 특정 유령의 특수 능력과 함께 확인하세요.</p>
        `
    },
    {
        name: "온도계",
        category: "증거 확인 / 고스트룸 특정",
        t1: "Tier 1: 정확도 낮음 / 0.33°C·초당 갱신 / 비전자기기",
        t2: "Tier 2: 정확도 중간 / 2.5초마다 측정 / 전자기기",
        t3: "Tier 3: 정확도 높음 / 1.5초마다 측정 / 전자기기",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 핵심 수치</div>
            <div style="overflow-x:auto; margin-bottom:12px;">
                <table style="width:100%; border-collapse:collapse; font-size:0.88rem; color:#d4d4d8; text-align:left;">
                    <thead><tr style="border-bottom:1.5px solid var(--accent-vibrant); color:var(--accent-light);">
                        <th style="padding:6px 8px;">구분</th><th style="padding:6px 8px;">Tier I</th><th style="padding:6px 8px;">Tier II</th><th style="padding:6px 8px;">Tier III</th>
                    </tr></thead>
                    <tbody><tr>
                        <td style="padding:6px 8px;font-weight:700;color:#fff;">스펙</td>
                        <td style="padding:6px 8px;">정확도 낮음 / 0.33°C·초당 갱신 / 비전자기기</td>
                        <td style="padding:6px 8px;">정확도 중간 / 2.5초마다 측정 / 전자기기</td>
                        <td style="padding:6px 8px;">정확도 높음 / 1.5초마다 측정 / 전자기기</td>
                    </tr></tbody>
                </table>
            </div>
            <div class="dict-section-title">2. 사용법 & 실전 메커니즘</div>
            <p class="dict-text">영하 증거는 0.9°C 이하가 아니라 실제 증거 판정 기준으로 0°C 이하를 확인하는 것이 안전합니다. T1은 매우 느리지만 사냥 중 전자장비 어그로가 없다는 장점이 있습니다. T2·T3는 사용 버튼을 눌러 현재 방 온도를 측정하며 실제 온도보다 높게 표시될 수 있습니다.</p>
            <div class="dict-section-title">3. 실전 판별 포인트</div>
            <p class="dict-text">• <strong>티어 차이는 단순한 상위호환이 아닙니다.</strong> 같은 장비라도 전자기기 여부, 감지 방식, 설치 방식이 달라 실제 조사법이 달라질 수 있습니다.<br>• 수치가 적용되는 범위는 장비의 <strong>티어·유령 상태·난이도</strong>에 따라 달라질 수 있으므로, 특정 유령의 특수 능력과 함께 확인하세요.</p>
        `
    },
    {
        name: "비디오 카메라",
        category: "증거 확인 / 고스트 오브 & 도트",
        t1: "Tier 1: 화질 낮음 / 야간투시 / 전자기기",
        t2: "Tier 2: 화질 중간 / 야간투시 / 간섭 저항 중간 / 전자기기",
        t3: "Tier 3: 화질 높음 / 야간투시 / 간섭 저항 높음 / 전자기기",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 핵심 수치</div>
            <div style="overflow-x:auto; margin-bottom:12px;">
                <table style="width:100%; border-collapse:collapse; font-size:0.88rem; color:#d4d4d8; text-align:left;">
                    <thead><tr style="border-bottom:1.5px solid var(--accent-vibrant); color:var(--accent-light);">
                        <th style="padding:6px 8px;">구분</th><th style="padding:6px 8px;">Tier I</th><th style="padding:6px 8px;">Tier II</th><th style="padding:6px 8px;">Tier III</th>
                    </tr></thead>
                    <tbody><tr>
                        <td style="padding:6px 8px;font-weight:700;color:#fff;">스펙</td>
                        <td style="padding:6px 8px;">화질 낮음 / 야간투시 / 전자기기</td>
                        <td style="padding:6px 8px;">화질 중간 / 야간투시 / 간섭 저항 중간 / 전자기기</td>
                        <td style="padding:6px 8px;">화질 높음 / 야간투시 / 간섭 저항 높음 / 전자기기</td>
                    </tr></tbody>
                </table>
            </div>
            <div class="dict-section-title">2. 사용법 & 실전 메커니즘</div>
            <p class="dict-text">주로 고스트 오브와 도트 확인에 사용합니다. T2·T3는 화면에서 촬영 영역을 확인하기 쉽습니다. 삼각대에 장착하면 트럭에서 카메라 화면을 볼 수 있으며, 사냥 중 전자기기이므로 유령의 전자기기 감지 범위에 주의하세요.</p>
            <div class="dict-section-title">3. 실전 판별 포인트</div>
            <p class="dict-text">• <strong>티어 차이는 단순한 상위호환이 아닙니다.</strong> 같은 장비라도 전자기기 여부, 감지 방식, 설치 방식이 달라 실제 조사법이 달라질 수 있습니다.<br>• 수치가 적용되는 범위는 장비의 <strong>티어·유령 상태·난이도</strong>에 따라 달라질 수 있으므로, 특정 유령의 특수 능력과 함께 확인하세요.</p>
        `
    },
    {
        name: "손전등",
        category: "생존 / 시야 확보",
        t1: "Tier 1: 낮은 광량 / 좁은 빔 / 전자기기",
        t2: "Tier 2: 중간 광량 / 좁은 빔 / 전자기기",
        t3: "Tier 3: 높은 광량 / 넓은 빔 / 전자기기",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 핵심 수치</div>
            <div style="overflow-x:auto; margin-bottom:12px;">
                <table style="width:100%; border-collapse:collapse; font-size:0.88rem; color:#d4d4d8; text-align:left;">
                    <thead><tr style="border-bottom:1.5px solid var(--accent-vibrant); color:var(--accent-light);">
                        <th style="padding:6px 8px;">구분</th><th style="padding:6px 8px;">Tier I</th><th style="padding:6px 8px;">Tier II</th><th style="padding:6px 8px;">Tier III</th>
                    </tr></thead>
                    <tbody><tr>
                        <td style="padding:6px 8px;font-weight:700;color:#fff;">스펙</td>
                        <td style="padding:6px 8px;">낮은 광량 / 좁은 빔 / 전자기기</td>
                        <td style="padding:6px 8px;">중간 광량 / 좁은 빔 / 전자기기</td>
                        <td style="padding:6px 8px;">높은 광량 / 넓은 빔 / 전자기기</td>
                    </tr></tbody>
                </table>
            </div>
            <div class="dict-section-title">2. 사용법 & 실전 메커니즘</div>
            <p class="dict-text">손전등은 증거 장비가 아니라 시야 확보용입니다. 사냥 중 같은 층에서 유령이 가까워지면 깜빡이며, 일반적으로 10m 이내에서 간섭이 발생합니다. 라이주는 전자기기 감지 범위가 더 넓습니다.</p>
            <div class="dict-section-title">3. 실전 판별 포인트</div>
            <p class="dict-text">• <strong>티어 차이는 단순한 상위호환이 아닙니다.</strong> 같은 장비라도 전자기기 여부, 감지 방식, 설치 방식이 달라 실제 조사법이 달라질 수 있습니다.<br>• 수치가 적용되는 범위는 장비의 <strong>티어·유령 상태·난이도</strong>에 따라 달라질 수 있으므로, 특정 유령의 특수 능력과 함께 확인하세요.</p>
        `
    },
    {
        name: "십자가",
        category: "방어 / 안전",
        t1: "Tier 1: 3m / 1회 방어",
        t2: "Tier 2: 4m / 2회 방어",
        t3: "Tier 3: 5m / 2회 방어 + 미사용 상태에서 저주받은 사냥 1회 방어 가능",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 핵심 수치</div>
            <div style="overflow-x:auto; margin-bottom:12px;">
                <table style="width:100%; border-collapse:collapse; font-size:0.88rem; color:#d4d4d8; text-align:left;">
                    <thead><tr style="border-bottom:1.5px solid var(--accent-vibrant); color:var(--accent-light);">
                        <th style="padding:6px 8px;">구분</th><th style="padding:6px 8px;">Tier I</th><th style="padding:6px 8px;">Tier II</th><th style="padding:6px 8px;">Tier III</th>
                    </tr></thead>
                    <tbody><tr>
                        <td style="padding:6px 8px;font-weight:700;color:#fff;">스펙</td>
                        <td style="padding:6px 8px;">3m / 1회 방어</td>
                        <td style="padding:6px 8px;">4m / 2회 방어</td>
                        <td style="padding:6px 8px;">5m / 2회 방어 + 미사용 상태에서 저주받은 사냥 1회 방어 가능</td>
                    </tr></tbody>
                </table>
            </div>
            <div class="dict-section-title">2. 사용법 & 실전 메커니즘</div>
            <p class="dict-text">십자가는 유령이 범위 안에서 사냥을 시작하려 할 때 사용됩니다. 방어 성공 후 다음 일반 사냥 시도까지 기본 25초, 데몬은 20초 대기합니다. 데몬은 범위가 50% 증가하여 T1 4.5m / T2 6m / T3 7.5m입니다. 갈루는 분노 상태에서 범위 -2m, 약화 상태에서 +1m입니다. 방어 성공 시 EMF 2가 발생하며 EMF 5 유령이라면 EMF 5가 될 수 있습니다.</p>
            <div class="dict-section-title">3. 실전 판별 포인트</div>
            <p class="dict-text">• <strong>티어 차이는 단순한 상위호환이 아닙니다.</strong> 같은 장비라도 전자기기 여부, 감지 방식, 설치 방식이 달라 실제 조사법이 달라질 수 있습니다.<br>• 수치가 적용되는 범위는 장비의 <strong>티어·유령 상태·난이도</strong>에 따라 달라질 수 있으므로, 특정 유령의 특수 능력과 함께 확인하세요.</p>
        `
    },
    {
        name: "정화향초",
        category: "방어 / 안전 / 은신",
        t1: "Tier 1: 3m / 연소 5초 / 사냥 중 실명 5초",
        t2: "Tier 2: 4m / 연소 6초 / 실명 5초 + 5초 동안 속도 50%",
        t3: "Tier 3: 5m / 연소 7초 / 실명 5초 + 5초 동안 이동 정지",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 핵심 수치</div>
            <div style="overflow-x:auto; margin-bottom:12px;">
                <table style="width:100%; border-collapse:collapse; font-size:0.88rem; color:#d4d4d8; text-align:left;">
                    <thead><tr style="border-bottom:1.5px solid var(--accent-vibrant); color:var(--accent-light);">
                        <th style="padding:6px 8px;">구분</th><th style="padding:6px 8px;">Tier I</th><th style="padding:6px 8px;">Tier II</th><th style="padding:6px 8px;">Tier III</th>
                    </tr></thead>
                    <tbody><tr>
                        <td style="padding:6px 8px;font-weight:700;color:#fff;">스펙</td>
                        <td style="padding:6px 8px;">3m / 연소 5초 / 사냥 중 실명 5초</td>
                        <td style="padding:6px 8px;">4m / 연소 6초 / 실명 5초 + 5초 동안 속도 50%</td>
                        <td style="padding:6px 8px;">5m / 연소 7초 / 실명 5초 + 5초 동안 이동 정지</td>
                    </tr></tbody>
                </table>
            </div>
            <div class="dict-section-title">2. 사용법 & 실전 메커니즘</div>
            <p class="dict-text">일반 정화 효과는 데몬 60초, 스피릿 180초, 그 외 유령 90초 동안 일반 사냥 시작을 막습니다. 사냥 중에는 유령을 강제로 방황 상태로 만들고 잠시 플레이어를 감지·처치하지 못하게 합니다. 갈루는 분노 4초 / 약화 6초, 모로이는 7초 동안 실명됩니다.</p>
            <div class="dict-section-title">3. 실전 판별 포인트</div>
            <p class="dict-text">• <strong>티어 차이는 단순한 상위호환이 아닙니다.</strong> 같은 장비라도 전자기기 여부, 감지 방식, 설치 방식이 달라 실제 조사법이 달라질 수 있습니다.<br>• 수치가 적용되는 범위는 장비의 <strong>티어·유령 상태·난이도</strong>에 따라 달라질 수 있으므로, 특정 유령의 특수 능력과 함께 확인하세요.</p>
        `
    },
    {
        name: "양초",
        category: "정신력 보존 / 조명",
        t1: "Tier 1: 2m 효과 범위 / 5분 / 정신력 감소 33% 완화",
        t2: "Tier 2: 2m / 10분 / 50% 완화 / 놓아둔 상태에서도 효과",
        t3: "Tier 3: 2m / 계약 내내 유지 / 66% 완화 / 방수",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 핵심 수치</div>
            <div style="overflow-x:auto; margin-bottom:12px;">
                <table style="width:100%; border-collapse:collapse; font-size:0.88rem; color:#d4d4d8; text-align:left;">
                    <thead><tr style="border-bottom:1.5px solid var(--accent-vibrant); color:var(--accent-light);">
                        <th style="padding:6px 8px;">구분</th><th style="padding:6px 8px;">Tier I</th><th style="padding:6px 8px;">Tier II</th><th style="padding:6px 8px;">Tier III</th>
                    </tr></thead>
                    <tbody><tr>
                        <td style="padding:6px 8px;font-weight:700;color:#fff;">스펙</td>
                        <td style="padding:6px 8px;">2m 효과 범위 / 5분 / 정신력 감소 33% 완화</td>
                        <td style="padding:6px 8px;">2m / 10분 / 50% 완화 / 놓아둔 상태에서도 효과</td>
                        <td style="padding:6px 8px;">2m / 계약 내내 유지 / 66% 완화 / 방수</td>
                    </tr></tbody>
                </table>
            </div>
            <div class="dict-section-title">2. 사용법 & 실전 메커니즘</div>
            <p class="dict-text">불이 켜진 양초는 어둠으로 인한 수동 정신력 감소만 완화하며 유령 이벤트나 사망 등 다른 정신력 감소에는 영향을 주지 않습니다. 유령은 가까이에서 양초를 끌 수 있고, 온료는 불꽃을 이용한 사냥 메커니즘을 가집니다. 모든 티어는 비전자기기입니다.</p>
            <div class="dict-section-title">3. 실전 판별 포인트</div>
            <p class="dict-text">• <strong>티어 차이는 단순한 상위호환이 아닙니다.</strong> 같은 장비라도 전자기기 여부, 감지 방식, 설치 방식이 달라 실제 조사법이 달라질 수 있습니다.<br>• 수치가 적용되는 범위는 장비의 <strong>티어·유령 상태·난이도</strong>에 따라 달라질 수 있으므로, 특정 유령의 특수 능력과 함께 확인하세요.</p>
        `
    },
    {
        name: "라이터",
        category: "도구 / 라이터",
        t1: "Tier 1: 성냥 10개 / 한 개당 10초 / 총 100초",
        t2: "Tier 2: 총 5분 / 가스 라이터",
        t3: "Tier 3: 총 10분 / 방수 / 더 큰 불빛",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 핵심 수치</div>
            <div style="overflow-x:auto; margin-bottom:12px;">
                <table style="width:100%; border-collapse:collapse; font-size:0.88rem; color:#d4d4d8; text-align:left;">
                    <thead><tr style="border-bottom:1.5px solid var(--accent-vibrant); color:var(--accent-light);">
                        <th style="padding:6px 8px;">구분</th><th style="padding:6px 8px;">Tier I</th><th style="padding:6px 8px;">Tier II</th><th style="padding:6px 8px;">Tier III</th>
                    </tr></thead>
                    <tbody><tr>
                        <td style="padding:6px 8px;font-weight:700;color:#fff;">스펙</td>
                        <td style="padding:6px 8px;">성냥 10개 / 한 개당 10초 / 총 100초</td>
                        <td style="padding:6px 8px;">총 5분 / 가스 라이터</td>
                        <td style="padding:6px 8px;">총 10분 / 방수 / 더 큰 불빛</td>
                    </tr></tbody>
                </table>
            </div>
            <div class="dict-section-title">2. 사용법 & 실전 메커니즘</div>
            <p class="dict-text">향초·양초·소환진 등 불을 붙이는 용도입니다. T1은 성냥 10개가 각각 10초씩 지속됩니다. T1·T2는 폭우에 노출되면 꺼질 수 있지만 T3는 방수입니다. 인벤토리의 특수 슬롯을 사용합니다.</p>
            <div class="dict-section-title">3. 실전 판별 포인트</div>
            <p class="dict-text">• <strong>티어 차이는 단순한 상위호환이 아닙니다.</strong> 같은 장비라도 전자기기 여부, 감지 방식, 설치 방식이 달라 실제 조사법이 달라질 수 있습니다.<br>• 수치가 적용되는 범위는 장비의 <strong>티어·유령 상태·난이도</strong>에 따라 달라질 수 있으므로, 특정 유령의 특수 능력과 함께 확인하세요.</p>
        `
    },
    {
        name: "소금",
        category: "증거 보조 / 동선 추적",
        t1: "Tier 1: 2회 / 작은 소금 더미",
        t2: "Tier 2: 3회 / 긴 소금 줄",
        t3: "Tier 3: 3회 / 긴 검은 소금 / 사냥 중 2초 감속",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 핵심 수치</div>
            <div style="overflow-x:auto; margin-bottom:12px;">
                <table style="width:100%; border-collapse:collapse; font-size:0.88rem; color:#d4d4d8; text-align:left;">
                    <thead><tr style="border-bottom:1.5px solid var(--accent-vibrant); color:var(--accent-light);">
                        <th style="padding:6px 8px;">구분</th><th style="padding:6px 8px;">Tier I</th><th style="padding:6px 8px;">Tier II</th><th style="padding:6px 8px;">Tier III</th>
                    </tr></thead>
                    <tbody><tr>
                        <td style="padding:6px 8px;font-weight:700;color:#fff;">스펙</td>
                        <td style="padding:6px 8px;">2회 / 작은 소금 더미</td>
                        <td style="padding:6px 8px;">3회 / 긴 소금 줄</td>
                        <td style="padding:6px 8px;">3회 / 긴 검은 소금 / 사냥 중 2초 감속</td>
                    </tr></tbody>
                </table>
            </div>
            <div class="dict-section-title">2. 사용법 & 실전 메커니즘</div>
            <p class="dict-text">유령이 소금을 밟으면 이동 흔적이 남고, UV 증거 유령은 일시적인 발자국을 남길 수 있습니다. 레이스는 소금을 전혀 밟지 않으며, 분노 상태의 갈루도 소금을 무시합니다. T3는 평상시 유령이 소금 줄을 만나면 잠시 되돌아가고, 사냥 중에는 속도가 50% 감소합니다.</p>
            <div class="dict-section-title">3. 실전 판별 포인트</div>
            <p class="dict-text">• <strong>티어 차이는 단순한 상위호환이 아닙니다.</strong> 같은 장비라도 전자기기 여부, 감지 방식, 설치 방식이 달라 실제 조사법이 달라질 수 있습니다.<br>• 수치가 적용되는 범위는 장비의 <strong>티어·유령 상태·난이도</strong>에 따라 달라질 수 있으므로, 특정 유령의 특수 능력과 함께 확인하세요.</p>
        `
    },
    {
        name: "정신력 약",
        category: "생존 / 정신력 회복",
        t1: "Tier 1: 정신력 회복량은 난이도에 따라 동일 / 회복 시간 20초",
        t2: "Tier 2: 동일 회복량 / 회복 시간 10초",
        t3: "Tier 3: 동일 회복량 / 회복 10초 + 10초 동안 무한 달리기",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 핵심 수치</div>
            <div style="overflow-x:auto; margin-bottom:12px;">
                <table style="width:100%; border-collapse:collapse; font-size:0.88rem; color:#d4d4d8; text-align:left;">
                    <thead><tr style="border-bottom:1.5px solid var(--accent-vibrant); color:var(--accent-light);">
                        <th style="padding:6px 8px;">구분</th><th style="padding:6px 8px;">Tier I</th><th style="padding:6px 8px;">Tier II</th><th style="padding:6px 8px;">Tier III</th>
                    </tr></thead>
                    <tbody><tr>
                        <td style="padding:6px 8px;font-weight:700;color:#fff;">스펙</td>
                        <td style="padding:6px 8px;">정신력 회복량은 난이도에 따라 동일 / 회복 시간 20초</td>
                        <td style="padding:6px 8px;">동일 회복량 / 회복 시간 10초</td>
                        <td style="padding:6px 8px;">동일 회복량 / 회복 10초 + 10초 동안 무한 달리기</td>
                    </tr></tbody>
                </table>
            </div>
            <div class="dict-section-title">2. 사용법 & 실전 메커니즘</div>
            <p class="dict-text">약의 티어가 정신력 회복량 자체를 바꾸지는 않습니다. 회복량은 난이도 설정에 따라 달라집니다. T3는 복용 후 10초 동안 달리기 스태미나가 소모되지 않습니다. 정신력이 95%보다 높으면 복용할 수 없습니다.</p>
            <div class="dict-section-title">3. 실전 판별 포인트</div>
            <p class="dict-text">• <strong>티어 차이는 단순한 상위호환이 아닙니다.</strong> 같은 장비라도 전자기기 여부, 감지 방식, 설치 방식이 달라 실제 조사법이 달라질 수 있습니다.<br>• 수치가 적용되는 범위는 장비의 <strong>티어·유령 상태·난이도</strong>에 따라 달라질 수 있으므로, 특정 유령의 특수 능력과 함께 확인하세요.</p>
        `
    },
    {
        name: "카메라",
        category: "정보 수집 / 보상 획득",
        t1: "Tier 1: 사진 간 대기 3초",
        t2: "Tier 2: 2초 / 화면 표시 / 중간 간섭 저항",
        t3: "Tier 3: 1초 / 화면 표시 / 높은 간섭 저항",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 핵심 수치</div>
            <div style="overflow-x:auto; margin-bottom:12px;">
                <table style="width:100%; border-collapse:collapse; font-size:0.88rem; color:#d4d4d8; text-align:left;">
                    <thead><tr style="border-bottom:1.5px solid var(--accent-vibrant); color:var(--accent-light);">
                        <th style="padding:6px 8px;">구분</th><th style="padding:6px 8px;">Tier I</th><th style="padding:6px 8px;">Tier II</th><th style="padding:6px 8px;">Tier III</th>
                    </tr></thead>
                    <tbody><tr>
                        <td style="padding:6px 8px;font-weight:700;color:#fff;">스펙</td>
                        <td style="padding:6px 8px;">사진 간 대기 3초</td>
                        <td style="padding:6px 8px;">2초 / 화면 표시 / 중간 간섭 저항</td>
                        <td style="padding:6px 8px;">1초 / 화면 표시 / 높은 간섭 저항</td>
                    </tr></tbody>
                </table>
            </div>
            <div class="dict-section-title">2. 사용법 & 실전 메커니즘</div>
            <p class="dict-text">카메라는 사진 증거 수집용이며 처음 5장의 유효 사진만 보상·목표에 반영됩니다. T2·T3는 화면 미리보기가 있습니다. 사냥 중 T2·T3는 전자기기로 유령을 유인할 수 있으며, T1은 사진을 찍을 때만 유인됩니다.</p>
            <div class="dict-section-title">3. 실전 판별 포인트</div>
            <p class="dict-text">• <strong>티어 차이는 단순한 상위호환이 아닙니다.</strong> 같은 장비라도 전자기기 여부, 감지 방식, 설치 방식이 달라 실제 조사법이 달라질 수 있습니다.<br>• 수치가 적용되는 범위는 장비의 <strong>티어·유령 상태·난이도</strong>에 따라 달라질 수 있으므로, 특정 유령의 특수 능력과 함께 확인하세요.</p>
        `
    },
    {
        name: "마이크로폰",
        category: "정보 수집 / 대형 맵 탐색",
        t1: "Tier 1: 20m / 넓은 방향성 / 같은 층",
        t2: "Tier 2: 30m / 넓은 방향성 / 소리 크기 표시",
        t3: "Tier 3: 30m / 거리·방향 표시 / 위·아래층 소리 감지",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 핵심 수치</div>
            <div style="overflow-x:auto; margin-bottom:12px;">
                <table style="width:100%; border-collapse:collapse; font-size:0.88rem; color:#d4d4d8; text-align:left;">
                    <thead><tr style="border-bottom:1.5px solid var(--accent-vibrant); color:var(--accent-light);">
                        <th style="padding:6px 8px;">구분</th><th style="padding:6px 8px;">Tier I</th><th style="padding:6px 8px;">Tier II</th><th style="padding:6px 8px;">Tier III</th>
                    </tr></thead>
                    <tbody><tr>
                        <td style="padding:6px 8px;font-weight:700;color:#fff;">스펙</td>
                        <td style="padding:6px 8px;">20m / 넓은 방향성 / 같은 층</td>
                        <td style="padding:6px 8px;">30m / 넓은 방향성 / 소리 크기 표시</td>
                        <td style="padding:6px 8px;">30m / 거리·방향 표시 / 위·아래층 소리 감지</td>
                    </tr></tbody>
                </table>
            </div>
            <div class="dict-section-title">2. 사용법 & 실전 메커니즘</div>
            <p class="dict-text">약한 유령의 초자연적 소리를 증폭해 들을 수 있고 벽을 통과하는 소리도 감지합니다. 전방 약 110°의 소리를 중심으로 수집합니다. 밴시 고유 비명, 모로이의 저주, 마이링의 높은 초자연적 소리 빈도 등 유령 특수 판별에 사용할 수 있습니다.</p>
            <div class="dict-section-title">3. 실전 판별 포인트</div>
            <p class="dict-text">• <strong>티어 차이는 단순한 상위호환이 아닙니다.</strong> 같은 장비라도 전자기기 여부, 감지 방식, 설치 방식이 달라 실제 조사법이 달라질 수 있습니다.<br>• 수치가 적용되는 범위는 장비의 <strong>티어·유령 상태·난이도</strong>에 따라 달라질 수 있으므로, 특정 유령의 특수 능력과 함께 확인하세요.</p>
        `
    },
    {
        name: "모션 센서",
        category: "정보 수집 / 동선 감지",
        t1: "Tier 1: 직선형 감지 / 벽 또는 바닥 설치 / 빛 표시",
        t2: "Tier 2: 직선 + 좁은 원뿔형 / 소리 표시 추가",
        t3: "Tier 3: 1.5m 구형 감지 / 유령 전용 / 감지 방향 회전",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 핵심 수치</div>
            <div style="overflow-x:auto; margin-bottom:12px;">
                <table style="width:100%; border-collapse:collapse; font-size:0.88rem; color:#d4d4d8; text-align:left;">
                    <thead><tr style="border-bottom:1.5px solid var(--accent-vibrant); color:var(--accent-light);">
                        <th style="padding:6px 8px;">구분</th><th style="padding:6px 8px;">Tier I</th><th style="padding:6px 8px;">Tier II</th><th style="padding:6px 8px;">Tier III</th>
                    </tr></thead>
                    <tbody><tr>
                        <td style="padding:6px 8px;font-weight:700;color:#fff;">스펙</td>
                        <td style="padding:6px 8px;">직선형 감지 / 벽 또는 바닥 설치 / 빛 표시</td>
                        <td style="padding:6px 8px;">직선 + 좁은 원뿔형 / 소리 표시 추가</td>
                        <td style="padding:6px 8px;">1.5m 구형 감지 / 유령 전용 / 감지 방향 회전</td>
                    </tr></tbody>
                </table>
            </div>
            <div class="dict-section-title">2. 사용법 & 실전 메커니즘</div>
            <p class="dict-text">T1은 플레이어·유령 등 여러 대상이 빔을 통과하면 반응합니다. T2는 직선과 원뿔형을 전환할 수 있습니다. T3는 바닥에만 설치하며 유령이 범위에 들어오거나 나갈 때 방향을 가리킵니다. 트럭 지도에서 감지 상태를 추적할 수 있습니다.</p>
            <div class="dict-section-title">3. 실전 판별 포인트</div>
            <p class="dict-text">• <strong>티어 차이는 단순한 상위호환이 아닙니다.</strong> 같은 장비라도 전자기기 여부, 감지 방식, 설치 방식이 달라 실제 조사법이 달라질 수 있습니다.<br>• 수치가 적용되는 범위는 장비의 <strong>티어·유령 상태·난이도</strong>에 따라 달라질 수 있으므로, 특정 유령의 특수 능력과 함께 확인하세요.</p>
        `
    },
    {
        name: "사운드 센서",
        category: "정보 수집 / 소리 감지",
        t1: "Tier 1: 5m 또는 10m / 구형 범위",
        t2: "Tier 2: 5m·10m·15m / 범위 선택",
        t3: "Tier 3: 5m·10m·15m / 방향에 따른 원뿔·측면·구형 형태",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 핵심 수치</div>
            <div style="overflow-x:auto; margin-bottom:12px;">
                <table style="width:100%; border-collapse:collapse; font-size:0.88rem; color:#d4d4d8; text-align:left;">
                    <thead><tr style="border-bottom:1.5px solid var(--accent-vibrant); color:var(--accent-light);">
                        <th style="padding:6px 8px;">구분</th><th style="padding:6px 8px;">Tier I</th><th style="padding:6px 8px;">Tier II</th><th style="padding:6px 8px;">Tier III</th>
                    </tr></thead>
                    <tbody><tr>
                        <td style="padding:6px 8px;font-weight:700;color:#fff;">스펙</td>
                        <td style="padding:6px 8px;">5m 또는 10m / 구형 범위</td>
                        <td style="padding:6px 8px;">5m·10m·15m / 범위 선택</td>
                        <td style="padding:6px 8px;">5m·10m·15m / 방향에 따른 원뿔·측면·구형 형태</td>
                    </tr></tbody>
                </table>
            </div>
            <div class="dict-section-title">2. 사용법 & 실전 메커니즘</div>
            <p class="dict-text">설치 후 트럭의 Sound Monitor에서 범위 안의 소리를 확인합니다. 화면 수치는 감지된 소리의 총 음량이며 약 1초마다 갱신됩니다. 유령 활동 위치를 좁히거나 고스트 라이팅 소리를 원격으로 감시하는 데 유용합니다.</p>
            <div class="dict-section-title">3. 실전 판별 포인트</div>
            <p class="dict-text">• <strong>티어 차이는 단순한 상위호환이 아닙니다.</strong> 같은 장비라도 전자기기 여부, 감지 방식, 설치 방식이 달라 실제 조사법이 달라질 수 있습니다.<br>• 수치가 적용되는 범위는 장비의 <strong>티어·유령 상태·난이도</strong>에 따라 달라질 수 있으므로, 특정 유령의 특수 능력과 함께 확인하세요.</p>
        `
    },
    {
        name: "사운드 레코더",
        category: "정보 수집 / 음성 녹음",
        t1: "Tier 1: 3m / 기본 녹음",
        t2: "Tier 2: 5m / 화면 표시 / 정확도 향상",
        t3: "Tier 3: 5m / 거리·방향 표시",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 핵심 수치</div>
            <div style="overflow-x:auto; margin-bottom:12px;">
                <table style="width:100%; border-collapse:collapse; font-size:0.88rem; color:#d4d4d8; text-align:left;">
                    <thead><tr style="border-bottom:1.5px solid var(--accent-vibrant); color:var(--accent-light);">
                        <th style="padding:6px 8px;">구분</th><th style="padding:6px 8px;">Tier I</th><th style="padding:6px 8px;">Tier II</th><th style="padding:6px 8px;">Tier III</th>
                    </tr></thead>
                    <tbody><tr>
                        <td style="padding:6px 8px;font-weight:700;color:#fff;">스펙</td>
                        <td style="padding:6px 8px;">3m / 기본 녹음</td>
                        <td style="padding:6px 8px;">5m / 화면 표시 / 정확도 향상</td>
                        <td style="padding:6px 8px;">5m / 거리·방향 표시</td>
                    </tr></tbody>
                </table>
            </div>
            <div class="dict-section-title">2. 사용법 & 실전 메커니즘</div>
            <p class="dict-text">유령의 초자연적 소리, 이벤트, 주파수 측정기 응답, 라이팅, EMF 5 등의 소리를 녹음할 수 있습니다. 계약당 최대 3개의 오디오 클립을 저장할 수 있습니다. 모로이는 성공적인 녹음으로 플레이어를 저주할 수 있고, 밴시는 고유 비명을 낼 확률이 있습니다.</p>
            <div class="dict-section-title">3. 실전 판별 포인트</div>
            <p class="dict-text">• <strong>티어 차이는 단순한 상위호환이 아닙니다.</strong> 같은 장비라도 전자기기 여부, 감지 방식, 설치 방식이 달라 실제 조사법이 달라질 수 있습니다.<br>• 수치가 적용되는 범위는 장비의 <strong>티어·유령 상태·난이도</strong>에 따라 달라질 수 있으므로, 특정 유령의 특수 능력과 함께 확인하세요.</p>
        `
    },
    {
        name: "헤드기어",
        category: "생존 / 편의성 장비",
        t1: "Tier 1: 머리 장착 카메라 / 트럭에서 시야 공유 / 전자기기",
        t2: "Tier 2: 헤드 램프 / 중간 광량 / 전자기기",
        t3: "Tier 3: 야간 투시경 / 강한 초자연 간섭 / 전자기기",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 핵심 수치</div>
            <div style="overflow-x:auto; margin-bottom:12px;">
                <table style="width:100%; border-collapse:collapse; font-size:0.88rem; color:#d4d4d8; text-align:left;">
                    <thead><tr style="border-bottom:1.5px solid var(--accent-vibrant); color:var(--accent-light);">
                        <th style="padding:6px 8px;">구분</th><th style="padding:6px 8px;">Tier I</th><th style="padding:6px 8px;">Tier II</th><th style="padding:6px 8px;">Tier III</th>
                    </tr></thead>
                    <tbody><tr>
                        <td style="padding:6px 8px;font-weight:700;color:#fff;">스펙</td>
                        <td style="padding:6px 8px;">머리 장착 카메라 / 트럭에서 시야 공유 / 전자기기</td>
                        <td style="padding:6px 8px;">헤드 램프 / 중간 광량 / 전자기기</td>
                        <td style="padding:6px 8px;">야간 투시경 / 강한 초자연 간섭 / 전자기기</td>
                    </tr></tbody>
                </table>
            </div>
            <div class="dict-section-title">2. 사용법 & 실전 메커니즘</div>
            <p class="dict-text">T1은 착용자의 영상을 트럭에서 볼 수 있어 혼자 Spirit Box를 사용하는 플레이어를 보조하기 좋습니다. T2는 인벤토리 슬롯을 차지하지 않는 머리 조명입니다. T3는 어두운 곳을 볼 수 있지만 유령 근처에서는 화면 왜곡이 커집니다. T3도 안전한 장비가 아니라 전자기기입니다.</p>
            <div class="dict-section-title">3. 실전 판별 포인트</div>
            <p class="dict-text">• <strong>티어 차이는 단순한 상위호환이 아닙니다.</strong> 같은 장비라도 전자기기 여부, 감지 방식, 설치 방식이 달라 실제 조사법이 달라질 수 있습니다.<br>• 수치가 적용되는 범위는 장비의 <strong>티어·유령 상태·난이도</strong>에 따라 달라질 수 있으므로, 특정 유령의 특수 능력과 함께 확인하세요.</p>
        `
    },
    {
        name: "삼각대",
        category: "보조 / 카메라 거치",
        t1: "Tier 1: 낮은 안정성 / 비디오 카메라 거치",
        t2: "Tier 2: 중간 안정성 / 트럭에서 회전 조작",
        t3: "Tier 3: 높은 안정성 / 회전 조작",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 핵심 수치</div>
            <div style="overflow-x:auto; margin-bottom:12px;">
                <table style="width:100%; border-collapse:collapse; font-size:0.88rem; color:#d4d4d8; text-align:left;">
                    <thead><tr style="border-bottom:1.5px solid var(--accent-vibrant); color:var(--accent-light);">
                        <th style="padding:6px 8px;">구분</th><th style="padding:6px 8px;">Tier I</th><th style="padding:6px 8px;">Tier II</th><th style="padding:6px 8px;">Tier III</th>
                    </tr></thead>
                    <tbody><tr>
                        <td style="padding:6px 8px;font-weight:700;color:#fff;">스펙</td>
                        <td style="padding:6px 8px;">낮은 안정성 / 비디오 카메라 거치</td>
                        <td style="padding:6px 8px;">중간 안정성 / 트럭에서 회전 조작</td>
                        <td style="padding:6px 8px;">높은 안정성 / 회전 조작</td>
                    </tr></tbody>
                </table>
            </div>
            <div class="dict-section-title">2. 사용법 & 실전 메커니즘</div>
            <p class="dict-text">비디오 카메라를 장착해 좋은 위치에 설치할 수 있습니다. T2·T3는 트럭의 카메라 화면에서 삼각대 방향을 회전시킬 수 있습니다. 유령은 카메라를 넘어뜨릴 수 있으며 티어가 높을수록 안정성이 좋아집니다.</p>
            <div class="dict-section-title">3. 실전 판별 포인트</div>
            <p class="dict-text">• <strong>티어 차이는 단순한 상위호환이 아닙니다.</strong> 같은 장비라도 전자기기 여부, 감지 방식, 설치 방식이 달라 실제 조사법이 달라질 수 있습니다.<br>• 수치가 적용되는 범위는 장비의 <strong>티어·유령 상태·난이도</strong>에 따라 달라질 수 있으므로, 특정 유령의 특수 능력과 함께 확인하세요.</p>
        `
    }
];
