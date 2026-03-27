import './Testimonials.css';

const testimonials = [
  {
    text: '"Rishabh bhai ne 3 din mein poora website bana diya. Bahut professional kaam hai. Ab mere salon ka WhatsApp pe daily enquiries aati hain — pehle aise nahi tha!"',
    name: 'Priya Sharma',
    role: 'Owner, Glow Beauty Salon · MP Nagar, Bhopal',
    initials: 'PS',
    color: '#e8622a',
    delay: '0s',
  },
  {
    text: '"Maine socha website zyada costly hogi aur time lagega. But Rishabh ne affordable price mein lightning-fast site banayi. Mobile pe bhi bilkul sahi dikhti hai. Highly recommended!"',
    name: 'Rajesh Gupta',
    role: 'Founder, IronCore Gym · Vijay Nagar, Indore',
    initials: 'RG',
    color: '#2a6ee8',
    delay: '0.1s',
  },
  {
    text: '"Our coaching centre was only known locally. After Rishabh built our website, we started getting calls from students 10–15 km away. The investment paid back in the first week itself."',
    name: 'Anjali Mishra',
    role: 'Director, Sunrise Coaching · Habibganj, Bhopal',
    initials: 'AM',
    color: '#059669',
    delay: '0.2s',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container">
        <div className="fade-up" style={{ textAlign: 'center' }}>
          <h2>What my clients say.</h2>
          <p className="section-sub" style={{ margin: '0.75rem auto 0' }}>
            Real feedback from real local business owners in Bhopal &amp; Indore.
          </p>
        </div>
        <div className="testi-grid">
          {testimonials.map((t) => (
            <div className="testi-card fade-up" key={t.name} style={{ animationDelay: t.delay }}>
              <div className="stars">★★★★★</div>
              <p className="testi-text">{t.text}</p>
              <div className="testi-author">
                <div className="testi-avatar" style={{ background: t.color }}>{t.initials}</div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
