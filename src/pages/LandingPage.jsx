import React from 'react';

const LandingPage = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' 
    }}>
      <div className="container py-5">
        <style>{`
          .hero-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: #eff6ff;
            color: #1d4ed8;
            padding: 0.5rem 1rem;
            border-radius: 50px;
            font-size: 0.875rem;
            font-weight: 500;
            margin-bottom: 1.5rem;
          }
          
          .btn-primary-custom {
            background: #2563eb;
            border: none;
            padding: 0.75rem 2rem;
            border-radius: 0.5rem;
            font-weight: 600;
            transition: all 0.2s;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          }
          
          .btn-primary-custom:hover {
            background: #1d4ed8;
            transform: translateY(-2px);
            box-shadow: 0 6px 12px rgba(0,0,0,0.15);
          }
          
          .btn-outline-custom {
            background: white;
            color: #475569;
            border: 2px solid #e2e8f0;
            padding: 0.75rem 2rem;
            border-radius: 0.5rem;
            font-weight: 600;
            transition: all 0.2s;
          }
          
          .btn-outline-custom:hover {
            background: #f8fafc;
            border-color: #cbd5e1;
            color: #475569;
          }
          
          .section-card {
            background: white;
            border-radius: 1rem;
            padding: 2.5rem;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            border: 1px solid #e2e8f0;
          }
          
          .icon-badge {
            width: 3rem;
            height: 3rem;
            border-radius: 0.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
          }
          
          .feature-card {
            background: white;
            border-radius: 0.75rem;
            padding: 1.5rem;
            height: 100%;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            border: 1px solid #e2e8f0;
            transition: all 0.2s;
          }
          
          .feature-card:hover {
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          }
          
          .feature-icon {
            width: 3rem;
            height: 3rem;
            border-radius: 0.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1rem;
          }
          
          .code-block {
            background: #1e293b;
            border-radius: 0.75rem;
            padding: 2rem;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          }
          
          .code-block pre {
            color: #4ade80;
            font-family: 'Courier New', monospace;
            margin: 0;
            font-size: 0.95rem;
            line-height: 1.8;
          }
          
          .info-card {
            background: white;
            border-radius: 0.75rem;
            padding: 2rem;
            height: 100%;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            border: 1px solid #e2e8f0;
          }
          
          .section-icon {
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 0.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .custom-list {
            list-style: none;
            padding: 0;
          }
          
          .custom-list li {
            display: flex;
            align-items: flex-start;
            gap: 0.5rem;
            margin-bottom: 0.75rem;
            color: #475569;
          }
          
          .custom-list li:before {
            content: "•";
            color: #3b82f6;
            font-weight: bold;
            font-size: 1.2rem;
            margin-top: -0.15rem;
          }
        `}</style>

        {/* HERO SECTION */}
        <section className="text-center mb-5">
          <div className="hero-badge">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            AI-Powered Security
          </div>
          
          <h1 className="display-3 fw-bold text-dark mb-4" style={{ lineHeight: '1.2', fontSize: '3rem' }}>
            Intelligent Access Control System
          </h1>
          
          <p className="lead text-muted mx-auto mb-4" style={{ maxWidth: '60rem', fontSize: '1.25rem' }}>
            An AI-assisted security gateway that analyzes every HTTP request
            using static rules, behavioral signals, and risk-based decision making.
          </p>

          <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
            <a href="#architecture" className="btn btn-primary-custom" style={{color: 'white'}}>
              View Architecture
            </a>
            <a href="/demo" className="btn btn-outline-custom">
              Try Demo Attacks
            </a>
          </div>
        </section>

        {/* PROBLEM STATEMENT */}
        <section className="mb-5 mt-5">
          <div className="section-card">
            <div className="d-flex align-items-start gap-3 mb-3">
              <div className="icon-badge" style={{ background: '#fef3c7' }}>
                <svg width="24" height="24" fill="none" stroke="#d97706" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 className="h2 fw-bold text-dark mb-3">Why This System Exists</h3>
              </div>
            </div>
            
            <p className="text-muted mb-3" style={{ lineHeight: '1.7' }}>
              Modern web applications face constant threats such as bot traffic,
              brute-force attacks, scraping, and API abuse.
              Traditional security mechanisms rely on static rules that fail
              to adapt to evolving attack patterns.
            </p>
            <p className="text-muted" style={{ lineHeight: '1.7' }}>
              This system introduces an <strong className="text-dark">intelligent decision layer</strong> that 
              evaluates requests dynamically and responds based on risk,
              not just predefined rules.
            </p>
          </div>
        </section>

        {/* KEY FEATURES */}
        <section className="mb-5">
          <h3 className="h2 fw-bold text-dark mb-4 text-center">Key Capabilities</h3>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="feature-card">
                <div className="feature-icon" style={{ background: '#dbeafe' }}>
                  <svg width="24" height="24" fill="none" stroke="#2563eb" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h5 className="h5 fw-semibold text-dark mb-3">Static Rule Engine</h5>
                <p className="text-muted mb-0" style={{ lineHeight: '1.7' }}>
                  Fast-path filtering using IP blacklists, user-agent checks,
                  endpoint rules, and known malicious patterns.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-card">
                <div className="feature-icon" style={{ background: '#f3e8ff' }}>
                  <svg width="24" height="24" fill="none" stroke="#9333ea" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h5 className="h5 fw-semibold text-dark mb-3">AI Risk Analysis</h5>
                <p className="text-muted mb-0" style={{ lineHeight: '1.7' }}>
                  AI evaluates request metadata and behavior patterns
                  to classify requests as low, medium, or high risk.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-card">
                <div className="feature-icon" style={{ background: '#d1fae5' }}>
                  <svg width="24" height="24" fill="none" stroke="#059669" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h5 className="h5 fw-semibold text-dark mb-3">Adaptive Decisions</h5>
                <p className="text-muted mb-0" style={{ lineHeight: '1.7' }}>
                  Requests are allowed, challenged with CAPTCHA,
                  or blocked entirely based on combined risk signals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* REQUEST FLOW */}
        <section id="architecture" className="mb-5">
          <h3 className="h2 fw-bold text-dark mb-3 text-center">Request Processing Flow</h3>
          <p className="text-muted text-center mx-auto mb-4" style={{ maxWidth: '42rem' }}>
            Every incoming request passes through a multi-stage evaluation
            pipeline before reaching the application.
          </p>

          <div className="code-block">
            <pre>
{`Client Request
   ↓
Security Filter (OncePerRequestFilter)
   ↓
Static Rule Engine
   ↓
AI Risk Evaluation
   ↓
Decision Orchestrator
   ↓
Action: ALLOW | CAPTCHA | DENY
   ↓
Audit Logging`}
            </pre>
          </div>
        </section>

        {/* DEMO & ADMIN - Two Column */}
        <div className="row g-4 mb-5">
          {/* DEMO EXPLANATION */}
          <div className="col-md-6">
            <div className="info-card">
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="section-icon" style={{ background: '#e0e7ff' }}>
                  <svg width="20" height="20" fill="none" stroke="#4f46e5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="h5 fw-bold text-dark mb-0">Live Attack Simulation</h3>
              </div>
              
              <p className="text-muted mb-3" style={{ lineHeight: '1.7' }}>
                The application includes a built-in demo environment that allows
                recruiters and reviewers to simulate malicious traffic without
                external tools.
              </p>
              <ul className="custom-list">
                <li>Predefined attack scenarios (rate abuse, bad headers, bots)</li>
                <li>Custom request builder for manual testing</li>
                <li>Real-time visibility into security decisions</li>
              </ul>
            </div>
          </div>

          {/* ADMIN & SECURITY */}
          <div className="col-md-6">
            <div className="info-card">
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="section-icon" style={{ background: '#d1fae5' }}>
                  <svg width="20" height="20" fill="none" stroke="#059669" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="h5 fw-bold text-dark mb-0">Administration & Observability</h3>
              </div>
              
              <p className="text-muted mb-3" style={{ lineHeight: '1.7' }}>
                An admin dashboard provides visibility and control over security
                operations.
              </p>
              <ul className="custom-list">
                <li>View blocked and challenged requests</li>
                <li>Inspect AI risk classifications</li>
                <li>Enable or disable security rules</li>
                <li>Audit historical request decisions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FOOTER NOTE */}
        <section className="text-center py-4" style={{ borderTop: '1px solid #e2e8f0' }}>
          <p className="text-muted mb-0">
            This project demonstrates real-world backend security engineering
            using Spring Boot, AI-assisted decision making, and modern web tooling.
          </p>
        </section>

      </div>
    </div>
  );
}

export default LandingPage;