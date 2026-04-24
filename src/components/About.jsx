import parthImg from '../assets/parth.jpeg'

const stats = [
  { value: '6+',  label: 'Years experience' },
  { value: '40+', label: 'APIs shipped' },
  { value: '3',   label: 'AI products built' },
  { value: '12',  label: 'Devs led' },
]

export default function About() {
  return (
    <section id="about" style={{
      maxWidth: '900px', margin: '0 auto',
      padding: '6rem 2rem',
    }}>
      <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)', fontSize: '0.85rem', marginBottom: '0.8rem' }}>
        01. about
      </p>
      <h2 style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: '2.5rem', color: 'var(--text)' }}>
        Who I am
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
        
        {/* Left — text + stats */}
        <div>
          <p style={{ color: 'var(--text-dim)', lineHeight: 1.9, marginBottom: '1.2rem', fontSize: '1rem' }}>
            I'm a full stack developer who obsesses over design and strategy before writing a single line of code — then ships fast once the plan is solid.
          </p>
          <p style={{ color: 'var(--text-dim)', lineHeight: 1.9, marginBottom: '1.2rem', fontSize: '1rem' }}>
            Right now I'm building real-time IoT analytics systems at Quest Global and integrating AI into products that actually get used in production — not demos.
          </p>
          <p style={{ color: 'var(--text-dim)', lineHeight: 1.9, marginBottom: '2rem', fontSize: '1rem' }}>
            Outside of work I'm into geopolitics, mythology, philosophy, F1, music, and anything that makes you rethink how the world works. The best engineers are curious about everything.
          </p>

          {/* Stats grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--border)', border: '1px solid var(--border)', borderRadius: '8px', overflow: 'hidden' }}>
            {stats.map(s => (
              <div key={s.label} style={{ background: 'var(--bg-2)', padding: '1.4rem 1.2rem' }}>
                <div style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: '2rem', color: 'var(--accent)', lineHeight: 1 }}>
                  {s.value}
                </div>
                <div style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', fontSize: '0.82rem', marginTop: '0.4rem' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — photo */}
        <div style={{ position: 'relative' }}>
          {/* Accent border offset behind image */}
          <div style={{
            position: 'absolute', top: '14px', left: '14px',
            right: '-14px', bottom: '-14px',
            border: '2px solid var(--accent)',
            borderRadius: '10px', zIndex: 0,
          }} />
          <img
            src={parthImg}
            alt="Parth Rawal"
            style={{
              width: '100%',
              aspectRatio: '3 / 4',
              objectFit: 'cover',
              objectPosition: 'top center',
              borderRadius: '8px',
              display: 'block',
              position: 'relative', zIndex: 1,
              filter: 'grayscale(20%) contrast(1.05)',
              border: '1px solid var(--border)',
            }}
          />
          {/* Subtle amber overlay on hover */}
          <div style={{
            position: 'absolute', inset: 0, zIndex: 2,
            borderRadius: '8px',
            background: 'rgba(245,158,11,0.06)',
            pointerEvents: 'none',
          }} />
        </div>

      </div>
    </section>
  )
}