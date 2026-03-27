import './About.css';
import profileImg from '../assets/profileImage2.jpeg';

const skills = ['HTML / CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Next.js', 'Responsive Design', 'SEO Basics'];

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-left">
            <div className="about-avatar fade-up">
              <img src={profileImg} alt="Rishabh Malviya" className="about-photo" />
            </div>
            <div className="about-name-block">
              <div className="about-name">Rishabh Malviya</div>
              <div className="about-role">Web Developer · IIIT Bhopal</div>
            </div>
          </div>
          <div className="about-text fade-up" style={{ animationDelay: '0.15s' }}>
            <h2>Why local businesses<br />trust me.</h2>
            <p>
              Hi, I'm Rishabh! I'm a 2nd-year Information Technology student at <strong>IIIT Bhopal</strong> and a passionate frontend web developer.
            </p>
            <p>
              I got into building websites for local businesses because I saw how many amazing shops, salons, and coaching centers in Bhopal &amp; Indore were <strong>losing customers simply because they weren't online</strong>. Your competitor two streets away has a website — and that's who Google is recommending.
            </p>
            <p>
              I specialize in fast, beautiful, mobile-first websites that <strong>actually bring you customers</strong> — not just something that looks nice but does nothing.
            </p>
            <p>
              I'm young, affordable, and I genuinely care about your business growing. When you WhatsApp me, you're talking to the person building your site — not a big agency with 10 middlemen.
            </p>
            <div className="skills-row">
              {skills.map((s) => <span className="skill-chip" key={s}>{s}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
