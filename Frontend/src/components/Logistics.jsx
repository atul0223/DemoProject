import React, { useState } from 'react';
import axios from 'axios';
import { Package, Truck, MapPin, Clock, Search, Menu, X, Phone, Mail, CheckCircle, AlertCircle } from 'lucide-react';

const LogisticsComponent = () => {
  const [activeTab, setActiveTab] = useState('track');
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingResult, setTrackingResult] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleTrackPackage = (e) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
 
      setTrackingResult({
        trackingNumber: trackingNumber,
        status: 'In Transit',
        estimatedDelivery: 'Dec 20, 2024',
        currentLocation: 'Distribution Center - New Delhi',
        timeline: [
          { status: 'Order Placed', location: 'Mumbai, Maharashtra', date: 'Dec 15, 2024 10:30 AM', completed: true },
          { status: 'Picked Up', location: 'Mumbai Hub', date: 'Dec 15, 2024 2:45 PM', completed: true },
          { status: 'In Transit', location: 'Delhi Distribution Center', date: 'Dec 17, 2024 8:20 AM', completed: true },
          { status: 'Out for Delivery', location: 'Local Delivery Hub', date: 'Dec 20, 2024', completed: false },
          { status: 'Delivered', location: 'Destination', date: 'Pending', completed: false }
        ]
      });
    }
  };
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState(''); 
  const[loading,setLoading]=useState(false);
