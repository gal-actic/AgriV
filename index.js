import React from "react";
import "./index.css";

function App() {
  return (
    <div className="container">
      {/* Header */}
      <header>
        <nav>
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </nav>
        <img src="logo.png" alt="Logo" />
      </header>

      {/* Main content */}
      <main>
        {/* Hero section */}
        <section className="hero">
          <h1>Welcome to our Product/Service</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            fringilla metus vitae enim vehicula, ut cursus odio dictum.
          </p>
          <button>Get Started</button>
        </section>

        {/* Features section */}
        <section className="features">
          <div className="feature">
            <img src="feature-1.png" alt="Feature 1" />
            <h2>Feature 1</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              fringilla metus vitae enim vehicula, ut cursus odio dictum.
            </p>
          </div>
          <div className="feature">
            <img src="feature-2.png" alt="Feature 2" />
            <h2>Feature 2</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              fringilla metus vitae enim vehicula, ut cursus odio dictum.
            </p>
          </div>
          <div className="feature">
            <img src="feature-3.png" alt="Feature 3" />
            <h2>Feature 3</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              fringilla metus vitae enim vehicula, ut cursus odio dictum.
            </p>
          </div>
        </section>

        {/* Call-to-action section */}
        <section className="cta">
          <h2>Ready to get started?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            fringilla metus vitae enim vehicula, ut cursus odio dictum.
          </p>
          <button>Sign Up</button>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <nav>
          <a href="#">About Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </nav>
        <p>&copy; 2023 Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
