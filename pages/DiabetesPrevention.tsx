import React from 'react';
import PageLayout from '../src/theme/components/modules/PageLayout/PageLayout';
import PageHero from '../src/theme/PageHero/PageHero';
import { Shield, TrendingDown, Users, CheckCircle } from 'lucide-react';

const DiabetesPrevention: React.FC = () => {
  const preventionFeatures = [
    {
      icon: <Shield className="text-green-600" size={48} />,
      title: "CDC-Recognized Program",
      description: "Our diabetes prevention program is recognized by the CDC and proven to reduce diabetes risk by 58%."
    },
    {
      icon: <TrendingDown className="text-green-600" size={48} />,
      title: "Weight Loss Focus",
      description: "Achieve and maintain a 5-7% weight loss to significantly reduce your risk of developing type 2 diabetes."
    },
    {
      icon: <Users className="text-green-600" size={48} />,
      title: "Lifestyle Coaching",
      description: "Work with trained lifestyle coaches who provide ongoing support and accountability."
    }
  ];

  const programBenefits = [
    "Reduce diabetes risk by up to 58%",
    "Lower blood sugar levels naturally",
    "Improve heart health and circulation",
    "Increase energy levels and stamina",
    "Develop healthy eating habits",
    "Create sustainable exercise routines",
    "Learn stress management techniques",
    "Join a supportive community"
  ];

  const stats = [
    { number: "58%", description: "Reduction in diabetes risk" },
    { number: "5-7%", description: "Target weight loss" },
    { number: "16 weeks", description: "Core program duration" },
    { number: "CDC", description: "Recognized program" }
  ];

  return (
    <PageLayout>
      <PageHero 
        title="Prevent Type 2 Diabetes Before It Starts"
        subtitle="Take control of your health with our CDC-recognized diabetes prevention program. Reduce your risk by 58% through lifestyle changes."
        backgroundImage="https://images.unsplash.com/photo-1559757175-5ec43988ad9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80"
        ctaText="Check Your Risk"
        ctaLink="#risk-assessment"
      />

      {/* Stats Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Prediabetes */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Understanding Prediabetes</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Prediabetes affects 96 million American adults - that's more than 1 in 3 people. It's a serious health 
                condition where blood sugar levels are higher than normal, but not yet high enough to be diagnosed as 
                type 2 diabetes.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The good news? Prediabetes can be reversed. With the right lifestyle changes, you can prevent or delay 
                type 2 diabetes and improve your overall health.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Did You Know?</h3>
                <p className="text-gray-700">
                  More than 80% of people with prediabetes don't know they have it. Take our free risk assessment 
                  to find out if you're at risk.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559757175-5ec43988ad9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Healthy lifestyle choices"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How Our Program Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our evidence-based program combines proven strategies with modern technology to help you prevent diabetes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {preventionFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="flex justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What You'll Achieve</h2>
            <p className="text-xl text-gray-600">
              Our program helps you make lasting changes that reduce your diabetes risk and improve your overall health.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3 bg-green-50 p-4 rounded-xl">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Your 16-Week Journey</h2>
            <p className="text-xl text-gray-600">A structured program designed to fit into your busy lifestyle.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-lg font-bold mx-auto mb-6">
                1-4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Foundation Building</h3>
              <p className="text-gray-600">Learn the basics of healthy eating, portion control, and begin your activity plan.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-lg font-bold mx-auto mb-6">
                5-8
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Habit Formation</h3>
              <p className="text-gray-600">Develop consistent routines and overcome common challenges with coach support.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-lg font-bold mx-auto mb-6">
                9-12
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Momentum Building</h3>
              <p className="text-gray-600">See significant progress and learn advanced strategies for long-term success.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-lg font-bold mx-auto mb-6">
                13-16
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sustaining Success</h3>
              <p className="text-gray-600">Master maintenance strategies and prepare for continued success beyond the program.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Take Action Against Diabetes Today</h2>
          <p className="text-xl text-white opacity-90 mb-10">
            Don't wait for diabetes to develop. Start preventing it now with our proven program.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition">
              Take Risk Assessment
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-600 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default DiabetesPrevention;
