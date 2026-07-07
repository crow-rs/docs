import Layout from '@theme/Layout';
import React from 'react';

const heroStyle: React.CSSProperties = {
  padding: '6rem 2rem 4rem',
  textAlign: 'center',
  background: 'linear-gradient(180deg, #0e0e1a 0%, #12121f 50%, #0c0c18 100%)',
  position: 'relative',
  overflow: 'hidden',
};

const heroGlow: React.CSSProperties = {
  position: 'absolute',
  top: '-40%',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '600px',
  height: '600px',
  background: 'radial-gradient(circle, rgba(124,111,234,0.08) 0%, transparent 70%)',
  pointerEvents: 'none',
};

const tagline: React.CSSProperties = {
  fontSize: '1.15rem',
  color: '#8a8ca0',
  maxWidth: '520px',
  margin: '1rem auto 2rem',
  lineHeight: '1.7',
};

const codeBlock: React.CSSProperties = {
  textAlign: 'left',
  display: 'inline-block',
  background: '#0e0e1e',
  border: '1px solid #1e1e35',
  borderRadius: '10px',
  padding: '1.5rem 2rem',
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: '0.9rem',
  lineHeight: '1.7',
  color: '#c8cad8',
  boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
  maxWidth: '100%',
  overflow: 'auto',
};

const keyword: React.CSSProperties = { color: '#c4b5fd' };
const func: React.CSSProperties = { color: '#e4a853' };
const str: React.CSSProperties = { color: '#34d399' };
const num: React.CSSProperties = { color: '#f0abfc' };
const ty: React.CSSProperties = { color: '#7c6fea' };
const comment: React.CSSProperties = { color: '#4a4c65', fontStyle: 'italic' };

const btnPrimary: React.CSSProperties = {
  display: 'inline-block',
  padding: '0.75rem 2rem',
  background: '#7c6fea',
  color: '#fff',
  borderRadius: '8px',
  fontWeight: 600,
  fontSize: '1rem',
  textDecoration: 'none',
  transition: 'all 0.2s ease',
  marginRight: '1rem',
};

const btnOutline: React.CSSProperties = {
  display: 'inline-block',
  padding: '0.75rem 2rem',
  background: 'transparent',
  color: '#c8cad8',
  border: '1px solid #2a2a45',
  borderRadius: '8px',
  fontWeight: 500,
  fontSize: '1rem',
  textDecoration: 'none',
  transition: 'all 0.2s ease',
};

const sectionStyle: React.CSSProperties = {
  padding: '4rem 2rem',
  width: '100%',
  maxWidth: '1100px',
  margin: '0 auto',
  boxSizing: 'border-box' as const,
};

const gridStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap' as const,
  gap: '1.5rem',
  marginTop: '2.5rem',
  justifyContent: 'center',
};

const cardStyle: React.CSSProperties = {
  background: '#12121f',
  border: '1px solid #1e1e35',
  borderRadius: '10px',
  padding: '1.5rem',
  flex: '1 1 280px',
  maxWidth: '340px',
};

const cardIcon: React.CSSProperties = {
  marginBottom: '0.75rem',
  color: '#7c6fea',
};

const cardTitle: React.CSSProperties = {
  color: '#eceef6',
  fontSize: '1.05rem',
  fontWeight: 600,
  marginBottom: '0.5rem',
};

const cardDesc: React.CSSProperties = {
  color: '#8a8ca0',
  fontSize: '0.9rem',
  lineHeight: '1.6',
  margin: 0,
};

const exampleSection: React.CSSProperties = {
  padding: '3rem 2rem 4rem',
  maxWidth: '960px',
  margin: '0 auto',
};

const exampleGrid: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '1.5rem',
  marginTop: '2rem',
};

const exampleCard: React.CSSProperties = {
  background: '#0e0e1e',
  border: '1px solid #1e1e35',
  borderRadius: '10px',
  padding: '1.25rem 1.5rem',
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: '0.82rem',
  lineHeight: '1.7',
  color: '#c8cad8',
};

const exampleLabel: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontSize: '0.75rem',
  fontWeight: 600,
  textTransform: 'uppercase' as const,
  letterSpacing: '0.08em',
  color: '#6a6c85',
  marginBottom: '0.75rem',
};

const ctaSection: React.CSSProperties = {
  textAlign: 'center',
  padding: '3rem 2rem 5rem',
};

