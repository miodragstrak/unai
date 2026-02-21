import "./Curriculum.css";

export default function Curriculum() {
  return (
    <section className="march-curriculum">
      <div className="march-curriculum-container">
        <h2 className="march-section-title">Detaljna struktura programa</h2>

        <div className="curriculum-programs">
          {/* Foundations */}
          <div className="curriculum-program">
            <h3>UnAI Foundations</h3>
            <p className="curriculum-subtitle">
              Fokus na razumevanju i sistemskoj primeni AI alata.
            </p>

            <div className="curriculum-weeks">
              <div className="week-block">
                <div className="week-header">
                  <div className="week-number">01</div>
                  <h4>Nedelja 1</h4>
                  <ul>
                    <li>Osnove veštačke inteligencije</li>
                    <li>Kako funkcionišu AI modeli</li>
                    <li>Prompt struktura i logika</li>
                  </ul>
                </div>
              </div>

              <div className="week-block">
                <div className="week-header">
                  <div className="week-number">02</div>
                  <h4>Nedelja 2</h4>
                  <ul>
                    <li>AI u poslovnim procesima</li>
                    <li>Organizacija rada uz AI</li>
                    <li>Kreiranje sadržaja</li>
                  </ul>
                </div>
              </div>

              <div className="week-block">
                <div className="week-header">
                  <div className="week-number">03</div>
                  <h4>Nedelja 3</h4>
                  <ul>
                    <li>Automatizacija zadataka</li>
                    <li>Praktične vežbe</li>
                    <li>Mini projekat</li>
                  </ul>
                </div>
              </div>

              <div className="week-block">
                <div className="week-header">
                  <div className="week-number">04</div>
                  <h4>Nedelja 4</h4>
                  <ul>
                    <li>Izrada ličnog AI sistema rada</li>
                    <li>Studije slučaja</li>
                    <li>Završni zadatak</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Advanced */}
          <div className="curriculum-program advanced">
            <h3>UnAI Advanced</h3>
            <p className="curriculum-subtitle">
              Dublja integracija, automatizacija i napredne tehnike.
            </p>

            <div className="curriculum-weeks">
              <div className="week-block">
                <div className="week-header">
                  <div className="week-number">01</div>
                  <h4>Nedelja 1</h4>
                  <ul>
                    <li>Napredna prompt arhitektura</li>
                    <li>Strukturiranje kompleksnih zahteva</li>
                    <li>AI strategija za poslovne timove</li>
                  </ul>
                </div>
              </div>

              <div className="week-block">
                <div className="week-header">
                  <div className="week-number">02</div>
                  <h4>Nedelja 2</h4>
                  <ul>
                    <li>Automatizacije (n8n, Zapier koncepti)</li>
                    <li>Integracija više AI alata</li>
                    <li>Workflow optimizacija</li>
                  </ul>
                </div>
              </div>

              <div className="week-block">
                <div className="week-header">
                  <div className="week-number">03</div>
                  <h4>Nedelja 3</h4>
                  <ul>
                    <li>AI sistemi za specifične industrije</li>
                    <li>Rad sa većim količinama podataka</li>
                    <li>Praktični projekat</li>
                  </ul>
                </div>
              </div>

              <div className="week-block">
                <div className="week-header">
                  <div className="week-number">04</div>
                  <h4>Nedelja 4</h4>
                  <ul>
                    <li>Personalizovani AI sistem</li>
                    <li>Profesionalna implementacija</li>
                    <li>Finalni projekat i prezentacija</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}