const handleSendMessage = async(e) => {
    e.preventDefault();
    setLoading(true);
    try {console.log(name,email, message, phone);
      await axios.post('http://localhost:3000/contactus', {
        name,email, message, phone
      },{withCredentials:true});
      setLoading(false);
      alert('Message sent successfully');
      setName('');
      setEmail('');
      setMessage('');
      setPhone('');
      
    } catch (error) {
      setLoading(false);
    }
  }
  const services = [
    { icon: <Truck className="w-8 h-8" />, title: 'Express Delivery', desc: 'Fast shipping within 24-48 hours' },
    { icon: <Package className="w-8 h-8" />, title: 'Standard Shipping', desc: 'Reliable delivery in 3-5 days' },
    { icon: <MapPin className="w-8 h-8" />, title: 'International', desc: 'Worldwide shipping solutions' },
    { icon: <Clock className="w-8 h-8" />, title: 'Same Day', desc: 'Urgent delivery same day service' }
  ];

  const stats = [
    { number: '50K+', label: 'Daily Deliveries' },
    { number: '100+', label: 'Cities Covered' },
    { number: '99.5%', label: 'On-Time Delivery' },
    { number: '24/7', label: 'Customer Support' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-2">
              <Truck className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">SwiftLogistics</h1>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => setActiveTab('track')} className={`font-medium ${activeTab === 'track' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}>
                Track Shipment
              </button>
              <button onClick={() => setActiveTab('services')} className={`font-medium ${activeTab === 'services' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}>
                Services
              </button>
              <button onClick={() => setActiveTab('quote')} className={`font-medium ${activeTab === 'quote' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}>
                Get Quote
              </button>
              <button onClick={() => setActiveTab('contact')} className={`font-medium ${activeTab === 'contact' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}>
                Contact
              </button>
            </nav>

            <button 
              className="md:hidden text-gray-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col gap-4">
                <button onClick={() => { setActiveTab('track'); setMobileMenuOpen(false); }} className={`text-left font-medium ${activeTab === 'track' ? 'text-blue-600' : 'text-gray-600'}`}>
                  Track Shipment
                </button>
                <button onClick={() => { setActiveTab('services'); setMobileMenuOpen(false); }} className={`text-left font-medium ${activeTab === 'services' ? 'text-blue-600' : 'text-gray-600'}`}>
                  Services
                </button>
                <button onClick={() => { setActiveTab('quote'); setMobileMenuOpen(false); }} className={`text-left font-medium ${activeTab === 'quote' ? 'text-blue-600' : 'text-gray-600'}`}>
                  Get Quote
                </button>
                <button onClick={() => { setActiveTab('contact'); setMobileMenuOpen(false); }} className={`text-left font-medium ${activeTab === 'contact' ? 'text-blue-600' : 'text-gray-600'}`}>
                  Contact
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Track Shipment Tab */}
        {activeTab === 'track' && (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Track Your Shipment</h2>
              <p className="text-gray-600">Enter your tracking number to get real-time updates</p>
            </div>

            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleTrackPackage} className="bg-white rounded-lg shadow-md p-6 mb-8 text-black">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <input
                      type="text"
                      value={trackingNumber}
                      onChange={(e) => setTrackingNumber(e.target.value)}
                      placeholder="Enter tracking number (e.g., SWIFT123456789)"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition"
                  >
                    <Search className="w-5 h-5" />
                    Track
                  </button>
                </div>
              </form>

              {trackingResult && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-200">
                    <div>
                      <p className="text-sm text-gray-600">Tracking Number</p>
                      <p className="text-lg font-bold text-gray-900">{trackingResult.trackingNumber}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Estimated Delivery</p>
                      <p className="text-lg font-bold text-blue-600">{trackingResult.estimatedDelivery}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg">
                      <AlertCircle className="w-6 h-6 text-blue-600" />
                      <div>
                        <p className="font-semibold text-gray-900">{trackingResult.status}</p>
                        <p className="text-sm text-gray-600">{trackingResult.currentLocation}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {trackingResult.timeline.map((event, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${event.completed ? 'bg-green-500' : 'bg-gray-300'}`}>
                            {event.completed ? (
                              <CheckCircle className="w-6 h-6 text-white" />
                            ) : (
                              <div className="w-3 h-3 bg-white rounded-full"></div>
                            )}
                          </div>
                          {index < trackingResult.timeline.length - 1 && (
                            <div className={`w-0.5 h-16 ${event.completed ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                          )}
                        </div>
                        <div className="flex-1 pb-8">
                          <p className={`font-semibold ${event.completed ? 'text-gray-900' : 'text-gray-500'}`}>
                            {event.status}
                          </p>
                          <p className="text-sm text-gray-600">{event.location}</p>
                          <p className="text-xs text-gray-500 mt-1">{event.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Services Tab */}
        {activeTab === 'services' && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Services</h2>
              <p className="text-gray-600">Comprehensive logistics solutions for all your needs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                  <div className="text-blue-600 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-600 rounded-lg p-8 text-white">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</p>
                    <p className="text-blue-100">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Get Quote Tab */}
        {activeTab === 'quote' && (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Get Instant Quote</h2>
              <p className="text-gray-600">Fill in the details to receive a customized shipping quote</p>
            </div>

            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">From (City)</label>
                    <input type="text" placeholder="Origin city" className="text-black w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">To (City)</label>
                    <input type="text" placeholder="Destination city" className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Weight (kg)</label>
                    <input type="number" placeholder="0.0" className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 ">Service Type</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black">
                      <option>Express Delivery</option>
                      <option>Standard Shipping</option>
                      <option>International</option>
                      <option>Same Day</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Length (cm)</label>
                    <input type="number" placeholder="0" className="w-full px-4 py-3 border border-gray-300  text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Width (cm)</label>
                    <input type="number" placeholder="0" className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Height (cm)</label>
                    <input type="number" placeholder="0" className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>

                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition">
                  Calculate Shipping Cost
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Contact Tab */}
        {activeTab === 'contact' && (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Contact Us</h2>
              <p className="text-gray-600">We're here to help with all your logistics needs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Send us a message</h3>
                <form className="space-y-4" onSubmit={handleSendMessage}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500" value={name} onChange={(e)=>setName(e.target.value)}/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" placeholder="+91 98765 43210" className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value={phone} onChange={(e)=>setPhone(e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea rows="4" placeholder="How can we help you?" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                  </div>
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition cursor-pointer" disabled={loading}>
                    Send Message
                  </button>
                </form>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                      <p className="text-gray-600">+91 1800-123-4567</p>
                      <p className="text-gray-600">+91 1800-765-4321</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">support@swiftlogistics.com</p>
                      <p className="text-gray-600">info@swiftlogistics.com</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Head Office</h4>
                      <p className="text-gray-600">123 Business Park, Connaught Place</p>
                      <p className="text-gray-600">New Delhi - 110001, India</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Business Hours</h4>
                  <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-700">Saturday: 9:00 AM - 2:00 PM</p>
                  <p className="text-gray-700">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Truck className="w-6 h-6" />
                <h3 className="text-xl font-bold">SwiftLogistics</h3>
              </div>
              <p className="text-gray-400">Your trusted partner for fast and reliable shipping solutions across India and worldwide.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => setActiveTab('track')} className="hover:text-white">Track Shipment</button></li>
                <li><button onClick={() => setActiveTab('services')} className="hover:text-white">Services</button></li>
                <li><button onClick={() => setActiveTab('quote')} className="hover:text-white">Get Quote</button></li>
                <li><button onClick={() => setActiveTab('contact')} className="hover:text-white">Contact</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe for updates and special offers</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Your email" className="flex-1 px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none  focus:border-blue-500" />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
            <p>&copy; 2024 SwiftLogistics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LogisticsComponent;