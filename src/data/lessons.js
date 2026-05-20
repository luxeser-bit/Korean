export const ui = {
  ru: {
    navBlog: "Блог",
    navKorean: "Учить корейский",
    navJapanese: "Учить японский",
    language: "Русский",
    pageTitle: "Learn Korean",
    unitLabel: "Unit",
    levelLabel: "Уровень",
    lessonsLabel: "раздела",
    selectedTitle: "Русская локализация юнита",
    selectedHint: "Этот прототип показывает, как русская локализация может лечь поверх существующей структуры курса Teuida.",
    aboutTitle: "О нас",
    learningTitle: "Обучение",
    termsTitle: "Правила и приватность",
    socialTitle: "Соцсети",
    tagline: "Неофициальный прототип русской локализации для предложения команде Teuida.",
    disclaimer: "Структура юнитов соответствует публичной странице Teuida. Тексты на русском подготовлены как демонстрационный слой локализации; проект не является официальным продуктом Teuida.",
    appStore: "App Store",
    googlePlay: "Google Play",
    sourceTitle: "Оригинальное название",
    russianTitle: "Русский вариант",
    localizationScope: "Что локализовать",
    copyright: "© 2026 HanTalk. Неофициальный localization prototype."
  },
  en: {
    navBlog: "Blog",
    navKorean: "Learn Korean",
    navJapanese: "Learn Japanese",
    language: "English",
    pageTitle: "Learn Korean",
    unitLabel: "Unit",
    levelLabel: "Level",
    lessonsLabel: "sections",
    selectedTitle: "Russian Localization Layer",
    selectedHint: "This prototype shows how Russian localization can map onto Teuida's existing course structure.",
    aboutTitle: "About Us",
    learningTitle: "Learning",
    termsTitle: "Privacy And Terms",
    socialTitle: "Social",
    tagline: "Unofficial Russian localization prototype for a Teuida proposal.",
    disclaimer: "Unit structure follows Teuida's public course page. Russian text is a demonstration localization layer; this is not an official Teuida product.",
    appStore: "App Store",
    googlePlay: "Google Play",
    sourceTitle: "Original title",
    russianTitle: "Russian title",
    localizationScope: "Localization scope",
    copyright: "© 2026 HanTalk. Unofficial localization prototype."
  }
};

const localizationScope = {
  en: ["Unit title", "Lesson labels", "Navigation and help text"],
  ru: ["Название юнита", "Подписи уроков", "Навигация и справочный текст"]
};

