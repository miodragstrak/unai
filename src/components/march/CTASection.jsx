import "./CTASection.css";

export default function CTASection() {
  return (
    <section className="march-cta">
      <div className="march-cta-container">

        <h2>
          Rok za rezervaciju je 10. mart 2026.
        </h2>

        <p>
          Mart 2026 grupa se formira uskoro.
          Ako želite sistemsko razumevanje AI alata -
          rezervišite svoje mesto na vreme.
        </p>

        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSf9qX9YKFKs_8dvRyd0NALdRk9fQVVIGJhs1yINQ79t-zQNJw/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="march-cta-button">
            Prijavi se sada
          </button>
        </a>

        <p className="cta-small">
          Rad u malim grupama · Profesionalan pristup · Sertifikat po završetku
        </p>

      </div>
    </section>
  );
}