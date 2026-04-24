import { useEffect, useState } from 'react'

const roles = [
  'Full Stack Developer',
  'AI Integration Engineer',
  'Angular Specialist',
  'IoT Systems Builder',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((roleIndex + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column',
      justifyContent: 'center', padding: '0 2rem',
      maxWidth: '900px', margin: '0 auto',
    }}>
      <p style={{
        fontFamily: 'var(--font-mono)', color: 'var(--accent)',
        fontSize: '0.9rem', marginBottom: '1.2rem', letterSpacing: '0.05em'
      }}>
        Hey, I'm
      </p>

      <h1 style={{
        fontFamily: 'var(--font-head)', fontWeight: 800,
        fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1.05,
        color: 'var(--text)', marginBottom: '1rem', letterSpacing: '-0.02em'
      }}>
        Parth Rawal<span style={{ color: 'var(--amber)' }}>.</span>
      </h1>

      <h2 style={{
        fontFamily: 'var(--font-head)', fontWeight: 600,
        fontSize: 'clamp(1.4rem, 4vw, 2.4rem)',
        color: 'var(--text-muted)', marginBottom: '1.8rem', minHeight: '3rem'
      }}>
        {displayed}<span style={{ color: 'var(--accent)', animation: 'blink 1s step-end infinite' }}>|</span>
      </h2>

      <p style={{
        fontFamily: 'var(--font-body)', color: 'var(--text-dim)',
        fontSize: '1.05rem', maxWidth: '540px',
        lineHeight: 1.8, marginBottom: '2.5rem'
      }}>
        6 years building production systems — IoT pipelines, AI-integrated products, enterprise platforms.
        I design first, then ship fast. Currently at Quest Global.
      </p>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <a href="#projects" style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.9rem',
          background: 'var(--accent)', color: '#fff',
          padding: '0.75rem 1.8rem', borderRadius: '4px',
          transition: 'background 0.2s',
        }}
          onMouseEnter={e => e.target.style.background = 'var(--accent-dim)'}
          onMouseLeave={e => e.target.style.background = 'var(--accent)'}
        >View work</a>
        <a href="https://linkedin.com/in/parthrawal16/" target="_blank" rel="noreferrer" style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.9rem',
          border: '1px solid var(--border)', color: 'var(--text-dim)',
          padding: '0.75rem 1.8rem', borderRadius: '4px',
          transition: 'all 0.2s',
        }}
          onMouseEnter={e => { e.target.style.borderColor = 'var(--text-dim)'; e.target.style.color = 'var(--text)' }}
          onMouseLeave={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--text-dim)' }}
        >LinkedIn</a>
        <a href="https://github.com/Maverick1602" target="_blank" rel="noreferrer" style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.9rem',
          border: '1px solid var(--border)', color: 'var(--text-dim)',
          padding: '0.75rem 1.8rem', borderRadius: '4px',
          transition: 'all 0.2s',
        }}
          onMouseEnter={e => { e.target.style.borderColor = 'var(--text-dim)'; e.target.style.color = 'var(--text)' }}
          onMouseLeave={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--text-dim)' }}
        >GitHub</a>
      </div>

      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </section>
  )
}