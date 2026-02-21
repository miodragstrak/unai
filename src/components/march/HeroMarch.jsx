import "./HeroMarch.css";

export default function HeroMarch() {
  return (
    <section className="march-hero">
      <div className="march-hero-content">
        <h1>UnAI – Mart 2026</h1>

        <p className="march-subtitle">
          Praktična AI obuka kroz 4 nedelje fokusiranog rada.
          Naučite kako da AI koristite sistematski – u poslu i svakodnevnom radu.
        </p>

        <div className="march-buttons">
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSf9qX9YKFKs_8dvRyd0NALdRk9fQVVIGJhs1yINQ79t-zQNJw/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="march-primary-btn">
              Prijavi se
            </button>
          </a>

          <a 
            href="https://calendly.com/miodragstrak/undai-intro-call?month=2026-02"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="march-secondary-btn">
              Zakaži 15-min razgovor
            </button>
          </a>
        </div>

        <p className="march-meta">
          📅 Početak: 14. mart 2026 · Rok za rezervaciju: 10. mart · Rad u malim grupama
        </p>

        <p className="march-badge">
          ✔ Sertifikat o završenoj obuci uključen
        </p>

      </div>
    </section>
  );
}