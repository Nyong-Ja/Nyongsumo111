// ==========================================
// 📢 Kinetic Games 공식 최신 뉴스 및 패치 데이터
// (공식 원문 링크: https://kineticgames.co.uk/news)
// ==========================================

const NEWS_DATA = [
    {
        category: "Phasmophobia",
        icon: "👻",
        date: "2026. 8. 25.",
        title: "파스모포비아 v0.19.0.0 - 플레이 개선 업데이트 파트2",
        desc: "감옥, 고등학교 등 신규 제한구역 맵 3종 추가 및 비디오·사진 카메라 중복 증거 표시 기능 도입",
        img: "https://kineticgames.co.uk/assets/images/news-banner-qol-part2.webp",
        url: "https://kineticgames.co.uk/news/phasmophobia-v01900-quality-of-life-part-2",
        detailedHtml: `
            <div class="news-section-box">
                <div class="news-sub-title">1. 주요 변경 요약 (OVERVIEW)</div>
                <p>파스모포비아 v0.19.0.0 '삶의 질 2부' 업데이트로, 신규 제한구역 맵 추가, 장비 중복 증거 표시 도입, 저널 및 커스텀 난이도 편의성이 대폭 개선되었습니다.</p>
            </div>
            <div class="news-section-box">
                <div class="news-sub-title">2. 상세 업데이트 내역 (CHANGELOG)</div>
                <p><strong>&lt;신규&gt;</strong></p>
                <ul style="padding-left: 20px; margin-bottom: 10px;">
                    <li>감옥, 브라운스톤 고등학교, 포인트 호프에 새롭게 제한구역을 추가했습니다.</li>
                    <li>비디오 카메라, 사진기 그리고 녹음기가 이제 중복 증거를 표시합니다.
                        <ul style="padding-left: 20px; margin-top: 4px;">
                            <li>1티어 사진기에는 노란색 LED 불이 들어옵니다.</li>
                            <li>2티어 및 3티어 사진기와 모든 티어의 비디오 카메라에는, 일반적인 굵은 흰색 문자 대신 희미한 문자가 표시됩니다.</li>
                            <li>1티어 녹음기는 음량 표시기의 밝기가 낮아집니다.</li>
                            <li>2티어 및 3티어 녹음기는 희미한 음파가 표시됩니다.</li>
                        </ul>
                    </li>
                    <li>저널에 이제 다른 유저가 고른 증거와 유령 종류 선택이 표시됩니다.</li>
                    <li>저널의 열쇠 섹션이 우리가 발견한 아이템으로 대체되며, 이 새로운 섹션에서는 열쇠, 뼈 그리고 시즌 이벤트 수집품이 표시됩니다.</li>
                    <li>커스텀 난이도에서 유령 유형을 선택할 수 있는 기능이 추가되며 배수는 0으로 설정됩니다.</li>
                    <li>커스터마이즈 상점에서 레거시 배지 섹션을 추가하여 언제든지 배지를 편집할 수 있습니다 (레거시 배지가 없는 플레이어는 이 옵션을 볼 수 없음).</li>
                    <li>튜토리얼 화이트보드에 '꾹 눌러서 사용' 포스트잇을 추가했습니다.</li>
                    <li>죽은 플레이어들과 죽은 플레이어들의 시신이 이제 죽은 것처럼 보입니다.</li>
                    <li>샤워기와 퓨즈 박스 상호작용에 신규 고유 비디오 증거 텍스트를 추가했습니다.</li>
                    <li>유령의 이름이 남성인지 여성인지 보여주는 아이콘을 추가했습니다.</li>
                    <li>증거 페이지에서 플레이어가 유령 종류를 고르면 해당 유령이 보여주는 증거를 강조하여 표시합니다.</li>
                </ul>
                <p><strong>&lt;변경&gt;</strong></p>
                <ul style="padding-left: 20px; margin-bottom: 10px;">
                    <li>사진기와 비디오 카메라의 화면이 이제 벽을 뚫고 보여주지 않습니다.</li>
                    <li>말할 때, ID 카드의 스피커 아이콘이 이제 로컬 플레이어를 포함하여 모든 플레이어에게 작동합니다.</li>
                    <li>VR 캐릭터 리깅에 개선이 이루어져, 더 정확하고 반응하기 좋은 움직임이 가능해집니다.</li>
                    <li>이제 플레이어는 텍스트 음성 인식 모드를 사용할 때 들고 있지 않은 주파수 측정기와 상호작용할 수 있습니다.</li>
                    <li>0배율 커스텀 난이도는 업적이나 전단지 이벤트 진행에 인정되지 않습니다.</li>
                    <li>1티어 양초를 들고 있는 상태에서 사용 버튼을 눌렀을 때, 애니메이션이 끝날 때까지 기다리지 않고 다른 양초를 사용할 수 있습니다.</li>
                    <li>플레이어가 죽었을 때 애니메이션 종료 시점이 아닌 죽는 즉시 음성 채팅이 끊어집니다.</li>
                    <li>브라운스톤 고등학교와 감옥에서 트럭이 정문에 더 가까워졌습니다.</li>
                </ul>
                <p><strong>&lt;일반 수정&gt;</strong></p>
                <ul style="padding-left: 20px; margin-bottom: 10px;">
                    <li>연결이 끊기는 현상을 줄이기 위해 네트워크 안정성에 개선을 더했습니다.</li>
                    <li>유령이 올바르게 추측되었음에도 불구하고, 통계 화면이 열릴 때마다 '유령 식별 실패' 항목 횟수가 증가하는 문제를 수정했습니다.</li>
                    <li>방장이 로비를 떠나면 플레이어가 게임을 시작하지 못하던 문제를 수정했습니다 (방장의 ID 카드는 여전히 보임).</li>
                    <li>조사를 마친 후 플레이어 사진이 ID 카드에서 사라지는 문제를 수정했습니다.</li>
                    <li>플레이어에게 도전 과제가 있는 맵의 "테스트 레벨"을 주던 문제를 수정했습니다.</li>
                </ul>
                <p><strong>&lt;환경 수정&gt;</strong></p>
                <ul style="padding-left: 20px; margin-bottom: 10px;">
                    <li>은신처 없음 설정이 되어있음에도 은신처가 열려있는 문제를 수정했습니다.</li>
                    <li>문 닫는 애니메이션이 끝난 후에도 문 닫는 소리가 오래 재생되던 문제를 수정했습니다 (플레이어들이 이 문제를 유레이의 증거로 오인하곤 했음).</li>
                    <li>블리즈데일 농가의 벽지가 앨런 웨이크의 파스모포비아 이벤트 문양으로 바뀌는 문제를 수정했습니다.</li>
                    <li>써니 메도우의 여성 주간 휴게실의 은신처를 수정했습니다.</li>
                    <li>포인트 호프의 종을 고정하는 프레임이 사라지는 문제를 수정했습니다 (PS5 전용).</li>
                    <li>붉은 유령 방 이벤트 중 퓨즈 박스가 꺼질 때 조명이 계속해서 붉은색으로 유지되는 문제를 수정했습니다.</li>
                    <li>윌로우 스트리트 13번지의 고정 TV VFX 관련 시각적 문제를 수정했습니다.</li>
                    <li>윌로우 스트리트 13번지의 지하 거실에 있는 커피 테이블에 물건이 끼이는 문제를 수정했습니다.</li>
                    <li>윌로우 스트리트 13번지에서 플레이어가 원숭이 손으로 '안전해지고 싶어' 소원을 빌었을 때 은신처가 동작하지 않던 문제를 수정했습니다.</li>
                    <li>십자가와 도트 프로젝터가 윌로우 스트리트 13번지의 러그와 체육관 매트 위에서 미끄러지는 문제를 수정했습니다.</li>
                    <li>윌로우 스트리트 13번지 외부 산책로와 잔디에서 잘못된 발걸음 소리가 발생하던 문제를 수정했습니다.</li>
                    <li>거울 반사가 제대로 나타나지 않던 문제를 수정했습니다.</li>
                    <li>감옥의 감시실에서 플레이어가 가구 위로 올라갈 수 있던 문제를 수정했습니다.</li>
                    <li>엣지필드 도로 42번지의 주황색 침실에서 장비가 침대 위에 놓일 수 있던 문제를 수정했습니다.</li>
                </ul>
                <p><strong>&lt;장비 수정&gt;</strong></p>
                <ul style="padding-left: 20px; margin-bottom: 10px;">
                    <li>열린 저널 앞에 헤드 기어가 나타나는 문제를 수정했습니다.</li>
                    <li>카드 덱에서 뽑았을 때 광대(The Fool) 타로 카드가 보이지 않는 문제를 수정했습니다.</li>
                    <li>3티어 정신력 회복 약을 여러 번 사용했을 때 스태미나 부스트가 제대로 초기화되지 않는 문제를 수정했습니다.</li>
                    <li>사진에 유령이 존재함에도 불구하고 유령이 감지되지 않던 문제를 수정했습니다.</li>
                    <li>우드윈드 캠프장과 메이플 롯지 캠프장 텐트에서 모션 센서가 비디오 카메라로 녹화되지 않던 문제를 수정했습니다.</li>
                    <li>외부에 있을 때나 음악 재생 중이거나 음악이 끝난 후에 뮤직 박스가 닫히지 않던 문제를 수정했습니다.</li>
                    <li>저널에서 한번 삭제했을 때 플레이어가 EMF 5단계 증거 사진을 찍지 못하던 문제를 수정했습니다.</li>
                    <li>3티어 녹음기가 녹음할 때 잘못된 애니메이션이 나오는 문제를 수정했습니다.</li>
                    <li>유령이 삼각대에 있는 비디오 카메라와 상호작용한 후 카메라가 사라지는 문제를 수정했습니다.</li>
                    <li>윌로우 스트리트 13번지에 있는 아케이드 캐비닛 위에 작은 장비를 올려놓으면 사용할 수 없게 되는 문제를 수정했습니다.</li>
                    <li>선명도 설정이 1로 되어 있을 때 도트 녹화 시 시각적 문제를 일으키던 이슈를 수정했습니다.</li>
                    <li>장비가 오브젝트 아래에서 끼이는 문제를 해결했습니다.</li>
                    <li>1티어 또는 2티어 점화기의 불꽃이 꺼지면 떠오르는 문제를 수정했습니다.</li>
                    <li>방장이 아닌 플레이어가 삼각대에 연결된 비디오 카메라로 문을 조절할 수 있어서 문이 밀려나 다른 플레이어가 갇히는 문제를 수정했습니다.</li>
                    <li>매달린 남자(Hanged Man) 타로 카드를 뽑았을 때 카드가 죽은 플레이어와 함께 사망 공간으로 이동되어서 다른 플레이어가 죽은 플레이어의 위치를 볼 수 있던 문제를 수정했습니다 (이로 인해 다른 플레이어들은 더 이상 타로 카드를 사용할 수 없었음).</li>
                    <li>방장이 아닌 플레이어가 사냥하는 유령 소리를 녹음하지 못하던 문제를 수정했습니다.</li>
                    <li>폭우 시 1티어와 2티어 점화기가 꺼지지 않는 문제를 수정했습니다.</li>
                    <li>다른 점화기로 켜졌을 때 이미 불이 붙었음에도 불구하고 1티어 혹은 2티어 촛불이 켜지지 않은 것으로 보이던 문제를 수정했습니다.</li>
                    <li>1티어 사진기 사용 애니메이션 도중 손전등이 플레이어 손에 계속 들려 있던 문제를 수정했습니다.</li>
                </ul>
                <p><strong>&lt;플레이어 수정&gt;</strong></p>
                <ul style="padding-left: 20px; margin-bottom: 10px;">
                    <li>플레이어 캐릭터의 손이 카메라보다 느리게 움직여 시각적 렉과 떨림 현상이 발생하던 문제를 수정했습니다.</li>
                    <li>플레이어의 목소리가 방장 캐릭터의 성별로 재생되던 문제를 수정했습니다.</li>
                    <li>플레이어가 3티어 손전등을 들고 앉았을 때 팔꿈치가 튀어나오는 문제를 수정했습니다 (이 수정은 모든 티어의 손전등 위치도 개선함).</li>
                    <li>플레이어가 사용 애니메이션 중에 1티어 사진 카메라를 변경할 수 없던 문제를 수정했습니다.</li>
                    <li>예언자(Seer) ID 카드와 배지에 징조(Manifestation) 문자가 표시되던 문제를 수정했습니다.</li>
                    <li>위자 보드를 사용 중 음성 인식 모드를 변경하면 플레이어가 소프트 락 상태가 되어 움직일 수 없던 문제를 수정했습니다.</li>
                    <li>커스터마이즈 상점에서 다른 영역으로 이동해도 UI가 화면에 남는 문제를 수정했습니다.</li>
                    <li>커스터마이즈 상점에서 스웨터 색상 아이콘이 잘못 표시되던 문제를 수정했습니다.</li>
                    <li>다른 플레이어가 같은 설정으로 위자 보드를 사용할 경우, 텍스트 음성 인식으로 주파수 측정기를 사용하면서 플레이어가 움직일 수 있던 문제를 수정했습니다.</li>
                    <li>플레이어가 캐릭터와 모자를 바꿀 때 머리카락이 의상을 뚫고 나오는 문제를 수정했습니다.</li>
                    <li>플레이어가 죽은 상태에서 서 있지 못하게 만드는 물체 아래에 앉아 있었다면, 부활할 때 플레이어의 시야가 다른 플레이어와 분리되는 문제를 수정했습니다.</li>
                    <li>방장이 게임을 나가면서 플레이어의 팔을 옆에 두면 애니메이션이 초기화되는 문제를 수정했습니다.</li>
                    <li>커스터마이즈 상점에 존재하지 않는 일반 천문학자 카드가 표시되던 문제를 수정했습니다.</li>
                    <li>원숭이 손으로 다른 플레이어를 부활시켰을 때, 죽은 플레이어의 저널이 다른 플레이어에게 여전히 보이던 문제를 수정했습니다.</li>
                    <li>사망한 선수의 모자로 인해 머리카락이 잘리던 문제를 수정했습니다.</li>
                    <li>죽은 플레이어가 장비를 획득할 수 있어 남은 플레이어들이 장비를 쓰지 못하게 되던 문제를 수정했습니다.</li>
                </ul>
                <p><strong>&lt;VR 수정&gt;</strong></p>
                <ul style="padding-left: 20px; margin-bottom: 10px;">
                    <li>VR에서 문을 여는 것이 의도보다 어려웠던 문제를 수정했습니다.</li>
                    <li>플레이어가 문과 상호작용하려 할 때 VR 조준선이 잘못 표시되던 문제를 수정했습니다.</li>
                    <li>텐트 문을 잡을 때 손 애니메이션이 깨지던 문제를 수정했습니다.</li>
                    <li>삼각대를 든 플레이어가 다른 플레이어에게 렉을 발생시키던 문제를 수정했습니다.</li>
                    <li>카메라가 장착된 삼각대를 사용해 문을 열 때 멀티플레이어에서 컬링이 발생하던 문제를 수정했습니다.</li>
                    <li>마이크로폰의 헤드폰이 플레이어의 시야를 가리던 문제를 수정했습니다.</li>
                    <li>플레이어가 걷거나 아이템을 들고 있을 때 손이 움직이던 문제를 수정했습니다.</li>
                    <li>멀티플레이에서 플레이어 몸이 앉았을 때 떨리던 문제를 수정했습니다.</li>
                    <li>유령이 문을 열었을 때 플레이어가 문에 밀려나던 문제를 수정했습니다.</li>
                    <li>무전기를 들고 있을 때 텔레포트 이동이 불가능했던 문제를 수정했습니다.</li>
                </ul>
            </div>
            <div class="news-section-box" style="margin-top: 14px;">
                <div class="news-sub-title">3. 알려진 문제 (KNOWN ISSUES)</div>
                <ul style="padding-left: 20px; margin-top: 4px;">
                    <li>감옥 제한구역에서 입구는 유령 상호작용이 적습니다.</li>
                    <li>플레이어들은 브라운스톤 고등학교 6번 교실에서 의자에 걸릴 수도 있습니다.</li>
                    <li>1티어 사진 카메라가 사용 애니메이션 중에 전환되거나 떨어지면 캐릭터 애니메이션이 깨질 수 있습니다.</li>
                    <li>신규 제한구역 맵에서 특정 봉쇄 구조물에 놓였을 때 설치 가능한 장비가 분실되거나 회수할 수 없게 될 수 있습니다.</li>
                    <li>비디오 카메라로 촬영한 증거에 대한 번역문이 영어를 사용하지 않는 플레이어에게는 제대로 표시되지 않을 수 있습니다.</li>
                    <li>마우스를 올려두었을 때 유령 유형의 증거가 강조 표시된 상태가 저널이 닫혀 있어도 계속 유지됩니다 (다른 고스트 유형 위에 마우스를 올려 켜고 끄면 해결 가능).</li>
                    <li>FidelityFX Super Resolution 1.0을 활성화했을 때 저널의 가독성에 문제가 발생합니다.</li>
                    <li>브라운스톤 고등학교 제한구역의 은신처에서 뼈가 생성될 수 있습니다 (은신처가 잠겨 있다면 플레이어가 뼈에 접근할 수 없음).</li>
                    <li>플레이어가 윗층만 접근할 수 있는 감옥 제한구역의 방문자 보안실(Visitation Security Room)에서 퓨즈박스가 생성될 수 있습니다.</li>
                    <li>탱글우드, 넬의 식당, 써니 메도우 제한구역 혹은 써니 메도우에서 플레이할 때, 플레이어는 선택한 캐릭터 대신 아미르 켈리(Amir Kelly)로 생성될 수 있습니다.</li>
                    <li>멀티플레이에서 플레이어가 마이크로폰을 켜자마자 떨어뜨리면, 마이크를 다시 집어들 때까지 다른 플레이어의 소리가 뭉개져 들립니다.</li>
                    <li>VR - 문과 겹쳐 있을 때 다른 플레이어가 문을 닫으면 헤드기어가 떨어질 수 있습니다.</li>
                    <li>VR - 캐릭터 프로필 사진이 로비에 참여할 때 빈 상태로 표시됩니다.</li>
                    <li>VR - 플레이어가 몰입 애니메이션을 켠 상태에서 죽었을 때, 캐릭터의 래그돌이 왜곡되고 뒤틀려 보입니다.</li>
                </ul>
            </div>
            <div style="margin-top: 20px; padding-top: 12px; border-top: 1px dashed var(--card-border); text-align: right; font-size: 0.88rem; color: var(--accent-light);">
                ✨ <strong>Korean Translated by. 흠먐먀</strong>
            </div>
        `
    },
    {
        category: "Kinetic Publishing",
        icon: "🎮",
        date: "2026. 8. 13.",
        title: "Kinetic Publishing Showcase - In Case You Missed It",
        desc: "키네틱 퍼블리싱 첫 공식 쇼케이스 하이라이트 요약 및 신작 라인업 공개",
        img: "https://kineticgames.co.uk/assets/images/publishing-showcase-recap.webp",
        url: "https://kineticgames.co.uk/news"
    },
    {
        category: "Kinetic Publishing",
        icon: "🎮",
        date: "2026. 8. 12.",
        title: "Kinetic Publishing Showcase - 1 Day To Go!",
        desc: "키네틱 게임즈 산하 퍼블리싱 쇼케이스 일정 및 라이브 스트림 안내",
        img: "https://kineticgames.co.uk/assets/images/publishing-showcase-countdown.webp",
        url: "https://kineticgames.co.uk/news"
    },
    {
        category: "Phasmophobia",
        icon: "👻",
        date: "2026. 8. 11.",
        title: "Phasmophobia Quality of Life Part 2 Preview",
        desc: "2차 편의성(QoL) 업데이트 미리보기: 커뮤니티 피드백 기반 버그 픽스 및 편의 기능 개선",
        img: "https://kineticgames.co.uk/assets/images/news-banner-qol-part2.webp",
        url: "https://kineticgames.co.uk/news"
    },
    {
        category: "Phasmophobia",
        icon: "👻",
        date: "2026. 7. 28.",
        title: "Phasmophobia v0.18.0.1 - Patch Notes",
        desc: "v0.18.0.0 윌로우 리워크 업데이트 이후 안정화 및 주요 버그 핫픽스 패치 노트",
        img: "https://kineticgames.co.uk/assets/images/update-banner-v01801.webp",
        url: "https://kineticgames.co.uk/news"
    },
    {
        category: "Phasmophobia",
        icon: "👻",
        date: "2026. 7. 21.",
        title: "Phasmophobia v0.18.0.0 - Patch Notes",
        desc: "13 윌로우 스트리트 전면 리워크 & 1차 QoL 편의성(인벤토리 단축키 등) 대형 패치",
        img: "https://kineticgames.co.uk/assets/images/willow-rework-banner.webp",
        url: "https://kineticgames.co.uk/news"
    },
    {
        category: "Phasmophobia",
        icon: "👻",
        date: "2026. 7. 14.",
        title: "Phasmophobia Quality of Life Preview #2",
        desc: "장비 모션 속도 개선 및 인벤토리 슬롯 단축키 시스템 도입 세부 가이드",
        img: "https://kineticgames.co.uk/assets/images/news-banner-qol-preview2.webp",
        url: "https://kineticgames.co.uk/news"
    },
    {
        category: "Phasmophobia",
        icon: "👻",
        date: "2026. 7. 2.",
        title: "Phasmophobia Quality of Life Update Preview",
        desc: "여름 시즌 편의성 대개편 업데이트 세부 방향성 및 개선점 사전 공개",
        img: "https://kineticgames.co.uk/assets/images/news-banner-qol-overview.webp",
        url: "https://kineticgames.co.uk/news"
    },
    {
        category: "Phasmophobia",
        icon: "👻",
        date: "2026. 6. 24.",
        title: "Phasmophobia 2026 and Beyond",
        desc: "Unity 6 엔진 전환, 캐릭터 커스터마이징, 엣지필드 리워크 및 1.0 정식 출시 로드맵",
        img: "https://kineticgames.co.uk/assets/images/roadmap-2026-update.webp",
        url: "https://kineticgames.co.uk/news"
    },
    {
        category: "Phasmophobia",
        icon: "👻",
        date: "2026. 3. 3.",
        title: "6 Tanglewood Drive Rework - Phasmophobia v0.16.0.0",
        desc: "6 탱글우드 드라이브 맵 그래픽/루핑 루트 전면 리뉴얼 및 밸런스 조정",
        img: "https://kineticgames.co.uk/assets/images/tanglewood-rework-banner.webp",
        url: "https://kineticgames.co.uk/news"
    }
];
