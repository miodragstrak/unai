import Logo from "../assets/uandai-logo.svg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">

        {/* Left: Logo */}
        <div className="navbar-logo">
          <img 
            src={Logo} 
            alt="NelutAI Logo" 
            style={{ height: "52px" }}
          />
        </div>

        {/* Right: Links */}
        <div className="navbar-links">
          <a href="#home">Home</a>
          <a href="#programs">Programs</a>
          <a href="#book" className="navbar-cta">Book Call</a>
        </div>

      </div>
    </nav>
  );
}
