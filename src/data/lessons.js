export const ui = {
  ru: {
    navBlog: "Блог",
    navKorean: "Учить корейский",
    navJapanese: "Учить японский",
    language: "Русский",
    pageTitle: "Учить корейский",
    unitLabel: "Юнит",
    levelLabel: "Уровень",
    lessonsLabel: "уроков",
    openUnit: "Открыть юнит",
    selectedTitle: "Содержание юнита",
    selectedHint: "Формат можно расширить до отдельных страниц уроков, как в каталоге.",
    aboutTitle: "О нас",
    learningTitle: "Обучение",
    termsTitle: "Правила и приватность",
    socialTitle: "Соцсети",
    tagline: "Разговорный корейский по жизненным сценариям.",
    appStore: "App Store",
    googlePlay: "Google Play",
    copyright: "© 2026 HanTalk. Учебный демо-проект."
  },
  en: {
    navBlog: "Blog",
    navKorean: "Learn Korean",
    navJapanese: "Learn Japanese",
    language: "English",
    pageTitle: "Learn Korean",
    unitLabel: "Unit",
    levelLabel: "Level",
    lessonsLabel: "lessons",
    openUnit: "Open unit",
    selectedTitle: "Unit Contents",
    selectedHint: "This format can grow into separate lesson pages like a course catalog.",
    aboutTitle: "About Us",
    learningTitle: "Learning",
    termsTitle: "Privacy And Terms",
    socialTitle: "Social",
    tagline: "Speaking Korean through everyday scenarios.",
    appStore: "App Store",
    googlePlay: "Google Play",
    copyright: "© 2026 HanTalk. Educational demo project."
  }
};

