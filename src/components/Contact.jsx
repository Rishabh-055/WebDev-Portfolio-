import { useState } from 'react';
import './Contact.css';

const WA_ICON = (
  <svg className="whatsapp-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', business: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', phone: '', business: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact">
      <div className="container">
        <h2 className="fade-up">
          Ready to get your<br /><span style={{ color: 'var(--accent)' }}>business online?</span>
        </h2>
        <p className="section-sub fade-up" style={{ animationDelay: '0.1s', margin: '1rem auto 0' }}>
          Tell me about your business and I'll get back to you within a few hours. Fastest way: just WhatsApp me directly!
        </p>

        <div className="contact-card fade-up" style={{ animationDelay: '0.2s' }}>
          <a
            href="https://wa.me/919893454166?text=Hi%20Rishabh%2C%20I%20want%20a%20website%20for%20my%20business.%20My%20business%20name%20is%3A%20"
            className="whatsapp-btn"
            target="_blank"
            rel="noreferrer"
          >
            {WA_ICON}
            WhatsApp Me — 9893454166
          </a>

          <div className="or-divider">or fill in your details</div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Your name</label>
              <input
                type="text"
                name="name"
                className="form-input"
                placeholder="e.g. Rahul Sharma"
                required
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Phone number</label>
              <input
                type="tel"
                name="phone"
                className="form-input"
                placeholder="Your WhatsApp number"
                required
                value={form.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Your business type</label>
              <input
                type="text"
                name="business"
                className="form-input"
                placeholder="e.g. Salon, Gym, Restaurant, Coaching..."
                required
                value={form.business}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Anything else? (optional)</label>
              <textarea
                name="message"
                className="form-input"
                placeholder="What do you want on your website? Budget? Timeline?"
                value={form.message}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="btn-submit"
              style={submitted ? { background: '#22c55e' } : {}}
            >
              {submitted ? '✅ Sent! I\'ll WhatsApp you soon.' : '🚀 Send My Request'}
            </button>
          </form>
        </div>

        <p className="contact-info">
          📍 Based in Bhopal, MP &nbsp;·&nbsp;
          📞 <a href="tel:9893454166">9893454166</a>
          &nbsp;·&nbsp;
          ✉️ <a href="mailto:rishabhmalviya@iiitbhopal.ac.in">rishabhmalviya@iiitbhopal.ac.in</a>
        </p>
      </div>
    </section>
  );
}
