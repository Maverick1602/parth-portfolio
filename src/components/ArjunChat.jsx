import { useState, useRef, useEffect } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { ARJUN_SYSTEM_PROMPT } from '../data/resumeContext'

export default function ArjunChat() {
  const [open, setOpen]       = useState(false)
  const [input, setInput]     = useState('')
  const [loading, setLoading] = useState(false)
  const [history, setHistory] = useState([
    { role: 'assistant', text: "I'm Arjun — Parth's AI. Ask me anything about his work, stack, or opinions." }
  ])
  const bottomRef = useRef(null)
  const chatRef   = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history, loading])

  async function send() {
    const msg = input.trim()
    if (!msg || loading) return
    setInput('')
    setHistory(h => [...h, { role: 'user', text: msg }])
    setLoading(true)

    try {
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY)
      const model = genAI.getGenerativeModel({
        model: 'gemini-2.5-flash-lite',
        systemInstruction: ARJUN_SYSTEM_PROMPT,
      })

      const geminiHistory = history
        .filter(m => m.role !== 'assistant' || history.indexOf(m) !== 0)
        .map(m => ({
          role: m.role === 'user' ? 'user' : 'model',
          parts: [{ text: m.text }],
        }))

      const chat = model.startChat({ history: geminiHistory })
      const result = await chat.sendMessage(msg)
      const reply = result.response.text()
      setHistory(h => [...h, { role: 'assistant', text: reply }])
    } catch (err) {
      setHistory(h => [...h, { role: 'assistant', text: "Something went wrong. Try again." }])
    } finally {
      setLoading(false)
    }
  }

  function onKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send() }
  }

  return (
    <>
      {/* Floating button */}
      <button onClick={() => setOpen(o => !o)} style={{
        position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 200,
        width: '52px', height: '52px', borderRadius: '50%',
        background: 'var(--accent)', border: 'none', cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.4rem', boxShadow: '0 4px 24px rgba(59,130,246,0.4)',
        transition: 'transform 0.2s, background 0.2s',
      }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        title="Chat with Arjun"
      >
        {open ? '✕' : '💬'}
      </button>

      {/* Chat window */}
      {open && (
        <div style={{
          position: 'fixed', bottom: '5.5rem', right: '2rem', zIndex: 200,
          width: '360px', maxHeight: '520px',
          background: 'var(--bg-2)', border: '1px solid var(--border)',
          borderRadius: '12px', display: 'flex', flexDirection: 'column',
          boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
          overflow: 'hidden',
        }}>
          {/* Header */}
          <div style={{
            padding: '1rem 1.2rem', borderBottom: '1px solid var(--border)',
            display: 'flex', alignItems: 'center', gap: '0.75rem',
            background: 'var(--bg-3)',
          }}>
            <div style={{
              width: '32px', height: '32px', borderRadius: '50%',
              background: 'var(--accent)', display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontFamily: 'var(--font-head)',
              fontWeight: 700, fontSize: '0.9rem', color: '#fff',
            }}>A</div>
            <div>
              <p style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--text)' }}>Arjun</p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent)' }}>Parth's AI · online</p>
            </div>
          </div>

          {/* Messages */}
          <div ref={chatRef} style={{
            flex: 1, overflowY: 'auto', padding: '1rem',
            display: 'flex', flexDirection: 'column', gap: '0.75rem',
          }}>
            {history.map((m, i) => (
              <div key={i} style={{
                display: 'flex',
                justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start',
              }}>
                <div style={{
                  maxWidth: '82%', padding: '0.65rem 0.9rem',
                  borderRadius: m.role === 'user' ? '12px 12px 2px 12px' : '12px 12px 12px 2px',
                  background: m.role === 'user' ? 'var(--accent)' : 'var(--bg-3)',
                  border: m.role === 'user' ? 'none' : '1px solid var(--border)',
                  color: m.role === 'user' ? '#fff' : 'var(--text-dim)',
                  fontFamily: 'var(--font-body)', fontSize: '0.85rem', lineHeight: 1.6,
                }}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{
                  padding: '0.65rem 0.9rem', borderRadius: '12px 12px 12px 2px',
                  background: 'var(--bg-3)', border: '1px solid var(--border)',
                  color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem',
                }}>...</div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div style={{
            padding: '0.8rem', borderTop: '1px solid var(--border)',
            display: 'flex', gap: '0.5rem', background: 'var(--bg-3)',
          }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={onKey}
              placeholder="Ask Arjun anything..."
              style={{
                flex: 1, background: 'var(--bg-2)', border: '1px solid var(--border)',
                borderRadius: '6px', padding: '0.55rem 0.8rem',
                color: 'var(--text)', fontFamily: 'var(--font-body)', fontSize: '0.85rem',
                outline: 'none',
              }}
            />
            <button onClick={send} disabled={loading || !input.trim()} style={{
              background: 'var(--accent)', border: 'none', borderRadius: '6px',
              padding: '0.55rem 1rem', color: '#fff', cursor: 'pointer',
              fontFamily: 'var(--font-mono)', fontSize: '0.8rem',
              opacity: loading || !input.trim() ? 0.5 : 1,
              transition: 'opacity 0.2s',
            }}>Send</button>
          </div>
        </div>
      )}
    </>
  )
}