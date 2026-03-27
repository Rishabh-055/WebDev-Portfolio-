import './Transformation.css';

const beforeItems = [
  "Customers can't find you online at night",
  'You look unprofessional compared to competitors',
  'No way to show your work or prices',
  "New customers don't trust you",
  'Dependent on word-of-mouth only',
];
const afterItems = [
  'Found on Google 24/7',
  'Looks professional and trustworthy',
  'Services & prices are crystal clear',
  'Customers call or WhatsApp directly',
  'More leads, more bookings, more revenue',
];

export default function Transformation() {
  return (
    <section id="transformation">
      <div className="container">
        <h2 className="fade-up">The transformation is real.</h2>
        <p className="section-sub fade-up" style={{ animationDelay: '0.1s', textAlign: 'center', margin: '0 auto 3rem' }}>
          See the difference a proper website makes for a local business.
        </p>
        <div className="transform-grid fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="transform-side before-side">
            <div className="transform-label">❌ Before — No website</div>
            {beforeItems.map((item) => (
              <div className="transform-item" key={item}>
                <span className="check">😣</span> {item}
              </div>
            ))}
          </div>
          <div className="transform-side after-side">
            <div className="transform-label">✅ After — With your website</div>
            {afterItems.map((item) => (
              <div className="transform-item" key={item}>
                <span className="check">🎉</span> {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
