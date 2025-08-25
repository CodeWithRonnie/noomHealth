import React from 'react';
import PageLayout from '../src/theme/components/modules/PageLayout/PageLayout';
import PageHero from '../src/theme/PageHero/PageHero';
import { MessageCircle, Calendar, Award, Heart } from 'lucide-react';

const HealthCoaching: React.FC = () => {
  const coachingFeatures = [
    {
      icon: <MessageCircle className="text-blue-600" size={48} />,
      title: "Personal 1-on-1 Coaching",
      description: "Work directly with certified health coaches who understand your unique challenges and goals."
    },
    {
      icon: <Calendar className="text-blue-600" size={48} />,
      title: "Flexible Scheduling",
      description: "Book coaching sessions that fit your schedule, with options for video calls, phone calls, or messaging."
    },
    {
      icon: <Award className="text-blue-600" size={48} />,
      title: "Certified Professionals",
      description: "Our coaches are certified in nutrition, psychology, and behavior change with years of experience."
    },
    {
      icon: <Heart className="text-blue-600" size={48} />,
      title: "Holistic Approach",
      description: "We focus on your complete wellbeing - physical health, mental health, and lifestyle factors."
    }
  ];

  const coachingAreas = [
    "Weight Management & Nutrition",
    "Stress Management & Mental Health", 
    "Sleep Optimization",
    "Exercise & Movement",
    "Habit Formation & Behavior Change",
    "Chronic Disease Management",
    "Meal Planning & Prep",
    "Mindful Eating Practices"
  ];

  return (
    <PageLayout>
      <PageHero 
        title="Expert Health Coaching for Lasting Change"
        subtitle="Get personalized guidance from certified health coaches who help you build sustainable healthy habits."
        backgroundImage="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80"
        ctaText="Find Your Coach"
        ctaLink="#start"
      />

      {/* What is Health Coaching */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">What is Health Coaching?</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Health coaching is a collaborative partnership between you and a certified professional who helps you 
                identify your health goals, overcome obstacles, and create sustainable lifestyle changes.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Unlike traditional healthcare, health coaching focuses on prevention and empowering you with the 
                knowledge, skills, and motivation to take control of your wellbeing.
              </p>
              <div className="bg-blue-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What to Expect</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Personalized health assessments</li>
                  <li>• Goal setting and action planning</li>
                  <li>• Regular check-ins and support</li>
                  <li>• Evidence-based strategies</li>
                  <li>• Accountability and motivation</li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Health coaching session"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Noom Health Coaching</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach combines expert guidance with cutting-edge technology to deliver personalized care.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coachingFeatures.map((feature, index) => (
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

      {/* Coaching Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Areas We Can Help With</h2>
            <p className="text-xl text-gray-600">Our coaches specialize in a wide range of health and wellness areas.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coachingAreas.map((area, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                <h3 className="text-lg font-semibold text-gray-900 text-center">{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How Health Coaching Works</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Initial Assessment</h3>
              <p className="text-gray-600">Complete a comprehensive health assessment and get matched with the right coach for your needs.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Create Your Plan</h3>
              <p className="text-gray-600">Work with your coach to set realistic goals and create a personalized action plan.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ongoing Support</h3>
              <p className="text-gray-600">Receive regular check-ins, adjustments to your plan, and continuous motivation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Health?</h2>
          <p className="text-xl text-white opacity-90 mb-10">
            Connect with a certified health coach today and start your journey to better health.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition">
              Get Matched With a Coach
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition">
              Learn More About Coaching
            </button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default HealthCoaching;
