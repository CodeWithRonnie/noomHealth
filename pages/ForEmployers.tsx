import React from 'react';
import PageLayout from '../src/theme/components/modules/PageLayout/PageLayout';
import PageHero from '../src/theme/PageHero/PageHero';
import { DollarSign, TrendingUp, Users, Shield, Target, Award } from 'lucide-react';

const ForEmployers: React.FC = () => {
  const benefits = [
    {
      icon: <DollarSign className="text-green-600" size={48} />,
      title: "Reduce Healthcare Costs",
      description: "Save an average of $2,500 per employee annually through reduced medical claims and improved health outcomes."
    },
    {
      icon: <TrendingUp className="text-green-600" size={48} />,
      title: "Increase Productivity",
      description: "Healthier employees are more productive, with 25% less absenteeism and higher engagement levels."
    },
    {
      icon: <Users className="text-green-600" size={48} />,
      title: "Boost Employee Satisfaction",
      description: "89% of members report higher job satisfaction when their employer provides comprehensive wellness benefits."
    },
    {
      icon: <Shield className="text-green-600" size={48} />,
      title: "Comprehensive Coverage",
      description: "Address weight management, diabetes prevention, stress, sleep, and mental health in one platform."
    }
  ];

  const roiData = [
    { metric: "2.5x", description: "Return on investment" },
    { metric: "$2,500", description: "Average annual savings per employee" },
    { metric: "25%", description: "Reduction in absenteeism" },
    { metric: "89%", description: "Employee satisfaction rate" }
  ];

  const programOfferings = [
    {
      title: "Weight Management",
      features: ["Psychology-based weight loss", "Personal coaching", "Sustainable habits", "Food logging & tracking"]
    },
    {
      title: "Diabetes Prevention", 
      features: ["CDC-recognized program", "58% risk reduction", "Lifestyle coaching", "Blood sugar management"]
    },
    {
      title: "Stress & Sleep",
      features: ["Stress management techniques", "Sleep optimization", "Mindfulness training", "Work-life balance"]
    },
    {
      title: "Mental Health",
      features: ["Mood tracking", "Cognitive behavioral therapy", "Mental health coaching", "Crisis support"]
    }
  ];

  return (
    <PageLayout>
      <PageHero 
        title="Transform Your Workforce Health"
        subtitle="Help your employees achieve better health outcomes while reducing healthcare costs by up to 40% with Noom's comprehensive wellness platform."
        backgroundImage="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80"
        ctaText="Request Demo"
        ctaLink="#demo"
      />

      {/* ROI Stats */}
      <section className="py-16 bg-green-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven ROI for Your Organization</h2>
            <p className="text-xl text-gray-600">Real results that impact your bottom line</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {roiData.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl font-bold text-green-600 mb-2">{item.metric}</div>
                <div className="text-gray-600 font-medium">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Noom */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Leading Employers Choose Noom</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your employee wellness program with our science-based approach that delivers measurable results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Offerings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Health Solutions</h2>
            <p className="text-xl text-gray-600">One platform that addresses your employees' complete health needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programOfferings.map((program, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">{program.title}</h3>
                <ul className="space-y-3">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Target className="text-green-500 flex-shrink-0 mt-1" size={16} />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Simple Implementation Process</h2>
            <p className="text-xl text-gray-600">Get your program up and running in just a few weeks</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Discovery Call</h3>
              <p className="text-gray-600">We learn about your organization's specific health challenges and goals.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Custom Solution</h3>
              <p className="text-gray-600">Design a tailored wellness program that fits your company culture and budget.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Launch & Onboard</h3>
              <p className="text-gray-600">Roll out the program with comprehensive employee education and engagement.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Measure Results</h3>
              <p className="text-gray-600">Track participation, health outcomes, and ROI with detailed reporting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-6">
                CASE STUDY
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Fortune 500 Company Saves $3.2M Annually</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Award className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Challenge</h3>
                    <p className="text-gray-600">Rising healthcare costs and low employee engagement in wellness programs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Award className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Solution</h3>
                    <p className="text-gray-600">Implemented Noom's comprehensive platform for 15,000 employees</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Award className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Results</h3>
                    <p className="text-gray-600">65% participation rate, $3.2M annual savings, 40% reduction in diabetes risk</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Business meeting"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Employee Wellness?</h2>
          <p className="text-xl text-white opacity-90 mb-10">
            Join hundreds of leading companies who have chosen Noom to improve employee health and reduce costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition">
              Request Custom Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-600 transition">
              Download ROI Calculator
            </button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ForEmployers;
