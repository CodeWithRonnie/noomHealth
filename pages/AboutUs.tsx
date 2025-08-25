import React from 'react';
import PageLayout from '../src/theme/components/modules/PageLayout/PageLayout';
import PageHero from '../src/theme/PageHero/PageHero';
import { Users, Award, Globe, Heart, TrendingUp } from 'lucide-react';

const AboutUs: React.FC = () => {
  const values = [
    {
      icon: <Heart className="text-red-600" size={48} />,
      title: "Health First",
      description: "We believe everyone deserves access to effective, science-based health solutions that actually work."
    },
    {
      icon: <Users className="text-red-600" size={48} />,
      title: "Human-Centered",
      description: "Technology should serve humans, not the other way around. We put people at the center of everything we do."
    },
    {
      icon: <Award className="text-red-600" size={48} />,
      title: "Evidence-Based",
      description: "All our programs are grounded in rigorous scientific research and validated through clinical trials."
    },
    {
      icon: <Globe className="text-red-600" size={48} />,
      title: "Accessible",
      description: "Quality healthcare should be available to everyone, regardless of background or circumstances."
    }
  ];

  const milestones = [
    { year: "2008", event: "Noom founded with mission to use technology and psychology for lasting behavior change" },
    { year: "2012", event: "Launched first consumer weight loss app with behavioral psychology approach" },
    { year: "2016", event: "Received CDC recognition for diabetes prevention program" },
    { year: "2018", event: "Expanded into B2B market serving employers and health plans" },
    { year: "2020", event: "Reached 50 million users worldwide during global health crisis" },
    { year: "2022", event: "Launched comprehensive mental health platform Noom Mood" },
    { year: "2024", event: "Serving over 1 million lives through enterprise partnerships" }
  ];

  const stats = [
    { number: "50M+", description: "People helped worldwide" },
    { number: "16", description: "Years of innovation" },
    { number: "500+", description: "Clinical studies published" },
    { number: "1M+", description: "Enterprise lives covered" }
  ];

  const leadership = [
    {
      name: "Saeju Jeong",
      title: "CEO & Co-Founder",
      bio: "Saeju co-founded Noom with the vision of using technology to help people live healthier lives. He holds an MBA from Wharton.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Artem Petakov",
      title: "President & Co-Founder", 
      bio: "Artem leads product development and engineering at Noom. He has a background in computer science from Princeton University.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Dr. Andreas Michaelides",
      title: "Chief of Psychology",
      bio: "Dr. Michaelides oversees Noom's behavioral psychology programs. He holds a PhD in Clinical Psychology from Yale.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <PageLayout>
      <PageHero 
        title="Transforming Lives Through Science and Technology"
        subtitle="For over 15 years, Noom has been pioneering the intersection of psychology, technology, and healthcare to help millions of people live healthier lives."
        backgroundImage="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80"
      />

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
          <p className="text-2xl text-gray-600 leading-relaxed mb-12">
            To help people everywhere live healthier lives through sustainable behavior change, 
            powered by psychology and technology.
          </p>
          <div className="bg-red-50 rounded-2xl p-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe that lasting health change happens when you understand the psychology behind your habits. 
              Our mission is to make this understanding accessible to everyone, everywhere, through innovative 
              technology and human-centered design.
            </p>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl font-bold text-red-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do, from product development to customer support.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our mission to transform healthcare</p>
          </div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="bg-red-600 text-white rounded-full w-20 h-20 flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {milestone.year}
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg flex-1">
                  <p className="text-gray-700 text-lg leading-relaxed">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Leadership Team</h2>
            <p className="text-xl text-gray-600">
              Meet the team leading Noom's mission to transform healthcare
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {leadership.map((leader, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <img 
                    src={leader.image}
                    alt={leader.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover shadow-xl"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{leader.name}</h3>
                <div className="text-red-600 font-medium mb-4">{leader.title}</div>
                <p className="text-gray-600 leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Science */}
      <section className="py-20 bg-red-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Built on Science</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Everything we do is grounded in rigorous scientific research. Our programs are based on proven 
                psychological principles and validated through multiple clinical trials.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <TrendingUp className="text-red-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">500+ peer-reviewed studies inform our approach</span>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="text-red-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Clinical trials show 58% diabetes risk reduction</span>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="text-red-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">PhD psychologists and registered dietitians on staff</span>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="text-red-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Continuous research and program optimization</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Scientific research"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Mission</h2>
          <p className="text-xl text-white opacity-90 mb-10">
            Be part of the movement to make healthcare more effective, accessible, and human-centered.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition">
              Explore Careers
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-red-600 transition">
              Partner With Us
            </button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutUs;
