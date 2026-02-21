import "./ProgramDetails.css";

export default function ProgramDetails() {
  return (
    <section className="march-programs">
      <div className="march-programs-container">

        <h2 className="march-section-title">
          Programi – Mart 2026
        </h2>

        <div className="march-programs-grid">

          {/* Foundations */}
          <div className="program-card">
            <h3>UnAI Foundations</h3>
            <p className="program-subtitle">
              Za početnike i one koji žele jasan sistem rada sa AI alatima.
            </p>

            <div className="program-dates">
              <p><strong>Uživo:</strong> 14, 21, 28 mart + 4 april</p>
              <p><strong>Zoom:</strong> 18, 25 mart + 1 i 8 april</p>
            </div>

            <div className="program-pricing">
              <div>
                <span className="price-label">Uživo</span>
                <span className="price-value">15.000 RSD</span>
              </div>
              <div>
                <span className="price-label">Zoom</span>
                <span className="price-value">12.000 RSD</span>
              </div>
            </div>

            <p className="program-certificate">
              Sertifikat uključen
            </p>

            <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSf9qX9YKFKs_8dvRyd0NALdRk9fQVVIGJhs1yINQ79t-zQNJw/viewform" 
            target="_blank" 
            rel="noopener noreferrer"
            >
            <button className="program-btn">
                Prijavi se - Foundations
            </button>
            </a>
          </div>

          {/* Advanced */}
          <div className="program-card featured">
            <h3>UnAI Advanced</h3>
            <p className="program-subtitle">
              Za polaznike koji žele dublju primenu i napredne AI procese.
            </p>

            <div className="program-dates">
              <p><strong>Uživo:</strong> Isti termini (odvojena grupa)</p>
              <p><strong>Zoom:</strong> Isti termini (odvojena grupa)</p>
            </div>

            <div className="program-pricing">
              <div>
                <span className="price-label">Uživo</span>
                <span className="price-value">24.000 RSD</span>
              </div>
              <div>
                <span className="price-label">Zoom</span>
                <span className="price-value">21.000 RSD</span>
              </div>
            </div>

            <p className="program-certificate">
              Sertifikat uključen
            </p>

            <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSd2g8zKqzlbg6MJP85IOYsp7IdgtMM7DLtKeLhVW_IbPnbjVw/viewform" 
            target="_blank" 
            rel="noopener noreferrer"
            >
            <button className="program-btn primary">
                Prijavi se - Advanced
            </button>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}