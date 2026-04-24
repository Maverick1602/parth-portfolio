const groups = [
    { label: 'Frontend',     items: ['Angular v8-v19', 'React', 'Next.js', 'TypeScript', 'RxJS', 'PrimeNG', 'Plotly.js'] },
    { label: 'Backend',      items: ['Python', 'FastAPI', 'Node.js', 'Java', 'Spring Boot', 'Kafka', 'Redis', 'JWT/RBAC'] },
    { label: 'Databases',    items: ['PostgreSQL', 'TimescaleDB', 'MongoDB', 'MySQL', 'Redis'] },
    { label: 'AI / LLM',     items: ['Google Gemini API', 'OpenAI API', 'Tool-Calling', 'Prompt Engineering', 'SerpApi'] },
    { label: 'Cloud & DevOps', items: ['AWS S3/EC2', 'Azure Data Lake', 'Docker', 'GitHub Actions', 'CI/CD', 'Render'] },
    { label: 'Testing',      items: ['Jasmine', 'Karma', 'Pytest', 'Unit Testing'] },
  ]
  
  export default function Skills() {
    return (
      <section id="skills" style={{ maxWidth: '900px', margin: '0 auto', padding: '6rem 2rem' }}>
        <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)', fontSize: '0.85rem', marginBottom: '0.8rem' }}>
          02. skills
        </p>
        <h2 style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: '2.5rem', color: 'var(--text)' }}>
          What I work with
        </h2>
  
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
          {groups.map(g => (
            <div key={g.label} style={{
              background: 'var(--bg-2)', border: '1px solid var(--border)',
              borderRadius: '8px', padding: '1.4rem',
              transition: 'border-color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--amber)', fontSize: '0.78rem', marginBottom: '1rem', letterSpacing: '0.06em' }}>
                {g.label.toUpperCase()}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {g.items.map(item => (
                  <span key={item} style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.82rem',
                    color: 'var(--text-dim)', background: 'var(--bg-3)',
                    padding: '0.25rem 0.65rem', borderRadius: '3px',
                    border: '1px solid var(--border)',
                  }}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }