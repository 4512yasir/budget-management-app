// src/Pages/Landing.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import FeatureCard from '../components/Featuredcard';
import '../css/Pages.css'

function Landing() {
  const features = [
    { title: 'Track Expenses', description: 'Monitor where your money goes in real time.' },
    { title: 'Create Budgets', description: 'Set financial goals and control your spending.' },
    { title: 'Visual Reports', description: 'Understand your finances with easy-to-read charts.' },
  ];

  return (
    <div className="landing-wrapper">
      {/* Animated Background */}
      <div className="animated-background"></div>

      {/* Page Content */}
      <div className="landing-container">
        <div className="landing-content">
          {/* Hero Section */}
          <h1>Welcome to FinTrack Pro</h1>
          <p>Take control of your finances. Track your expenses, set budgets, and manage your personal finance easily and effectively.</p>
          <div className="landing-buttons">
            <Link to="/register" className="landing-btn">Get Started</Link>
            <Link to="/login" className="landing-btn secondary">Login</Link>
          </div>

          {/* Features Section */}
          <div className="features-section">
            <h2>Why Choose FinTrack Pro?</h2>
            <div className="features-grid">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
