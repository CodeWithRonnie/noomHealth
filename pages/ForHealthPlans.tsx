import React from 'react';
import PageLayout from '../src/theme/components/modules/PageLayout/PageLayout';
import PageHero from '../src/theme/PageHero/PageHero';
import { Heart, Users, TrendingDown, Shield, Database, CheckCircle } from 'lucide-react';

const ForHealthPlans: React.FC = () => {
  const benefits = [
    {
      icon: <Heart className="text-purple-600" size={48} />,
      title: "Improve Member Health",
      description: "Help members achieve lasting weight loss and reduce chronic disease risk with evidence-based interventions."
    },
    {
      icon: <TrendingDown className="text-purple-600" size={48} />,
      title: "Reduce Medical Costs",
      description: "Lower healthcare claims through preventive care, with average savings of $1,200 per member annually."
    },
    {
      icon: <Users className="text-purple-600" size={48} />,
      title: "Increase Engagement",
      description: "87% member satisfaction rate and 70% completion rate - the highest in the industry."
    },
    {
      icon: <Shield className="text-purple-600" size={48} />,
      title: "Regulatory Compliance",
      description: "Meet CMS quality measures and HEDIS requirements while improving member outcomes."
    }
  ];

  const healthPlanMetrics = [
    { metric: "1.2M", description: "Lives covered" },
    { metric: "$1,200", description: "Annual savings per member" },
    { metric: "70%", description: "Program completion rate" },
    { metric: "87%", description: "Member satisfaction" }
  ];

  const clinicalOutcomes = [
    "5-10% weight loss in 16 weeks",
    "Improved HbA1c levels", 
    "Reduced blood pressure",
    "Lower cholesterol levels",
    "Decreased diabetes risk by 58%",
    "Improved mental health scores"
  ];

  const integrationFeatures = [
    {
      title: "Claims Integration",
      description: "Seamlessly integrate with existing claims systems for real-time cost tracking and ROI measurement."
    },
    {
      title: "Provider Networks",
      description: "Connect with your existing provider networks for coordinated care and referrals."
    },
    {
      title: "Member Portal",
      description: "White-labeled member portal that integrates with your existing digital health ecosystem."
    },
    {
      title: "Reporting & Analytics",
      description: "Comprehensive reporting for quality measures, member outcomes, and cost savings analysis."
    }
  ];

  return (
    <PageLayout>
      <PageHero 
        title="Partner with Noom for Better Member Outcomes"
        subtitle="Reduce healthcare costs and improve member satisfaction with our evidence-based digital health solutions designed specifically for health plans."
        backgroundImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80"
        ctaText="Partner With Us"
        ctaLink="#partnership"
      />

      {/* Health Plan Metrics */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Results for Health Plans</h2>
            <p className="text-xl text-gray-600">Real outcomes that improve your bottom line and member satisfaction</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {healthPlanMetrics.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl font-bold text-purple-600 mb-2">{item.metric}</div>
                <div className="text-gray-600 font-medium">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Health Plans Choose Noom */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Health Plans Choose Noom</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our digital health platform delivers clinically proven outcomes while reducing costs and improving member experience.
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

      {/* Clinical Outcomes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Clinically Proven Outcomes</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our evidence-based programs deliver measurable health improvements that translate to reduced medical costs 
                and improved quality scores for your health plan.
              </p>
              <div className="space-y-4">
                {clinicalOutcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700 font-medium">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Healthcare analytics"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Integration & Technology */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Seamless Integration</h2>
            <p className="text-xl text-gray-600">Our platform integrates with your existing systems for a smooth implementation</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {integrationFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <Database className="text-purple-600 mb-4" size={32} />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Model */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Flexible Partnership Models</h2>
            <p className="text-xl text-gray-600">Choose the model that works best for your health plan</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Covered Benefit</h3>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li>Full coverage for eligible members</li>
                <li>No member cost-sharing</li>
                <li>High engagement rates</li>
                <li>Quality measure improvement</li>
              </ul>
              <button className="w-full bg-purple-600 text-white py-3 rounded-full font-semibold hover:bg-purple-700 transition">
                Learn More
              </button>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center border-2 border-purple-600">
              <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                POPULAR
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Shared Savings</h3>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li>Risk-sharing partnership</li>
                <li>Guaranteed ROI model</li>
                <li>Performance-based pricing</li>
                <li>Aligned incentives</li>
              </ul>
              <button className="w-full bg-purple-600 text-white py-3 rounded-full font-semibold hover:bg-purple-700 transition">
                Request Proposal
              </button>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Value-Based Care</h3>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li>Outcomes-based contracts</li>
                <li>Quality bonus structures</li>
                <li>Member satisfaction metrics</li>
                <li>Clinical integration</li>
              </ul>
              <button className="w-full bg-purple-600 text-white py-3 rounded-full font-semibold hover:bg-purple-700 transition">
                Explore Options
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Partner with Noom?</h2>
          <p className="text-xl text-white opacity-90 mb-10">
            Join leading health plans who are improving member outcomes and reducing costs with Noom.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition">
              Schedule Partnership Call
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition">
              Download Partnership Guide
            </button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ForHealthPlans;
