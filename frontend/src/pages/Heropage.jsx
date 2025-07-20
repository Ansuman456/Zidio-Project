// Dashboard.jsx
import React from 'react';
import '../pages/Heropage.css'
import { FiUpload, FiSettings, FiBarChart2, FiPieChart, FiDownload } from 'react-icons/fi';
import { FaChartLine, FaChartBar, FaChartPie } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const Heropage = () => {
  return (
    <div className="dataviz-hero-container">
      {/* Header */}
      <header className="dataviz-hero-header">
        <div className="dataviz-header-container">
          <div className="dataviz-logo">Dataviz<span>Pro</span></div>
          <nav className="dataviz-nav-links">
            
          </nav>
          <div className="dataviz-header-actions">
            <Link to='/login' className="dataviz-login-btn link">Log In</Link>
            <Link to='/signup' className="dataviz-signup-btn link">Sign Up Free</Link>
          </div>
        </div>
      </header>

      {/* Main Hero */}
      <section className="dataviz-hero-section">
        <div className="dataviz-hero-content">
          <h1 className="dataviz-hero-title">
            Transform <span>Excel Data</span> Into<br />
            Beautiful <span>Interactive Visualizations</span>
          </h1>
          <p className="dataviz-hero-subtitle">
            The most powerful yet simple data visualization platform for professionals.
            Turn spreadsheets into stunning charts in seconds.
          </p>
          <div className="dataviz-cta-container">
            <Link to='/login' className="dataviz-primary-cta link">
              <FiUpload className="dataviz-cta-icon" />
              Upload & Visualize Now
            </Link>

          </div>
          <div className="dataviz-trust-badges">
            <div className="dataviz-badge">Trusted by 10,000+ analysts</div>
            <div className="dataviz-badge">★★★★★ 4.9/5 rating</div>
          </div>
        </div>
        <div className="dataviz-hero-illustration">
          <div className="dataviz-floating-chart dataviz-chart1">
            <FaChartBar />
          </div>
          <div className="dataviz-floating-chart dataviz-chart2">
            <FaChartLine />
          </div>
          <div className="dataviz-floating-chart dataviz-chart3">
            <FaChartPie />
          </div>
          <div className="dataviz-main-dashboard-preview">
            <img src="https://www.shutterstock.com/image-vector/scatter-plot-filled-style-icon-260nw-2555471189.jpg" className='imageEdit' alt="" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="dataviz-features-section" id="features">
        <h2 className="dataviz-section-title">Powerful Features</h2>
        <p className="dataviz-section-subtitle">Everything you need to transform raw data into actionable insights</p>
        
        <div className="dataviz-features-grid">
          {features.map((feature, index) => (
            <div className="dataviz-feature-card" key={index}>
              <div className={`dataviz-feature-icon dataviz-feature-icon-${index}`}>
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="dataviz-how-it-works" id="how-it-works">
        <h2 className="dataviz-section-title">How Dataviz Pro Works</h2>
        <p className="dataviz-section-subtitle">Transform your data in just three simple steps</p>
        
        <div className="dataviz-steps-container">
          {steps.map((step, index) => (
            <div className="dataviz-step" key={index}>
              <div className="dataviz-step-number">{index + 1}</div>
              <div className="dataviz-step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Examples */}
      <footer className='footerEdit'>
          <h3>@ All Rigths Reserved</h3>
      </footer>
    </div>
  );
};

// Data for features
const features = [
  {
    icon: <FiUpload />,
    title: "Smart Data Import",
    description: "Automatically detect and organize your Excel data with intelligent column recognition."
  },
  {
    icon: <FiSettings />,
    title: "Custom Visualization",
    description: "Choose from 20+ chart types with customizable colors, labels, and interactive elements."
  },
  {
    icon: <FiBarChart2 />,
    title: "Advanced Analytics",
    description: "Add trend lines, statistical overlays, and predictive modeling to your visualizations."
  },
  {
    icon: <FiPieChart />,
    title: "Dashboard Creation",
    description: "Combine multiple visualizations into professional dashboards with drag-and-drop ease."
  },
  {
    icon: <FiDownload />,
    title: "Export & Share",
    description: "Download high-resolution images or share interactive dashboards with your team."
  },
  {
    icon: <FiBarChart2 />,
    title: "Real-time Updates",
    description: "Connect to live data sources for visualizations that update automatically."
  }
];

// Data for steps
const steps = [
  {
    title: "Upload Your Excel File",
    description: "Drag and drop your spreadsheet or browse your files. We support all Excel formats."
  },
  {
    title: "Configure Your Visualization",
    description: "Select columns, choose chart types, and customize the appearance."
  },
  {
    title: "Analyze & Share Insights",
    description: "Interact with your visualization, save to dashboards, or export for presentations."
  }
];

// Data for examples
const examples = [
  { title: "Sales Performance" },
  { title: "Financial Trends" },
  { title: "Marketing Analytics" },
  { title: "HR Metrics" }
];

export default Heropage;