import React from 'react';
import PageLayout from '../src/theme/components/modules/PageLayout/PageLayout';
import PageHero from '../src/theme/PageHero/PageHero';
import { CheckCircle, Users, Target, TrendingDown } from 'lucide-react';

const WeightLoss: React.FC = () => {
  const features = [
    {
      icon: <Target className="text-red-600" size={48} />,
      title: "Personalized Goal Setting",
      description: "Set realistic, achievable weight loss goals based on your lifestyle, preferences, and health needs."
    },
    {
      icon: <Users className="text-red-600" size={48} />,
      title: "Expert Coaching",
      description: "Work with certified health coaches who provide personalized guidance and support throughout your journey."
    },
    {
      icon: <TrendingDown className="text-red-600" size={48} />,
      title: "Sustainable Results",
      description: "Learn lasting habits that help you maintain your weight loss for years to come, not just weeks."
    }
  ];

  const successStories = [
    {
      name: "Sarah M.",
      result: "Lost 45 lbs in 6 months",
      quote: "Noom helped me understand the psychology behind my eating habits. The coaching was incredible."
    },
    {
      name: "Michael R.",
      result: "Lost 62 lbs in 8 months", 
      quote: "I've tried many programs, but Noom's approach to behavior change actually worked for me."
    },
    {
      name: "Jennifer L.",
      result: "Lost 38 lbs in 5 months",
      quote: "The daily lessons taught me so much about nutrition and how to make better choices."
    }
  ];

  return (
    <PageLayout>
      <PageHero 
        title="Sustainable Weight Loss That Works"
        subtitle="Join millions who have transformed their lives with Noom's science-based approach to lasting weight loss."
        backgroundImage="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80"
        ctaText="Start Your Journey"
        ctaLink="#start"
      />

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How Noom Weight Loss Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our program combines psychology, technology, and human coaching to help you build lasting healthy habits.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Noom Weight Loss is Different</h2>
              <div className="space-y-6">
                {[
                  "Psychology-based approach that addresses why you eat",
                  "Daily lessons that teach you about nutrition and behavior",
                  "Personal coaching from certified health professionals",
                  "Food logging that's simple and educational",
                  "Support group community of like-minded individuals",
                  "Flexible program that fits your lifestyle"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1506629905499-39ac5a90c1d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Person tracking weight loss progress"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Real People, Real Results</h2>
            <p className="text-xl text-gray-600">See how Noom has helped people achieve lasting weight loss.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-red-600 mb-2">{story.result}</div>
                  <div className="text-lg font-semibold text-gray-900">{story.name}</div>
                </div>
                <blockquote className="text-gray-600 italic text-center">
                  "{story.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Weight Loss Journey?</h2>
          <p className="text-xl text-white opacity-90 mb-10">
            Join over 50 million people who have chosen Noom for sustainable weight loss.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-red-600 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default WeightLoss;