export default function Home() {
  return (
    <Layout title="Crow Language">
      {/* ── Hero ────────────────────────────────── */}
      <div style={heroStyle}>
        <div style={heroGlow} />
        <p style={tagline}>
          NOTE: THE DOCUMENTATION IS VERY ROUGH; PLEASE VIEW THIS SITE AS A DEMONSTRATION AND A PROMOTIONAL SHOWCASE :)
        </p>
        <h1 style={{ fontSize: '2.8rem', fontWeight: 700, color: '#eceef6', margin: 0 }}>
          🐦‍⬛ Crow Language
        </h1>
        <p style={{ color: '#6a6c85', marginBottom: '1.5rem' }}>
          Open source · Built with Rust · Compiles to native
        </p>
        <p style={tagline}>
          Functional language with algebraic effects, strong type paradigm,
          and native compilation via LLVM.
        </p>
        <pre style={codeBlock}>
          <code>
          <span style={keyword}>fun </span>
          <span style={func}>main</span>
          <span>() -&gt; </span>
          <span style={ty}>i8</span>
          <span> {'{'}</span>{'\n'}
          <span>{'    '}</span><span style={func}>println</span><span>(</span><span style={str}>"Hello, Crow!\n"</span><span>)</span>{'\n'}
          <span>{'    '}</span><span style={num}>0</span>{'\n'}
          <span>{'}'}</span>
          </code>
        </pre>
        <div style={{ marginTop: '2.5rem' }}>
          <a href="/docs/intro" style={btnPrimary}>Get Started</a>
          <a href="https://github.com/crow-rs/crow" style={btnOutline}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ verticalAlign: 'middle', marginRight: '0.5rem' }}
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          GitHub
        </a>
        </div>
      </div>

      {/* ── Features ────────────────────────────── */}
      <div style={sectionStyle}>
        <h2 style={{ textAlign: 'center', color: '#eceef6', fontSize: '1.6rem' }}>
          Why Crow?
        </h2>
        <div style={gridStyle}>
          <div style={cardStyle}>
            <div style={cardIcon}>
              {/* layers icon */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
            </div>
            <div style={cardTitle}>Effects, not exceptions</div>
            <p style={cardDesc}>
              Every side effect is visible in the function signature.
              No hidden surprises — you see exactly what a function
              does before you call it.
            </p>
          </div>

          <div style={cardStyle}>
            <div style={cardIcon}>
              {/* edit icon */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
            </div>
            <div style={cardTitle}>Write less, say more</div>
            <p style={cardDesc}>
              No type annotations on every variable. No semicolons.
              The compiler infers types, you focus on logic.
            </p>
          </div>

          <div style={cardStyle}>
            <div style={cardIcon}>
              {/* git-branch icon */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="6" y1="3" x2="6" y2="15" />
                <circle cx="18" cy="6" r="3" />
                <circle cx="6" cy="18" r="3" />
                <path d="M18 9a9 9 0 0 1-9 9" />
              </svg>
            </div>
            <div style={cardTitle}>Match, don't branch</div>
            <p style={cardDesc}>
              Destructure any data with pattern matching. The compiler
              checks you covered every case — no forgotten edge cases.
            </p>
          </div>

          <div style={cardStyle}>
            <div style={cardIcon}>
              {/* shield icon */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div style={cardTitle}>Immutable by default</div>
            <p style={cardDesc}>
              Data doesn't change unless you say so. No unexpected
              mutation from another thread, no defensive copying.
            </p>
          </div>

          <div style={cardStyle}>
            <div style={cardIcon}>
              {/* plug/zap icon */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </div>
            <div style={cardTitle}>Drop into C when you need to</div>
            <p style={cardDesc}>
              Call any C function with one line. Use existing libraries
              without wrappers, bindings generators, or glue code.
            </p>
          </div>

          <div style={cardStyle}>
            <div style={cardIcon}>
              {/* cpu icon */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
                <rect x="9" y="9" width="6" height="6" />
                <line x1="9" y1="1" x2="9" y2="4" />
                <line x1="15" y1="1" x2="15" y2="4" />
                <line x1="9" y1="20" x2="9" y2="23" />
                <line x1="15" y1="20" x2="15" y2="23" />
                <line x1="20" y1="9" x2="23" y2="9" />
                <line x1="20" y1="14" x2="23" y2="14" />
                <line x1="1" y1="9" x2="4" y2="9" />
                <line x1="1" y1="14" x2="4" y2="14" />
              </svg>
            </div>
            <div style={cardTitle}>Runs on bare metal</div>
            <p style={cardDesc}>
              Compiles straight to native. No VM, no interpreter,
              no startup lag. Just your code and the machine.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}