import { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    q: 'How long does it take to build a website?',
    a: "Most landing pages are ready in 3 days. Full websites (3–5 pages) take 5–7 days. I work fast without cutting corners. You'll get a preview link to review before it goes live.",
  },
  {
    q: "I'm not tech-savvy. Will I understand how to manage it?",
    a: "You don't need to manage anything! I take care of everything. If you need to change prices, update photos, or add new services, just WhatsApp me and I'll do it for you — usually same day.",
  },
  {
    q: 'What is the total cost, including domain and hosting?',
    a: 'Domain (your website address like yourbusiness.in) costs about ₹700–₹1,000/year. Hosting (where the site lives) can be free with platforms like Vercel, or ₹1,500–₹3,000/year for premium hosting. I\'ll guide you through everything — no hidden costs.',
  },
  {
    q: 'Will my website show up on Google?',
    a: 'Yes! All my websites are built with basic SEO (Search Engine Optimization) so Google can find and list your site. The Growth and Premium packages include full SEO setup — this means better chances of appearing when someone searches "salon near me" or "gym in Bhopal."',
  },
  {
    q: 'What do you need from me to get started?',
    a: "Just: your business name & location, your phone number, some photos of your shop/work (can even be from WhatsApp), your services and rough pricing, and any color preferences. That's it — I'll handle the rest!",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq">
      <div className="container">
        <div className="fade-up" style={{ textAlign: 'center' }}>
          <h2>Common questions.</h2>
        </div>
        <div className="faq-list fade-up" style={{ animationDelay: '0.1s' }}>
          {faqs.map((item, i) => (
            <div className="faq-item" key={i}>
              <button className="faq-q" onClick={() => toggle(i)}>
                {item.q}
                <span className="faq-chevron" style={{ transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
              </button>
              <div className={`faq-a${openIndex === i ? ' open' : ''}`}>
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
