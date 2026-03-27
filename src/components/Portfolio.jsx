import './Portfolio.css';

const projects = [
  {
    emoji: '💅',
    bg: 'linear-gradient(135deg,#ffecd2,#fcb69f)',
    category: 'Beauty & Wellness',
    title: 'Glow Beauty Salon',
    desc: 'A stunning landing page for a salon in MP Nagar, Bhopal — featuring services, pricing, gallery, and a one-tap booking button.',
    tags: ['HTML/CSS', 'React', 'Mobile-first'],
    result: '↑ 3x more enquiries',
    delay: '0s',
  },
  {
    emoji: '💪',
    bg: 'linear-gradient(135deg,#d4fc79,#96e6a1)',
    category: 'Fitness',
    title: 'IronCore Gym',
    desc: 'A bold, high-energy website for a gym in Indore — with membership plans, trainer profiles, and a WhatsApp-based signup flow.',
    tags: ['Tailwind', 'Animations', 'SEO'],
    result: '+40 new members/month',
    delay: '0.1s',
  },
  {
    emoji: '📚',
    bg: 'linear-gradient(135deg,#a18cd1,#fbc2eb)',
    category: 'Education',
    title: 'Sunrise Coaching Centre',
    desc: 'A clean, professional website for a Class 10–12 coaching center — with subject-wise batch details, fees, and a contact form.',
    tags: ['React', 'Form', 'Fast loading'],
    result: '50+ enquiries in Week 1',
    delay: '0.2s',
  },
  {
    emoji: '🍽️',
    bg: 'linear-gradient(135deg,#ffeaa7,#dfe6e9)',
    category: 'Food & Restaurant',
    title: 'Maa Ki Rasoi',
    desc: 'A warm, inviting website for a home-style restaurant in Bhopal — with a digital menu, Google Maps embed, and Zomato/Swiggy links.',
    tags: ['Menu UI', 'Maps', 'Tailwind'],
    result: 'Featured on local FB group',
    delay: '0.3s',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="container">
        <div className="fade-up" style={{ textAlign: 'center', marginBottom: 0 }}>
          <h2>Websites I've built for<br />local businesses.</h2>
          <p className="section-sub" style={{ margin: '0.75rem auto 0' }}>
            Each site is built to look great, load fast, and turn visitors into customers.
          </p>
        </div>
        <div className="portfolio-grid">
          {projects.map((p) => (
            <div className="portfolio-card fade-up" key={p.title} style={{ animationDelay: p.delay }}>
              <div className="portfolio-img" style={{ background: p.bg }}>
                <span style={{ position: 'absolute', fontSize: '3.5rem' }}>{p.emoji}</span>
                <div className="portfolio-category">{p.category}</div>
              </div>
              <div className="portfolio-info">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                  <div className="portfolio-tags">
                    {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                  </div>
                  <span className="portfolio-result">{p.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