export const units = [
  {
    number: "01",
    level: "Beginner",
    title: { en: "Korean Blind Date", ru: "Свидание вслепую по-корейски" },
    summary: {
      en: "Localized entry point for a dating scenario unit.",
      ru: "Локализация юнита со сценарием знакомства и свидания."
    },
    lessons: localizationScope
  },
  {
    number: "02",
    level: "Beginner",
    title: { en: "First Day At Cafe Job", ru: "Первый день работы в кафе" },
    summary: {
      en: "Russian layer for cafe-work onboarding phrases and lesson labels.",
      ru: "Русский слой для фраз и подписей уроков о первом дне работы в кафе."
    },
    lessons: localizationScope
  },
  {
    number: "03",
    level: "Beginner",
    title: { en: "Korean Office", ru: "Корейский офис" },
    summary: {
      en: "Office scenario localization for workplace context.",
      ru: "Локализация офисного сценария и рабочего контекста."
    },
    lessons: localizationScope
  },
  {
    number: "04",
    level: "Beginner",
    title: { en: "Korean Restaurant: Ordering In The Restaurant", ru: "Корейский ресторан: заказ в ресторане" },
    summary: {
      en: "Restaurant ordering unit with Russian section naming.",
      ru: "Юнит про заказ в ресторане с русскими названиями разделов."
    },
    lessons: localizationScope
  },
  {
    number: "05",
    level: "Beginner",
    title: { en: "Street Interview", ru: "Уличное интервью" },
    summary: {
      en: "Street interview scenario mapped for Russian learners.",
      ru: "Сценарий уличного интервью, адаптированный для русскоязычных учеников."
    },
    lessons: localizationScope
  },
  {
    number: "06",
    level: "Beginner",
    title: { en: "Making Appointment With Friends", ru: "Как договориться о встрече с друзьями" },
    summary: {
      en: "Russian localization for making plans and appointments.",
      ru: "Русская локализация сценария про планы и договоренности."
    },
    lessons: localizationScope
  },
  {
    number: "07",
    level: "Beginner",
    title: { en: "Cafeteria", ru: "Столовая" },
    summary: {
      en: "Cafeteria unit labels prepared for Russian UI.",
      ru: "Русские подписи и названия для юнита о столовой."
    },
    lessons: localizationScope
  },
  {
    number: "08",
    level: "Beginner",
    title: { en: "First Lesson With The Teacher", ru: "Первый урок с преподавателем" },
    summary: {
      en: "First-class scenario localized for Russian onboarding.",
      ru: "Сценарий первого урока, локализованный для русскоязычного онбординга."
    },
    lessons: localizationScope
  },
  {
    number: "09",
    level: "Beginner",
    title: { en: "Convenience Store", ru: "Магазин у дома" },
    summary: {
      en: "Convenience store scenario with Russian course labels.",
      ru: "Сценарий магазина у дома с русскими подписями курса."
    },
    lessons: localizationScope
  },
  {
    number: "10",
    level: "Beginner",
    title: { en: "Ordering At A Coffee Shop", ru: "Заказ в кофейне" },
    summary: {
      en: "Coffee shop ordering unit ready for Russian localization.",
      ru: "Юнит про заказ в кофейне, подготовленный под русскую локализацию."
    },
    lessons: localizationScope
  },
  {
    number: "11",
    level: "Beginner",
    title: { en: "Meeting Your Korean Friend", ru: "Встреча с корейским другом" },
    summary: {
      en: "Friend-meeting scenario mapped to Russian title and UI text.",
      ru: "Сценарий встречи с другом с русским названием и UI-текстами."
    },
    lessons: localizationScope
  },
  {
    number: "12",
    level: "Beginner",
    title: { en: "Korean Restaurant: Korean BBQ Restaurant", ru: "Корейский ресторан: корейское барбекю" },
    summary: {
      en: "Korean BBQ restaurant section localized for Russian learners.",
      ru: "Раздел про корейское барбекю, локализованный для русскоязычных учеников."
    },
    lessons: localizationScope
  },
  {
    number: "13",
    level: "Beginner",
    title: { en: "Korean Friend's Home", ru: "Дома у корейского друга" },
    summary: {
      en: "Home-visit scenario with Russian course mapping.",
      ru: "Сценарий визита домой к другу с русской структурой курса."
    },
    lessons: localizationScope
  },
  {
    number: "14",
    level: "Beginner",
    title: { en: "Delivery Food In Korea", ru: "Доставка еды в Корее" },
    summary: {
      en: "Food delivery scenario prepared for Russian localization.",
      ru: "Сценарий доставки еды, подготовленный для русской локализации."
    },
    lessons: localizationScope
  },
  {
    number: "15",
    level: "Beginner",
    title: { en: "Weather In Korea", ru: "Погода в Корее" },
    summary: {
      en: "Weather unit with Russian learner-facing labels.",
      ru: "Юнит о погоде с русскими подписями для учеников."
    },
    lessons: localizationScope
  },
  {
    number: "16",
    level: "Beginner",
    title: { en: "Starting My First Day At Teuida", ru: "Мой первый день в Teuida" },
    summary: {
      en: "Brand-specific course section preserved for integration proposal context.",
      ru: "Брендовый раздел сохранен в контексте предложения интеграции русской локализации."
    },
    lessons: localizationScope
  },
  {
    number: "17",
    level: "Beginner",
    title: { en: "A Korean Friend's Birthday", ru: "День рождения корейского друга" },
    summary: {
      en: "Birthday scenario mapped to Russian course labels.",
      ru: "Сценарий дня рождения с русскими названиями курса."
    },
    lessons: localizationScope
  },
  {
    number: "18",
    level: "Beginner",
    title: { en: "Watching A Korean Drama", ru: "Просмотр корейской дорамы" },
    summary: {
      en: "K-drama scenario localized for Russian-speaking learners.",
      ru: "Сценарий просмотра дорамы, локализованный для русскоязычных учеников."
    },
    lessons: localizationScope
  },
  {
    number: "19",
    level: "Beginner",
    title: { en: "Karaoke In Korea", ru: "Караоке в Корее" },
    summary: {
      en: "Karaoke scenario with Russian localization labels.",
      ru: "Сценарий караоке с русскими локализационными подписями."
    },
    lessons: localizationScope
  },
  {
    number: "20",
    level: "Beginner",
    title: { en: "Chinese Restaurant In Korea", ru: "Китайский ресторан в Корее" },
    summary: {
      en: "Chinese restaurant section prepared for Russian course presentation.",
      ru: "Раздел про китайский ресторан, подготовленный для презентации русской версии."
    },
    lessons: localizationScope
  }
];
