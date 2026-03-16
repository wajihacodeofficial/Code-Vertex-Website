import React from 'react';
import { motion } from 'framer-motion';

const CodeSnippet: React.FC = () => {
  const code = `// Code Vertex High-Performance Core
const executionEngine = async (blueprint) => {
  const pool = new ConnectionPool({
    max: 50,
    strategy: 'round-robin'
  });

  return await pool.execute(async (ctx) => {
    const result = await ctx.fetch(blueprint.target);
    return analyzeLogic(result.stream);
  });
};`;

  return (
    <div
      className="glass-card"
      style={{ padding: '3rem', position: 'relative', overflow: 'hidden' }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem',
        }}
      >
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: '#ff5f56',
            }}
          />
          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: '#ffbd2e',
            }}
          />
          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: '#27c93f',
            }}
          />
        </div>
        <span
          style={{
            fontSize: '0.6rem',
            fontWeight: 800,
            color: 'var(--text-muted)',
            letterSpacing: '0.2em',
          }}
        >
          ENGINE_CORE.JS
        </span>
      </div>

      <motion.pre
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={{
          margin: 0,
          fontSize: '0.9rem',
          lineHeight: '1.6',
          color: '#00d2ff',
          fontFamily: "'Fira Code', 'Courier New', monospace",
          overflowX: 'auto',
        }}
      >
        <code>{code}</code>
      </motion.pre>

      <div
        style={{
          marginTop: '2rem',
          paddingTop: '2rem',
          borderTop: '1px solid var(--card-border)',
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
        }}
      >
        <div
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: 'var(--accent-gradient)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.8rem',
            fontWeight: 900,
          }}
        >
          CV
        </div>
        <div>
          <h5 style={{ fontSize: '0.8rem', margin: 0 }}>
            Code Vertex Engineering
          </h5>
          <p
            style={{
              fontSize: '0.65rem',
              color: 'var(--text-muted)',
              margin: 0,
            }}
          >
            Core Infrastructure Team
          </p>
        </div>
      </div>
    </div>
  );
};

export default CodeSnippet;
