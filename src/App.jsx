import { useEffect, useState } from "react";
import { ui, units } from "./data/lessons.js";

function App() {
  const [language, setLanguage] = useState(() => localStorage.getItem("language") || "ru");
  const text = ui[language];

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <div className="page-shell">
      <main className="catalog-page" id="top">
        <div className="page-toolbar">
          <h1>{text.pageTitle}</h1>
          <label className="language-select">
            <span>{text.language}</span>
            <select value={language} onChange={(event) => setLanguage(event.target.value)}>
              <option value="ru">Русский</option>
              <option value="en">English</option>
            </select>
          </label>
        </div>

        <p className="proposal-note">{text.disclaimer}</p>

        <section className="unit-grid" aria-label="Korean course units">
          {units.map((unit) => (
            <UnitCard key={unit.number} unit={unit} text={text} language={language} />
          ))}
        </section>
      </main>

      <footer className="footer-note">
        <strong>{text.footerTitle}</strong>
        <span>{text.footerText}</span>
      </footer>
    </div>
  );
}

function UnitCard({ unit, text, language }) {
  return (
    <article className="unit-card">
      <div className="unit-art" style={{ "--card-color": unit.color }}>
        <span className="unit-pill">{text.unitLabel} {unit.number}</span>
        <div className="icon-ring" aria-hidden="true">
          <div className="icon-badge">
            <UnitIcon name={unit.icon} />
          </div>
        </div>
      </div>

      <div className="unit-body">
        <p className="unit-meta">{text.unitLabel} {unit.number}<span>|</span>{unit.ko}</p>
        <h2>{unit.en}</h2>
        {language === "ru" && <p className="ru-title">{unit.ru}</p>}
      </div>
    </article>
  );
}

