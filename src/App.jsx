import { useEffect, useMemo, useState } from "react";
import { ui, units } from "./data/lessons.js";

function App() {
  const [language, setLanguage] = useState(() => localStorage.getItem("language") || "ru");
  const [selectedUnit, setSelectedUnit] = useState(units[0]);

  const text = ui[language];
  const totalLessons = useMemo(() => units.reduce((sum, unit) => sum + unit.lessons.length, 0), []);

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <div className="page-shell">
      <Header language={language} text={text} onLanguageChange={setLanguage} />

      <main className="main" id="top">
        <section className="page-heading" aria-labelledby="course-title">
          <h1 id="course-title">{text.pageTitle}</h1>
          <p>{text.tagline}</p>
        </section>

        <section className="course-layout" aria-label="Course catalog">
          <div className="unit-list" role="list">
            {units.map((unit) => (
              <UnitRow
                key={unit.number}
                unit={unit}
                text={text}
                language={language}
                isActive={unit.number === selectedUnit.number}
                onSelect={() => setSelectedUnit(unit)}
              />
            ))}
          </div>

          <UnitDetails unit={selectedUnit} text={text} language={language} totalLessons={totalLessons} />
        </section>
      </main>

      <Footer text={text} />
    </div>
  );
}

function Header({ language, text, onLanguageChange }) {
  return (
    <header className="site-header">
      <a className="logo" href="#top" aria-label="HanTalk Korean">
        <span className="logo-mark" aria-hidden="true">H</span>
        <span>HanTalk</span>
      </a>

      <nav className="nav-links" aria-label="Main navigation">
        <a href="#blog">{text.navBlog}</a>
        <a className="active" href="#top">{text.navKorean}</a>
        <a href="#japanese">{text.navJapanese}</a>
      </nav>

      <label className="language-select">
        <span>{text.language}</span>
        <select value={language} onChange={(event) => onLanguageChange(event.target.value)}>
          <option value="ru">Русский</option>
          <option value="en">English</option>
        </select>
      </label>
    </header>
  );
}

function UnitRow({ unit, text, language, isActive, onSelect }) {
  return (
    <button className={`unit-row ${isActive ? "active" : ""}`} type="button" role="listitem" onClick={onSelect}>
      <span className="unit-number">{text.unitLabel} {unit.number}</span>
      <span className="unit-copy">
        <strong>{unit.title.ko}</strong>
        <span>{unit.title[language]}</span>
      </span>
      <span className="unit-meta">{unit.lessons.length} {text.lessonsLabel}</span>
    </button>
  );
}

function UnitDetails({ unit, text, language, totalLessons }) {
  return (
    <aside className="unit-details" aria-label={text.selectedTitle}>
      <div className="details-card">
        <p className="details-kicker">{text.unitLabel} {unit.number}</p>
        <h2>{unit.title[language]}</h2>
        <p className="details-ko">{unit.title.ko}</p>
        <p className="details-summary">{unit.summary[language]}</p>

        <div className="details-stats" aria-label="Course stats">
          <span>{text.levelLabel}: {unit.level}</span>
          <span>{units.length} units</span>
          <span>{totalLessons} {text.lessonsLabel}</span>
        </div>

        <div className="mini-lessons">
          {unit.lessons.map((lesson, index) => (
            <div className="mini-lesson" key={lesson}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{lesson}</strong>
            </div>
          ))}
        </div>

        <p className="details-note">{text.selectedHint}</p>
      </div>
    </aside>
  );
}

function Footer({ text }) {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <a className="logo footer-logo" href="#top" aria-label="HanTalk Korean">
          <span className="logo-mark" aria-hidden="true">H</span>
          <span>HanTalk</span>
        </a>
        <p>{text.tagline}</p>
      </div>

      <div className="footer-columns">
        <FooterColumn title={text.aboutTitle} items={["About", "Contact us"]} />
        <FooterColumn title={text.learningTitle} items={[text.navKorean, text.navJapanese, text.navBlog]} />
        <FooterColumn title={text.termsTitle} items={["Terms", "Privacy"]} />
        <FooterColumn title={text.socialTitle} items={["Instagram", "Facebook", "TikTok", "YouTube"]} />
      </div>

      <div className="store-row" aria-label="App links">
        <a href="#app-store">{text.appStore}</a>
        <a href="#google-play">{text.googlePlay}</a>
      </div>

      <p className="copyright">{text.copyright}</p>
    </footer>
  );
}

function FooterColumn({ title, items }) {
  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase().replaceAll(" ", "-")}`}>{item}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default App;
