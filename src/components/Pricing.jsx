import './Pricing.css';

const plans = [
  {
    name: 'Starter',
    price: '₹3,500',
    desc: 'Perfect for shops & solo businesses who just need to be online.',
    features: [
      { text: 'Single-page landing site', included: true },
      { text: 'Mobile & phone friendly', included: true },
      { text: 'WhatsApp & call button', included: true },
      { text: 'Google Maps integration', included: true },
      { text: 'Delivered in 3 days', included: true },
      { text: 'Multiple pages', included: false },
      { text: 'SEO setup', included: false },
    ],
    popular: false,
    cta: 'Get Started →',
    href: "https://wa.me/919893454166?text=Hi%20Rishabh%2C%20I'm%20interested%20in%20the%20Starter%20package!",
    btnClass: 'btn-pricing-outline',
    delay: '0s',
  },
  {
    name: 'Growth',
    price: '₹7,000',
    desc: 'The complete website for businesses serious about getting more customers.',
    features: [
      { text: '3–5 page full website', included: true },
      { text: 'Mobile & phone friendly', included: true },
      { text: 'WhatsApp & call button', included: true },
      { text: 'Google Maps integration', included: true },
      { text: 'Delivered in 5–7 days', included: true },
      { text: 'Basic SEO setup', included: true },
      { text: 'Photo gallery section', included: true },
    ],
    popular: true,
    cta: 'I Want This →',
    href: "https://wa.me/919893454166?text=Hi%20Rishabh%2C%20I'm%20interested%20in%20the%20Growth%20package!",
    btnClass: 'btn-pricing-primary',
    delay: '0.15s',
  },
  {
    name: 'Premium',
    price: '₹12,000',
    desc: 'For businesses that want the full package — including ongoing support & SEO.',
    features: [
      { text: '5–8 page website', included: true },
      { text: 'Mobile & phone friendly', included: true },
      { text: 'WhatsApp & enquiry form', included: true },
      { text: 'Google Maps + reviews', included: true },
      { text: 'Full SEO optimization', included: true },
      { text: 'Contact form with email', included: true },
      { text: '1 month free support', included: true },
    ],
    popular: false,
    cta: "Let's Talk →",
    href: "https://wa.me/919893454166?text=Hi%20Rishabh%2C%20I'm%20interested%20in%20the%20Premium%20package!",
    btnClass: 'btn-pricing-outline',
    delay: '0.3s',
  },
];

export default function Pricing() {
  return (
    <section id="pricing">
      <div className="container">
        <div className="fade-up" style={{ textAlign: 'center' }}>
          <h2>Simple, honest pricing.</h2>
          <p className="section-sub" style={{ margin: '0.75rem auto 0' }}>
            No hidden charges. No tech confusion. Just a great website at a fair price.
          </p>
        </div>
        <div className="pricing-grid">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card fade-up${plan.popular ? ' popular' : ''}`}
              style={{ animationDelay: plan.delay }}
            >
              {plan.popular && <div className="popular-badge">⭐ Most Popular</div>}
              <div className="pricing-name">{plan.name}</div>
              <div className="pricing-price">{plan.price}</div>
              <div className="pricing-desc">{plan.desc}</div>
              <ul className="pricing-features">
                {plan.features.map((f) => (
                  <li key={f.text} className={f.included ? '' : 'no'}>{f.text}</li>
                ))}
              </ul>
              <a href={plan.href} className={plan.btnClass} target="_blank" rel="noreferrer">
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
        <p className="delivery-note fade-up" style={{ animationDelay: '0.4s' }}>
          🚀 All packages include <strong>free domain suggestions</strong> + <strong>hosting guidance</strong>. Prices may vary based on complexity. <strong>WhatsApp for a custom quote.</strong>
        </p>
      </div>
    </section>
  );
}
