import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";

const fetchBotData = () => {
  return axios.get(`http://localhost:8080/api/bot/data`);
}

const BotPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Testing useEffect...");
    const testFetch = async () => {
      try {
        console.log("Calling API...");
        const response = await fetchBotData();
        if (response.data) {
          setData(response.data);
        }
      } catch (err) {
        console.error("API Error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    testFetch();
  }, []);

  if (loading) {
    return (
      <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="text-white text-center">
          <div className="spinner-border" role="status" style={{ width: '3rem', height: '3rem' }}>
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3 h5">Loading bot protection data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">Error Loading Data</h4>
          <p>{error}</p>
          <hr />
          <p className="mb-0">Please ensure the backend server is running on http://localhost:8080</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', minHeight: '100vh' }}>
      <style>{`
        .hero-section {
          padding: 80px 0 60px; 
          color: white;
        }
        .security-badge { 
          display: inline-block;
          background: rgba(255,255,255,0.2);
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 20px;
          backdrop-filter: blur(10px);
        }
        .content-section {
          background: white;
          border-radius: 20px 20px 0 0;
          margin-top: 40px;
        }
        .section-card {
          background: white;
          border-radius: 16px;
          padding: 30px;
          margin-bottom: 30px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.07);
          border: 1px solid #e9ecef;
        }
        .reality-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 20px;
          border-radius: 12px;
          font-weight: 500;
          margin: 8px;
          transition: transform 0.2s;
        }
        .reality-badge:hover {
          transform: translateY(-2px);
        }
        .flow-step {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 15px 25px;
          border-radius: 12px;
          margin: 10px 0;
          text-align: center;
          font-weight: 500;
          position: relative;
        }
        .flow-arrow {
          text-align: center;
          font-size: 24px;
          color: #667eea;
          margin: 5px 0;
        }
        .method-card {
          border-left: 4px solid #667eea;
          padding: 20px;
          margin: 15px 0;
          background: #f8f9fa;
          border-radius: 8px;
        }
        .signal-table {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
        .risk-badge {
          display: inline-block;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
        }
        .code-block {
          background: #1e1e1e;
          color: #4ec9b0;
          padding: 20px;
          border-radius: 12px;
          font-family: 'Courier New', monospace;
          font-size: 14px;
          overflow-x: auto;
          margin: 15px 0;
        }
        .tag-pill {
          display: inline-block;
          background: #e9ecef;
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 13px;
          margin: 4px;
        }
      `}</style>

      {/* Hero Section */}
      <div className="hero-section text-center">
        <div className="container">
          <h1 className="display-3 fw-bold mb-3">{data.hero.title}</h1>
          <p className="lead" style={{ maxWidth: '700px', margin: '0 auto', opacity: 0.95 }}>
            {data.hero.subtitle}
          </p>

          {/* Verification Message */}
          <div className="alert alert-success d-inline-flex align-items-center gap-3 mt-5"
            style={{
              background: 'rgba(255,255,255,0.95)',
              border: '2px solid #10b981',
              borderRadius: '12px',
              padding: '16px 24px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}>
            <svg width="24" height="24" fill="none" stroke="#10b981" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="text-start">
              <strong className="text-success d-block mb-1">✓ Access Granted - Human User Verified</strong>
              <span className="text-muted" style={{ fontSize: '14px' }}>
                You are viewing this page because our security filter has successfully authenticated you as a legitimate user.
                Automated bots attempting to access this content would have been intercepted by our defense system and served decoy data instead.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="content-section">
        <div className="container py-5">

          {/* Reality Check Section */}
          <div className="section-card">
            <h2 className="h3 fw-bold mb-3 text-dark">{data.realityCheck.title}</h2>
            <p className="text-muted mb-4" style={{ fontSize: '16px', lineHeight: '1.7' }}>
              {data.realityCheck.description}
            </p>

            <div className="alert alert-light border" role="alert">
              <strong>Common Misconception:</strong> {data.realityCheck.misconception}
            </div>

            <h5 className="fw-semibold mb-3">Protection Strategy:</h5>
            <div className="d-flex flex-wrap justify-content-center">
              {data.realityCheck.reality.map((item, idx) => (
                <div key={idx} className={`reality-badge bg-${item.color} bg-opacity-10 border border-${item.color}`}>
                  <span style={{ fontSize: '20px' }}>{item.icon}</span>
                  <span className={`text-${item.color}`}>{item.label}</span>
                </div>
              ))}
            </div>

            <div className="alert alert-info mt-4 mb-0">
              <strong>Key Principle:</strong> {data.realityCheck.note}
            </div>
          </div>

          {/* Architecture Section */}
          <div className="section-card">
            <h2 className="h3 fw-bold mb-2 text-dark">{data.architecture.title}</h2>
            <p className="text-muted mb-4">{data.architecture.subtitle}</p>

            <div className="row">
              <div className="col-md-8 offset-md-2">
                {data.architecture.flow.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <div className="flow-step">{step}</div>
                    {idx < data.architecture.flow.length - 1 && (
                      <div className="flow-arrow">↓</div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="alert alert-secondary mt-4 mb-0">
              <strong>Multi-Layered Defense:</strong> Protection isn't a single technique—it's a comprehensive stack of detection methods working together.
            </div>
          </div>

          {/* Static Detection Section */}
          <div className="section-card">
            <h2 className="h3 fw-bold mb-2 text-dark">{data.staticDetection.title}</h2>
            <p className="text-muted mb-4">{data.staticDetection.description}</p>

            {data.staticDetection.methods.map((method, idx) => (
              <div key={idx} className="method-card">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <h5 className="fw-bold mb-2 text-dark">{method.name}</h5>
                  <span className="badge bg-success">{method.effectiveness}</span>
                </div>
                <p className="text-muted mb-3">{method.description}</p>

                {method.examples && (
                  <div>
                    <small className="text-muted fw-semibold d-block mb-2">Blocked Examples:</small>
                    {method.examples.map((ex, i) => (
                      <span key={i} className="tag-pill">{ex}</span>
                    ))}
                  </div>
                )}

                {method.headers && (
                  <div>
                    <small className="text-muted fw-semibold d-block mb-2">Validated Headers:</small>
                    {method.headers.map((header, i) => (
                      <span key={i} className="tag-pill">{header}</span>
                    ))}
                  </div>
                )}

                {method.indicators && (
                  <div>
                    <small className="text-muted fw-semibold d-block mb-2">Bot Indicators:</small>
                    {method.indicators.map((ind, i) => (
                      <span key={i} className="tag-pill">{ind}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Behavioral Detection Section */}
          <div className="section-card">
            <h2 className="h3 fw-bold mb-2 text-dark">{data.behavioralDetection.title}</h2>
            <p className="text-muted mb-4">{data.behavioralDetection.description}</p>

            <h5 className="fw-semibold mb-3">Behavioral Signals Analysis:</h5>
            <div className="table-responsive signal-table">
              <table className="table table-hover mb-0">
                <thead className="table-light">
                  <tr>
                    <th>Signal</th>
                    <th>Human Behavior</th>
                    <th>Bot Behavior</th>
                  </tr>
                </thead>
                <tbody>
                  {data.behavioralDetection.signals.map((signal, idx) => (
                    <tr key={idx}>
                      <td className="fw-semibold">{signal.metric}</td>
                      <td><span className="badge bg-success bg-opacity-10 text-success">{signal.human}</span></td>
                      <td><span className="badge bg-danger bg-opacity-10 text-danger">{signal.bot}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h5 className="fw-semibold mb-3 mt-4">Risk Scoring Model:</h5>
            <div className="row">
              <div className="col-md-6">
                <div className="code-block">
                  {`risk = 0\n\n${data.behavioralDetection.riskScoring.map(r =>
                    `if (${r.condition.padEnd(20)}) risk += ${r.score}`
                  ).join('\n')}`}
                </div>
              </div>
              <div className="col-md-6">
                <h6 className="fw-semibold mb-3">Decision Matrix:</h6>
                {data.behavioralDetection.decisions.map((decision, idx) => (
                  <div key={idx} className="d-flex align-items-center mb-3">
                    <div className="me-3" style={{ minWidth: '80px' }}>
                      <span className={`risk-badge bg-${decision.type} bg-opacity-10 text-${decision.type}`}>
                        {decision.range}
                      </span>
                    </div>
                    <div className="flex-grow-1">
                      <strong>{decision.action}</strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="alert alert-warning mt-4 mb-0">
              <strong>⚡ Advanced Detection:</strong> This AI-powered layer catches sophisticated bots that bypass static filters, using behavioral pattern analysis and risk scoring.
            </div>
          </div>

          {/* Footer */}
          <div className="text-center py-4 text-muted">
            <p className="mb-0">
              <strong>Secure by Design:</strong> Multi-layered bot protection combining static rules and AI-powered behavioral analysis
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BotPage;