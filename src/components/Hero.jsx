import './Hero.css';

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg-text">WEBSITES</div>
      <div className="container">
        <div className="hero-layout">
          <div className="hero-left">
            <div className="urgency-pill fade-up">
              <span className="urgency-dot"></span>
              Only 3 slots left this month
            </div>
            <h1 className="hero-h1 fade-up" style={{ animationDelay: '0.1s' }}>
              Your business deserves a<br />
              <span className="line-orange">website that gets</span><br />
              real customers.
            </h1>
            <p className="hero-sub fade-up" style={{ animationDelay: '0.2s' }}>
              I build fast, mobile-friendly websites for local businesses in Bhopal &amp; Indore — so you stop losing customers to competitors who are online.
            </p>
            <div className="hero-btns fade-up" style={{ animationDelay: '0.3s' }}>
              <a
                href="https://wa.me/919893454166?text=Hi%20Rishabh%2C%20I%20want%20a%20website%20for%20my%20business!"
                className="btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                💬 WhatsApp Me Now
              </a>
              <a href="#portfolio" className="btn-secondary">See My Work →</a>
            </div>
            <div className="hero-stats fade-up" style={{ animationDelay: '0.4s' }}>
              <div className="stat">
                <span className="stat-num">15+</span>
                <span className="stat-label">Businesses served</span>
              </div>
              <div className="stat">
                <span className="stat-num">3 days</span>
                <span className="stat-label">Avg delivery time</span>
              </div>
              <div className="stat">
                <span className="stat-num">100%</span>
                <span className="stat-label">Mobile-friendly</span>
              </div>
            </div>
          </div>

          <div className="hero-mockup fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="mockup-card">
              <div className="mockup-bar">
                <div className="mockup-dot" style={{ background: '#ff5f57' }}></div>
                <div className="mockup-dot" style={{ background: '#febc2e' }}></div>
                <div className="mockup-dot" style={{ background: '#28c840' }}></div>
                <div className="mockup-url">glowsalon-bhopal.in</div>
              </div>
              <div className="mockup-body">
                <div className="mockup-hero-img">💅</div>
                <div className="mockup-tag">✨ Book Now — Same Day Slots</div>
                <div className="mockup-title">Glow Beauty Salon, Bhopal</div>
                <div className="mockup-desc">Premium hair &amp; skin care. Walk-ins welcome. Located near MP Nagar.</div>
                <button className="mockup-cta">📞 Call to Book — 98XXXXXXXX</button>
              </div>
            </div>
            <div className="float-badge float-badge-1">
              <div className="green-dot"></div>
              Website live in 3 days
            </div>
            <div className="float-badge float-badge-2">
              ⭐ 4.9/5 client rating
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