export const units = [
  {
    number: "01",
    level: "Beginner",
    title: { ko: "인사와 자기소개", en: "Basic Greetings", ru: "Приветствия и знакомство" },
    summary: {
      en: "Say hello, introduce yourself, and respond politely.",
      ru: "Поздороваться, представиться и вежливо ответить."
    },
    lessons: ["안녕하세요", "저는 다리아예요", "만나서 반가워요"]
  },
  {
    number: "02",
    level: "Beginner",
    title: { ko: "하루 일과", en: "Talking about Your Day", ru: "Распорядок дня" },
    summary: {
      en: "Describe simple daily routines and time.",
      ru: "Описать простые ежедневные действия и время."
    },
    lessons: ["아침에 일어나요", "학교에 가요", "밤에 쉬어요"]
  },
  {
    number: "03",
    level: "Beginner",
    title: { ko: "친구와 약속", en: "Making Plans with Friends", ru: "Встреча с друзьями" },
    summary: {
      en: "Suggest a time, place, and activity.",
      ru: "Предложить время, место и занятие."
    },
    lessons: ["시간 있어요?", "토요일 어때요?", "카페에서 만나요"]
  },
  {
    number: "04",
    level: "Beginner",
    title: { ko: "식당 주문", en: "Ordering at a Restaurant", ru: "Заказ в ресторане" },
    summary: {
      en: "Ask for a menu, order food, and pay.",
      ru: "Попросить меню, заказать еду и оплатить."
    },
    lessons: ["메뉴 주세요", "이거 하나 주세요", "계산할게요"]
  },
  {
    number: "05",
    level: "Beginner",
    title: { ko: "가게에서 물건 사기", en: "Shopping in Korea", ru: "Покупки в Корее" },
    summary: {
      en: "Ask prices, sizes, and payment options.",
      ru: "Спросить цену, размер и способ оплаты."
    },
    lessons: ["얼마예요?", "다른 사이즈 있어요?", "카드 돼요?"]
  },
  {
    number: "06",
    level: "Beginner",
    title: { ko: "길 찾기", en: "Asking for Directions", ru: "Как спросить дорогу" },
    summary: {
      en: "Ask where something is and follow simple directions.",
      ru: "Спросить, где находится место, и понять простой маршрут."
    },
    lessons: ["어디예요?", "왼쪽으로 가세요", "가까워요"]
  },
  {
    number: "07",
    level: "Beginner",
    title: { ko: "어제 한 일", en: "Talking about the Past", ru: "Разговор о прошлом" },
    summary: {
      en: "Say what you did yesterday or last week.",
      ru: "Сказать, что вы делали вчера или на прошлой неделе."
    },
    lessons: ["어제 뭐 했어요?", "영화를 봤어요", "친구를 만났어요"]
  },
  {
    number: "08",
    level: "Beginner",
    title: { ko: "주말 계획", en: "Weekend Plans", ru: "Планы на выходные" },
    summary: {
      en: "Talk about future plans and preferences.",
      ru: "Обсудить планы и предпочтения."
    },
    lessons: ["주말에 뭐 해요?", "집에서 쉴 거예요", "같이 갈까요?"]
  },
  {
    number: "09",
    level: "Beginner",
    title: { ko: "가격 비교", en: "Comparing Prices", ru: "Сравнение цен" },
    summary: {
      en: "Compare items and choose what fits.",
      ru: "Сравнить товары и выбрать подходящий."
    },
    lessons: ["이게 더 싸요", "조금 비싸요", "이걸로 할게요"]
  },
  {
    number: "10",
    level: "Beginner",
    title: { ko: "약속 바꾸기", en: "Changing an Appointment", ru: "Как перенести встречу" },
    summary: {
      en: "Reschedule politely and confirm details.",
      ru: "Вежливо перенести встречу и подтвердить детали."
    },
    lessons: ["시간을 바꿀 수 있어요?", "내일 괜찮아요?", "다시 확인할게요"]
  },
  {
    number: "11",
    level: "Intermediate",
    title: { ko: "병원 방문", en: "Going to the Clinic", ru: "Визит в клинику" },
    summary: {
      en: "Explain symptoms and understand basic instructions.",
      ru: "Объяснить симптомы и понять базовые рекомендации."
    },
    lessons: ["어디가 아파요?", "열이 있어요", "약을 드세요"]
  },
  {
    number: "12",
    level: "Intermediate",
    title: { ko: "여행 준비", en: "Planning a Trip", ru: "Подготовка к поездке" },
    summary: {
      en: "Talk about reservations, luggage, and schedules.",
      ru: "Обсудить бронь, багаж и расписание."
    },
    lessons: ["예약했어요", "짐을 챙겨요", "몇 시에 출발해요?"]
  },
  {
    number: "13",
    level: "Intermediate",
    title: { ko: "처음 만난 사람", en: "First Conversation", ru: "Первый разговор" },
    summary: {
      en: "Keep a natural first conversation going.",
      ru: "Поддержать естественный первый разговор."
    },
    lessons: ["어디에서 왔어요?", "한국어를 배워요", "취미가 뭐예요?"]
  },
  {
    number: "14",
    level: "Intermediate",
    title: { ko: "날씨와 옷차림", en: "Weather and Clothes", ru: "Погода и одежда" },
    summary: {
      en: "Describe weather and talk about what to wear.",
      ru: "Описать погоду и обсудить, что надеть."
    },
    lessons: ["오늘 추워요", "비가 와요", "외투를 입으세요"]
  },
  {
    number: "15",
    level: "Intermediate",
    title: { ko: "대중교통", en: "Public Transportation", ru: "Общественный транспорт" },
    summary: {
      en: "Use subway, buses, transfers, and cards.",
      ru: "Пользоваться метро, автобусами, пересадками и картами."
    },
    lessons: ["몇 번 버스예요?", "환승해야 해요", "교통카드 있어요"]
  },
  {
    number: "16",
    level: "Intermediate",
    title: { ko: "첫 출근", en: "First Day at Work", ru: "Первый день на работе" },
    summary: {
      en: "Introduce yourself at work and ask simple questions.",
      ru: "Представиться на работе и задать простые вопросы."
    },
    lessons: ["오늘부터 일해요", "잘 부탁드립니다", "회의실이 어디예요?"]
  },
  {
    number: "17",
    level: "Intermediate",
    title: { ko: "회사 스몰토크", en: "Small Talk at Work", ru: "Small talk в офисе" },
    summary: {
      en: "Chat with coworkers naturally and politely.",
      ru: "Естественно и вежливо поговорить с коллегами."
    },
    lessons: ["점심 드셨어요?", "요즘 바빠요?", "커피 마실까요?"]
  },
  {
    number: "18",
    level: "Intermediate",
    title: { ko: "점심 먹기", en: "Lunch with Coworkers", ru: "Обед с коллегами" },
    summary: {
      en: "Choose a menu and talk during lunch.",
      ru: "Выбрать меню и поговорить во время обеда."
    },
    lessons: ["뭐 먹을까요?", "매운 거 괜찮아요?", "맛있게 드세요"]
  },
  {
    number: "19",
    level: "Intermediate",
    title: { ko: "노래방 가기", en: "Going to Karaoke", ru: "Поход в караоке" },
    summary: {
      en: "Invite friends and choose songs.",
      ru: "Пригласить друзей и выбрать песни."
    },
    lessons: ["노래방 갈래요?", "이 노래 알아요?", "한 곡 더 불러요"]
  },
  {
    number: "20",
    level: "Intermediate",
    title: { ko: "편의점 알바", en: "Convenience Store Shift", ru: "Смена в магазине" },
    summary: {
      en: "Handle common phrases in a convenience store.",
      ru: "Использовать типовые фразы в магазине у дома."
    },
    lessons: ["봉투 필요하세요?", "영수증 드릴까요?", "잠시만 기다려 주세요"]
  }
];
