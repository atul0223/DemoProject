import React, { useState } from 'react';
import { Menu, X, Code, Database, Server, Layers, ExternalLink } from 'lucide-react';

export default function MERNWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  const technologies = [
    {
      id: 'mongodb',
      name: 'MongoDB',
      icon: <Database className="w-12 h-12" />,
      description: 'NoSQL Database',
      details: 'MongoDB is a document-oriented NoSQL database that stores data in flexible, JSON-like documents. It offers high performance, high availability, and easy scalability.',
      features: [
        'Document-based storage model',
        'Flexible schema design',
        'Horizontal scalability',
        'Rich query language',
        'Aggregation framework',
        'Built-in replication'
      ],
      docsUrl: 'https://docs.mongodb.com/'
    },
    {
      id: 'express',
      name: 'Express.js',
      icon: <Server className="w-12 h-12" />,
      description: 'Backend Framework',
      details: 'Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.',
      features: [
        'Lightweight and fast',
        'Middleware support',
        'Routing mechanisms',
        'Template engine integration',
        'RESTful API development',
        'Error handling utilities'
      ],
      docsUrl: 'https://expressjs.com/'
    },
    {
      id: 'react',
      name: 'React',
      icon: <Code className="w-12 h-12" />,
      description: 'Frontend Library',
      details: 'React is a JavaScript library for building user interfaces, particularly single-page applications where you need a fast, interactive user experience.',
      features: [
        'Component-based architecture',
        'Virtual DOM for performance',
        'JSX syntax',
        'Unidirectional data flow',
        'Rich ecosystem',
        'React Hooks for state management'
      ],
      docsUrl: 'https://react.dev/'
    },
    {
      id: 'nodejs',
      name: 'Node.js',
      icon: <Layers className="w-12 h-12" />,
      description: 'Runtime Environment',
      details: 'Node.js is a JavaScript runtime built on Chrome\'s V8 engine that allows you to run JavaScript on the server side.',
      features: [
        'Event-driven architecture',
        'Non-blocking I/O',
        'NPM package ecosystem',
        'Scalable network applications',
        'Cross-platform compatibility',
        'Asynchronous programming'
      ],
      docsUrl: 'https://nodejs.org/docs/'
    }
  ];

  const relatedTechnologies = [
    {
      name: 'Redux',
      description: 'State management library for React applications',
      use: 'Managing complex application state',
      docsUrl: 'https://redux.js.org/'
    },
    {
      name: 'Mongoose',
      description: 'MongoDB object modeling for Node.js',
      use: 'Simplified database interactions',
      docsUrl: 'https://mongoosejs.com/'
    },
    {
      name: 'JWT',
      description: 'JSON Web Tokens for authentication',
      use: 'Secure user authentication',
      docsUrl: 'https://jwt.io/'
    },
    {
      name: 'Axios',
      description: 'Promise-based HTTP client',
      use: 'Making API requests from React',
      docsUrl: 'https://axios-http.com/'
    },
    {
      name: 'Webpack',
      description: 'Module bundler for JavaScript',
      use: 'Building and optimizing applications',
      docsUrl: 'https://webpack.js.org/'
    },
    {
      name: 'Tailwind CSS',
      description: 'Utility-first CSS framework',
      use: 'Rapid UI development',
      docsUrl: 'https://tailwindcss.com/'
    }
  ];

  const advantages = [
    'Full JavaScript stack - use one language throughout',
    'JSON data format used everywhere',
    'Large community and ecosystem',
    'Cost-effective development',
    'Excellent for building SPAs and real-time applications',
    'Easy to learn and implement'
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="bg-black text-white sticky top-0 w-full z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold">
                <span className="text-blue-500">MERN</span> Stack
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => setActiveSection('overview')} className={`hover:text-blue-500 transition ${activeSection === 'overview' ? 'text-blue-500' : ''}`}>Overview</button>
              <button onClick={() => setActiveSection('technologies')} className={`hover:text-blue-500 transition ${activeSection === 'technologies' ? 'text-blue-500' : ''}`}>Technologies</button>
              <button onClick={() => setActiveSection('related')} className={`hover:text-blue-500 transition ${activeSection === 'related' ? 'text-blue-500' : ''}`}>Related Tech</button>
              <button onClick={() => setActiveSection('advantages')} className={`hover:text-blue-500 transition ${activeSection === 'advantages' ? 'text-blue-500' : ''}`}>Advantages</button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => { setActiveSection('overview'); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 hover:bg-gray-900 rounded">Overview</button>
              <button onClick={() => { setActiveSection('technologies'); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 hover:bg-gray-900 rounded">Technologies</button>
              <button onClick={() => { setActiveSection('related'); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 hover:bg-gray-900 rounded">Related Tech</button>
              <button onClick={() => { setActiveSection('advantages'); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 hover:bg-gray-900 rounded">Advantages</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Master the <span className="text-blue-500">MERN Stack</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Build powerful, scalable web applications using MongoDB, Express.js, React, and Node.js
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base">
            <div className="px-6 py-3 bg-white rounded-full border-2 border-blue-500 font-semibold">MongoDB</div>
            <div className="px-6 py-3 bg-white rounded-full border-2 border-blue-500 font-semibold">Express</div>
            <div className="px-6 py-3 bg-white rounded-full border-2 border-blue-500 font-semibold">React</div>
            <div className="px-6 py-3 bg-white rounded-full border-2 border-blue-500 font-semibold">Node.js</div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Overview Section */}
        {activeSection === 'overview' && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-8 text-center">What is MERN Stack?</h2>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 sm:p-8 mb-8 shadow-sm">
              <p className="text-lg text-gray-700 mb-4">
                The MERN stack is a JavaScript-based technology stack used for developing modern web applications. It consists of four key technologies that work together seamlessly.
              </p>
              <p className="text-lg text-gray-700">
                MERN enables developers to build robust, scalable applications using a single language throughout the entire development stack, from database to user interface.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {technologies.map((tech) => (
                <div key={tech.id} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg transition-all">
                  <div className="text-blue-500 mb-4">
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
                  <p className="text-gray-600">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies Section */}
        {activeSection === 'technologies' && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-8 text-center">Core Technologies</h2>
            <div className="space-y-6">
              {technologies.map((tech) => (
                <div key={tech.id} className="bg-white border-2 border-gray-200 rounded-lg p-6 sm:p-8 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-blue-500 flex-shrink-0">
                      {tech.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{tech.name}</h3>
                      <p className="text-gray-600 mb-4">{tech.details}</p>
                      <a 
                        href={tech.docsUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-base font-semibold shadow-md"
                      >
                        Official Documentation
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {tech.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Technologies Section */}
        {activeSection === 'related' && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-8 text-center">Related Technologies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedTechnologies.map((tech, idx) => (
                <div key={idx} className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg hover:border-blue-500 transition-all">
                  <h3 className="text-xl font-bold mb-2 text-blue-500">{tech.name}</h3>
                  <p className="text-gray-700 mb-3">{tech.description}</p>
                  <div className="text-sm text-gray-600 mb-4">
                    <span className="font-semibold">Use Case:</span> {tech.use}
                  </div>
                  <a 
                    href={tech.docsUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 font-semibold text-sm"
                  >
                    View Documentation
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Advantages Section */}
        {activeSection === 'advantages' && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose MERN Stack?</h2>
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 sm:p-8 shadow-sm mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {advantages.map((advantage, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1 font-bold">
                      {idx + 1}
                    </div>
                    <p className="text-gray-700 text-lg">{advantage}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-500 text-white rounded-lg p-8 text-center shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Building?</h3>
              <p className="text-lg mb-6">The MERN stack provides everything you need to create modern, full-stack web applications efficiently.</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="px-4 py-2 bg-white text-blue-500 rounded-full font-semibold">Fast Development</span>
                <span className="px-4 py-2 bg-white text-blue-500 rounded-full font-semibold">Scalable</span>
                <span className="px-4 py-2 bg-white text-blue-500 rounded-full font-semibold">Single Language</span>
                <span className="px-4 py-2 bg-white text-blue-500 rounded-full font-semibold">Active Community</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2025 MERN Stack Guide. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}