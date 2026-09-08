// ==========================================
// 🛠️ 2. 파스모포비아 전체 21종 장비 데이터베이스
// ==========================================

const EQUIPMENT_DATA = [
    {
        name: "EMF 측정기",
        category: "증거 확인 / 정보 수집",
        t1: "Tier 1: 아날로그 바늘식 (탐지 1.5m / 오차 발생)",
        t2: "Tier 2: 디지털 5단계 LED (탐지 1.7m / 명확한 수치/신호음)",
        t3: "Tier 3: 다방향 레이더 디스플레이 (탐지 3.5m / 최대 3개 신호 동시 추적)",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 티어(Tier)별 상세 스펙</div>
            <div style="overflow-x: auto; margin-bottom: 12px;">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.88rem; color: #d4d4d8; text-align: left;">
                    <thead>
                        <tr style="border-bottom: 1.5px solid var(--accent-vibrant); color: var(--accent-light);">
                            <th style="padding: 6px 8px;">구분</th>
                            <th style="padding: 6px 8px;">1티어 (Tier I)</th>
                            <th style="padding: 6px 8px;">2티어 (Tier II)</th>
                            <th style="padding: 6px 8px;">3티어 (Tier III)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">형태</td>
                            <td style="padding: 6px 8px;">아날로그 바늘 계측기</td>
                            <td style="padding: 6px 8px;">K-II 스타일 디지털 LED</td>
                            <td style="padding: 6px 8px;">고성능 LCD 레이더 스캐너</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">해금 / 가격</td>
                            <td style="padding: 6px 8px;">기본 / $45</td>
                            <td style="padding: 6px 8px;">Lv 20 / $45</td>
                            <td style="padding: 6px 8px;">Lv 52 / $45</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">탐지 반경</td>
                            <td style="padding: 6px 8px;">1.5m</td>
                            <td style="padding: 6px 8px;">1.7m</td>
                            <td style="padding: 6px 8px;">3.5m</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">정확도/표시</td>
                            <td style="padding: 6px 8px;">낮음 (바늘 흔들림/오차)</td>
                            <td style="padding: 6px 8px;">높음 (5단계 LED 점등)</td>
                            <td style="padding: 6px 8px;">매우 높음 (거리/방향/수치 표시)</td>
                        </tr>
                        <tr>
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">핵심 특징</td>
                            <td style="padding: 6px 8px;">소리가 작고 좌우 흔들림 심함</td>
                            <td style="padding: 6px 8px;">단계별 고유 경고음 발생</td>
                            <td style="padding: 6px 8px;">최대 3개 신호 동시 추적</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="dict-section-title">2. 사용법 및 작동 원리 (Usage)</div>
            <p class="dict-text">
                • <strong>전자기 신호 감지:</strong> 유령이 물건을 던지거나 문/스위치를 만지는 등 환경과 상호작용할 때 발생하는 전자기 신호를 감지합니다.<br>
                • <strong>신호 단계별 의미:</strong> EMF 2(일반 상호작용), EMF 3(물건 던짐), EMF 4(고스트 이벤트), EMF 5(공식 증거 / EMF 2~3 발생 시 25% 확률로 승격)<br>
                • <strong>사냥(헌팅) 시 주의사항:</strong> 켜져 있는 EMF 측정기는 전자 장비이므로, 사냥 중 손에 들고 있거나 켜진 상태로 바닥에 두면 <strong>유령에게 위치가 노출</strong>됩니다.
            </p>
            <div class="dict-section-title">3. 팁 및 노하우 (Tips)</div>
            <p class="dict-text">
                • <strong>1티어 식별법:</strong> 1티어는 바늘이 끝까지 올라가 5를 가리키거나 넘어서야 EMF 5로 판정됩니다.<br>
                • <strong>3티어 레이더 활용:</strong> 3티어는 벽 너머 신호의 방향과 거리까지 디스플레이에 점으로 찍어주므로 방 특정 속도가 압도적입니다.
            </p>
        `
    },
    {
        name: "DOTS 프로젝터",
        category: "증거 확인",
        t1: "Tier 1: 휴대용 레이저 펜 (5m 좁은 원뿔형 빔, 손에 들면 헌팅 시 어그로)",
        t2: "Tier 2: 설치형 반구형 그리드 (2.5m 주변광, 벽/바닥/천장 부착)",
        t3: "Tier 3: 모터 회전식 3구 프로젝터 (7m 와이드 스캔, F키로 회전 정지/소음 제어)",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 티어(Tier)별 상세 스펙</div>
            <div style="overflow-x: auto; margin-bottom: 12px;">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.88rem; color: #d4d4d8; text-align: left;">
                    <thead>
                        <tr style="border-bottom: 1.5px solid var(--accent-vibrant); color: var(--accent-light);">
                            <th style="padding: 6px 8px;">구분</th>
                            <th style="padding: 6px 8px;">1티어 (Tier I)</th>
                            <th style="padding: 6px 8px;">2티어 (Tier II)</th>
                            <th style="padding: 6px 8px;">3티어 (Tier III)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">형태</td>
                            <td style="padding: 6px 8px;">휴대용 레이저 펜</td>
                            <td style="padding: 6px 8px;">적외선 센서 개조형</td>
                            <td style="padding: 6px 8px;">모터 회전식 3구 프로젝터</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">해금 / 가격</td>
                            <td style="padding: 6px 8px;">기본 / $65</td>
                            <td style="padding: 6px 8px;">Lv 27 / $65</td>
                            <td style="padding: 6px 8px;">Lv 49 / $65</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">사거리</td>
                            <td style="padding: 6px 8px;">5m</td>
                            <td style="padding: 6px 8px;">2.5m</td>
                            <td style="padding: 6px 8px;">7m</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">범위 / 형태</td>
                            <td style="padding: 6px 8px;">좁은 원뿔형 (Narrow)</td>
                            <td style="padding: 6px 8px;">구형 주변광 (Sphere Area)</td>
                            <td style="padding: 6px 8px;">넓은 원뿔형 스캔 (Wide Scan)</td>
                        </tr>
                        <tr>
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">핵심 특징</td>
                            <td style="padding: 6px 8px;">들고 수색 / 바닥 거치</td>
                            <td style="padding: 6px 8px;">벽 / 바닥 / 천장 부착</td>
                            <td style="padding: 6px 8px;">좌우 자동 회전 스캔 (F키 정지)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="dict-section-title">2. 사용법 및 작동 원리 (Usage)</div>
            <p class="dict-text">
                • <strong>유령 감지 (D.O.T.S. 상태):</strong> 증거를 가진 유령은 주기적으로 짧은 도트 상태가 되어 플레이어 방향으로 걸어가며, 레이저 격자를 통과할 때만 초록빛 실루엣이 가시화됩니다.<br>
                • <strong>헌팅 주의사항:</strong> 전자 장비 판정이므로 <strong>1티어를 손에 든 상태로 켜두었을 때만</strong> 사냥 중 어그로를 끕니다. (바닥/벽에 설치된 상태는 안전)
            </p>
            <div class="dict-section-title">3. 팁 및 노하우 (Tips)</div>
            <p class="dict-text">
                • <strong>3티어 소음 제어:</strong> 모터 회전 소음이 거슬릴 때 F/E 키를 누르면 회전이 멈춰 각도가 고정되고 소음이 사라집니다.<br>
                • <strong>고료(Goryo) 특수 룰:</strong> 고료는 방에 플레이어가 없어야 하며, 오직 <strong>비디오 카메라 화면을 통해서만</strong> D.O.T.S. 실루엣이 보입니다.
            </p>
        `
    },
    {
        name: "자외선 라이트 (UV Light)",
        category: "증거 확인",
        t1: "Tier 1: 형광봉 (방사형 주변광 / 시간 경과 시 충전 필요)",
        t2: "Tier 2: 손전등형 UV 라이트 (집중 좁은 빔 / 즉각적인 흔적 탐색)",
        t3: "Tier 3: 광범위 UV 프로 랜턴 (넓은 투사각 / 초고속 충전 지속)",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 티어(Tier)별 상세 스펙</div>
            <div style="overflow-x: auto; margin-bottom: 12px;">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.88rem; color: #d4d4d8; text-align: left;">
                    <thead>
                        <tr style="border-bottom: 1.5px solid var(--accent-vibrant); color: var(--accent-light);">
                            <th style="padding: 6px 8px;">구분</th>
                            <th style="padding: 6px 8px;">1티어 (Tier I)</th>
                            <th style="padding: 6px 8px;">2티어 (Tier II)</th>
                            <th style="padding: 6px 8px;">3티어 (Tier III)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">형태</td>
                            <td style="padding: 6px 8px;">자외선 화학 형광봉</td>
                            <td style="padding: 6px 8px;">손전등형 UV 라이트</td>
                            <td style="padding: 6px 8px;">고광량 UV 프로 랜턴</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">해금 / 가격</td>
                            <td style="padding: 6px 8px;">기본 / $35</td>
                            <td style="padding: 6px 8px;">Lv 21 / $35</td>
                            <td style="padding: 6px 8px;">Lv 56 / $35</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">충전 시간</td>
                            <td style="padding: 6px 8px;">10초 (서서히 밝아짐)</td>
                            <td style="padding: 6px 8px;">1.5초</td>
                            <td style="padding: 6px 8px;">0.1초 (즉시 완충)</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">빛 유지/형태</td>
                            <td style="padding: 6px 8px;">방사형 (1분 후 어두워짐)</td>
                            <td style="padding: 6px 8px;">직선 빔 (영구 점등)</td>
                            <td style="padding: 6px 8px;">광역 원뿔형 (영구 점등)</td>
                        </tr>
                        <tr>
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">핵심 특징</td>
                            <td style="padding: 6px 8px;">비전자기기 판정 (헌팅 시 안전)</td>
                            <td style="padding: 6px 8px;">전자기기 판정 (헌팅 어그로)</td>
                            <td style="padding: 6px 8px;">방 전체를 한 번에 UV 충전</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="dict-section-title">2. 사용법 및 작동 원리 (Usage)</div>
            <p class="dict-text">
                • <strong>손자국 & 발자국 검출:</strong> 유령이 문, 창문, 스위치를 만졌을 때 남는 <strong>손자국/지문</strong>과 소금을 밟은 후 남는 <strong>발자국</strong>을 자외선 빛으로 충전하여 가시화합니다.<br>
                • <strong>1티어 형광봉의 비전자기기 특권:</strong> 1티어 형광봉은 화학식 조명이므로 <strong>헌팅 중에도 유령의 어그로를 끌지 않는 엄청난 장점</strong>이 있습니다.
            </p>
            <div class="dict-section-title">3. 팁 및 노하우 (Tips)</div>
            <p class="dict-text">
                • <strong>오바케 6손가락 감별:</strong> 자외선으로 손자국을 비추었을 때 손가락이 6개라면 100% 오바케입니다.<br>
                • <strong>소금 발자국 판정:</strong> 소금을 밟았을 때 자외선 빛을 비추어 발자국이 남는지 확인하여 UV 증거 유무를 판단할 수 있습니다.
            </p>
        `
    },
    {
        name: "주파수 측정기 (Spirit Box)",
        category: "증거 확인 / 음성 대화",
        t1: "Tier 1: 구형 아날로그 라디오 (반경 3m / 응답 성공률 낮음)",
        t2: "Tier 2: 표준 디지털 스피릿 박스 (반경 4m / 응답 성공률 보통)",
        t3: "Tier 3: 고성능 노이즈캔슬링 박스 (반경 5m / 즉각 응답 & 성공률 높음)",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 티어(Tier)별 상세 스펙</div>
            <div style="overflow-x: auto; margin-bottom: 12px;">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.88rem; color: #d4d4d8; text-align: left;">
                    <thead>
                        <tr style="border-bottom: 1.5px solid var(--accent-vibrant); color: var(--accent-light);">
                            <th style="padding: 6px 8px;">구분</th>
                            <th style="padding: 6px 8px;">1티어 (Tier I)</th>
                            <th style="padding: 6px 8px;">2티어 (Tier II)</th>
                            <th style="padding: 6px 8px;">3티어 (Tier III)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">형태</td>
                            <td style="padding: 6px 8px;">구형 카세트/라디오</td>
                            <td style="padding: 6px 8px;">디지털 디스플레이 박스</td>
                            <td style="padding: 6px 8px;">고성능 음성 분석 터미널</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">해금 / 가격</td>
                            <td style="padding: 6px 8px;">기본 / $50</td>
                            <td style="padding: 6px 8px;">Lv 24 / $50</td>
                            <td style="padding: 6px 8px;">Lv 54 / $50</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">수신 반경</td>
                            <td style="padding: 6px 8px;">3m</td>
                            <td style="padding: 6px 8px;">4m</td>
                            <td style="padding: 6px 8px;">5m</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">응답 확률</td>
                            <td style="padding: 6px 8px;">낮음 (노이즈 심함)</td>
                            <td style="padding: 6px 8px;">보통 (선명한 수신음)</td>
                            <td style="padding: 6px 8px;">매우 높음 (노이즈 완전 차단)</td>
                        </tr>
                        <tr>
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">핵심 특징</td>
                            <td style="padding: 6px 8px;">유령이 근처에 딱 붙어야 반응</td>
                            <td style="padding: 6px 8px;">유령/X 아이콘 상태 표시</td>
                            <td style="padding: 6px 8px;">넓은 방 전체에서 쉽게 응답 획득</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="dict-section-title">2. 사용법 및 작동 원리 (Usage)</div>
            <p class="dict-text">
                • <strong>필수 조건:</strong> 반드시 <strong>방 안의 불(전등)을 끈 어둠 속</strong>에서 질문해야 유령이 응답합니다.<br>
                • <strong>혼자 반응 여부:</strong> 화이트보드 미션 설명에 "유령이 혼자 있는 사람에게만 반응합니다"라고 적혀 있다면, <strong>질문자 외 모든 팀원이 방 밖으로 나가야</strong> 대답합니다.<br>
                • <strong>사냥(헌팅) 어그로:</strong> 켜져 있는 스피릿 박스는 전자기기이므로 헌팅 중에는 반드시 전원을 꺼야 합니다.
            </p>
            <div class="dict-section-title">3. 팁 및 노하우 (Tips)</div>
            <p class="dict-text">
                • <strong>데오겐 고유 숨소리:</strong> 데오겐에게 1m 내에서 질문 시 33% 확률로 기괴한 중저음 숨소리 반응이 수신됩니다.<br>
                • <strong>모로이 저주 주의:</strong> 모로이에게 스피릿 박스 응답을 듣는 순간 저주에 걸려 정신력이 2배 속도로 깎이므로 즉시 안정제를 복용해야 합니다.
            </p>
        `
    },
    {
        name: "고스트 라이팅 (Ghost Writing)",
        category: "증거 확인",
        t1: "Tier 1: 구형 노트 & 연필 (상호작용 반경 3m / 긴 대기시간)",
        t2: "Tier 2: 가죽 바인더 & 볼펜 (상호작용 반경 4m / 중간 대기시간)",
        t3: "Tier 3: 깃펜 & 마법 서적 (상호작용 반경 5m / 빠른 필기 속도)",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 티어(Tier)별 상세 스펙</div>
            <div style="overflow-x: auto; margin-bottom: 12px;">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.88rem; color: #d4d4d8; text-align: left;">
                    <thead>
                        <tr style="border-bottom: 1.5px solid var(--accent-vibrant); color: var(--accent-light);">
                            <th style="padding: 6px 8px;">구분</th>
                            <th style="padding: 6px 8px;">1티어 (Tier I)</th>
                            <th style="padding: 6px 8px;">2티어 (Tier II)</th>
                            <th style="padding: 6px 8px;">3티어 (Tier III)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">형태</td>
                            <td style="padding: 6px 8px;">찢어진 구형 노트 & 몽당연필</td>
                            <td style="padding: 6px 8px;">가죽 커버 다이어리 & 볼펜</td>
                            <td style="padding: 6px 8px;">고대 마법서 & 깃펜</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">해금 / 가격</td>
                            <td style="padding: 6px 8px;">기본 / $40</td>
                            <td style="padding: 6px 8px;">Lv 23 / $40</td>
                            <td style="padding: 6px 8px;">Lv 63 / $40</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">상호작용 범위</td>
                            <td style="padding: 6px 8px;">3m</td>
                            <td style="padding: 6px 8px;">4m</td>
                            <td style="padding: 6px 8px;">5m</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">필기 반응 확률</td>
                            <td style="padding: 6px 8px;">낮음 (오래 걸림)</td>
                            <td style="padding: 6px 8px;">보통</td>
                            <td style="padding: 6px 8px;">매우 높음 (즉각 반응)</td>
                        </tr>
                        <tr>
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">핵심 특징</td>
                            <td style="padding: 6px 8px;">범위가 좁아 유령 동선에 정확히 배치 필요</td>
                            <td style="padding: 6px 8px;">가장 무난하고 안정적인 필기 속도</td>
                            <td style="padding: 6px 8px;">방 어디에 두어도 매우 빠른 속도로 글 작성</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="dict-section-title">2. 사용법 및 작동 원리 (Usage)</div>
            <p class="dict-text">
                • <strong>설치 방법 (F키):</strong> 바닥이나 탁자 등에 F키를 눌러 책을 펼쳐둔 상태로 설치해야 유령이 글씨를 쓸 수 있습니다. (G키로 그냥 던지면 책이 닫혀 필기 불가)<br>
                • <strong>비증거 투척 판정:</strong> 유령이 책에 글씨를 쓰지 않고 <strong>책을 집어던졌다면, 해당 유령은 고스트 라이팅 증거가 100% 없는 유령</strong>입니다. (라이팅 증거 즉시 제외 가능)
            </p>
            <div class="dict-section-title">3. 팁 및 노하우 (Tips)</div>
            <p class="dict-text">
                • <strong>비디오 카메라 감시:</strong> 책 앞에 비디오 카메라를 세워두고 트럭 모니터로 관찰하면 방에 들어가지 않고도 확인 가능합니다.<br>
                • <strong>셰이드(Shade) 주의:</strong> 셰이드는 방 안에 플레이어가 있으면 글씨를 쓰지 않으므로 책을 깔고 방 밖으로 나와야 합니다.
            </p>
        `
    },
    {
        name: "온도계 (Thermometer)",
        category: "증거 확인 / 고스트룸 특정",
        t1: "Tier 1: 수은 아날로그 온도계 (실시간 반응 / 서늘함 탐지 최강)",
        t2: "Tier 2: 전자식 적외선 체온계 (화면 디스플레이 / 버튼 측정)",
        t3: "Tier 3: 초고속 정밀 디지털 스캐너 (즉시 온도 갱신 / 최고 정확도)",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 티어(Tier)별 상세 스펙</div>
            <div style="overflow-x: auto; margin-bottom: 12px;">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.88rem; color: #d4d4d8; text-align: left;">
                    <thead>
                        <tr style="border-bottom: 1.5px solid var(--accent-vibrant); color: var(--accent-light);">
                            <th style="padding: 6px 8px;">구분</th>
                            <th style="padding: 6px 8px;">1티어 (Tier I)</th>
                            <th style="padding: 6px 8px;">2티어 (Tier II)</th>
                            <th style="padding: 6px 8px;">3티어 (Tier III)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">형태</td>
                            <td style="padding: 6px 8px;">벽걸이/휴대용 수은 온도계</td>
                            <td style="padding: 6px 8px;">전자식 적외선 온도계</td>
                            <td style="padding: 6px 8px;">산업용 디지털 열화상 온도계</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">해금 / 가격</td>
                            <td style="padding: 6px 8px;">기본 / $30</td>
                            <td style="padding: 6px 8px;">Lv 36 / $30</td>
                            <td style="padding: 6px 8px;">Lv 64 / $30</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">측정 방식</td>
                            <td style="padding: 6px 8px;">실시간 연속 수은주 변화</td>
                            <td style="padding: 6px 8px;">2.5초 버튼 스캔</td>
                            <td style="padding: 6px 8px;">1.0초 초고속 스캔</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">전자기기 여부</td>
                            <td style="padding: 6px 8px;"><strong>비전자기기 (헌팅 안전)</strong></td>
                            <td style="padding: 6px 8px;">전자기기 (헌팅 어그로)</td>
                            <td style="padding: 6px 8px;">전자기기 (헌팅 어그로)</td>
                        </tr>
                        <tr>
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">핵심 특징</td>
                            <td style="padding: 6px 8px;">배터리 없이 바닥에 둬도 작동</td>
                            <td style="padding: 6px 8px;">오차 범위 ±2°C</td>
                            <td style="padding: 6px 8px;">오차 범위 ±1°C (초고속 탐지)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="dict-section-title">2. 사용법 및 작동 원리 (Usage)</div>
            <p class="dict-text">
                • <strong>서늘함(Freezing) 증거 판정:</strong> 온도가 <strong>0°C 미만 (영하)</strong>으로 떨어지면 '서늘함' 공식 증거로 확정됩니다. (입김은 단순 0~5°C에서도 나올 수 있으므로 온도계 수치가 필수)<br>
                • <strong>고스트 룸 탐색:</strong> 두꺼비집을 켠 상태에서 집안 온도가 보통 15~20°C를 유지할 때, <strong>10°C 이하로 떨어지는 방</strong>이 현재 유령이 머무는 고스트 룸입니다.
            </p>
            <div class="dict-section-title">3. 팁 및 노하우 (Tips)</div>
            <p class="dict-text">
                • <strong>1티어 수은의 사기성:</strong> 1티어는 비전자기기라 유령 헌팅 시 들고 숨어도 위치가 발각되지 않으며, 방에 던져두고 카메라로 수은주를 지켜보기 가장 좋습니다.
            </p>
        `
    },
    {
        name: "비디오 카메라 (Video Camera)",
        category: "증거 확인 / 고스트 오브 & DOTS",
        t1: "Tier 1: 구형 캠코더 (흑백/낮은 화질 / 노이즈 심함)",
        t2: "Tier 2: HD 디지털 캠코더 (선명한 컬러 / 야간투시경)",
        t3: "Tier 3: 고화질 스마트 노이즈캔슬링 카메라 (간섭 방지 / 울트라 와이드)",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 티어(Tier)별 상세 스펙</div>
            <div style="overflow-x: auto; margin-bottom: 12px;">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.88rem; color: #d4d4d8; text-align: left;">
                    <thead>
                        <tr style="border-bottom: 1.5px solid var(--accent-vibrant); color: var(--accent-light);">
                            <th style="padding: 6px 8px;">구분</th>
                            <th style="padding: 6px 8px;">1티어 (Tier I)</th>
                            <th style="padding: 6px 8px;">2티어 (Tier II)</th>
                            <th style="padding: 6px 8px;">3티어 (Tier III)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">형태</td>
                            <td style="padding: 6px 8px;">구형 소형 캠코더</td>
                            <td style="padding: 6px 8px;">HD 핸디캠</td>
                            <td style="padding: 6px 8px;">방송용 프로 시네마 카메라</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">해금 / 가격</td>
                            <td style="padding: 6px 8px;">기본 / $50</td>
                            <td style="padding: 6px 8px;">Lv 33 / $50</td>
                            <td style="padding: 6px 8px;">Lv 61 / $50</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">화질/야간시야</td>
                            <td style="padding: 6px 8px;">낮음 (노이즈 많음)</td>
                            <td style="padding: 6px 8px;">보통 (선명함)</td>
                            <td style="padding: 6px 8px;">매우 높음 (초고화질)</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">전자기 교란 저항</td>
                            <td style="padding: 6px 8px;">없음 (심하게 찌그러짐)</td>
                            <td style="padding: 6px 8px;">보통</td>
                            <td style="padding: 6px 8px;">높음 (유령 근처도 선명)</td>
                        </tr>
                        <tr>
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">핵심 특징</td>
                            <td style="padding: 6px 8px;">삼각대 장착 가능, 트럭 모니터 연동</td>
                            <td style="padding: 6px 8px;">오브 식별이 매우 수월</td>
                            <td style="padding: 6px 8px;">넓은 시야각으로 방 전체 커버</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="dict-section-title">2. 사용법 및 작동 원리 (Usage)</div>
            <p class="dict-text">
                • <strong>고스트 오브(Ghost Orb) 확인:</strong> 야간 투시 모드(초록 화면)를 켜고 방안을 비추면 반딧불이처럼 둥둥 떠다니는 고스트 오브를 확인할 수 있습니다.<br>
                • <strong>D.O.T.S. 원격 모니터링:</strong> 방에 설치해 두고 트럭 모니터로 지켜보면 고료의 DOTS 실루엣을 안전하게 포착할 수 있습니다.
            </p>
        `
    },
    {
        name: "손전등 (Flashlight)",
        category: "생존 / 시야 확보",
        t1: "Tier 1: 구형 손전등 (좁은 빔 / 낮은 광량)",
        t2: "Tier 2: 표준 손전등 (선명한 광량 / 균형 잡힌 시야)",
        t3: "Tier 3: 강력한 프로 손전등 (초광역 와이드 빔 / 최대 광량)",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 티어(Tier)별 상세 스펙</div>
            <div style="overflow-x: auto; margin-bottom: 12px;">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.88rem; color: #d4d4d8; text-align: left;">
                    <thead>
                        <tr style="border-bottom: 1.5px solid var(--accent-vibrant); color: var(--accent-light);">
                            <th style="padding: 6px 8px;">구분</th>
                            <th style="padding: 6px 8px;">1티어 (Tier I)</th>
                            <th style="padding: 6px 8px;">2티어 (Tier II)</th>
                            <th style="padding: 6px 8px;">3티어 (Tier III)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">형태</td>
                            <td style="padding: 6px 8px;">플라스틱 소형 손전등</td>
                            <td style="padding: 6px 8px;">알루미늄 표준 손전등</td>
                            <td style="padding: 6px 8px;">중형 고광량 프로 라이트</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">해금 / 가격</td>
                            <td style="padding: 6px 8px;">기본 / $30</td>
                            <td style="padding: 6px 8px;">Lv 19 / $30</td>
                            <td style="padding: 6px 8px;">Lv 35 / $30</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">광량 / 밝기</td>
                            <td style="padding: 6px 8px;">어두움 (누런 불빛)</td>
                            <td style="padding: 6px 8px;">보통 (선명한 백색광)</td>
                            <td style="padding: 6px 8px;">매우 밝음 (광범위 조명)</td>
                        </tr>
                        <tr>
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">핵심 특징</td>
                            <td style="padding: 6px 8px;">단축키 T키로 보조 점등 가능</td>
                            <td style="padding: 6px 8px;">가장 표준적인 안정적 시야</td>
                            <td style="padding: 6px 8px;">넓은 방 전체를 환하게 비춤</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="dict-section-title">2. 사용법 및 작동 원리 (Usage)</div>
            <p class="dict-text">
                • <strong>어깨 견착 조작 (T키):</strong> 다른 장비를 손에 든 상태에서도 <strong>T키</strong>를 눌러 켜고 끌 수 있습니다.<br>
                • <strong>사냥 시 어그로 1순위:</strong> 손전등이 켜져 있으면 유령이 위치를 즉시 감지하므로 <strong>사냥 시작 시 무조건 전원을 꺼야 합니다.</strong>
            </p>
        `
    },
    {
        name: "십자가 (Crucifix)",
        category: "방어 / 안전",
        t1: "Tier 1: 목조 십자가 (저지 반경 3m / 사용 횟수 1회)",
        t2: "Tier 2: 철제 십자가 (저지 반경 4m / 사용 횟수 2회)",
        t3: "Tier 3: 성스러운 황금 십자가 (저지 반경 5m / 2회 사용 & 저주받은 사냥 저지)",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 티어(Tier)별 상세 스펙</div>
            <div style="overflow-x: auto; margin-bottom: 12px;">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.88rem; color: #d4d4d8; text-align: left;">
                    <thead>
                        <tr style="border-bottom: 1.5px solid var(--accent-vibrant); color: var(--accent-light);">
                            <th style="padding: 6px 8px;">구분</th>
                            <th style="padding: 6px 8px;">1티어 (Tier I)</th>
                            <th style="padding: 6px 8px;">2티어 (Tier II)</th>
                            <th style="padding: 6px 8px;">3티어 (Tier III)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">형태</td>
                            <td style="padding: 6px 8px;">작은 나무 십자가</td>
                            <td style="padding: 6px 8px;">단단한 철제 십자가</td>
                            <td style="padding: 6px 8px;">성유물 황금 십자가</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">해금 / 가격</td>
                            <td style="padding: 6px 8px;">기본 / $30</td>
                            <td style="padding: 6px 8px;">Lv 41 / $30</td>
                            <td style="padding: 6px 8px;">Lv 90 / $30</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">방어 반경</td>
                            <td style="padding: 6px 8px;">3m (데몬 4.5m)</td>
                            <td style="padding: 6px 8px;">4m (데몬 6.0m)</td>
                            <td style="padding: 6px 8px;">5m (데몬 7.5m)</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">사용 횟수</td>
                            <td style="padding: 6px 8px;">1회 (즉시 파괴)</td>
                            <td style="padding: 6px 8px;">2회 (1회 소모 후 불탐)</td>
                            <td style="padding: 6px 8px;">2회 (저주 사냥 1회 차단)</td>
                        </tr>
                        <tr>
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">핵심 특징</td>
                            <td style="padding: 6px 8px;">바닥 설치 또는 손에 들기</td>
                            <td style="padding: 6px 8px;">가장 널리 쓰이는 표준 방어구</td>
                            <td style="padding: 6px 8px;">타로/위자보드로 인한 저주 사냥도 1회 차단</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="dict-section-title">2. 사용법 및 작동 원리 (Usage)</div>
            <p class="dict-text">
                • <strong>사냥 스폰 지점 차단:</strong> 이미 시작된 사냥을 막는 것이 아니라, <strong>유령이 사냥을 시작하려는 스폰 지점이 십자가 반경 안에 있을 때 사냥을 불태워 취소</strong>시킵니다.<br>
                • <strong>손에 들고 있어도 작동:</strong> 바닥에 F키로 설치해 두어도 되고, 손에 쥐고 있어도 플레이어 주변 반경으로 정상 작동합니다.
            </p>
            <div class="dict-section-title">3. 팁 및 노하우 (Tips)</div>
            <p class="dict-text">
                • <strong>데몬 특성:</strong> 데몬은 십자가 유효 반경이 <strong>50% 더 넓게 적용</strong>되어 방 전체를 커버하기 쉽습니다.
            </p>
        `
    },
    {
        name: "정화향초 (Incense)",
        category: "방어 / 안전 / 은신",
        t1: "Tier 1: 기본 향초 (방어 반경 3m / 연소 5초 / 유령 실명 6초)",
        t2: "Tier 2: 정화 향 스틱 (방어 반경 4m / 연소 6초 / 유령 감속 디버프)",
        t3: "Tier 3: 훈증용 연막 향초 (방어 반경 5m / 연소 7초 / 유령 5초간 제자리 정지)",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 티어(Tier)별 상세 스펙</div>
            <div style="overflow-x: auto; margin-bottom: 12px;">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.88rem; color: #d4d4d8; text-align: left;">
                    <thead>
                        <tr style="border-bottom: 1.5px solid var(--accent-vibrant); color: var(--accent-light);">
                            <th style="padding: 6px 8px;">구분</th>
                            <th style="padding: 6px 8px;">1티어 (Tier I)</th>
                            <th style="padding: 6px 8px;">2티어 (Tier II)</th>
                            <th style="padding: 6px 8px;">3티어 (Tier III)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">형태</td>
                            <td style="padding: 6px 8px;">말린 약초 묶음</td>
                            <td style="padding: 6px 8px;">인센스 스틱 & 홀더</td>
                            <td style="padding: 6px 8px;">황동 훈증 연막 향로</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">해금 / 가격</td>
                            <td style="padding: 6px 8px;">기본 / $15</td>
                            <td style="padding: 6px 8px;">Lv 42 / $15</td>
                            <td style="padding: 6px 8px;">Lv 85 / $15</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">유효 반경 / 연소</td>
                            <td style="padding: 6px 8px;">3m / 5초</td>
                            <td style="padding: 6px 8px;">4m / 6초</td>
                            <td style="padding: 6px 8px;">5m / 7초</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">헌팅 저지 효과</td>
                            <td style="padding: 6px 8px;">유령 6초간 실명 (방황)</td>
                            <td style="padding: 6px 8px;">유령 실명 + 이동속도 감속</td>
                            <td style="padding: 6px 8px;">유령 실명 + <strong>5초간 제자리 정지</strong></td>
                        </tr>
                        <tr>
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">사냥 봉인 시간</td>
                            <td style="padding: 6px 8px;">일반 90초 / 스피릿 180초 / 데몬 60초</td>
                            <td style="padding: 6px 8px;">동일</td>
                            <td style="padding: 6px 8px;">동일</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="dict-section-title">2. 사용법 및 작동 원리 (Usage)</div>
            <p class="dict-text">
                • <strong>점화 필요:</strong> 라이터나 성냥 등 점화 도구를 소지한 상태에서 <strong>F키</strong>를 눌러 태웁니다.<br>
                • <strong>사냥 생존:</strong> 사냥 중 다가오는 유령 근처에서 피우면 유령이 앞을 보지 못하고 방황하므로 안전하게 은신처로 이탈할 수 있습니다.
            </p>
        `
    },
    {
        name: "양초 (Firelight)",
        category: "정신력 보존 / 조명",
        t1: "Tier 1: 일반 양초 (지속 3분 / 정신력 감소율 33% 억제)",
        t2: "Tier 2: 강철 랜턴 양초 (지속 5분 / 정신력 감소율 50% 억제 / 방풍)",
        t3: "Tier 3: 성스러운 등롱 (영구 점등 / 정신력 감소율 66% 억제 & 소폭 회복)",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 티어(Tier)별 상세 스펙</div>
            <div style="overflow-x: auto; margin-bottom: 12px;">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.88rem; color: #d4d4d8; text-align: left;">
                    <thead>
                        <tr style="border-bottom: 1.5px solid var(--accent-vibrant); color: var(--accent-light);">
                            <th style="padding: 6px 8px;">구분</th>
                            <th style="padding: 6px 8px;">1티어 (Tier I)</th>
                            <th style="padding: 6px 8px;">2티어 (Tier II)</th>
                            <th style="padding: 6px 8px;">3티어 (Tier III)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">형태</td>
                            <td style="padding: 6px 8px;">흰색 파라핀 양초</td>
                            <td style="padding: 6px 8px;">철제 유리 랜턴</td>
                            <td style="padding: 6px 8px;">보라색 성스러운 등롱</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">해금 / 가격</td>
                            <td style="padding: 6px 8px;">기본 / $15</td>
                            <td style="padding: 6px 8px;">Lv 47 / $15</td>
                            <td style="padding: 6px 8px;">Lv 79 / $15</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">연소 시간</td>
                            <td style="padding: 6px 8px;">3분 (녹아내림)</td>
                            <td style="padding: 6px 8px;">5분</td>
                            <td style="padding: 6px 8px;">무제한 (영구 지속)</td>
                        </tr>
                        <tr>
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">정신력 감소 억제</td>
                            <td style="padding: 6px 8px;">33% 감소율 저하</td>
                            <td style="padding: 6px 8px;">50% 감소율 저하</td>
                            <td style="padding: 6px 8px;">66% 감소율 저하 + 2m 내 소폭 회복</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="dict-section-title">2. 사용법 및 작동 원리 (Usage)</div>
            <p class="dict-text">
                • <strong>정신력 방어:</strong> 불이 켜진 양초를 들고 있으면 어두운 곳에서도 정신력이 거의 깎이지 않습니다.<br>
                • <strong>원령(Onryo) 테스트:</strong> 원령은 양초 불빛이 십자가 역할을 수행하며, <strong>불을 3번째 끌 때 100% 확률로 강제 사냥</strong>을 시작합니다.
            </p>
        `
    },
    {
        name: "라이터 (Igniter)",
        category: "도구 / 점화 도구",
        t1: "Tier 1: 성냥갑 (사용 횟수 10회 / 바람에 꺼짐)",
        t2: "Tier 2: 지포 라이터 (지속 5분 / 방풍 방수)",
        t3: "Tier 3: 터보 토치 라이터 (지속 10분 / 즉각 점화 & 방풍)",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 티어(Tier)별 상세 스펙</div>
            <div style="overflow-x: auto; margin-bottom: 12px;">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.88rem; color: #d4d4d8; text-align: left;">
                    <thead>
                        <tr style="border-bottom: 1.5px solid var(--accent-vibrant); color: var(--accent-light);">
                            <th style="padding: 6px 8px;">구분</th>
                            <th style="padding: 6px 8px;">1티어 (Tier I)</th>
                            <th style="padding: 6px 8px;">2티어 (Tier II)</th>
                            <th style="padding: 6px 8px;">3티어 (Tier III)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">형태</td>
                            <td style="padding: 6px 8px;">종이 성냥갑</td>
                            <td style="padding: 6px 8px;">황동 클래식 라이터</td>
                            <td style="padding: 6px 8px;">고화력 터보 가스 토치</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">해금 / 가격</td>
                            <td style="padding: 6px 8px;">기본 / $10</td>
                            <td style="padding: 6px 8px;">Lv 12 / $10</td>
                            <td style="padding: 6px 8px;">Lv 57 / $10</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">지속 시간</td>
                            <td style="padding: 6px 8px;">개당 10초 (총 10개비)</td>
                            <td style="padding: 6px 8px;">5분 지속</td>
                            <td style="padding: 6px 8px;">10분 지속</td>
                        </tr>
                        <tr>
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">핵심 특징</td>
                            <td style="padding: 6px 8px;">달리거나 던지면 즉시 꺼짐</td>
                            <td style="padding: 6px 8px;">바닥에 던져도 불 유지</td>
                            <td style="padding: 6px 8px;">강풍/비 날씨에도 꺼지지 않음</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="dict-section-title">2. 사용법 및 작동 원리 (Usage)</div>
            <p class="dict-text">
                • 정화향초, 양초, 소환진 촛대, 캠프파이어 등을 켤 때 사용되는 필수 도구입니다.
            </p>
        `
    },
    {
        name: "소금 (Salt)",
        category: "증거 보조 / 동선 추적",
        t1: "Tier 1: 식탁용 소금통 (총 2회 살포 / 일반 소금 더미)",
        t2: "Tier 2: 목제 소금 쉐이커 (총 3회 살포 / 넓은 면적)",
        t3: "Tier 3: 핑크 히말라야 록솔트 (총 3회 살포 / 유령 둔화 슬로우 효과)",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 티어(Tier)별 상세 스펙</div>
            <div style="overflow-x: auto; margin-bottom: 12px;">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.88rem; color: #d4d4d8; text-align: left;">
                    <thead>
                        <tr style="border-bottom: 1.5px solid var(--accent-vibrant); color: var(--accent-light);">
                            <th style="padding: 6px 8px;">구분</th>
                            <th style="padding: 6px 8px;">1티어 (Tier I)</th>
                            <th style="padding: 6px 8px;">2티어 (Tier II)</th>
                            <th style="padding: 6px 8px;">3티어 (Tier III)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">형태</td>
                            <td style="padding: 6px 8px;">식당 소금통</td>
                            <td style="padding: 6px 8px;">목제 그라인더</td>
                            <td style="padding: 6px 8px;">유리병 핑크 암염</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">해금 / 가격</td>
                            <td style="padding: 6px 8px;">기본 / $15</td>
                            <td style="padding: 6px 8px;">Lv 9 / $15</td>
                            <td style="padding: 6px 8px;">Lv 43 / $15</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">사용 횟수</td>
                            <td style="padding: 6px 8px;">캔당 2회 (총 6회)</td>
                            <td style="padding: 6px 8px;">캔당 3회 (총 9회)</td>
                            <td style="padding: 6px 8px;">캔당 3회 (총 9회)</td>
                        </tr>
                        <tr>
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">핵심 특징</td>
                            <td style="padding: 6px 8px;">단일 원형 더미 살포</td>
                            <td style="padding: 6px 8px;">가로 선형 살포 (문 통과 차단)</td>
                            <td style="padding: 6px 8px;"><strong>사냥 중 밟을 시 유령 2초간 둔화</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="dict-section-title">2. 사용법 및 작동 원리 (Usage)</div>
            <p class="dict-text">
                • <strong>발자국 추적:</strong> 유령이 소금을 밟으면 발자국 소리가 나며 흐트러지고, UV 라이트로 보면 야광 발자국이 남습니다.<br>
                • <strong>레이스(Wraith) 판정:</strong> 레이스는 공중에 떠다니므로 <strong>소금을 절대 밟지 않습니다.</strong>
            </p>
        `
    },
    {
        name: "진정제 (Sanity Medication)",
        category: "생존 / 정신력 회복",
        t1: "Tier 1: 수면 진정제 (회복량 40% / 30초에 걸쳐 서서히 회복)",
        t2: "Tier 2: 즉효성 알약 (회복량 50% / 20초에 걸쳐 회복)",
        t3: "Tier 3: 아드레날린 주사기 (회복량 60% / 10초 회복 & 10초간 무한 달리기)",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 티어(Tier)별 상세 스펙</div>
            <div style="overflow-x: auto; margin-bottom: 12px;">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.88rem; color: #d4d4d8; text-align: left;">
                    <thead>
                        <tr style="border-bottom: 1.5px solid var(--accent-vibrant); color: var(--accent-light);">
                            <th style="padding: 6px 8px;">구분</th>
                            <th style="padding: 6px 8px;">1티어 (Tier I)</th>
                            <th style="padding: 6px 8px;">2티어 (Tier II)</th>
                            <th style="padding: 6px 8px;">3티어 (Tier III)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">형태</td>
                            <td style="padding: 6px 8px;">갈색 시럽 약병</td>
                            <td style="padding: 6px 8px;">플라스틱 캡슐 알약통</td>
                            <td style="padding: 6px 8px;">자동 주사기 (에피펜)</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">해금 / 가격</td>
                            <td style="padding: 6px 8px;">기본 / $20</td>
                            <td style="padding: 6px 8px;">Lv 39 / $20</td>
                            <td style="padding: 6px 8px;">Lv 77 / $20</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">정신력 회복량</td>
                            <td style="padding: 6px 8px;">+40% (30초 소요)</td>
                            <td style="padding: 6px 8px;">+50% (20초 소요)</td>
                            <td style="padding: 6px 8px;">+60% (10초 소요)</td>
                        </tr>
                        <tr>
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">특수 효과</td>
                            <td style="padding: 6px 8px;">없음</td>
                            <td style="padding: 6px 8px;">없음</td>
                            <td style="padding: 6px 8px;"><strong>10초 동안 스태미나 무제한 질주</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="dict-section-title">2. 사용법 및 작동 원리 (Usage)</div>
            <p class="dict-text">
                • 손에 쥐고 우클릭을 길게 눌러 복용하며, 깎인 정신력을 즉시 또는 서서히 회복시켜 사냥 위험을 방지합니다.
            </p>
        `
    },
    {
        name: "포토 카메라 (Photo Camera)",
        category: "정보 수집 / 보상 획득",
        t1: "Tier 1: 일회용 필름 카메라 (촬영 딜레이 3초 / 노이즈 심함)",
        t2: "Tier 2: 클래식 DSLR 카메라 (촬영 딜레이 1.5초 / 선명한 화면)",
        t3: "Tier 3: 플래그십 전문가용 카메라 (촬영 딜레이 0.5초 / 고속 연사)",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 티어(Tier)별 상세 스펙</div>
            <div style="overflow-x: auto; margin-bottom: 12px;">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.88rem; color: #d4d4d8; text-align: left;">
                    <thead>
                        <tr style="border-bottom: 1.5px solid var(--accent-vibrant); color: var(--accent-light);">
                            <th style="padding: 6px 8px;">구분</th>
                            <th style="padding: 6px 8px;">1티어 (Tier I)</th>
                            <th style="padding: 6px 8px;">2티어 (Tier II)</th>
                            <th style="padding: 6px 8px;">3티어 (Tier III)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">형태</td>
                            <td style="padding: 6px 8px;">일회용 필름 카메라</td>
                            <td style="padding: 6px 8px;">중형 DSLR 카메라</td>
                            <td style="padding: 6px 8px;">고급 미러리스 카메라</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">해금 / 가격</td>
                            <td style="padding: 6px 8px;">기본 / $40</td>
                            <td style="padding: 6px 8px;">Lv 10 / $40</td>
                            <td style="padding: 6px 8px;">Lv 70 / $40</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">촬영 딜레이</td>
                            <td style="padding: 6px 8px;">3.0초 (매우 답답함)</td>
                            <td style="padding: 6px 8px;">1.5초</td>
                            <td style="padding: 6px 8px;">0.5초 (초고속 연사)</td>
                        </tr>
                        <tr>
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">핵심 특징</td>
                            <td style="padding: 6px 8px;">유령 간섭 시 화면 먹통</td>
                            <td style="padding: 6px 8px;">가장 표준적인 사진 촬영기</td>
                            <td style="padding: 6px 8px;">사냥 중에도 노이즈 없이 유령 포착</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="dict-section-title">2. 사용법 및 작동 원리 (Usage)</div>
            <p class="dict-text">
                • 유령 본체, 뼈(Bone), 저주받은 물건, 손자국, 발자국, 불탄 십자가 등을 촬영해 앨범을 채우고 추가 보상을 받습니다.
            </p>
        `
    },
    {
        name: "지향성 마이크 (Parabolic Mic)",
        category: "정보 수집 / 대형 맵 탐색",
        t1: "Tier 1: 수동 안테나형 마이크 (감지 반경 20m / 좁은 각도)",
        t2: "Tier 2: 디지털 파라볼릭 마이크 (감지 반경 30m / 수치 디스플레이)",
        t3: "Tier 3: 음파 소나 마이크 (감지 반경 30m / 벽 너머 음원 시각화)",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 티어(Tier)별 상세 스펙</div>
            <div style="overflow-x: auto; margin-bottom: 12px;">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.88rem; color: #d4d4d8; text-align: left;">
                    <thead>
                        <tr style="border-bottom: 1.5px solid var(--accent-vibrant); color: var(--accent-light);">
                            <th style="padding: 6px 8px;">구분</th>
                            <th style="padding: 6px 8px;">1티어 (Tier I)</th>
                            <th style="padding: 6px 8px;">2티어 (Tier II)</th>
                            <th style="padding: 6px 8px;">3티어 (Tier III)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">해금 / 가격</td>
                            <td style="padding: 6px 8px;">기본 / $50</td>
                            <td style="padding: 6px 8px;">Lv 31 / $50</td>
                            <td style="padding: 6px 8px;">Lv 72 / $50</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">감지 반경 / 각도</td>
                            <td style="padding: 6px 8px;">20m / 45도</td>
                            <td style="padding: 6px 8px;">30m / 45도</td>
                            <td style="padding: 6px 8px;">30m / 45도 (화면 시각화)</td>
                        </tr>
                        <tr>
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">핵심 특징</td>
                            <td style="padding: 6px 8px;">단순 아날로그 수치 표시</td>
                            <td style="padding: 6px 8px;">소리 크기 실시간 수치화</td>
                            <td style="padding: 6px 8px;"><strong>벽 너머 소리 위치를 화면에 점으로 표시</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="dict-section-title">2. 사용법 및 작동 원리 (Usage)</div>
            <p class="dict-text">
                • 대형 맵(교도소, 고등학교, 써니메도우)에서 먼 거리의 유령 발소리나 상호작용 소리를 추적할 때 최고의 위력을 발휘합니다.<br>
                • <strong>밴시(Banshee) 고유 비명:</strong> 33% 확률로 밴시 특유의 날카로운 울음소리를 포착할 수 있습니다.
            </p>
        `
    },
    {
        name: "모션 센서 (Motion Sensor)",
        category: "정보 수집 / 동선 감지",
        t1: "Tier 1: 기본 스팟 센서 (단일 직선 빔 감지)",
        t2: "Tier 2: 원형/선형 변환 센서 (원형 및 부채꼴 감지)",
        t3: "Tier 3: 광역 스캔 센서 (트럭 지도에 유령 이동 경로 표시)",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 티어(Tier)별 상세 스펙</div>
            <div style="overflow-x: auto; margin-bottom: 12px;">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.88rem; color: #d4d4d8; text-align: left;">
                    <thead>
                        <tr style="border-bottom: 1.5px solid var(--accent-vibrant); color: var(--accent-light);">
                            <th style="padding: 6px 8px;">구분</th>
                            <th style="padding: 6px 8px;">1티어 (Tier I)</th>
                            <th style="padding: 6px 8px;">2티어 (Tier II)</th>
                            <th style="padding: 6px 8px;">3티어 (Tier III)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">해금 / 가격</td>
                            <td style="padding: 6px 8px;">기본 / $45</td>
                            <td style="padding: 6px 8px;">Lv 45 / $45</td>
                            <td style="padding: 6px 8px;">Lv 74 / $45</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">감지 형태</td>
                            <td style="padding: 6px 8px;">직선 레이저 라인</td>
                            <td style="padding: 6px 8px;">원형 / 반원형 전환</td>
                            <td style="padding: 6px 8px;">원형 / 선형 + 경로 추적</td>
                        </tr>
                        <tr>
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">핵심 특징</td>
                            <td style="padding: 6px 8px;">벽면에 부착하여 통과 감지</td>
                            <td style="padding: 6px 8px;">감지 범위 모드 변경 가능</td>
                            <td style="padding: 6px 8px;">트럭 맵 화면에 유령 이동 궤적 출력</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="dict-section-title">2. 사용법 및 작동 원리 (Usage)</div>
            <p class="dict-text">
                • 벽면에 설치하면 유령이나 플레이어가 지나갈 때 빛과 소리로 반응하며, 트럭 맵 모니터에 녹색으로 점등됩니다.
            </p>
        `
    },
    {
        name: "사운드 센서 (Sound Sensor)",
        category: "정보 수집 / 소리 감지",
        t1: "Tier 1: 단일 반경 센서 (원형 2m / 4m / 8m)",
        t2: "Tier 2: 다중 형태 센서 (원형, 부채꼴, 직선 모드)",
        t3: "Tier 3: 층간 분리 스마트 센서 (소리 크기 dB 수치화)",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 티어(Tier)별 상세 스펙</div>
            <div style="overflow-x: auto; margin-bottom: 12px;">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.88rem; color: #d4d4d8; text-align: left;">
                    <thead>
                        <tr style="border-bottom: 1.5px solid var(--accent-vibrant); color: var(--accent-light);">
                            <th style="padding: 6px 8px;">구분</th>
                            <th style="padding: 6px 8px;">1티어 (Tier I)</th>
                            <th style="padding: 6px 8px;">2티어 (Tier II)</th>
                            <th style="padding: 6px 8px;">3티어 (Tier III)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">해금 / 가격</td>
                            <td style="padding: 6px 8px;">기본 / $25</td>
                            <td style="padding: 6px 8px;">Lv 32 / $25</td>
                            <td style="padding: 6px 8px;">Lv 58 / $25</td>
                        </tr>
                        <tr>
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">핵심 특징</td>
                            <td style="padding: 6px 8px;">원형 반경 소리 감지</td>
                            <td style="padding: 6px 8px;">부채꼴 및 복도형 감지 지원</td>
                            <td style="padding: 6px 8px;">트럭에서 소리 종류 및 크기 세부 분석</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="dict-section-title">2. 사용법 및 작동 원리 (Usage)</div>
            <p class="dict-text">
                • 설치된 방 주변의 모든 소리(발소리, 문 소리, 물건 소리)를 감지하여 트럭 모니터에 전달합니다.
            </p>
        `
    },
    {
        name: "사운드 레코더 (Sound Recorder)",
        category: "정보 수집 / 음성 녹음",
        t1: "Tier 1: 아날로그 테이프 레코더 (녹음 시간 짧음 / 노이즈)",
        t2: "Tier 2: 디지털 보이스 레코더 (선명한 음질 / 상호작용 분석)",
        t3: "Tier 3: 전문가용 고해상도 오디오 레코더 (주파수 분석 디스플레이)",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 티어(Tier)별 상세 스펙</div>
            <div style="overflow-x: auto; margin-bottom: 12px;">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.88rem; color: #d4d4d8; text-align: left;">
                    <thead>
                        <tr style="border-bottom: 1.5px solid var(--accent-vibrant); color: var(--accent-light);">
                            <th style="padding: 6px 8px;">구분</th>
                            <th style="padding: 6px 8px;">1티어 (Tier I)</th>
                            <th style="padding: 6px 8px;">2티어 (Tier II)</th>
                            <th style="padding: 6px 8px;">3티어 (Tier III)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">해금 / 가격</td>
                            <td style="padding: 6px 8px;">기본 / $40</td>
                            <td style="padding: 6px 8px;">Lv 28 / $40</td>
                            <td style="padding: 6px 8px;">Lv 68 / $40</td>
                        </tr>
                        <tr>
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">핵심 특징</td>
                            <td style="padding: 6px 8px;">기본 소리 녹음 및 재생</td>
                            <td style="padding: 6px 8px;">노이즈 필터링 및 깨끗한 음원</td>
                            <td style="padding: 6px 8px;">초자연적 EVP 소리 자동 검출</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="dict-section-title">2. 사용법 및 작동 원리 (Usage)</div>
            <p class="dict-text">
                • 방 안의 초자연적 음성(EVP)이나 유령의 기괴한 소리를 녹음하여 확인하는 보조 장비입니다.
            </p>
        `
    },
    {
        name: "헤드 기어 (Head Gear)",
        category: "생존 / 편의성 장비",
        t1: "Tier 1: 헤드 마운트 카메라 (트럭 화면 공유 / 전자기기 판정)",
        t2: "Tier 2: 헤드라이트 (손을 쓰지 않는 이마 전등 / 전자기기)",
        t3: "Tier 3: 야간 투시경 (NVG) (전체 화면 야간투시 / 헌팅 시 안전)",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 티어(Tier)별 상세 스펙</div>
            <div style="overflow-x: auto; margin-bottom: 12px;">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.88rem; color: #d4d4d8; text-align: left;">
                    <thead>
                        <tr style="border-bottom: 1.5px solid var(--accent-vibrant); color: var(--accent-light);">
                            <th style="padding: 6px 8px;">구분</th>
                            <th style="padding: 6px 8px;">1티어 (Tier I)</th>
                            <th style="padding: 6px 8px;">2티어 (Tier II)</th>
                            <th style="padding: 6px 8px;">3티어 (Tier III)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">형태</td>
                            <td style="padding: 6px 8px;">헤드 마운트 캠코더</td>
                            <td style="padding: 6px 8px;">이마 헤드라이트</td>
                            <td style="padding: 6px 8px;">밀리터리 야간 투시 고글</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">해금 / 가격</td>
                            <td style="padding: 6px 8px;">기본 / $60</td>
                            <td style="padding: 6px 8px;">Lv 30 / $60</td>
                            <td style="padding: 6px 8px;">Lv 82 / $60</td>
                        </tr>
                        <tr>
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">핵심 특징</td>
                            <td style="padding: 6px 8px;">트럭 팀원에게 시야 공유</td>
                            <td style="padding: 6px 8px;">손에 장비를 들고도 정면 조명 확보</td>
                            <td style="padding: 6px 8px;"><strong>손전등 없이도 온전한 시야 확보 (최고의 편의성)</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="dict-section-title">2. 사용법 및 작동 원리 (Usage)</div>
            <p class="dict-text">
                • 트럭에서 <strong>T키를 길게 눌러</strong> 머리에 착용하며, 착용 후 T키를 길게 눌러 전원을 켜고 끌 수 있습니다.<br>
                • <strong>사냥 시 주의:</strong> 1티어와 2티어는 헌팅 중 켜져 있으면 유령이 위치를 감지하므로 길게 눌러 꺼야 합니다.
            </p>
        `
    },
    {
        name: "삼각대 (Tripod)",
        category: "보조 / 카메라 거치",
        t1: "Tier 1: 구형 목제 삼각대 (수동 각도 조절 / 유령이 넘어뜨림)",
        t2: "Tier 2: 경량 알루미늄 삼각대 (안정적인 고정 / 넘어짐 확률 감소)",
        t3: "Tier 3: 전동 모터 삼각대 (트럭 모니터에서 마우스로 카메라 회전 조작)",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 티어(Tier)별 상세 스펙</div>
            <div style="overflow-x: auto; margin-bottom: 12px;">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.88rem; color: #d4d4d8; text-align: left;">
                    <thead>
                        <tr style="border-bottom: 1.5px solid var(--accent-vibrant); color: var(--accent-light);">
                            <th style="padding: 6px 8px;">구분</th>
                            <th style="padding: 6px 8px;">1티어 (Tier I)</th>
                            <th style="padding: 6px 8px;">2티어 (Tier II)</th>
                            <th style="padding: 6px 8px;">3티어 (Tier III)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">해금 / 가격</td>
                            <td style="padding: 6px 8px;">기본 / $25</td>
                            <td style="padding: 6px 8px;">Lv 34 / $25</td>
                            <td style="padding: 6px 8px;">Lv 62 / $25</td>
                        </tr>
                        <tr>
                            <td style="padding: 6px 8px; font-weight: 700; color: #fff;">핵심 특징</td>
                            <td style="padding: 6px 8px;">카메라 거치 및 설치</td>
                            <td style="padding: 6px 8px;">넘어짐 방지 내구성 향상</td>
                            <td style="padding: 6px 8px;"><strong>트럭에서 좌우 회전 원격 조종 가능</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="dict-section-title">2. 사용법 및 작동 원리 (Usage)</div>
            <p class="dict-text">
                • 비디오 카메라를 삼각대 위에 얹은 상태로 들고 다닐 수 있으며, 방 안에 원하는 각도로 세워두고 트럭에서 편안하게 감시할 수 있습니다.
            </p>
        `
    }
];
