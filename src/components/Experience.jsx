const jobs = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Quest Global',
      period: 'Sep 2022 – Present',
      location: 'Bangalore',
      projects: [
        {
          name: 'Sense Digital — IoT Analytics Platform',
          bullets: [
            'Designed microservices architecture: service boundaries, data flow, API contracts across ingestion, processing, and visualization.',
            'Built 20+ Python/FastAPI endpoints for sensor data ingestion — 14 sensors/asset, 4 types, up to 200Hz resolution.',
            'Kafka-based streaming service polling Azure Data Lake every 10 seconds, publishing metadata to downstream consumers.',
            'Redis state tracking across services to prevent duplicate ingestion under concurrent load.',
            'Cut API response times 35% through Redis caching and idempotency keys.',
            'JWT RBAC with 3 tiers (admin/engineer/viewer) + Angular route guards.',
            'Led Angular v16 to v19 migration including PrimeNG v19 breaking changes and mobile layout.',
            'Real-time 2D/3D Plotly.js visualizations with light/dark theme and configurable refresh.',
          ]
        },
        {
          name: 'Compliance Management — Reliance Oil',
          bullets: [
            'Replaced legacy system used by 1,000 Reliance Oil employees with 20+ Node.js APIs and 30+ Angular components.',
            'Eliminated manual paper-based reporting workflows across the operations team.',
            'JWT-authenticated AWS S3 file handling with full audit trail.',
            'Led 2 junior developers, ran code reviews, set API design conventions.',
            'Built 4 Spring Boot REST APIs and reworked rate-limiting algorithm for burst traffic accuracy.',
          ]
        }
      ]
    },
    {
      title: 'Senior Systems Engineer',
      company: 'Infosys',
      period: 'Dec 2019 – Sep 2022',
      location: 'Pune',
      projects: [
        {
          name: 'Insurance Application — HCSC',
          bullets: [
            'Led 12 developers to build 60+ data collection forms for a US insurance client.',
            'Automated 10 manual processes using Python and Tkinter, eliminating daily operational overhead.',
            'Scoped 7 major POC initiatives with estimates that held through delivery.',
          ]
        },
        {
          name: 'Internal E-Learning Portal',
          bullets: [
            'Cut Angular 8 dashboard load time by 50% via lazy loading, AOT, and bundle optimization.',
            'Served 500+ internal employees with responsive Angular reactive forms UI.',
          ]
        }
      ]
    }
  ]
  
  export default function Experience() {
    return (
      <section id="experience" style={{ maxWidth: '900px', margin: '0 auto', padding: '6rem 2rem' }}>
        <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)', fontSize: '0.85rem', marginBottom: '0.8rem' }}>
          03. experience
        </p>
        <h2 style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: '2.5rem', color: 'var(--text)' }}>
          Where I've worked
        </h2>
  
        <div style={{ position: 'relative', paddingLeft: '1.5rem', borderLeft: '1px solid var(--border)' }}>
          {jobs.map((job, ji) => (
            <div key={ji} style={{ marginBottom: '3.5rem', position: 'relative' }}>
              <div style={{
                position: 'absolute', left: '-1.9rem', top: '0.35rem',
                width: '10px', height: '10px', borderRadius: '50%',
                background: 'var(--accent)', border: '2px solid var(--bg)',
              }} />
  
              <div style={{ marginBottom: '1.2rem' }}>
                <h3 style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '1.2rem', color: 'var(--text)' }}>
                  {job.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--accent)', marginTop: '0.2rem' }}>
                  {job.company} · {job.location}
                  <span style={{ color: 'var(--text-muted)', marginLeft: '1rem' }}>{job.period}</span>
                </p>
              </div>
  
              {job.projects.map((proj, pi) => (
                <div key={pi} style={{ marginBottom: '1.5rem' }}>
                  <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--amber)', fontSize: '0.9rem', marginBottom: '0.7rem' }}>
                    {proj.name}
                  </p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {proj.bullets.map((b, bi) => (
                      <li key={bi} style={{ display: 'flex', gap: '0.75rem', color: 'var(--text-dim)', fontSize: '0.92rem', lineHeight: 1.7 }}>
                        <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '0.1rem' }}>›</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    )
  }