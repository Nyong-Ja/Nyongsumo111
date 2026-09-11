const MAP_DATA = [
    {
        name: "6 Tanglewood Drive",
        category: "Small",
        rooms: "11개 룸",
        size: "소형 주택 (지상 1층 + 지하 1층)",
        tip: "파스모포비아의 가장 기본이 되는 표준 조사 맵입니다. 리워크로 룸 명칭 및 가구 배치가 개편되었습니다.",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 기본 개요 (Overview)</div>
            <p class="dict-text">
                • <strong>공식 분류:</strong> 소형 맵 (Small Map / Small House)<br>
                • <strong>총 룸(구역) 수:</strong> 11개<br>
                • <strong>층수:</strong> 지상 1층(Ground Floor) + 지하실(Basement)<br>
                • <strong>조명 스위치 수:</strong> 9개<br>
                • <strong>특징 및 변경점:</strong> 파스모포비아에서 가장 기본적이고 대표적인 맵입니다. 리워크를 통해 룸 명칭 및 가구 배치가 개편되었습니다. (기존 주방 아일랜드 식탁 루핑 스팟 제거, 지하실 기차 모형 테이블 루핑 추가, 옷장 문 틈새 슬릿 시야 적용 등)
            </p>

            <div class="dict-section-title">2. 공식 룸 및 구역 목록 (Rooms)</div>
            <p class="dict-text">
                <strong>[지상 1층 (Ground Floor)]</strong><br>
                • <strong>Foyer (현관 / 메인 복도):</strong> 거실로 이어지는 앞쪽 복도와 방들로 이어지는 안쪽 복도가 하나의 구역으로 판정됩니다.<br>
                • <strong>Living Room (거실):</strong> 소파 및 TV 구역<br>
                • <strong>Kitchen (주방):</strong> 조리대 및 싱크대<br>
                • <strong>Dining Room (식당):</strong> 다이닝 테이블 및 장식장<br>
                • <strong>Garage (차고):</strong> 차량, 공구 선반 및 사물함<br>
                • <strong>Utility Room (세탁실 / 유틸리티 룸):</strong> 차고와 복도를 연결하는 세탁 구역<br>
                • <strong>Master Bedroom (안방 / 마스터 침실):</strong> 더블 침대 및 수납공간<br>
                • <strong>Ensuite (안방 전용 욕실):</strong> 안방 안쪽에 별도 분리된 전용 욕실<br>
                • <strong>Hobby Room (취미방):</strong> 기존 Boy's Bedroom 위치가 개편된 퍼즐/뜨개질 취미방<br>
                • <strong>Nancy's Room (낸시의 방 / 유아실):</strong> 기존 Nursery 위치<br>
                • <strong>Bathroom (복도 공용 욕실):</strong> 복도 쪽에 위치한 메인 욕실<br><br>
                <strong>[지하 (Basement)]</strong><br>
                • <strong>Basement (지하실):</strong> 보관 선반, 냉동고, 장난감 기차 트랙 테이블
            </p>

            <div class="dict-section-title">3. 공식 은신처 상세 목록 (Sanctioned Hiding Spots)</div>
            <p class="dict-text">
                난이도 및 플레이어 수에 따라 무작위로 열리거나 장애물로 막히는 공식 은신처들입니다:<br><br>
                • <strong>Foyer (현관):</strong> 거실로 들어가는 입구 바로 옆 벽장 (Closet next to living room)<br>
                • <strong>Hobby Room (취미방):</strong> 방 내부 붙박이 옷장 (Closet)<br>
                • <strong>Nancy's Room (낸시의 방):</strong> 방 내부/맞은편 복도 옷장 (Closet)<br>
                • <strong>Ensuite (안방 전용 욕실):</strong> 안방 안쪽 전용 옷장/수납 공간 (Closet)<br>
                • <strong>Garage (차고):</strong><br>
                &nbsp;&nbsp;- 파란색 철제 락커 (Blue Lockers)<br>
                &nbsp;&nbsp;- 차고 안쪽 구석 쓰레기통/상자 뒤<br>
                • <strong>Basement (지하실):</strong><br>
                &nbsp;&nbsp;- 지하실 계단 내려오는 통로 바로 옆 구석<br>
                &nbsp;&nbsp;- 냉동고 및 기차 트랙 뒤편 공간
            </p>

            <div class="dict-section-title">4. 저주받은 물건 및 주요 오브젝트 고정 위치 (Cursed Possessions & Props)</div>
            <p class="dict-text">
                • <strong>타로 카드 (Tarot Cards):</strong> 거실 창가 쪽 작은 테이블 위<br>
                • <strong>위자보드 (Ouija Board):</strong> 지하실 뒤쪽 선반/테이블 위<br>
                • <strong>소환진 (Summoning Circle):</strong> 지하실 흔들의자 및 냉동고 인근 바닥 중앙<br>
                • <strong>부두 인형 (Voodoo Doll):</strong> 차고 락커 옆 쓰레기통 위 (또는 세탁실 선반)<br>
                • <strong>원숭이 손 (Monkey Paw):</strong> 식당(Dining Room) 유리 장식장(Hutch) 내부<br>
                • <strong>음악 상자 (Music Box):</strong> 낸시의 방(Nancy's Room) 좌측 벽 선반 위<br>
                • <strong>유령 거울 (Haunted Mirror):</strong> 마스터 침실(Master Bedroom) 문 바깥 복도 벽면<br>
                • <strong>두꺼비집 (Fuse Box):</strong> 차고(Garage) 우측 벽 또는 지하실(Basement) 벽면 중 1곳<br>
                • <strong>차량 열쇠 (Car Key):</strong> 현관 콘솔 테이블 위<br>
                • <strong>이스터에그 (Easter Egg):</strong> 주방 카운터의 소리 나는 감자(Potato)
            </p>
        `
    },
    {
        name: "42 Edgefield Road",
        category: "Small",
        rooms: "16개 룸",
        size: "2층 주택 (지상 2층 + 지하 1층)",
        tip: "방과 화장실이 많고 복도가 좁아 밀실 공포를 유발하는 맵입니다.",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 기본 개요 (Overview)</div>
            <p class="dict-text">
                • <strong>공식 분류:</strong> 소형 맵 (Small Map / Small House)<br>
                • <strong>총 룸(구역) 수:</strong> 16개 룸 (침실 6개, 화장실/욕실 6개 포함)<br>
                • <strong>층수:</strong> 1층(Ground Floor) + 2층(First/Second Floor) + 지하실(Basement)<br>
                • <strong>조명 스위치 수:</strong> 16개<br>
                • <strong>특징:</strong> 복도가 매우 좁고 코너가 많아 시야가 가리기 쉬우나, 곳곳에 방과 옷장이 빽빽하게 배치되어 있어 문 상호작용 체크와 빠른 은신에 유리합니다.
            </p>

            <div class="dict-section-title">2. 공식 룸 및 구역 목록 (Rooms)</div>
            <p class="dict-text">
                <strong>[지상 1층 (Ground Floor)]</strong><br>
                • <strong>Foyer (현관 / 메인 복도):</strong> 2층 계단 및 거실/지하실 입구를 연결하는 통로<br>
                • <strong>Living Room (거실):</strong> 소파, TV, 피아노 구역<br>
                • <strong>Kitchen (주방):</strong> 조리대, 냉장고 및 싱크대<br>
                • <strong>Dining Room (식당):</strong> 다이닝 테이블 및 식기장<br>
                • <strong>Utility Room (세탁실):</strong> 주방과 차고를 잇는 통로 겸 세탁실<br>
                • <strong>Garage (차고):</strong> 차량 1대 및 작업 도구 선반<br>
                • <strong>Master Bedroom (1층 안방):</strong> 더블 침대 및 옷장<br>
                • <strong>Master Bathroom (1층 안방 욕실):</strong> 1층 안방 내부 연결 욕실<br><br>
                <strong>[지상 2층 (Upstairs)]</strong><br>
                • <strong>Upstairs Hallway (2층 복도):</strong> 2층 중앙 복도 및 코너<br>
                • <strong>Large Blue Bedroom (큰 파란 방):</strong> 더블 침대 및 전용 욕실 연결<br>
                • <strong>Large Blue Bathroom (큰 파란 방 욕실):</strong> 큰 파란 방 안쪽 욕실<br>
                • <strong>Small Blue Bedroom (작은 파란 방):</strong> 싱글 침대 및 책상<br>
                • <strong>Green Bedroom (초록 방):</strong> 싱글 침대 및 옷장<br>
                • <strong>Orange Bedroom / Nursery (오렌지색 아기방):</strong> 유아용 침대 및 기저귀 교환대<br>
                • <strong>Hallway Bathroom (2층 공용 욕실):</strong> 2층 복도 측 공용 욕실<br><br>
                <strong>[지하 (Basement)]</strong><br>
                • <strong>Basement (지하실):</strong> 보관 선반, 박스 더미 및 안쪽 창고
            </p>

            <div class="dict-section-title">3. 공식 은신처 상세 목록 (Sanctioned Hiding Spots)</div>
            <p class="dict-text">
                난이도 및 플레이어 수에 따라 무작위로 열리거나 막히는 공식 은신처들입니다:<br><br>
                • <strong>1층 세탁실 (Utility Room):</strong> 세탁기와 선반 사이 안쪽 구석 틈새<br>
                • <strong>1층 차고 (Garage):</strong> 차고 안쪽 벽면 파란색 철제 락커 (Lockers)<br>
                • <strong>1층 안방 (Master Bedroom):</strong> 침대 맞은편 붙박이 옷장 2개 (Closets)<br>
                • <strong>지하실 (Basement):</strong> 냉장고 및 보관 선반 옆 철제 락커 (Lockers)<br>
                • <strong>2층 복도 (Upstairs Hallway):</strong> 초록 방 맞은편 벽장 2개 (Hallway Closets)<br>
                • <strong>2층 작은 파란 방 (Small Blue Bedroom):</strong> 방 내부 붙박이 옷장 (Closet)<br>
                • <strong>2층 큰 파란 방 (Large Blue Bedroom):</strong> 방 안쪽 구석 옷장 (Closet)
            </p>

            <div class="dict-section-title">4. 저주받은 물건 및 주요 오브젝트 고정 위치 (Cursed Possessions & Props)</div>
            <p class="dict-text">
                • <strong>타로 카드 (Tarot Cards):</strong> 현관문 바로 앞 서랍장 콘솔 테이블 위<br>
                • <strong>유령 거울 (Haunted Mirror):</strong> 현관 복도에서 2층으로 올라가는 계단 입구 벽면<br>
                • <strong>음악 상자 (Music Box):</strong> 1층 거실(Living Room) 스탠드 조명 옆 작은 협탁 위<br>
                • <strong>부두 인형 (Voodoo Doll):</strong> 2층 큰 파란 침실(Large Blue Bedroom) 침대 위<br>
                • <strong>원숭이 손 (Monkey Paw):</strong> 2층 오렌지색 아기방(Nursery) 기저귀 교환대 서랍 위<br>
                • <strong>위자보드 (Ouija Board):</strong> 1층 세탁실(Utility Room) 철제 선반 아래 바닥<br>
                • <strong>소환진 (Summoning Circle):</strong> 지하실(Basement) 안쪽 분리된 창고 바닥 중앙<br>
                • <strong>두꺼비집 (Fuse Box):</strong> 차고(Garage) 우측 벽면 또는 지하실(Basement) 벽면 중 1곳<br>
                • <strong>차량 열쇠 (Car Key):</strong> 현관 입구 복도 테이블 위
            </p>
        `
    },
    {
        name: "10 Ridgeview Court",
        category: "Small",
        rooms: "12개 룸",
        size: "2층 주택 (지상 2층 + 지하 1층)",
        tip: "지하실과 차고가 넓게 트여 있고, 2층으로 올라가는 긴 복도가 특징입니다.",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 기본 개요 (Overview)</div>
            <p class="dict-text">
                • <strong>공식 분류:</strong> 소형 맵 (Small Map / Small House)<br>
                • <strong>총 룸(구역) 수:</strong> 12개 룸<br>
                • <strong>층수:</strong> 1층(Ground Floor) + 2층(First/Second Floor) + 지하실(Basement)<br>
                • <strong>조명 스위치 수:</strong> 13개<br>
                • <strong>특징:</strong> 1층 메인 홀과 거실/주방 동선이 길며, 2층에는 침실 3개와 욕실이 모여 있어 계단 진입 시 퇴로 확보가 중요합니다.
            </p>

            <div class="dict-section-title">2. 공식 룸 및 구역 목록 (Rooms)</div>
            <p class="dict-text">
                <strong>[지상 1층 (Ground Floor)]</strong><br>
                • <strong>Foyer & Hallway (현관 및 복도):</strong> 피아노가 놓여 있는 1층 메인 복도 통로<br>
                • <strong>Living Room (거실):</strong> 소파 및 벽걸이 TV 구역<br>
                • <strong>Kitchen (주방):</strong> 조리 카운터 및 냉장고<br>
                • <strong>Dining Area (식당):</strong> 주방과 이어진 식사 공간<br>
                • <strong>Utility Room (세탁실):</strong> 차고와 주방을 잇는 세탁실<br>
                • <strong>Garage (차고):</strong> 대형 차고 (차량 2대 주차 공간 및 공구함)<br>
                • <strong>Master Bedroom (1층 안방):</strong> 더블 침대 구역<br>
                • <strong>Master Bathroom (1층 안방 욕실):</strong> 안방 내부 연결 욕실<br><br>
                <strong>[지상 2층 (Upstairs)]</strong><br>
                • <strong>Upstairs Hallway (2층 복도):</strong> 2층 계단 상단 및 침실 연결 통로<br>
                • <strong>Girl's Bedroom (소녀 방):</strong> 보라색 톤 침실<br>
                • <strong>Boy's Bedroom (소년 방):</strong> 청록색 톤 침실<br>
                • <strong>Teen / Guest Bedroom (청소년/게스트 방):</strong> 2층 안쪽 침실<br>
                • <strong>Bathroom (2층 공용 욕실):</strong> 2층 복도 측 욕실<br><br>
                <strong>[지하 (Basement)]</strong><br>
                • <strong>Basement (지하실):</strong> 보관 선반, 파이프 및 창고 공간
            </p>

            <div class="dict-section-title">3. 공식 은신처 상세 목록 (Sanctioned Hiding Spots)</div>
            <p class="dict-text">
                난이도 및 플레이어 수에 따라 무작위로 열리거나 막히는 공식 은신처들입니다:<br><br>
                • <strong>1층 복도 (Foyer / Hallway):</strong> 세탁실 복도 측 벽장 (Closet)<br>
                • <strong>1층 차고 (Garage):</strong> 차고 안쪽 벽면 파란색 철제 락커 (Lockers)<br>
                • <strong>지하실 (Basement):</strong> 계단 아래 구석 및 지하실 안쪽 보관 선반 뒤편<br>
                • <strong>2층 복도 (Upstairs Hallway):</strong> 2층 계단 올라오자마자 우측 벽장 (Closet)<br>
                • <strong>2층 소년 방 (Boy's Bedroom):</strong> 방 내부 붙박이 옷장 (Closet)<br>
                • <strong>2층 소녀 방 (Girl's Bedroom):</strong> 방 내부 붙박이 옷장 (Closet)
            </p>

            <div class="dict-section-title">4. 저주받은 물건 및 주요 오브젝트 고정 위치 (Cursed Possessions & Props)</div>
            <p class="dict-text">
                • <strong>타로 카드 (Tarot Cards):</strong> 현관문 입장 시 열쇠 그릇 옆 작은 테이블 위<br>
                • <strong>유령 거울 (Haunted Mirror):</strong> 지하실 내려가는 계단 맞은편 복도 벽면<br>
                • <strong>부두 인형 (Voodoo Doll):</strong> 1층 복도 피아노(Piano) 옆 긴 벤치 의자 위<br>
                • <strong>위자보드 (Ouija Board):</strong> 1층 세탁실(Utility Room) 안쪽 선반 위<br>
                • <strong>음악 상자 (Music Box):</strong> 2층 보라색 소녀 방(Girl's Bedroom) 출입문 옆 협탁 위<br>
                • <strong>원숭이 손 (Monkey Paw):</strong> 2층 청록색 소년 방(Boy's Bedroom) 책상 위<br>
                • <strong>소환진 (Summoning Circle):</strong> 지하실(Basement) 계단 내려오자마자 정면 바닥 중앙<br>
                • <strong>두꺼비집 (Fuse Box):</strong> 차고(Garage) 또는 지하실(Basement) 벽면 중 1곳<br>
                • <strong>차량 열쇠 (Car Key):</strong> 현관 콘솔 테이블 위
            </p>
        `
    },
    {
        name: "Nell's Diner",
        category: "Small",
        rooms: "8개 룸",
        size: "소형 다이너 (단층 매장 + 야외)",
        tip: "버려진 고속도로 식당 맵으로, 오픈형 홀과 조리실/창고가 연결되어 있습니다.",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 기본 개요 (Overview)</div>
            <p class="dict-text">
                • <strong>공식 분류:</strong> 소형 맵 (Small Map)<br>
                • <strong>배경 설정:</strong> 인적 없는 고속도로변에 방치된 폐식당(다이너)<br>
                • <strong>총 룸(구역) 수:</strong> 8개 룸<br>
                • <strong>층수:</strong> 지상 1층 단층 건물 (Ground Floor Only)<br>
                • <strong>특징:</strong> 오픈형 다이닝 홀과 좁은 주방/냉동창고 동선으로 이루어져 있어 은신처와 차단 시야를 빠르게 파악해야 합니다.
            </p>

            <div class="dict-section-title">2. 공식 룸 및 구역 목록 (Rooms)</div>
            <p class="dict-text">
                • <strong>Dining Area (홀 / 다이닝 구역):</strong> 손님용 테이블 부스, 카운터 좌석 및 주방 앞 통로<br>
                • <strong>Kitchen (주방):</strong> 조리 카운터, 그릴, 튀김기 및 싱크대 구역<br>
                • <strong>Cooler Room (냉동창고 / 워크인 쿨러):</strong> 대형 식자재 냉동 보관실<br>
                • <strong>Storage Room (창고):</strong> 식자재 박스, 부품 및 선반 보관실<br>
                • <strong>Manager's Office (매니저 사무실):</strong> 책상, 파일 캐비닛 및 금고<br>
                • <strong>Break Room (직원 휴게실):</strong> 직원용 락커, 소파 및 티 테이블<br>
                • <strong>Utility Room (세탁/유틸리티실):</strong> 청소 도구, 보일러 및 배전반 구역<br>
                • <strong>Restrooms (화장실):</strong> 남성 화장실(Men's) 및 여성 화장실(Women's)
            </p>

            <div class="dict-section-title">3. 공식 은신처 상세 목록 (Sanctioned Hiding Spots)</div>
            <p class="dict-text">
                난이도 및 플레이어 수에 따라 무작위로 열리거나 막히는 공식 은신처들입니다:<br><br>
                • <strong>직원 휴게실 (Break Room):</strong> 벽면 철제 사물함 (Lockers)<br>
                • <strong>냉동창고 (Cooler Room):</strong> 대형 식자재 운반 카트 (Food Cart) 뒤편 구석<br>
                • <strong>창고 (Storage Room):</strong> 보관 선반 및 음식 운반 카트 (Food Cart) 뒤편<br>
                • <strong>복도 (Hallway):</strong> 파란색 음료 자판기 (Blue Vending Machine) 뒤편 틈새
            </p>

            <div class="dict-section-title">4. 저주받은 물건 및 주요 오브젝트 고정 위치 (Cursed Possessions & Props)</div>
            <p class="dict-text">
                • <strong>타로 카드 (Tarot Cards):</strong> 주방 카운터 계산대(Cash Register) 뒤편 선반 위<br>
                • <strong>부두 인형 (Voodoo Doll):</strong> 식당 홀(Dining Area) 좌측 뒤쪽 구석 부스 좌석 위<br>
                • <strong>원숭이 손 (Monkey Paw):</strong> 주방(Kitchen) 도마 위 (대형 식칼 옆)<br>
                • <strong>음악 상자 (Music Box):</strong> 매니저 사무실(Manager's Office) 책상 위<br>
                • <strong>유령 거울 (Haunted Mirror):</strong> 직원 휴게실(Break Room) 벽면<br>
                • <strong>위자보드 (Ouija Board):</strong> 유틸리티실(Utility Room) 상자 위<br>
                • <strong>소환진 (Summoning Circle):</strong> 남자 화장실(Men's Bathroom) 바닥 중앙<br>
                • <strong>두꺼비집 (Fuse Box):</strong> 유틸리티실(Utility Room) 또는 창고(Storage) 벽면 중 1곳
            </p>
        `
    },
    {
        name: "13 Willow Street",
        category: "Small",
        rooms: "10개 룸",
        size: "소형 주택 (지상 1층 + 지하 1층)",
        tip: "옷장이 없는 대신 가구와 파티션 뒤에 숨어야 하는 구조였으나, 리워크를 통해 지하 오픈 구조 및 신규 방이 개편되었습니다.",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 기본 개요 (Overview)</div>
            <p class="dict-text">
                • <strong>공식 분류:</strong> 소형 맵 (Small Map / Small House)<br>
                • <strong>총 룸(구역) 수:</strong> 10개 룸<br>
                • <strong>층수:</strong> 지상 1층(Ground Floor) + 지하실(Basement)<br>
                • <strong>조명 스위치 수:</strong> 11개<br>
                • <strong>특징:</strong> 기존 붙박이 옷장 대신 방마다 비치된 다양한 가구, 파티션, 보관함 뒤편 공간을 공식 은신처로 활용합니다.
            </p>

            <div class="dict-section-title">2. 공식 룸 및 구역 목록 (Rooms)</div>
            <p class="dict-text">
                <strong>[지상 1층 (Ground Floor)]</strong><br>
                • <strong>Living Room (거실):</strong> 전면 유리문 및 소파 구역<br>
                • <strong>Kitchen & Dining (주방 및 식당):</strong> 조리대, 냉장고, 식탁 및 팬트리<br>
                • <strong>Gym / Fitness Room (체육실):</strong> 덤벨, 운동 기구 배치 구역<br>
                • <strong>Art Studio (화실 / 작업실):</strong> 이젤, 캔버스 및 물감 보관함<br>
                • <strong>Master Bedroom (침실):</strong> 더블 침대 및 옷장 파티션<br>
                • <strong>Bathroom (욕실):</strong> 1층 공용 욕실<br><br>
                <strong>[지하 (Basement)]</strong><br>
                • <strong>Bar & Game Room (바 및 게임룸):</strong> 지하 바 카운터, 소파, 당구대 구역<br>
                • <strong>Laundry Room (세탁실):</strong> 세탁기, 건조기 및 플라스틱 수납함<br>
                • <strong>Basement Bathroom (지하 욕실):</strong> 지하실 내부 욕실
            </p>

            <div class="dict-section-title">3. 공식 은신처 상세 목록 (Sanctioned Hiding Spots)</div>
            <p class="dict-text">
                난이도 및 플레이어 수에 따라 무작위로 열리거나 막히는 공식 은신처들입니다:<br><br>
                • <strong>거실 (Living Room):</strong> 유리문 좌측 나무 파티션(Screen) 뒤편<br>
                • <strong>식당 (Dining Room):</strong> 식탁 뒤쪽 팬트리 선반(Pantry Shelves) 뒤<br>
                • <strong>화실 (Art Studio):</strong> 구석에 세워진 대형 캔버스 및 보관함 뒤<br>
                • <strong>침실 (Master Bedroom):</strong> 침실 내부 옷장 파티션 뒤편<br>
                • <strong>지하실 (Basement):</strong> 지하 계단 아래 구석 틈새<br>
                • <strong>지하 세탁실 (Laundry Room):</strong> 검은색 대형 보관함(Containers) 뒤편
            </p>

            <div class="dict-section-title">4. 저주받은 물건 및 주요 오브젝트 고정 위치 (Cursed Possessions & Props)</div>
            <p class="dict-text">
                • <strong>음악 상자 (Music Box):</strong> 1층 거실 책장 선반 위<br>
                • <strong>소환진 (Summoning Circle):</strong> 1층 주방 & 식당 바닥 중앙<br>
                • <strong>유령 거울 (Haunted Mirror):</strong> 1층 체육실(Gym) 벽면<br>
                • <strong>부두 인형 (Voodoo Doll):</strong> 1층 침실 고양이 방석 위<br>
                • <strong>원숭이 손 (Monkey Paw):</strong> 1층 화실(Art Studio) 선반 위<br>
                • <strong>타로 카드 (Tarot Cards):</strong> 지하실 바(Bar) 테이블 위<br>
                • <strong>위자보드 (Ouija Board):</strong> 지하실 욕실 문 옆 수납 선반 위<br>
                • <strong>두꺼비집 (Fuse Box):</strong> 1층 체육실(Gym) 또는 지하 세탁실(Laundry) 벽면 중 1곳
            </p>
        `
    },
    {
        name: "Camp Woodwind",
        category: "Small",
        rooms: "야외 텐트 구역",
        size: "소형 야외 캠핑장",
        tip: "동선이 매우 짧고 중앙 모닥불을 끼고 있어 빠른 파밍 및 고스트 스피드/헌팅 테스트의 성지입니다.",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 기본 개요 (Overview)</div>
            <p class="dict-text">
                • <strong>공식 분류:</strong> 소형 야외 맵 (Small Map / Level 13 해금)<br>
                • <strong>총 룸(구역) 수:</strong> 10개 야외 구역<br>
                • <strong>특징:</strong> 탁 트인 원형 야외 구조로, 헌팅 시 시야 차단 엄폐물이 한정되어 있어 모닥불 및 텐트 주변을 빠르게 도는 루핑 컨트롤이 핵심입니다. 눈 날씨가 아닐 때 모닥불을 켜면 주변 온도가 20°C로 유지됩니다.
            </p>

            <div class="dict-section-title">2. 공식 룸 및 구역 목록 (Zones)</div>
            <p class="dict-text">
                • <strong>Entrance Gate (정문 입구):</strong> 트럭에서 진입하는 출입문 구역<br>
                • <strong>Campfire (중앙 모닥불):</strong> 맵 정중앙 캠프파이어 및 통나무 벤치<br>
                • <strong>Picnic Area (피크닉 구역):</strong> 나무 피크닉 테이블 및 벤치<br>
                • <strong>Yellow Tent (노란 텐트):</strong> 대형 노란색 텐트 내부<br>
                • <strong>White / Food Tent (음식 텐트):</strong> 화이트 텐트 및 음식 조리대<br>
                • <strong>Blue Tent (파란 텐트):</strong> 중형 파란색 텐트 내부<br>
                • <strong>Red Tent (빨간 텐트):</strong> 중형 빨간색 텐트 내부<br>
                • <strong>Kids' Area (어린이 구역):</strong> 주황/청록 소형 텐트 및 장난감 구역<br>
                • <strong>Bathroom (야외 화장실):</strong> 남/녀 분리된 목조 공용 화장실<br>
                • <strong>Lovers Bench (연인의 벤치):</strong> 맵 좌측 안쪽 구석 벤치 구역
            </p>

            <div class="dict-section-title">3. 공식 은신처 상세 목록 (Sanctioned Hiding Spots)</div>
            <p class="dict-text">
                난이도 및 플레이어 수에 따라 무작위로 열리거나 막히는 공식 은신처들입니다:<br><br>
                • <strong>모닥불 (Campfire):</strong> 모닥불 옆 드럼통 및 통나무 더미 뒤<br>
                • <strong>파란 텐트 (Blue Tent):</strong> 텐트 외벽 옆 대형 아이스박스 쿨러 뒤<br>
                • <strong>음식 텐트 (Food Tent):</strong> 텐트 외벽 옆 쿨러 및 테이블 뒤편<br>
                • <strong>노란 텐트 (Yellow Tent):</strong> 텐트 내부 우측 침낭 및 상자 뒤<br>
                • <strong>어린이 구역 (Kids' Area):</strong> 주황색 및 청록색 소형 텐트 내부<br>
                • <strong>화장실 앞 (Bathroom):</strong> 화장실 건물 옆 나무 펜스 구석
            </p>

            <div class="dict-section-title">4. 저주받은 물건 및 주요 오브젝트 고정 위치 (Cursed Possessions & Props)</div>
            <p class="dict-text">
                • <strong>타로 카드 (Tarot Cards):</strong> 피크닉 구역 나무 테이블 위<br>
                • <strong>소환진 (Summoning Circle):</strong> 음식 텐트(Food Tent) 바닥 중앙<br>
                • <strong>음악 상자 (Music Box):</strong> 노란 텐트(Yellow Tent) 안 작은 협탁 위<br>
                • <strong>부두 인형 (Voodoo Doll):</strong> 빨간 텐트 옆 소형 청록 텐트 앞 바닥<br>
                • <strong>원숭이 손 (Monkey Paw):</strong> 연인의 벤치(Lovers Bench) 좌측 좌석 위<br>
                • <strong>유령 거울 (Haunted Mirror):</strong> 야외 화장실 건물 외벽<br>
                • <strong>위자보드 (Ouija Board):</strong> 피크닉 구역 체스판 옆 테이블 위<br>
                • <strong>두꺼비집 (Fuse Box):</strong> 야외 화장실 건물 외벽 또는 발전기 박스
            </p>
        `
    },
    {
        name: "Grafton Farmhouse",
        category: "Small",
        rooms: "13개 룸",
        size: "소형 목조 농가 (지상 2층 + 다락방)",
        tip: "나무 바닥이라 발소리가 또렷하게 울리며, 넓은 1층과 다락방(Attic)이 포함된 목조 가옥입니다.",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 기본 개요 (Overview)</div>
            <p class="dict-text">
                • <strong>공식 분류:</strong> 소형 맵 (Small Map / Small Farmhouse)<br>
                • <strong>총 룸(구역) 수:</strong> 13개 룸 (1층 8개, 2층 5개, 다락방 1개)<br>
                • <strong>층수:</strong> 1층(Ground) + 2층(Upstairs) + 다락방(Attic)<br>
                • <strong>조명 스위치 수:</strong> 13개<br>
                • <strong>특징:</strong> 바닥이 목조로 되어 있어 유령의 발소리가 매우 크고 선명하게 들리며, 1층 거실과 식당 사이의 시야 차단 가구가 많습니다.
            </p>

            <div class="dict-section-title">2. 공식 룸 및 구역 목록 (Rooms)</div>
            <p class="dict-text">
                <strong>[지상 1층 (Ground Floor)]</strong><br>
                • <strong>Foyer (현관):</strong> 메인 출입문 및 2층 계단 연결 통로<br>
                • <strong>Living Room (거실):</strong> 소파 및 벽난로 구역<br>
                • <strong>Dining Room (식당):</strong> 다이닝 테이블 및 수납장<br>
                • <strong>Kitchen (주방):</strong> 조리대, 냉장고 및 팬트리<br>
                • <strong>Utility Room (세탁실):</strong> 세탁기 및 뒷마당 연결문<br>
                • <strong>Work Room (작업실):</strong> 작업 공구대 및 선반<br>
                • <strong>Master Bedroom (1층 안방):</strong> 더블 침대 및 옷장<br>
                • <strong>Master Bathroom (1층 안방 욕실):</strong> 안방 전용 욕실<br>
                • <strong>Storage (1층 창고):</strong> 보관 선반 구역<br><br>
                <strong>[지상 2층 (Upstairs)]</strong><br>
                • <strong>Upstairs Hallway (2층 복도):</strong> 2층 침실들을 연결하는 복도<br>
                • <strong>Child Bedroom (어린이방):</strong> 유아용 침대 및 장난감 상자<br>
                • <strong>Twin Bedroom (트윈 침실):</strong> 2개의 싱글 침대 배치 침실<br>
                • <strong>Upstairs Bathroom (2층 욕실):</strong> 2층 공용 욕실<br>
                • <strong>Library (서재):</strong> 책장, 소파 및 서재 책상<br><br>
                <strong>[다락방 (Attic)]</strong><br>
                • <strong>Attic (다락방):</strong> 2층 사다리/계단으로 연결된 넓은 지붕 밑 창고
            </p>

            <div class="dict-section-title">3. 공식 은신처 상세 목록 (Sanctioned Hiding Spots)</div>
            <p class="dict-text">
                난이도 및 플레이어 수에 따라 무작위로 열리거나 막히는 공식 은신처들입니다:<br><br>
                • <strong>1층 주방 (Kitchen):</strong> 대형 냉장고 문 뒤편 구석<br>
                • <strong>1층 세탁실 (Utility Room):</strong> 세워진 매트리스 뒤편<br>
                • <strong>1층 식당 (Dining Room):</strong> 보관 선반 및 파티션 뒤<br>
                • <strong>1층 작업실 (Work Room):</strong> 커튼 및 공구 선반 뒤편<br>
                • <strong>1층 안방 (Master Bedroom):</strong> 침대 옆 나무 파티션 뒤<br>
                • <strong>2층 복도 (Upstairs Hallway):</strong> 안락의자 옆 쌓인 상자 뒤<br>
                • <strong>2층 어린이방 (Child Bedroom):</strong> 방 내부 붙박이 옷장 (Closet)<br>
                • <strong>2층 트윈 침실 (Twin Bedroom):</strong> 방 내부 붙박이 옷장 (Closet)<br>
                • <strong>다락방 (Attic):</strong> 다락방 안쪽 벽장 (Closet)
            </p>

            <div class="dict-section-title">4. 저주받은 물건 및 주요 오브젝트 고정 위치 (Cursed Possessions & Props)</div>
            <p class="dict-text">
                • <strong>타로 카드 (Tarot Cards):</strong> 2층 서재(Library) 책상 위<br>
                • <strong>유령 거울 (Haunted Mirror):</strong> 1층 안방(Master Bedroom) 침대 옆 벽면<br>
                • <strong>부두 인형 (Voodoo Doll):</strong> 2층 복도 계단 난간 옆 바닥<br>
                • <strong>음악 상자 (Music Box):</strong> 2층 트윈 침실(Twin Bedroom) 선반 위<br>
                • <strong>원숭이 손 (Monkey Paw):</strong> 1층 식당(Dining Room) 선반 위<br>
                • <strong>위자보드 (Ouija Board):</strong> 다락방(Attic) 수납장 위<br>
                • <strong>소환진 (Summoning Circle):</strong> 2층 어린이방(Child Bedroom) 바닥 중앙<br>
                • <strong>두꺼비집 (Fuse Box):</strong> 1층 세탁실(Utility) 또는 작업실(Work Room) 벽면 중 1곳
            </p>
        `
    },
    {
        name: "Bleasdale Farmhouse",
        category: "Small",
        rooms: "16개 룸",
        size: "소형 목조 대농가 (지상 2층 + 다락방)",
        tip: "목조 3층 구조의 대형 팜하우스로, 다락방(Attic)과 야외 정원 테라스가 연결되어 있습니다.",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 기본 개요 (Overview)</div>
            <p class="dict-text">
                • <strong>공식 분류:</strong> 소형 맵 (Small Map / 구조상 중형급 이동 동선)<br>
                • <strong>총 룸(구역) 수:</strong> 16개 룸<br>
                • <strong>층수:</strong> 1층(Ground) + 2층(Upstairs) + 다락방(Attic)<br>
                • <strong>조명 스위치 수:</strong> 16개<br>
                • <strong>특징:</strong> 그래프톤보다 규모가 크며 방과 복도가 복잡하게 얽혀 있습니다. 특히 다락방으로 도망칠 때 외길 계단에 갇히지 않도록 주의해야 합니다.
            </p>

            <div class="dict-section-title">2. 공식 룸 및 구역 목록 (Rooms)</div>
            <p class="dict-text">
                <strong>[지상 1층 (Ground Floor)]</strong><br>
                • <strong>Foyer (현관):</strong> 메인 출입문 및 중앙 계단 홀<br>
                • <strong>Tea Room (티룸):</strong> 티 테이블 및 장식장<br>
                • <strong>Living Room (거실):</strong> 소파 및 벽난로<br>
                • <strong>Dining Room (식당):</strong> 대형 식탁 구역<br>
                • <strong>Kitchen (주방):</strong> 주방 카운터 및 싱크대<br>
                • <strong>Utility Room (세탁실):</strong> 세탁기 및 보일러실<br>
                • <strong>Workshop (워크샵):</strong> 작업대 및 공구 보관실<br>
                • <strong>Office (사무실):</strong> 책상 및 책장<br>
                • <strong>Toilet (1층 화장실):</strong> 1층 공용 화장실<br><br>
                <strong>[지상 2층 (Upstairs)]</strong><br>
                • <strong>Upstairs Hallway (2층 복도):</strong> 침실들을 잇는 긴 복도<br>
                • <strong>Master Bedroom (안방):</strong> 대형 침대 구역<br>
                • <strong>Girl's Bedroom (소녀 방):</strong> 싱글 침대 및 인형<br>
                • <strong>Boy's Bedroom (소년 방):</strong> 싱글 침대 및 장난감<br>
                • <strong>Trophy Room (트로피룸):</strong> 박제 및 트로피 진열실<br>
                • <strong>Study (서재):</strong> 서재 책상 및 책장<br>
                • <strong>Bathroom (2층 욕실):</strong> 2층 대형 욕실<br><br>
                <strong>[다락방 (Attic)]</strong><br>
                • <strong>Attic (다락방):</strong> 3층 전체를 차지하는 넓은 지붕 밑 수납 공간
            </p>

            <div class="dict-section-title">3. 공식 은신처 상세 목록 (Sanctioned Hiding Spots)</div>
            <p class="dict-text">
                난이도 및 플레이어 수에 따라 무작위로 열리거나 막히는 공식 은신처들입니다:<br><br>
                • <strong>1층 티룸 (Tea Room):</strong> 나무 파티션(Screen) 뒤편<br>
                • <strong>1층 작업장 (Workshop):</strong> 작업장 안쪽 선반 뒤 구석<br>
                • <strong>1층 세탁실 (Utility Room):</strong> 세탁기 옆 상자 더미 뒤<br>
                • <strong>2층 복도 (Upstairs Hallway):</strong> 복도 끝 붙박이 벽장 (Closet)<br>
                • <strong>2층 소녀 방 (Girl's Bedroom):</strong> 방 내부 옷장 (Closet)<br>
                • <strong>2층 소년 방 (Boy's Bedroom):</strong> 방 내부 옷장 (Closet)<br>
                • <strong>2층 트로피룸 (Trophy Room):</strong> 박제 장식장 구석 틈새<br>
                • <strong>다락방 (Attic):</strong> 다락방 계단 옆 틈새 및 안쪽 상자 뒤편
            </p>

            <div class="dict-section-title">4. 저주받은 물건 및 주요 오브젝트 고정 위치 (Cursed Possessions & Props)</div>
            <p class="dict-text">
                • <strong>타로 카드 (Tarot Cards):</strong> 다락방(Attic) 제단 테이블 위<br>
                • <strong>유령 거울 (Haunted Mirror):</strong> 2층 트로피룸(Trophy Room) 수납장 벽면<br>
                • <strong>부두 인형 (Voodoo Doll):</strong> 2층 안방(Master Bedroom) 침대 발치 바닥<br>
                • <strong>음악 상자 (Music Box):</strong> 1층 티룸(Tea Room) 접시 선반 아래 협탁<br>
                • <strong>원숭이 손 (Monkey Paw):</strong> 2층 서재(Study) 책장 선반 위<br>
                • <strong>위자보드 (Ouija Board):</strong> 1층 거실(Living Room) 소파 옆 테이블<br>
                • <strong>소환진 (Summoning Circle):</strong> 1층 세탁실(Utility Room) 바닥 중앙<br>
                • <strong>두꺼비집 (Fuse Box):</strong> 1층 워크샵(Workshop) 또는 다락방(Attic) 벽면 중 1곳
            </p>
        `
    },
    {
        name: "Point Hope",
        category: "Medium",
        rooms: "16개 룸",
        size: "10층 등대 타워 (Medium Map)",
        tip: "파스모포비아 최초의 10층 수직 원형 타워형 등대 맵입니다. 나선형 계단으로 도주로가 제한되므로 정화향초가 필수입니다.",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 기본 개요 (Overview)</div>
            <p class="dict-text">
                • <strong>공식 분류:</strong> 중형 맵 (Medium Map / Level 15 해금)<br>
                • <strong>구조:</strong> 총 10개 층 수직 타워 구조 (1층 로비부터 10층 발코니까지 16개 룸 분할)<br>
                • <strong>조명 스위치 수:</strong> 13개<br>
                • <strong>특징:</strong> 모든 층이 단 하나의 나선형 계단으로만 연결되어 있어 유령이 계단에서 사냥을 시작하면 층간 이동이 원천 차단됩니다. 각 층별 은신처 위치를 숙지하는 것이 필수입니다.
            </p>

            <div class="dict-section-title">2. 층별 룸 구성 (Floor-by-Floor)</div>
            <p class="dict-text">
                • <strong>1층 (Ground Floor):</strong> Entrance Hallway(현관) & 1층 소형 화장실<br>
                • <strong>2층:</strong> Kitchen & Dining Room (주방 및 식당)<br>
                • <strong>3층:</strong> Living Room (거실)<br>
                • <strong>4층:</strong> Games Room (당구대 게임룸)<br>
                • <strong>5층:</strong> Main Bathroom (대형 메인 욕실)<br>
                • <strong>6층:</strong> Master Bedroom (안방 침실)<br>
                • <strong>7층:</strong> Child Bedroom (파란색 어린이방)<br>
                • <strong>8층:</strong> Maintenance Room (유지보수실/작업실)<br>
                • <strong>9층:</strong> Lantern Room Bottom (등대 램프 하부 제어실)<br>
                • <strong>10층:</strong> Lantern Room Top & Balcony (등대 등명기 상부 및 야외 발코니)
            </p>

            <div class="dict-section-title">3. 공식 은신처 상세 목록 (Sanctioned Hiding Spots)</div>
            <p class="dict-text">
                난이도 및 플레이어 수에 따라 무작위로 열리거나 막히는 공식 은신처들입니다:<br><br>
                • <strong>1층 현관 (Entrance):</strong> 화장실 옆 계단 밑 틈새 구석<br>
                • <strong>4층 게임룸 (Games Room):</strong> 당구대 벽면 나무 파티션(Screen) 뒤<br>
                • <strong>5층 메인 욕실 (Main Bathroom):</strong> 샤워 커튼 뒤편 욕조 안<br>
                • <strong>6층 안방 (Master Bedroom):</strong> 침실 안쪽 전용 옷장 (Closet)<br>
                • <strong>7층 어린이방 (Child Bedroom):</strong> 방 내부 옷장 (Closet)<br>
                • <strong>8층 정비실 (Maintenance Room):</strong> 벽면 철제 락커 (Lockers)
            </p>

            <div class="dict-section-title">4. 저주받은 물건 및 주요 오브젝트 고정 위치 (Cursed Possessions & Props)</div>
            <p class="dict-text">
                • <strong>타로 카드 (Tarot Cards):</strong> 3층 거실(Living Room) 소파 옆 원형 테이블 위<br>
                • <strong>유령 거울 (Haunted Mirror):</strong> 2층 식당(Dining Room) 찬장 벽면<br>
                • <strong>부두 인형 (Voodoo Doll):</strong> 7층 어린이방(Child Bedroom) 서랍장 위<br>
                • <strong>음악 상자 (Music Box):</strong> 6층 안방(Master Bedroom) 화장대(Vanity) 위<br>
                • <strong>원숭이 손 (Monkey Paw):</strong> 8층 유지보수실(Maintenance) 목마 장식 옆 책상 위<br>
                • <strong>위자보드 (Ouija Board):</strong> 4층 게임룸(Games Room) 벽 선반 위<br>
                • <strong>소환진 (Summoning Circle):</strong> 5층 대형 욕실(Main Bathroom) 중앙 바닥<br>
                • <strong>두꺼비집 (Fuse Box):</strong> 1층 현관 계단 옆 또는 8층 유지보수실 벽면 중 1곳
            </p>
        `
    },
    {
        name: "Point Hope - Restricted",
        category: "Small",
        rooms: "구역별 가변",
        size: "제한된 소형 등대",
        tip: "10층 전체를 올라가는 기존 포인트 호프와 달리, 저층부(식당 등 일부 층)만 진입할 수 있도록 제한된 소형 전용 맵입니다.",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 기본 개요 (OVERVIEW)</div>
            <p class="dict-text">
                • <strong>공식 분류:</strong> 소형 맵 (Small Map / 제한구역)<br>
                • <strong>총 룸(구역) 수:</strong> 저층부 중심 가변 구역<br>
                • <strong>층수:</strong> 1층 로비 ~ 2~3층 일부 구역<br>
                • <strong>특징:</strong> 10층 높이의 전체 타워가 아니라, 로비 및 2층 식당(Dining Room) 등 하부 구역까지만 접근할 수 있도록 동선이 제한되어 빠른 조사가 가능합니다.
            </p>

            <div class="dict-section-title">2. 공식 룸 및 구역 목록 (ROOMS)</div>
            <p class="dict-text">
                • <strong>고정 오픈 구역:</strong> 1층 Entrance Hallway (현관 로비)<br>
                • <strong>가변 오픈 구역:</strong> 제한된 저층부 계단 및 식당(Dining Room) 주변 구역
            </p>

            <div class="dict-section-title">3. 공식 은신처 상세 목록 (SANCTIONED HIDING SPOTS)</div>
            <p class="dict-text">
                난이도 및 플레이어 수에 따라 무작위로 열리거나 막히는 공식 은신처들입니다:<br><br>
                • <strong>저층부:</strong> 1층 계단 밑 틈새 및 개방된 저층부 가구 뒤편 구석
            </p>

            <div class="dict-section-title">4. 저주받은 물건 및 주요 오브젝트 고정 위치 (CURSED POSSESSIONS & PROP)</div>
            <p class="dict-text">
                • <strong>저주받은 물건:</strong> 개방된 저층부 내의 고정 테이블 및 선반 위<br>
                • <strong>두꺼비집 (Fuse Box):</strong> 1층 현관 계단 옆 또는 저층부 벽면 중 1곳
            </p>
        `
    },
    {
        name: "Prison",
        category: "Medium",
        rooms: "31개 룸 (조사 구역 29개)",
        size: "중형 폐교도소 (지상 2층 + 야외 안뜰)",
        tip: "A동/B동 수감구역과 행정구역, 식당, 의무실로 나뉩니다. 모든 저주받은 물건이 입구 현관 복도(Entrance Hallway)에 모여 스폰됩니다.",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 기본 개요 (Overview)</div>
            <p class="dict-text">
                • <strong>공식 분류:</strong> 중형 맵 (Medium Map / Level 10 해금)<br>
                • <strong>총 룸 수:</strong> 31개 룸 (1층 19개, 2층 12개 / 유령방 가능 29개)<br>
                • <strong>층수:</strong> 지상 1층 + 지상 2층<br>
                • <strong>조명 스위치 수:</strong> 20개<br>
                • <strong>특징:</strong> A블록 및 B블록 수감동은 2개 층이 개방된 높은 층고 구조이며, 수감동 끝 비상문을 통해 야외 안뜰(Courtyard)로 탈출할 수 있습니다.
            </p>

            <div class="dict-section-title">2. 공식 룸 및 구역 목록 (Rooms)</div>
            <p class="dict-text">
                <strong>[지상 1층 (Ground Floor)]</strong><br>
                • Entrance (입구 현관 복도), Main Hallway (중앙 복도), Office Hallway, Warden's Office (소장실), Chief Security (보안실), Main Office (행정실), Inspection, Visitation (면회실), Cafeteria (식당), Cell Block A (1F 좌/우/중앙), Cell Block B (1F 좌/우/중앙)<br><br>
                <strong>[지상 2층 (Upstairs)]</strong><br>
                • Infirmary (의무실), Infirmary Hallway, Cafeteria Security (식당 보안 발코니), Cell Block A (2F 좌/우), Cell Block B (2F 좌/우)
            </p>

            <div class="dict-section-title">3. 공식 은신처 상세 목록 (Sanctioned Hiding Spots)</div>
            <p class="dict-text">
                난이도 및 플레이어 수에 따라 무작위로 열리거나 막히는 공식 은신처들입니다:<br><br>
                • <strong>Entrance:</strong> 현관 맨 뒤쪽 철제 락커 (Lockers)<br>
                • <strong>Cafeteria:</strong> 식당 좌측 쓰레기통 4개 뒤편 틈새<br>
                • <strong>Infirmary:</strong> 2층 의무실 첫 번째 방 맨 우측 철제 락커 (Lockers)<br>
                • <strong>Cafeteria Security:</strong> 식당 보안 발코니 우측 쓰레기통 2개 뒤편<br>
                • <em>비공식 팁: 감옥 감방(Cell) 안쪽 침대 뒤는 유령이 시야를 잃기 쉬워 사냥 회피에 유용합니다.</em>
            </p>

            <div class="dict-section-title">4. 저주받은 물건 및 주요 오브젝트 고정 위치 (Cursed Possessions & Props)</div>
            <p class="dict-text">
                • <strong>모든 저주받은 물건은 Entrance Hallway(현관 복도)에 집결 스폰됩니다:</strong><br>
                &nbsp;&nbsp;- <strong>타로 카드:</strong> 파란색 플라스틱 상자 안<br>
                &nbsp;&nbsp;- <strong>유령 거울:</strong> 의자 열(Row of chairs) 아래 바닥<br>
                &nbsp;&nbsp;- <strong>부두 인형:</strong> 상자들 사이 작은 테이블 위<br>
                &nbsp;&nbsp;- <strong>원숭이 손:</strong> 테이블 위 파란 상자 옆<br>
                &nbsp;&nbsp;- <strong>음악 상자:</strong> 검은색 플라스틱 상자 안<br>
                &nbsp;&nbsp;- <strong>위자보드:</strong> 상자가 놓인 테이블 뒤편 바닥<br>
                &nbsp;&nbsp;- <strong>소환진:</strong> 복도 끝 바닥 중앙<br>
                • <strong>두꺼비집 (Fuse Box):</strong> 1층 소장실 통로, 2층 의무실 복도 소형룸, 또는 A/B 블록 제어실 중 1곳
            </p>
        `
    },
    {
        name: "Prison - Restricted",
        category: "Small",
        rooms: "구역별 가변",
        size: "제한된 소형 감옥",
        tip: "감옥 전체가 아닌, 현관 입구와 무작위로 개방된 일부 수감구역/복도만 탐색하는 소형 전용 맵입니다.",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 기본 개요 (OVERVIEW)</div>
            <p class="dict-text">
                • <strong>공식 분류:</strong> 소형 맵 (Small Map / 제한구역)<br>
                • <strong>총 룸(구역) 수:</strong> 구역별 가변 (로비 및 무작위 1개 수감 블록)<br>
                • <strong>층수:</strong> 지상 1층 + 지상 2층 일부<br>
                • <strong>특징:</strong> 대형 감옥과 달리 진입 로비와 무작위로 열린 일부 수감 블록(Cell Block) 구역만 진입할 수 있으며 나머지 통로는 바리케이드로 차단됩니다.
            </p>

            <div class="dict-section-title">2. 공식 룸 및 구역 목록 (ROOMS)</div>
            <p class="dict-text">
                • <strong>고정 오픈 구역:</strong> Entrance (입구 현관 복도)<br>
                • <strong>가변 오픈 구역:</strong> 매 게임마다 무작위로 배정된 A블록 또는 B블록 일부 수감방 및 통로
            </p>

            <div class="dict-section-title">3. 공식 은신처 상세 목록 (SANCTIONED HIDING SPOTS)</div>
            <p class="dict-text">
                난이도 및 플레이어 수에 따라 무작위로 열리거나 막히는 공식 은신처들입니다:<br><br>
                • <strong>현관 및 수감동:</strong> 열린 수감방 내부 침대 뒤편 틈새 및 철제 락커 (Lockers)
            </p>

            <div class="dict-section-title">4. 저주받은 물건 및 주요 오브젝트 고정 위치 (CURSED POSSESSIONS & PROPS)</div>
            <p class="dict-text">
                • <strong>저주받은 물건 스폰:</strong> 기존 감옥과 동일하게 Entrance Hallway(현관 복도) 근처에 집결 스폰됩니다.<br>
                • <strong>두꺼비집 (Fuse Box):</strong> 1층 소장실 통로 또는 개방된 수감동 제어실 중 1곳
            </p>
        `
    },
    {
        name: "Maple Lodge Campsite",
        category: "Medium",
        rooms: "대형 야외 캠핑장 (통나무집 포함)",
        size: "중형 야외 리조트 캠핑장",
        tip: "호숫가와 2층 통나무 캐빈(Cabin)이 포함된 야외 맵입니다. 날씨와 안개에 주의하며 캠프파이어 주변을 활용하세요.",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 기본 개요 (Overview)</div>
            <p class="dict-text">
                • <strong>공식 분류:</strong> 중형 야외 맵 (Medium Map / Level 19 해금)<br>
                • <strong>구조:</strong> 중앙 캠핑장, 리셉션 빌딩, 화장실 건물, 호숫가 부두, 2층 통나무 캐빈(Cabin J. & D.)<br>
                • <strong>특징:</strong> 비나 눈, 안개 등 기상 조건에 따라 시야 차이가 극심하며, 캠핑 구역과 호숫가 캐빈 간의 거리가 멉니다.
            </p>

            <div class="dict-section-title">2. 주요 구역 목록 (Zones)</div>
            <p class="dict-text">
                • <strong>Reception Building (안내소):</strong> 리셉션 카운터 및 장비실<br>
                • <strong>Storage Tent (창고 텐트):</strong> 발전기 및 캠핑 보관실<br>
                • <strong>Restrooms (공용 화장실):</strong> 남/녀 화장실 건물<br>
                • <strong>Campfire Area (중앙 모닥불):</strong> 대형 캠프파이어 및 통나무 좌석<br>
                • <strong>Tents A / B / C / D:</strong> 각 구역별 캠핑 텐트<br>
                • <strong>Lake & Dock (호수 및 부두):</strong> 호숫가 낚시터 및 보트 선착장<br>
                • <strong>2-Story Cabin (2층 통나무집):</strong> 1층 거실/주방 + 2층 침실 및 발코니
            </p>

            <div class="dict-section-title">3. 공식 은신처 상세 목록 (Sanctioned Hiding Spots)</div>
            <p class="dict-text">
                난이도 및 플레이어 수에 따라 무작위로 열리거나 막히는 공식 은신처들입니다:<br><br>
                • <strong>리셉션 빌딩:</strong> 건물 뒤편 발전기 및 상자 옆 틈새<br>
                • <strong>창고 텐트:</strong> 내부 대형 철제 선반 뒤편<br>
                • <strong>2층 통나무집 (Cabin):</strong> 2층 안방 옷장 (Closet)<br>
                • <strong>호숫가 부두:</strong> 선착장 보트 및 통나무 더미 뒤<br>
                • <strong>텐트 구역:</strong> Blue Tent 및 Green Tent 내부 침낭 뒤
            </p>

            <div class="dict-section-title">4. 저주받은 물건 및 주요 오브젝트 고정 위치 (Cursed Possessions & Props)</div>
            <p class="dict-text">
                • <strong>타로 카드 (Tarot Cards):</strong> 2층 통나무집(Cabin) 1층 거실 탁자 위<br>
                • <strong>소환진 (Summoning Circle):</strong> 2층 통나무집(Cabin) 1층 바닥 중앙<br>
                • <strong>유령 거울 (Haunted Mirror):</strong> 리셉션 빌딩 외벽<br>
                • <strong>부두 인형 (Voodoo Doll):</strong> 중앙 캠프파이어 옆 통나무 벤치 위<br>
                • <strong>원숭이 손 (Monkey Paw):</strong> 호숫가 부두(Dock) 맨 끝 의자 위<br>
                • <strong>음악 상자 (Music Box):</strong> 안내소(Reception) 카운터 위<br>
                • <strong>위자보드 (Ouija Board):</strong> 공용 화장실 세면대 선반 위<br>
                • <strong>두꺼비집 (Fuse Box):</strong> 리셉션 건물 뒤 외벽 또는 통나무집 1층 외벽 중 1곳
            </p>
        `
    },
    {
        name: "Brownstone High School",
        category: "Large",
        rooms: "64개 룸 (교실 58개)",
        size: "대형 폐학교 (지상 2층 + 체육관)",
        tip: "수많은 교실과 긴 복도(Corridor), 대형 체육관(Basketball Court)으로 구성된 클래식 대형 맵입니다. 모든 저주받은 물건이 중앙 로비(Lobby)에 모여 있습니다.",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 기본 개요 (Overview)</div>
            <p class="dict-text">
                • <strong>공식 분류:</strong> 대형 맵 (Large Map / Level 5 해금)<br>
                • <strong>총 룸 수:</strong> 64개 룸 (1층 34개, 2층 30개 / 교실 58개)<br>
                • <strong>층수:</strong> 지상 1층 + 지상 2층<br>
                • <strong>조명 스위치 수:</strong> 33개<br>
                • <strong>특징:</strong> 1층과 2층 복도가 각각 3개의 Corridor 구역으로 나뉘어 있으며, 모든 교실마다 유령이 벨을 울릴 수 있는 전화기가 배치되어 있습니다.
            </p>

            <div class="dict-section-title">2. 공식 룸 및 구역 목록 (Rooms)</div>
            <p class="dict-text">
                • <strong>Main Lobby:</strong> 1층 중앙 현관 로비<br>
                • <strong>Corridors 1F / 2F:</strong> 1층 및 2층 중앙/좌측/우측 복도<br>
                • <strong>Library 1F / 2F:</strong> 1층 및 2층 도서관<br>
                • <strong>Basketball Court:</strong> 실내 체육관, 관람석 스탠드 및 라커룸<br>
                • <strong>Classrooms 1 ~ 32:</strong> 총 32개의 일반 교실 및 과학실/미술실<br>
                • <strong>Restrooms 1F / 2F:</strong> 1층 및 2층 남/여 화장실
            </p>

            <div class="dict-section-title">3. 공식 은신처 상세 목록 (Sanctioned Hiding Spots)</div>
            <p class="dict-text">
                난이도 및 플레이어 수에 따라 무작위로 열리거나 막히는 공식 은신처들입니다:<br><br>
                • <strong>1층 도서관 (Library):</strong> 책장 사이 상자 더미 뒤<br>
                • <strong>6, 8, 12, 20번 교실:</strong> 교실 내부 서랍장(Drawer units) 뒤편<br>
                • <strong>11, 15, 27, 31번 교실:</strong> 넘어진 책장(Bookshelves) 뒤편<br>
                • <em>비공식 팁: 복도 화장실 칸막이 안쪽이나 체육관 스탠드 구석도 시야 차단에 유용합니다.</em>
            </p>

            <div class="dict-section-title">4. 저주받은 물건 및 주요 오브젝트 고정 위치 (Cursed Possessions & Props)</div>
            <p class="dict-text">
                • <strong>모든 저주받은 물건은 1층 Main Lobby(중앙 로비)에 집결 스폰됩니다:</strong><br>
                &nbsp;&nbsp;- <strong>타로 카드:</strong> 로비 좌측 벽면 벤치 위<br>
                &nbsp;&nbsp;- <strong>음악 상자:</strong> 로비 우측 벽면 벤치 위<br>
                &nbsp;&nbsp;- <strong>부두 인형:</strong> 로비 안쪽 끝 벤치 위<br>
                &nbsp;&nbsp;- <strong>원숭이 손:</strong> 로비 우측 기둥 앞 상자 위<br>
                &nbsp;&nbsp;- <strong>위자보드:</strong> 로비 좌측 기둥 뒤 바닥<br>
                &nbsp;&nbsp;- <strong>유령 거울:</strong> 로비 우측 기둥 뒤 바닥<br>
                &nbsp;&nbsp;- <strong>소환진:</strong> 로비 안쪽 중앙 바닥<br>
                • <strong>두꺼비집 (Fuse Box):</strong> 1층 좌측 복도 끝, 1층 우측 복도 끝, 또는 2층 복도 벽면 중 1곳
            </p>
        `
    },
    {
        name: "Brownstone High School - Restricted",
        category: "Medium",
        rooms: "구역별 가변",
        size: "제한된 소형 고등학교",
        tip: "64개의 방이 모두 열리던 거대한 고등학교 대신, 중앙 로비와 무작위 1개 구역(1층 또는 2층 일부 윙)만 개방되는 제한 버전입니다.",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 기본 개요 (OVERVIEW)</div>
            <p class="dict-text">
                • <strong>공식 분류:</strong> 중형 맵 (Medium Map / 제한구역)<br>
                • <strong>총 룸(구역) 수:</strong> 구역별 가변 (로비 + 무작위 교실 구역)<br>
                • <strong>층수:</strong> 지상 1층 ~ 지상 2층 일부 윙<br>
                • <strong>특징:</strong> 메인 로비와 사이드 문을 통해 무작위로 배정된 특정 구역의 교실들과 복도 일부만 진입할 수 있으며, 나머지 구역은 철저히 차단됩니다.
            </p>

            <div class="dict-section-title">2. 공식 룸 및 구역 목록 (ROOMS)</div>
            <p class="dict-text">
                • <strong>고정 오픈 구역:</strong> Main Lobby (중앙 로비)<br>
                • <strong>가변 오픈 구역:</strong> 배정된 변형에 따른 특정 교실들 및 남/여 화장실 칸막이 구역
            </p>

            <div class="dict-section-title">3. 공식 은신처 상세 목록 (SANCTIONED HIDING SPOTS)</div>
            <p class="dict-text">
                난이도 및 플레이어 수에 따라 무작위로 열리거나 막히는 공식 은신처들입니다:<br><br>
                • <strong>교실 및 복도:</strong> 배정된 교실 내부 서랍장/책장 뒤편, 또는 화장실 칸막이(Toilet stalls) 공간
            </p>

            <div class="dict-section-title">4. 저주받은 물건 및 주요 오브젝트 고정 위치 (CURSED POSSESSIONS & PROPS)</div>
            <p class="dict-text">
                • <strong>모든 저주받은 물건은 Main Lobby(중앙 로비)에 집결 스폰됩니다:</strong><br>
                &nbsp;&nbsp;- 로비 양쪽 벤치, 기둥 근처 및 바닥 중앙에 분산 스폰<br>
                • <strong>두꺼비집 (Fuse Box):</strong> 오픈된 윙의 복도 끝 벽면 또는 중앙 로비 인근 중 1곳
            </p>
        `
    },
    {
        name: "Sunny Meadows Mental Institution",
        category: "Large",
        rooms: "69개 룸 전체 개방",
        size: "초대형 정신병원 (지상 1층 + 지하 1층)",
        tip: "파스모포비아 최대 규모의 초대형 맵입니다. 4개 대형 병동과 안뜰, 지하 영안실/격리구역 전체가 열립니다. 모든 저주받은 물건은 중앙 예배당(Chapel)에 집결합니다.",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 기본 개요 (Overview)</div>
            <p class="dict-text">
                • <strong>공식 분류:</strong> 초대형 맵 (Large Map / Level 20 해금)<br>
                • <strong>총 룸 수:</strong> 69개 룸 전체 개방<br>
                • <strong>층수:</strong> 1층 지상 병동 구역 + 안뜰(Courtyard) + 지하 격리/영안 구역<br>
                • <strong>조명 스위치 수:</strong> 39개<br>
                • <strong>특징:</strong> 크기가 방대하여 마이크로폰과 온도계 탐색이 필수이며, 불이 꺼진 상태의 복도는 정신력을 급격히 소모시킵니다.
            </p>

            <div class="dict-section-title">2. 공식 룸 및 5대 핵심 구역 목록 (Rooms)</div>
            <p class="dict-text">
                • <strong>중앙 구역:</strong> Foyer(로비), Chapel(중앙 예배당), Courtyard(중앙 야외 안뜰)<br>
                • <strong>1층 남성 병동 (Male Wing):</strong> 1층 서쪽 병동 및 휴게실<br>
                • <strong>1층 여성 병동 (Female Wing):</strong> 1층 동쪽 병동 및 욕실<br>
                • <strong>1층 병원/수술실 병동 (Hospital Wing):</strong> 1층 북쪽 집중 치료실<br>
                • <strong>지하 격리 구역 (Basement Restricted Wing):</strong> 지하 서쪽 독방 및 고문실<br>
                • <strong>지하 영안실 구역 (Basement Morgue Wing):</strong> 지하 동쪽 부검실 및 시신 안치실
            </p>

            <div class="dict-section-title">3. 공식 은신처 상세 목록 (Sanctioned Hiding Spots)</div>
            <p class="dict-text">
                난이도 및 플레이어 수에 따라 무작위로 열리거나 막히는 공식 은신처들입니다:<br><br>
                • 중앙 복도 및 예배당 앞 이동침대(Gurney) 뒤편<br>
                • 각 병실 내부 철제 사물함(Lockers) 및 휠체어/스크린 파티션 뒤<br>
                • 지하 영안실(Morgue) 시신 보관 냉동고(Morgue cooler) 내부<br>
                • 안뜰 외벽 선반 틈새 및 계단 아래 창고
            </p>

            <div class="dict-section-title">4. 저주받은 물건 및 주요 오브젝트 고정 위치 (Cursed Possessions & Props)</div>
            <p class="dict-text">
                • <strong>모든 저주받은 물건 7종은 중앙 Chapel(예배당) 내부 제단과 바닥에 집결 스폰됩니다:</strong><br>
                &nbsp;&nbsp;- <strong>소환진:</strong> 예배당 바닥 중앙 붉은 마법진<br>
                &nbsp;&nbsp;- <strong>원숭이 손:</strong> 십자가 제단 아래<br>
                &nbsp;&nbsp;- <strong>타로 카드, 오르골, 부두 인형, 위자보드, 유령 거울:</strong> 예배당 제단 및 촛대 주변 선반<br>
                • <strong>두꺼비집 (Fuse Box):</strong> 1층 로비 복도, 예배당 유틸리티실, 안뜰 외벽, 지하 보일러실 중 1곳
            </p>
        `
    },
    {
        name: "Sunny Meadows Mental Institution - Restricted",
        category: "Small",
        rooms: "15~20개 룸 (구역별 가변)",
        size: "제한된 소형 정신병원 (5개 변형 구역 중 1곳)",
        tip: "대형 써니 메도우 전체가 아닌, 중앙 예배당(Chapel)과 무작위 1개 병동(총 5개 변형)만 열리는 소형(Small) 전용 맵입니다.",
        isDetailed: true,
        detailedHtml: `
            <div class="dict-section-title">1. 기본 개요 (Restricted 전용 시스템)</div>
            <p class="dict-text">
                • <strong>공식 분류:</strong> 소형 맵 (Small Map / Level 17 해금)<br>
                • <strong>총 룸(구역) 수:</strong> 약 15~20개 (열리는 윙에 따라 상이)<br>
                • <strong>맵 작동 방식:</strong> 69개 룸 전체가 열리는 일반 대형 써니 메도우와 달리, <strong>중앙 진입 복도 + 중앙 예배당(Chapel) + 5개 구역 중 무작위 1개 윙(Wing)</strong>만 문이 열리고 나머지 통로는 쇠사슬과 바리케이드로 영구 차단됩니다.<br>
                • <strong>5가지 무작위 오픈 변형:</strong><br>
                &nbsp;&nbsp;1) 1층 남성 병동 (Male Wing)<br>
                &nbsp;&nbsp;2) 1층 여성 병동 (Female Wing)<br>
                &nbsp;&nbsp;3) 1층 입원/수술 병동 (Hospital Wing)<br>
                &nbsp;&nbsp;4) 지하 격리구역 (Basement Restricted Area)<br>
                &nbsp;&nbsp;5) 지하 영안실 구역 (Basement Morgue)
            </p>

            <div class="dict-section-title">2. 공식 룸 및 오픈 구역 판정 (Rooms)</div>
            <p class="dict-text">
                • <strong>고정 오픈 구역:</strong> Entrance Foyer (입구 로비), Chapel (중앙 예배당)<br>
                • <strong>가변 오픈 구역:</strong> 매 게임마다 선택된 1개 윙의 복도, 입원실, 처치실, 화장실만 진입 가능
            </p>

            <div class="dict-section-title">3. 공식 은신처 상세 목록 (Sanctioned Hiding Spots)</div>
            <p class="dict-text">
                • 중앙 복도/예배당 앞 이동식 이동침대(Gurney) 뒤편<br>
                • 오픈된 각 병실(Room) 내부 철제 락커 및 휠체어/스크린 파티션 뒤<br>
                • 영안실(Morgue) 오픈 시: 시신 보관 냉동고(Morgue Cooler) 내부
            </p>

            <div class="dict-section-title">4. 저주받은 물건 및 주요 오브젝트 고정 위치 (Cursed Possessions & Props)</div>
            <p class="dict-text">
                • <strong>모든 저주받은 물건 7종은 오픈된 병동 위치와 무관하게 중앙 Chapel(예배당) 내부에 모여서 스폰됩니다:</strong><br>
                &nbsp;&nbsp;- <strong>소환진:</strong> 예배당 바닥 붉은 마법진<br>
                &nbsp;&nbsp;- <strong>원숭이 손:</strong> 십자가 제단 아래<br>
                &nbsp;&nbsp;- <strong>타로 카드, 오르골, 부두 인형, 위자보드, 거울:</strong> 제단 및 촛대 주변<br>
                • <strong>두꺼비집 (Fuse Box):</strong> 1층 중앙 진입 복도 좌측 벽면, 예배당 옆 유틸리티실, 안뜰 외벽, 또는 열린 지하 병동 출구 벽면 중 1곳
            </p>
        `
    }
];
