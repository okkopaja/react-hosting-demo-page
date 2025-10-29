import { useState } from 'react';
import './App.css';

function App() {
  const [projectUrl, setProjectUrl] = useState('');
  const [isDeploying, setIsDeploying] = useState(false);
  const [deployed, setDeployed] = useState(false);

  const handleDeploy = () => {
    setIsDeploying(true);
    setTimeout(() => {
      setIsDeploying(false);
      setDeployed(true);
    }, 2000);
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <h1 className="logo">⚡ DeployNow</h1>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#demo">Demo</a>
            <button className="btn-secondary">Sign In</button>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="container">
          <div className="hero-badge">
            <span className="badge">✨ New: Instant Deployments</span>
          </div>
          <h1 className="hero-title">
            Deploy your React apps
            <br />
            <span className="gradient-text">in seconds</span>
          </h1>
          <p className="hero-subtitle">
            Push your code and watch it go live instantly. Built with modern infrastructure,
            optimized for speed and reliability.
          </p>
          <div className="cta-buttons">
            <button className="btn-primary" onClick={handleDeploy}>
              Deploy Now →
            </button>
            <button className="btn-outline">View Demo</button>
          </div>
        </div>
      </section>

      <section className="features" id="features">
        <div className="container">
          <h2 className="section-title">Why DeployNow?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Lightning Fast</h3>
              <p>Deploy in under 60 seconds with our optimized build pipeline</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure by Default</h3>
              <p>Automatic SSL, DDoS protection, and secure by design</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌍</div>
              <h3>Global CDN</h3>
              <p>Your app served from the edge, close to your users</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>Auto Deploy</h3>
              <p>Push to GitHub and watch your changes go live automatically</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Real-time Analytics</h3>
              <p>Monitor performance and user behavior in real-time</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Free Forever</h3>
              <p>Start free and scale as you grow, no credit card required</p>
            </div>
          </div>
        </div>
      </section>

      <section className="demo" id="demo">
        <div className="container">
          <h2 className="section-title">Try it yourself</h2>
          <div className="demo-box">
            <input
              type="text"
              className="demo-input"
              placeholder="Enter your GitHub repository URL..."
              value={projectUrl}
              onChange={(e) => setProjectUrl(e.target.value)}
            />
            <button 
              className={`btn-deploy ${isDeploying ? 'deploying' : ''} ${deployed ? 'deployed' : ''}`}
              onClick={handleDeploy}
              disabled={isDeploying}
            >
              {isDeploying ? 'Deploying...' : deployed ? '✓ Deployed!' : 'Deploy'}
            </button>
          </div>
          {deployed && (
            <div className="success-message">
              🎉 Your app is live at: <a href="#">https://your-app.deploynow.dev</a>
            </div>
          )}
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>Built with ❤️ for developers | © 2025 DeployNow</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
