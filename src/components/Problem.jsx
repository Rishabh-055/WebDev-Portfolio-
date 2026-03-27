import './Problem.css';

const cells = [
  {
    icon: '😟',
    title: 'Without a website',
    text: "Customers can't find your hours, location, or services online. You miss calls at night. You lose to competitors who are just one Google search away.",
    solution: false,
  },
  {
    icon: '🚀',
    title: 'With your new website',
    text: 'Customers find you 24/7. They see your work, read reviews, and call you directly. Your business looks professional and trustworthy from day one.',
    solution: true,
  },
  {
    icon: '📵',
    title: 'Just a WhatsApp number?',
    text: "People don't trust businesses without an online presence. No website = no credibility, especially for new customers who don't know you yet.",
    solution: false,
  },
  {
    icon: '✅',
    title: 'A website builds instant trust',
    text: 'A professional website shows your services, prices, and location clearly — so customers feel confident before they even call you.',
    solution: false,
    dark: true,
  },
];

export default function Problem() {
  return (
    <section id="problem">
      <div className="container">
        <div style={{ maxWidth: '600px' }}>
          <h2 className="fade-up">
            Your customers are searching on Google.<br />Can they find you?
          </h2>
          <p className="fade-up" style={{ marginTop: '1rem', animationDelay: '0.1s' }}>
            Most local businesses in Bhopal still rely on word-of-mouth. That's fine — but your competitor who has a website is getting the customers you're missing.
          </p>
        </div>
        <div className="problem-grid fade-up" style={{ animationDelay: '0.2s' }}>
          {cells.map((cell) => (
            <div
              key={cell.title}
              className={`problem-cell${cell.solution ? ' solution' : ''}${cell.dark ? ' dark' : ''}`}
            >
              <div className="problem-icon">{cell.icon}</div>
              <h4>{cell.title}</h4>
              <p>{cell.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
