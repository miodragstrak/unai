import "./Audience.css";

export default function Audience() {
  return (
    <section className="march-audience">
      <div className="march-audience-container">

        <h2 className="march-section-title">
          Za koga je ovaj program
        </h2>

        <div className="audience-grid">

          <div className="audience-card">
            <h3>Preduzetnici</h3>
            <p>
              Koji žele da AI uvedu u svoje poslovne procese i povećaju efikasnost.
            </p>
          </div>

          <div className="audience-card">
            <h3>Zaposleni</h3>
            <p>
              Koji žele da rade brže, organizovanije i sa većom vrednošću za poslodavca.
            </p>
          </div>

          <div className="audience-card">
            <h3>Freelanceri</h3>
            <p>
              Koji žele konkurentsku prednost kroz automatizaciju i AI alate.
            </p>
          </div>

          <div className="audience-card">
            <h3>Ozbiljni početnici</h3>
            <p>
              Koji ne žele YouTube trikove, već sistemsko razumevanje.
            </p>
          </div>

        </div>

        <div className="audience-note">
          Program je fokusiran na praktičan rad i zahteva aktivno učešće.
        </div>

      </div>
    </section>
  );
}