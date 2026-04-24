const projects = [
    {
      name: 'AI Travel Booking Assistant',
      desc: 'Generates complete travel itineraries in under 10 seconds using Google Gemini and OpenAI API with structured tool-calling. Full CI/CD via GitHub Actions, deployed on Render.',
      stack: ['FastAPI', 'React', 'Gemini', 'OpenAI API', 'SerpApi', 'GitHub Actions'],
      github: 'https://github.com/Maverick1602',
    },
    {
      name: 'CognitiveMind AI',
      desc: 'AI-powered adaptive learning platform for a US edtech startup. Personalizes course content in real time based on individual student progress using Gemini and OpenAI APIs.',
      stack: ['Next.js', 'Python', 'PostgreSQL', 'Gemini API', 'OpenAI API', 'AWS EC2'],
      link: 'https://cognitivewebsite.vercel.app/',
      github: 'https://github.com/Maverick1602',
    },
    {
      name: 'Parth Rawal Portfolio',
      desc: 'This site. Built with React and Vite, featuring Arjun — an AI chatbot trained on my personality and resume, powered by Gemini Flash Lite.',
      stack: ['React', 'Vite', 'Gemini Flash Lite', 'Prompt Engineering'],
      github: 'https://github.com/Maverick1602/parth-portfolio',
    },
  ]
  
  export default function Projects() {
    return (
      <section id="projects" style={{ maxWidth: '900px', margin: '0 auto', padding: '6rem 2rem' }}>
        <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)', fontSize: '0.85rem', marginBottom: '0.8rem' }}>
          04. projects
        </p>
        <h2 style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: '2.5rem', color: 'var(--text)' }}>
          Things I've built
        </h2>
  
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: '1.2rem' }}>
          {projects.map((p, i) => (
            <div key={i} style={{
              background: 'var(--bg-2)', border: '1px solid var(--border)',
              borderRadius: '8px', padding: '1.6rem',
              display: 'flex', flexDirection: 'column', gap: '1rem',
              transition: 'border-color 0.2s, transform 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <h3 style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--text)', lineHeight: 1.3 }}>
                  {p.name}
                </h3>
                <a href={p.link || p.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', fontSize: '1.1rem', flexShrink: 0, marginLeft: '0.5rem' }}>
                  ↗
                </a>
              </div>
  
              <p style={{ color: 'var(--text-dim)', fontSize: '0.88rem', lineHeight: 1.7, flex: 1 }}>
                {p.desc}
              </p>
  
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {p.stack.map(s => (
                  <span key={s} style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
                    color: 'var(--accent)', background: 'rgba(59,130,246,0.08)',
                    padding: '0.2rem 0.55rem', borderRadius: '3px',
                    border: '1px solid rgba(59,130,246,0.2)',
                  }}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }