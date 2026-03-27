import './Services.css';

const services = [
  {
    icon: '🎯',
    title: 'Business Landing Page',
    desc: 'One powerful page with your services, contact info, location, and a call-to-action. Perfect for salons, shops, and clinics who need a quick, professional online presence.',
    price: 'From ₹3,500',
    delay: '0s',
  },
  {
    icon: '🏪',
    title: 'Full Business Website',
    desc: 'Multi-page website with Home, About, Services, Gallery, and Contact pages. Ideal for restaurants, coaching centers, gyms, and medical clinics.',
    price: 'From ₹7,000',
    delay: '0.1s',
  },
  {
    icon: '🔄',
    title: 'Website Redesign',
    desc: "Already have a website but it looks outdated or doesn't work on phones? I'll modernize it completely — fast, fresh, and mobile-friendly.",
    price: 'From ₹5,000',
    delay: '0.2s',
  },
  {
    icon: '📦',
    title: 'Maintenance & Updates',
    desc: 'Need to change prices, add new photos, or update your hours? I offer affordable monthly maintenance so your site is always up to date.',
    price: '₹500/month',
    delay: '0.3s',
  },
];

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="fade-up">
          <h2>Everything you need to<br />get online fast.</h2>
          <p className="section-sub">
            Simple, modern websites built specifically for local businesses. No confusing tech — just a site that brings you customers.
          </p>
        </div>
        <div className="services-grid">
          {services.map((s) => (
            <div className="service-card fade-up" key={s.title} style={{ animationDelay: s.delay }}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="service-price">{s.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
