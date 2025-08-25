import React from 'react';
import PageLayout from '../src/theme/components/modules/PageLayout/PageLayout';
import PageHero from '../src/theme/PageHero/PageHero';
import { MapPin, Users, Heart, TrendingUp, Coffee, Zap } from 'lucide-react';

const Careers: React.FC = () => {
  const benefits = [
    {
      icon: <Heart className="text-purple-600" size={32} />,
      title: "Comprehensive Health Coverage",
      description: "Full medical, dental, vision, and mental health coverage for you and your family"
    },
    {
      icon: <Coffee className="text-purple-600" size={32} />,
      title: "Flexible Work Environment",
      description: "Remote-first culture with flexible hours and unlimited PTO policy"
    },
    {
      icon: <TrendingUp className="text-purple-600" size={32} />,
      title: "Growth & Development",
      description: "Learning stipend, conference attendance, and career advancement opportunities"
    },
    {
      icon: <Users className="text-purple-600" size={32} />,
      title: "Inclusive Culture",
      description: "Diverse, supportive team committed to making healthcare accessible to all"
    }
  ];

  const jobOpenings = [
    {
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Build scalable systems that power our health coaching platform for millions of users."
    },
    {
      title: "Product Manager - Health Programs",
      department: "Product",
      location: "New York, NY",
      type: "Full-time", 
      description: "Lead product strategy for our diabetes prevention and weight management programs."
    },
    {
      title: "Health Coach",
      department: "Clinical",
      location: "Remote",
      type: "Full-time",
      description: "Provide personalized coaching to help members achieve their health goals."
    },
    {
      title: "Data Scientist",
      department: "Data & Analytics",
      location: "Remote",
      type: "Full-time",
      description: "Analyze user behavior and health outcomes to improve our programs."
    },
    {
      title: "UX Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description: "Design intuitive experiences that make healthy living easier and more engaging."
    },
    {
      title: "Sales Director - Enterprise",
      department: "Sales",
      location: "Chicago, IL",
      type: "Full-time",
      description: "Drive growth by building relationships with employers and health plans."
    }
  ];

  const values = [
    {
      title: "Impact-Driven",
      description: "Every decision we make is guided by how it will improve people's health and wellbeing."
    },
    {
      title: "Science-First",
      description: "We base our products and programs on rigorous research and evidence-based practices."
    },
    {
      title: "Human-Centered",
      description: "Technology should serve humans, not the other way around."
    },
    {
      title: "Inclusive",
      description: "We believe diverse perspectives make us stronger and our products better."
    }
  ];

  const offices = [
    {
      city: "New York",
      address: "229 W 28th St, New York, NY 10001",
      description: "Our headquarters in the heart of Manhattan"
    },
    {
      city: "Remote",
      address: "Anywhere in the US",
      description: "Join our distributed team from wherever you work best"
    }
  ];

  return (
    <PageLayout>
      <PageHero 
        title="Join the Future of Healthcare"
        subtitle="Help us transform millions of lives through technology, psychology, and human-centered design. Build your career while building solutions that matter."
        backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80"
        ctaText="View Open Positions"
        ctaLink="#jobs"
      />

      {/* Why Work at Noom */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Work at Noom?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a team that's passionate about using technology to solve real human problems and improve lives at scale.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center bg-gray-50 rounded-2xl p-8">
                <div className="flex justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide how we work and make decisions</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="jobs" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Open Positions</h2>
            <p className="text-xl text-gray-600">Join our team and help build the future of digital health</p>
          </div>
          
          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                        {job.department}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{job.location}</span>
                      </div>
                      <span>•</span>
                      <span>{job.type}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{job.description}</p>
                  </div>
                  <div className="mt-6 lg:mt-0 lg:ml-8">
                    <button className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Don't see a role that fits? We'd still love to hear from you.</p>
            <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition">
              Send Us Your Resume
            </button>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Where We Work</h2>
            <p className="text-xl text-gray-600">We're a remote-first company with a hub in New York City</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {offices.map((office, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <Zap className="text-purple-600 mx-auto mb-6" size={48} />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{office.city}</h3>
                <p className="text-gray-600 mb-4">{office.address}</p>
                <p className="text-gray-600 text-sm">{office.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Hiring Process</h2>
            <p className="text-xl text-gray-600">We've designed our process to be thorough yet respectful of your time</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Application Review</h3>
              <p className="text-gray-600">We carefully review your application and portfolio to understand your background.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Phone/Video Screen</h3>
              <p className="text-gray-600">Initial conversation with our recruiter to discuss the role and your interests.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical/Skills Assessment</h3>
              <p className="text-gray-600">Role-specific interview to assess your technical skills and problem-solving approach.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Final Interview</h3>
              <p className="text-gray-600">Meet with team members and leadership to ensure mutual fit and alignment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Make an Impact?</h2>
          <p className="text-xl text-white opacity-90 mb-10">
            Join our mission to help millions of people live healthier, happier lives through innovative technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition">
              Browse All Jobs
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition">
              Learn About Our Culture
            </button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Careers;
