import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Demo = () => {
  const requests = [
    {
      "id": 1,
      "userId": 101,
      "role": "USER",
      "ip": "103.21.44.12",
      "country": "IN",
      "device": "KNOWN",
      "usingVpn": false,
      "usingTor": false,
      "failedAttemptsLastHour": 0,
      "loginTime": "10:15",
      "endpoint": "/login",
      "httpMethod": "POST",
      "threatScore": 0
    },
    {
      "id": 2,
      "userId": 202,
      "role": "USER",
      "ip": "49.36.180.22",
      "country": "IN",
      "device": "KNOWN",
      "usingVpn": true,
      "usingTor": false,
      "failedAttemptsLastHour": 0,
      "loginTime": "14:40",
      "endpoint": "/profile",
      "httpMethod": "GET",
      "threatScore": 15
    },
    {
      "id": 3,
      "userId": 303,
      "role": "USER",
      "ip": "152.58.91.67",
      "country": "IN",
      "device": "KNOWN",
      "usingVpn": true,
      "usingTor": false,
      "failedAttemptsLastHour": 2,
      "loginTime": "02:30",
      "endpoint": "/login",
      "httpMethod": "POST",
      "threatScore": 25
    },
    {
      "id": 4,
      "userId": 404,
      "role": "USER",
      "ip": "185.220.101.18",
      "country": "IN",
      "device": "KNOWN",
      "usingVpn": false,
      "usingTor": true,
      "failedAttemptsLastHour": 4,
      "loginTime": "18:10",
      "endpoint": "/settings",
      "httpMethod": "POST",
      "threatScore": 50
    },
    {
      "id": 5,
      "userId": 505,
      "role": "USER",
      "ip": "34.125.77.19",
      "country": "US",
      "device": "NEW",
      "usingVpn": true,
      "usingTor": false,
      "failedAttemptsLastHour": 4,
      "loginTime": "01:45",
      "endpoint": "/admin/dashboard",
      "httpMethod": "GET",
      "threatScore": 55
    },
    {
      "id": 6,
      "userId": 605,
      "role": "USER",
      "ip": "185.220.101.33",
      "country": "DE",
      "device": "NEW",
      "usingVpn": false,
      "usingTor": true,
      "failedAttemptsLastHour": 6,
      "loginTime": "03:10",
      "endpoint": "/login",
      "httpMethod": "POST",
      "threatScore": 70
    }
  ];

  const [selectedRequest, setSelectedRequest] = useState(null);
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showCustomForm, setShowCustomForm] = useState(false);
  
  const [customRequest, setCustomRequest] = useState({
    userId: '',
    role: 'USER',
    ip: '',
    country: 'IN',
    device: 'KNOWN',
    usingVpn: false,
    usingTor: false,
    failedAttemptsLastHour: 0,
    loginTime: '',
    endpoint: '/login',
    httpMethod: 'POST'
  });

  const handleRequestSelect = async (id) => {
    const request = requests.find(r => r.id === id);
    setSelectedRequest(request);
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:8080/api/evaluate', request);
      setResponseData(response.data);
    } catch (err) {
      setError(err.message);
      console.error('Error calling API:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCustomInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCustomRequest(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : 
              name === 'userId' || name === 'failedAttemptsLastHour' ? parseInt(value) || 0 :
              value
    }));
  };

  const handleCustomSubmit = async (e) => {
    e.preventDefault();
    setSelectedRequest(customRequest);
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:8080/api/evaluate', customRequest);
      setResponseData(response.data);
      setShowCustomForm(false);
    } catch (err) {
      setError(err.message);
      console.error('Error calling API:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4"><strong>Threat Analysis Dashboard</strong></h1>

      <div className="row">
        {/* Request Box */}
        <div className="col-md-4 mb-3">
          <div className="card h-100" style={{ backgroundColor: '#1e293b', border: 'none' }}>
            <div className="card-header text-white" style={{ backgroundColor: '#1e293b', borderBottom: '1px solid #334155' }}>
              <h5 className="mb-0" style={{ color: '#fff' }}>Request</h5>
            </div>
            <div className="card-body">
              {selectedRequest ? (
                <pre className="mb-0" style={{ fontSize: '0.8rem', maxHeight: '400px', overflow: 'auto', color: '#4ade80' }}>
                  {JSON.stringify(selectedRequest, null, 2)}
                </pre>
              ) : (
                <p style={{ color: '#4ade80' }}>Select a request to view details</p>
              )}
            </div>
          </div>
        </div>

        {/* Result Box */}
        <div className="col-md-4 mb-3">
          <div className="card h-100" style={{ backgroundColor: '#1e293b', border: 'none' }}>
            <div className="card-header text-white" style={{ backgroundColor: '#1e293b', borderBottom: '1px solid #334155' }}>
              <h5 className="mb-0" style={{ color: '#fff' }}>Result</h5>
            </div>
            <div className="card-body">
              {loading ? (
                <div className="text-center">
                  <div className="spinner-border" style={{ color: '#4ade80' }} role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : error ? (
                <div className="alert alert-danger" role="alert">
                  Error: {error}
                </div>
              ) : responseData?.result ? (
                <>
                  <div className="mb-3">
                    <strong style={{ color: '#fff' }}>Threat Score:</strong>
                    <h2 className={`mb-0 ${
                      responseData.result.threatScore < 20 ? 'text-success' :
                      responseData.result.threatScore < 50 ? 'text-warning' :
                      'text-danger'
                    }`}>
                      {responseData.result.threatScore}
                    </h2>
                  </div>
                  <div className="mb-3">
                    <strong style={{ color: '#fff' }}>Decision:</strong>
                    <span className={`badge ms-2 ${
                      responseData.result.decision === 'ALLOW' ? 'bg-success' :
                      responseData.result.decision === 'REVIEW' ? 'bg-warning' :
                      'bg-danger'
                    }`}>
                      {responseData.result.decision}
                    </span>
                  </div>
                  <div>
                    <strong style={{ color: '#fff' }}>Reasons:</strong>
                    <ul className="mt-2">
                      {responseData.result.reasons.map((reason, idx) => (
                        <li key={idx} style={{ fontSize: '0.9rem', color: '#4ade80' }}>{reason}</li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <p style={{ color: '#4ade80' }}>No result data available</p>
              )}
            </div>
          </div>
        </div>

        {/* AI Response Box */}
        <div className="col-md-4 mb-3">
          <div className="card h-100" style={{ backgroundColor: '#1e293b', border: 'none' }}>
            <div className="card-header text-white" style={{ backgroundColor: '#1e293b', borderBottom: '1px solid #334155' }}>
              <h5 className="mb-0" style={{ color: '#fff' }}>AI Response</h5>
            </div>
            <div className="card-body">
              {loading ? (
                <div className="text-center">
                  <div className="spinner-border" style={{ color: '#4ade80' }} role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : responseData ? (
                <pre className="mb-0" style={{ fontSize: '0.85rem', color: '#4ade80' }}>
                  {responseData.aiResponse === null ? 
                    'null' : 
                    JSON.stringify(responseData.aiResponse, null, 2)
                  }
                </pre>
              ) : (
                <p style={{ color: '#4ade80' }}>No AI response data available</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Request Selection Buttons */}
      <div className="mb-4 text-center">
        <h5 className="mb-3">Select Request</h5>
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-3">
          {requests.map(req => {
            const color = req.threatScore < 20 ? 'success' : req.threatScore < 50 ? 'warning' : 'danger';
            return (
              <button
                key={req.id}
                className={`btn btn-${color} ${selectedRequest?.id === req.id ? 'active' : ''}`}
                onClick={() => handleRequestSelect(req.id)}
                disabled={loading}
              >
                Request {req.id} (Score: {req.threatScore})
              </button>
            );
          })}
        </div>
        <button 
          className="btn btn-primary"
          onClick={() => setShowCustomForm(!showCustomForm)}
        >
          {showCustomForm ? 'Hide Custom Request Form' : 'Create Custom Request'}
        </button>
      </div>

      {/* Custom Request Form */}
      {showCustomForm && (
        <div className="card mb-4" style={{ backgroundColor: '#1e293b', border: '1px solid #334155' }}>
          <div className="card-header" style={{ backgroundColor: '#1e293b', borderBottom: '1px solid #334155' }}>
            <h5 className="mb-0" style={{ color: '#fff' }}>Custom Request Form</h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label" style={{ color: '#fff' }}>User ID</label>
                <input 
                  type="number" 
                  className="form-control" 
                  name="userId"
                  value={customRequest.userId}
                  onChange={handleCustomInputChange}
                  placeholder="Enter user ID"
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label" style={{ color: '#fff' }}>Role</label>
                <select 
                  className="form-select" 
                  name="role"
                  value={customRequest.role}
                  onChange={handleCustomInputChange}
                >
                  <option value="USER">USER</option>
                  <option value="ADMIN">ADMIN</option>
                  <option value="GUEST">GUEST</option>
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label" style={{ color: '#fff' }}>IP Address</label>
                <input 
                  type="text" 
                  className="form-control" 
                  name="ip"
                  value={customRequest.ip}
                  onChange={handleCustomInputChange}
                  placeholder="192.168.1.1"
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label" style={{ color: '#fff' }}>Country</label>
                <input 
                  type="text" 
                  className="form-control" 
                  name="country"
                  value={customRequest.country}
                  onChange={handleCustomInputChange}
                  placeholder="IN"
                  maxLength="2"
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label" style={{ color: '#fff' }}>Device</label>
                <select 
                  className="form-select" 
                  name="device"
                  value={customRequest.device}
                  onChange={handleCustomInputChange}
                >
                  <option value="KNOWN">KNOWN</option>
                  <option value="NEW">NEW</option>
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label" style={{ color: '#fff' }}>Failed Attempts (Last Hour)</label>
                <input 
                  type="number" 
                  className="form-control" 
                  name="failedAttemptsLastHour"
                  value={customRequest.failedAttemptsLastHour}
                  onChange={handleCustomInputChange}
                  min="0"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label" style={{ color: '#fff' }}>Login Time (HH:MM)</label>
                <input 
                  type="time" 
                  className="form-control" 
                  name="loginTime"
                  value={customRequest.loginTime}
                  onChange={handleCustomInputChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label" style={{ color: '#fff' }}>Endpoint</label>
                <input 
                  type="text" 
                  className="form-control" 
                  name="endpoint"
                  value={customRequest.endpoint}
                  onChange={handleCustomInputChange}
                  placeholder="/login"
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label" style={{ color: '#fff' }}>HTTP Method</label>
                <select 
                  className="form-select" 
                  name="httpMethod"
                  value={customRequest.httpMethod}
                  onChange={handleCustomInputChange}
                >
                  <option value="GET">GET</option>
                  <option value="POST">POST</option>
                  <option value="PUT">PUT</option>
                  <option value="DELETE">DELETE</option>
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <div className="form-check mt-4">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    name="usingVpn"
                    checked={customRequest.usingVpn}
                    onChange={handleCustomInputChange}
                    id="usingVpn"
                  />
                  <label className="form-check-label" style={{ color: '#4ade80' }} htmlFor="usingVpn">
                    Using VPN
                  </label>
                </div>
              </div>

              <div className="col-md-6 mb-3">
                <div className="form-check mt-4">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    name="usingTor"
                    checked={customRequest.usingTor}
                    onChange={handleCustomInputChange}
                    id="usingTor"
                  />
                  <label className="form-check-label" style={{ color: '#4ade80' }} htmlFor="usingTor">
                    Using TOR
                  </label>
                </div>
              </div>
            </div>

            <div className="text-center mt-3">
              <button 
                className="btn btn-success btn-lg"
                onClick={handleCustomSubmit}
                disabled={loading}
              >
                Submit Custom Request
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Demo;