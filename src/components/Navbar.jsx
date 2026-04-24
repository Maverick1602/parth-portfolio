import { useState, useEffect } from 'react'

const links = ['About', 'Skills', 'Experience', 'Projects']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '0 2rem',
      height: '60px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: scrolled ? 'rgba(8,8,15,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)', fontSize: '0.9rem', fontWeight: 500 }}>
        PR<span style={{ color: 'var(--amber)' }}>.</span>
      </span>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: '2rem' }} className="nav-links">
        {links.map(link => (
          <a key={link} href={`#${link.toLowerCase()}`} style={{
            fontFamily: 'var(--font-body)', fontSize: '0.9rem',
            color: 'var(--text-dim)', letterSpacing: '0.02em',
            transition: 'color 0.2s',
          }}
            onMouseEnter={e => e.target.style.color = 'var(--text)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-dim)'}
          >{link}</a>
        ))}
        <a href="mailto:parth.rawal1622@outlook.com" style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.8rem',
          color: 'var(--accent)', border: '1px solid var(--accent)',
          padding: '0.3rem 0.9rem', borderRadius: '4px',
          transition: 'all 0.2s',
        }}
          onMouseEnter={e => { e.target.style.background = 'var(--accent)'; e.target.style.color = '#fff' }}
          onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--accent)' }}
        >Hire me</a>
      </div>
    </nav>
  )
}