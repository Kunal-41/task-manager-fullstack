import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <div className="hero-section">
          <h1>Welcome to TaskMaster</h1>
          <p>Organize your life, boost your productivity, and achieve your goals with our intuitive task management solution.</p>
          
          <div className="features-preview">
            <div className="feature">
              <span className="feature-icon">✅</span>
              <span>Easy Task Management</span>
            </div>
            <div className="feature">
              <span className="feature-icon">🎯</span>
              <span>Priority Levels</span>
            </div>
            <div className="feature">
              <span className="feature-icon">📊</span>
              <span>Progress Tracking</span>
            </div>
          </div>
          
          <div className="cta-buttons">
            <Link to="/register" className="cta-button primary">
              Get Started Free
            </Link>
            <Link to="/login" className="cta-button secondary">
              Sign In
            </Link>
          </div>
        </div>
        
        <div className="demo-section">
          <div className="demo-card">
            <h3>✨ Key Features</h3>
            <ul>
              <li>🔐 Secure user authentication</li>
              <li>📋 Create, edit, and delete tasks</li>
              <li>🎨 Beautiful, responsive design</li>
              <li>📱 Works on all devices</li>
              <li>⚡ Real-time updates</li>
              <li>🔍 Filter and search tasks</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