function UnitIcon({ name }) {
  const common = {
    width: 54,
    height: 54,
    viewBox: "0 0 54 54",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };

  switch (name) {
    case "alarm":
      return (
        <svg {...common}>
          <path d="M16 15 10 9M38 15l6-6" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
          <circle cx="27" cy="29" r="17" stroke="currentColor" strokeWidth="7" />
          <path d="M27 18v12H17" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18 45l-4 7M36 45l4 7" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        </svg>
      );
    case "fist":
      return (
        <svg {...common}>
          <path d="M14 25V13a5 5 0 0 1 10 0v11" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
          <path d="M24 23V10a5 5 0 0 1 10 0v13" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
          <path d="M34 25V14a5 5 0 0 1 10 0v17c0 10-7 17-17 17-9 0-16-7-16-16v-5" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
          <path d="M10 28h24" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        </svg>
      );
    case "dish":
      return (
        <svg {...common}>
          <path d="M12 30h30M17 45h20M18 30c0-10 6-17 15-17s15 7 15 17" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M27 9v4" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        </svg>
      );
    case "cart":
      return (
        <svg {...common}>
          <path d="M9 12h7l5 24h20l5-16H21" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="24" cy="44" r="4" fill="currentColor" />
          <circle cx="40" cy="44" r="4" fill="currentColor" />
        </svg>
      );
    case "map":
      return (
        <svg {...common}>
          <path d="M8 15 20 9l14 6 12-6v31l-12 6-14-6-12 6V15Z" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
          <path d="M20 9v31M34 15v31" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          <path d="M39 10c5 0 8 3 8 8 0 6-8 14-8 14s-8-8-8-14c0-5 3-8 8-8Z" fill="currentColor" />
          <circle cx="39" cy="18" r="3" fill="white" />
        </svg>
      );
    case "tray":
      return (
        <svg {...common}>
          <path d="M10 21h34v22H10V21Z" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
          <path d="M17 15h20M18 31h18" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        </svg>
      );
    case "book":
      return (
        <svg {...common}>
          <path d="M9 12h16c5 0 8 3 8 8v25c0-4-3-7-8-7H9V12Z" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
          <path d="M33 20c0-5 3-8 8-8h4v26h-4c-5 0-8 3-8 7V20Z" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
        </svg>
      );
    case "store":
      return (
        <svg {...common}>
          <path d="M11 23h32v23H11V23ZM8 12h38l-4 11H12L8 12Z" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
          <path d="M21 46V34h12v12" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
        </svg>
      );
    case "coffee":
      return (
        <svg {...common}>
          <path d="M13 17h26v13c0 9-6 15-13 15S13 39 13 30V17Z" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
          <path d="M39 22h4c4 0 6 2 6 6s-2 6-6 6h-4" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
          <path d="M18 8v3M27 8v3M36 8v3" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        </svg>
      );
    case "chat":
      return (
        <svg {...common}>
          <path d="M9 14h36v24H24L13 47v-9H9V14Z" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
          <path d="M18 24h18M18 32h11" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        </svg>
      );
    case "grill":
      return (
        <svg {...common}>
          <circle cx="27" cy="24" r="17" stroke="currentColor" strokeWidth="6" />
          <path d="M10 24h34M27 7v34M17 12l20 24M37 12 17 36" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <path d="M19 45h16" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        </svg>
      );
    case "home":
      return (
        <svg {...common}>
          <path d="M8 26 27 10l19 16v21H14V26" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
          <path d="M23 47V33h8v14" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
        </svg>
      );
    case "delivery":
      return (
        <svg {...common}>
          <path d="M8 17h24v24H8V17ZM32 25h8l6 7v9H32V25Z" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
          <circle cx="17" cy="43" r="4" fill="currentColor" />
          <circle cx="40" cy="43" r="4" fill="currentColor" />
        </svg>
      );
    case "weather":
      return (
        <svg {...common}>
          <circle cx="35" cy="18" r="9" stroke="currentColor" strokeWidth="6" />
          <path d="M14 42h25c6 0 10-4 10-9s-4-9-10-9c-3-8-16-8-19 1-7 0-12 4-12 9 0 4 3 8 6 8Z" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
        </svg>
      );
    case "office":
      return (
        <svg {...common}>
          <path d="M13 46V10h28v36M8 46h38" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 18h4M31 18h4M21 28h4M31 28h4M24 46V36h6v10" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        </svg>
      );
    case "gift":
      return (
        <svg {...common}>
          <path d="M10 24h34v22H10V24ZM8 16h38v8H8v-8ZM27 16v30" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
          <path d="M27 16c-8-8-17-7-15 0 1 5 8 4 15 0Zm0 0c8-8 17-7 15 0-1 5-8 4-15 0Z" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" />
        </svg>
      );
    case "screen":
      return (
        <svg {...common}>
          <path d="M9 13h36v26H9V13Z" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
          <path d="M22 47h10M27 39v8" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
          <path d="M23 21v10l9-5-9-5Z" fill="currentColor" />
        </svg>
      );
    case "mic":
      return (
        <svg {...common}>
          <rect x="19" y="7" width="16" height="28" rx="8" stroke="currentColor" strokeWidth="6" />
          <path d="M11 27c0 9 7 16 16 16s16-7 16-16M27 43v7M19 50h16" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        </svg>
      );
    case "noodles":
      return (
        <svg {...common}>
          <path d="M12 27h30l-4 17H16l-4-17Z" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
          <path d="M16 16c2 4 2 7 0 11M27 16c2 4 2 7 0 11M38 16c2 4 2 7 0 11M9 27h36" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        </svg>
      );
    case "hand":
    default:
      return (
        <svg {...common}>
          <path d="M21 26V13a4 4 0 0 1 8 0v12" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
          <path d="M29 25V12a4 4 0 0 1 8 0v15" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
          <path d="M37 29v-9a4 4 0 0 1 8 0v13c0 10-7 17-18 17-9 0-15-6-18-14l-4-10a4 4 0 0 1 7-4l5 8" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M13 28 8 19" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        </svg>
      );
  }
}

export default App;
