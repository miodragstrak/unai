import "./Projects.css";

export default function Projects() {
  return (
    <section className="projects-section">
      <div className="projects-container">

        <h2 className="projects-title">
          Šta možeš da napraviš posle UnAI kursa
        </h2>

        <p className="projects-subtitle">
          Već tokom kursa radićemo na praktičnim projektima koje možeš koristiti u poslu ili portfoliju.
        </p>

        <div className="projects-grid">

          <div className="project-card">
            <h3>AI Chatbot</h3>
            <p>
              Napravi chatbot koji odgovara na pitanja korisnika i može se
              koristiti na web sajtu ili u biznisu.
            </p>
          </div>

          <div className="project-card">
            <h3>AI Video sadržaj</h3>
            <p>
              Kreiraj video sadržaj uz pomoć AI alata i automatizuj produkciju
              za društvene mreže.
            </p>
          </div>

          <div className="project-card">
            <h3>AI automatizacija</h3>
            <p>
              Automatizuj ponavljajuće zadatke koristeći AI i alate poput
              Zapier ili n8n.
            </p>
          </div>

          <div className="project-card">
            <h3>AI marketing sadržaj</h3>
            <p>
              Kreiraj tekstove, slike i objave za marketing kampanje
              koristeći AI.
            </p>
          </div>

          <div className="project-card">
            <h3>AI freelance usluge</h3>
            <p>
              Nauči kako da ponudiš AI usluge na platformama poput
              Upwork ili Fiverr.
            </p>
          </div>

          <div className="project-card">
            <h3>AI portfolio</h3>
            <p>
              Napravi portfolio projekata koji možeš pokazati klijentima
              ili poslodavcima.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}