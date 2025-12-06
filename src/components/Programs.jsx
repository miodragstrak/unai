export default function Programs() {
  return (
    <section className="section" id="programs">
      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
        Choose Your Program
      </h2>

      <div className="cards-row">

        <div className="card">
          <h3>Free Call</h3>
          <p>Short diagnostic call to understand your needs.</p>
          <a 
            href="https://calendly.com/YOUR-LINK/free-call" 
            className="button"
            style={{ marginTop: "15px" }}
          >
            Book Free Call
          </a>
        </div>

        <div className="card">
          <h3>1-on-1 Mentoring</h3>
          <p>Personalized AI coaching, prompts, and follow-up support.</p>
          <a href="YOUR-PAYMENT-LINK" className="button" style={{ marginTop: "15px" }}>
            Book Session
          </a>
        </div>

        <div className="card">
          <h3>Group Program</h3>
          <p>Learn fundamentals through structured modules.</p>
          <a href="#" className="button" style={{ marginTop: "15px" }}>
            Join Group
          </a>
        </div>

        <div className="card">
          <h3>Masterclass</h3>
          <p>Advanced techniques + final project + certificate.</p>
          <a href="#" className="button" style={{ marginTop: "15px" }}>
            Apply Now
          </a>
        </div>

      </div>
    </section>
  );
}
