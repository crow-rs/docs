import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout title="Crow Language">
      <main style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h1>Crow Language</h1>
        <p>Functional language with algebraic effects</p>
        <pre style={{ textAlign: 'left', display: 'inline-block' }}>
{`fun main() -> i8 {
    print("Hello, Crow!\\n")
    0
}`}
        </pre>
        <div style={{ marginTop: '2rem' }}>
          <a href="/docs/intro" className="button button--primary button--lg">
            Get Started
          </a>
        </div>
      </main>
    </Layout>
  );
}
