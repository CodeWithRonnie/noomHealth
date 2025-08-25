import React, { useState } from 'react';
import PageLayout from '../src/theme/components/modules/PageLayout/PageLayout';
import PageHero from '../src/theme/PageHero/PageHero';
import { Calendar, Users, Building, Phone, Mail, User } from 'lucide-react';

const RequestDemo: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    title: '',
    employeeCount: '',
    organizationType: '',
    currentPrograms: '',
    primaryGoals: '',
    timeframe: '',
    additionalInfo: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Demo request submitted:', formData);
    alert('Thank you for requesting a demo! We\'ll be in touch within 24 hours.');
  };

  const demoFeatures = [
    {
      icon: <Users className="text-blue-600" size={32} />,
      title: "Personalized Walkthrough",
      description: "See how Noom's platform works specifically for your organization's needs"
    },
    {
      icon: <Building className="text-blue-600" size={32} />,
      title: "Custom ROI Analysis", 
      description: "Get a detailed cost-benefit analysis based on your employee population"
    },
    {
      icon: <Calendar className="text-blue-600" size={32} />,
      title: "Implementation Timeline",
      description: "Learn about the rollout process and timeline for your organization"
    }
  ];

  return (
    <PageLayout>
      <PageHero 
        title="See Noom in Action"
        subtitle="Request a personalized demo to see how Noom can transform your organization's health outcomes while reducing costs."
        backgroundImage="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80"
      />

      {/* Demo Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What You'll See in Your Demo</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our product experts will show you exactly how Noom can work for your organization.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {demoFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="flex justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Request Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Request Your Demo</h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll schedule a personalized demo at your convenience.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <User className="inline w-4 h-4 mr-2" />
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Mail className="inline w-4 h-4 mr-2" />
                  Work Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Phone className="inline w-4 h-4 mr-2" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Building className="inline w-4 h-4 mr-2" />
                  Company Name *
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Job Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Number of Employees *
                </label>
                <select
                  name="employeeCount"
                  value={formData.employeeCount}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select range</option>
                  <option value="1-50">1-50</option>
                  <option value="51-200">51-200</option>
                  <option value="201-1000">201-1,000</option>
                  <option value="1001-5000">1,001-5,000</option>
                  <option value="5000+">5,000+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Organization Type *
                </label>
                <select
                  name="organizationType"
                  value={formData.organizationType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select type</option>
                  <option value="employer">Employer</option>
                  <option value="health-plan">Health Plan</option>
                  <option value="healthcare-provider">Healthcare Provider</option>
                  <option value="consultant">Benefits Consultant</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Current Wellness Programs
              </label>
              <textarea
                name="currentPrograms"
                value={formData.currentPrograms}
                onChange={handleInputChange}
                rows={3}
                placeholder="Tell us about any existing wellness programs or initiatives..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Primary Goals *
              </label>
              <textarea
                name="primaryGoals"
                value={formData.primaryGoals}
                onChange={handleInputChange}
                rows={3}
                required
                placeholder="What are your main goals for employee health and wellness?"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Implementation Timeframe
              </label>
              <select
                name="timeframe"
                value={formData.timeframe}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select timeframe</option>
                <option value="immediately">Immediately</option>
                <option value="1-3-months">1-3 months</option>
                <option value="3-6-months">3-6 months</option>
                <option value="6-12-months">6-12 months</option>
                <option value="12+ months">12+ months</option>
                <option value="just-researching">Just researching</option>
              </select>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition shadow-lg"
              >
                Request Demo
              </button>
              <p className="text-sm text-gray-500 mt-4">
                We'll contact you within 24 hours to schedule your personalized demo.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Prefer to Talk Now?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <Phone className="text-blue-600 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Call Sales</h3>
              <p className="text-gray-600 mb-6">Speak with a sales representative</p>
              <a href="tel:1-855-NOOM-NOW" className="text-blue-600 font-semibold text-lg hover:text-blue-700">
                1-855-NOOM-NOW
              </a>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <Mail className="text-blue-600 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Email Us</h3>
              <p className="text-gray-600 mb-6">Get in touch via email</p>
              <a href="mailto:sales@noom.com" className="text-blue-600 font-semibold text-lg hover:text-blue-700">
                sales@noom.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default RequestDemo;
