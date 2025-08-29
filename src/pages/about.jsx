import React from 'react';
import { FaUsers, FaRocket, FaAward, FaCalendarAlt, FaTrophy, FaGraduationCap, FaShieldAlt, FaBrain, FaBullseye, FaCheckCircle } from "react-icons/fa";

const about = () => {
  const features = [
    {
      icon: <FaCalendarAlt className="text-blue-600 text-2xl" />,
      title: "Event Management",
      description: "Complete event lifecycle management with registration, tracking, and automated certificates."
    },
    {
      icon: <FaAward className="text-orange-600 text-2xl" />,
      title: "Digital Skill Passport",
      description: "Professional documentation of achievements and certifications with blockchain verification."
    },
    {
      icon: <FaUsers className="text-purple-600 text-2xl" />,
      title: "Networking Hub",
      description: "Connect students, faculty, and industry professionals for collaboration and opportunities."
    },
    {
      icon: <FaTrophy className="text-green-600 text-2xl" />,
      title: "Credits & Rewards",
      description: "Gamified learning with credit systems and achievement badges for student engagement."
    },
    {
      icon: <FaShieldAlt className="text-red-600 text-2xl" />,
      title: "Secure Platform",
      description: "Enterprise-grade security with blockchain verification for credential authenticity."
    },
    {
      icon: <FaBrain className="text-indigo-600 text-2xl" />,
      title: "AI Recommendations",
      description: "Smart matching for events, teams, and opportunities based on interests and skills."
    }
  ];

  const stats = [
    { number: "50K+", label: "Active Users" },
    { number: "500+", label: "Partner Colleges" },
    { number: "10K+", label: "Events Managed" },
    { number: "1M+", label: "Verified Credentials" }
  ];

  const benefits = [
    "Complete event management solution",
    "Blockchain-secured digital certificates",
    "Real-time analytics and reporting",
    "Cross-institutional collaboration",
    "Industry placement support",
    "NAAC/NBA accreditation assistance"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">CS</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">About Campus Spark</h1>
              <p className="text-gray-600">Innovation Hub for Students & Faculty</p>
            </div>
          </div>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            The comprehensive platform connecting students, faculty, and industry professionals 
            through events, networking, and skill development opportunities.
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Mission */}
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <FaBullseye className="text-blue-600" />
                <span>Our Mission</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Campus Spark bridges the gap between academic learning and real-world skills by 
                providing a comprehensive platform for managing events, tracking achievements, 
                and facilitating meaningful connections.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We empower educational institutions to create engaging experiences while helping 
                students build verifiable skill portfolios that enhance their career prospects.
              </p>
            </div>

            {/* Features Grid */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Platform Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                        {feature.icon}
                      </div>
                      <h3 className="font-bold text-gray-900">{feature.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Stack */}
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Built With Modern Technology</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="font-semibold text-gray-900 mb-1">Frontend</div>
                  <div className="text-sm text-gray-600">React, Next.js</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="font-semibold text-gray-900 mb-1">Backend</div>
                  <div className="text-sm text-gray-600">Node.js, MongoDB</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="font-semibold text-gray-900 mb-1">Security</div>
                  <div className="text-sm text-gray-600">Blockchain, OAuth</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <div className="font-semibold text-gray-900 mb-1">AI/ML</div>
                  <div className="text-sm text-gray-600">Smart Matching</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Key Benefits */}
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <FaRocket className="text-blue-600" />
                <span>Key Benefits</span>
              </h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <FaCheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-bold text-gray-900 mb-4">Get Started</h3>
              <div className="space-y-3">
                <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition">
                  Schedule Demo
                </button>
                <button className="w-full bg-gray-100 text-gray-700 p-3 rounded-lg hover:bg-gray-200 transition">
                  Request Information
                </button>
                <button className="w-full bg-gray-100 text-gray-700 p-3 rounded-lg hover:bg-gray-200 transition">
                  Contact Support
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-bold text-gray-900 mb-4">Contact Us</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div>
                  <div className="font-medium text-gray-900">Email</div>
                  <div>arnayyanra@gmail.com</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Phone</div>
                  <div>+91 6397654747</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Address</div>
                  <div>ALPHA CITY,<br />MIET COLLEGE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;