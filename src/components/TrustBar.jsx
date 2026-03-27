import './TrustBar.css';

const trustItems = [
  '💇 Salons & Spas',
  '🍽️ Restaurants & Cafes',
  '💪 Gyms & Fitness',
  '📚 Coaching Centers',
  '🔧 Repair Shops',
  '🏥 Clinics & Labs',
];

export default function TrustBar() {
  return (
    <div id="trust">
      <div className="trust-inner">
        <div className="trust-label">Trusted by local businesses</div>
        <div className="trust-items">
          {trustItems.map((item) => (
            <div className="trust-item" key={item}>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
