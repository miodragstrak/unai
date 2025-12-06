import Logo from "../assets/uandai-logo.svg";

export default function Hero() {
  return (
    <section className="section hero center">
      <div className="hero-inner">
        {/* Centered logo */}
        <img 
          src={Logo}
          alt="UNDAI Logo"
          className="hero-logo"
        />
          <h1>UndAI - Practical AI Coaching for Everyday Life</h1>

          <p>
            Learn how to use AI simply, effectively, and confidently in your daily life.
          </p>

          <a
            href="https://calendly.com/YOUR-LINK/free-call"
            className="button"
          >
            Book Free 15-Minute Call
          </a>
        </div>
    </section>
  );
}
