import React from 'react';
import PageLayout from '../src/theme/components/modules/PageLayout/PageLayout';
import PageHero from '../src/theme/PageHero/PageHero';
import { BookOpen, Users, Award, TrendingUp, FileText, ExternalLink } from 'lucide-react';

const Research: React.FC = () => {
  const researchAreas = [
    {
      icon: <TrendingUp className="text-blue-600" size={48} />,
      title: "Behavioral Psychology",
      description: "Understanding the psychological drivers of health behaviors and how to create lasting change through cognitive behavioral therapy techniques."
    },
    {
      icon: <Users className="text-blue-600" size={48} />,
      title: "Digital Health Interventions",
      description: "Studying the effectiveness of mobile health applications and digital coaching in achieving health outcomes at scale."
    },
    {
      icon: <Award className="text-blue-600" size={48} />,
      title: "Chronic Disease Prevention",
      description: "Research focused on preventing type 2 diabetes, cardiovascular disease, and other chronic conditions through lifestyle interventions."
    },
    {
      icon: <BookOpen className="text-blue-600" size={48} />,
      title: "Personalization & AI",
      description: "Leveraging machine learning and AI to create more personalized and effective health interventions for diverse populations."
    }
  ];

  const keyStudies = [
    {
      title: "Digital Health Platform for Weight Management: A Randomized Controlled Trial",
      journal: "Journal of Medical Internet Research",
      year: "2023",
      participants: "2,284 adults",
      findings: "Participants using Noom's platform achieved 5.1% weight loss compared to 1.2% in control group over 16 weeks.",
      link: "#"
    },
    {
      title: "Effectiveness of a Smartphone-Based Diabetes Prevention Program",
      journal: "Diabetes Care",
      year: "2022",
      participants: "1,820 adults with prediabetes",
      findings: "58% reduction in diabetes risk and average 7.2% weight loss among program completers.",
      link: "#"
    },
    {
      title: "Behavioral Intervention for Mental Health: A Multi-Site Study",
      journal: "American Journal of Preventive Medicine",
      year: "2023",
      participants: "1,456 adults",
      findings: "Significant improvements in depression and anxiety scores using Noom's cognitive behavioral therapy approach.",
      link: "#"
    }
  ];

  const researchStats = [
    { number: "500+", description: "Peer-reviewed publications" },
    { number: "50+", description: "Clinical trials conducted" },
    { number: "100K+", description: "Research participants" },
    { number: "15+", description: "Academic partnerships" }
  ];

  const partnerships = [
    {
      name: "Stanford University School of Medicine",
      focus: "Digital health interventions and behavioral change",
      description: "Collaborative research on the effectiveness of mobile health platforms in diverse populations."
    },
    {
      name: "Harvard T.H. Chan School of Public Health", 
      focus: "Diabetes prevention and population health",
      description: "Long-term studies on diabetes prevention program outcomes and health economic impacts."
    },
    {
      name: "University of Pennsylvania",
      focus: "Behavioral economics and health",
      description: "Research on psychological factors that drive sustainable health behavior change."
    },
    {
      name: "Johns Hopkins Bloomberg School of Public Health",
      focus: "Digital mental health interventions",
      description: "Studies on the effectiveness of app-based interventions for depression and anxiety."
    }
  ];

  const publications = [
    {
      title: "The Science Behind Sustainable Weight Loss: A Comprehensive Review",
      type: "White Paper",
      date: "March 2024",
      description: "Analysis of 200+ studies on behavior change techniques for long-term weight management."
    },
    {
      title: "Digital Health Economics: ROI of Preventive Care Programs",
      type: "Research Report",
      date: "January 2024", 
      description: "Economic analysis of digital health interventions in employer and health plan settings."
    },
    {
      title: "Personalization in Digital Health: Machine Learning Approaches",
      type: "Technical Paper",
      date: "December 2023",
      description: "How AI and machine learning can improve health intervention personalization and outcomes."
    }
  ];

  return (
    <PageLayout>
      <PageHero 
        title="Evidence-Based Innovation"
        subtitle="Our research drives everything we do. Discover the scientific foundation behind Noom's programs and our contributions to digital health research."
        backgroundImage="https://images.unsplash.com/photo-1559757175-5ec43988ad9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80"
      />

      {/* Research Stats */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Research by the Numbers</h2>
            <p className="text-xl text-gray-600">Our commitment to evidence-based healthcare innovation</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {researchStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Research Focus Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We conduct research across multiple domains to advance the science of digital health and behavior change.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchAreas.map((area, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  {area.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{area.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Key Research Studies</h2>
            <p className="text-xl text-gray-600">Landmark studies that validate our approach and inform our programs</p>
          </div>
          
          <div className="space-y-8">
            {keyStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 flex-1 pr-4">{study.title}</h3>
                  <a href={study.link} className="text-blue-600 hover:text-blue-700 flex-shrink-0">
                    <ExternalLink size={20} />
                  </a>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">{study.journal}</span>
                  <span>{study.year}</span>
                  <span>{study.participants}</span>
                </div>
                <p className="text-gray-700 leading-relaxed">{study.findings}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Partnerships */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Academic Partnerships</h2>
            <p className="text-xl text-gray-600">
              Collaborating with leading research institutions to advance digital health science
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {partnerships.map((partnership, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{partnership.name}</h3>
                <div className="text-blue-600 font-medium mb-4">{partnership.focus}</div>
                <p className="text-gray-600 leading-relaxed">{partnership.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Publications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Recent Publications</h2>
            <p className="text-xl text-gray-600">Latest research and insights from our team</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {publications.map((publication, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {publication.type}
                  </span>
                  <span className="text-gray-500 text-sm">{publication.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{publication.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{publication.description}</p>
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-2">
                  Read Publication <ExternalLink size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Collaboration */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Collaborate With Our Research Team</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We're always interested in partnering with researchers, institutions, and organizations 
                that share our commitment to evidence-based healthcare innovation.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FileText className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Access to anonymized data for research purposes</span>
                </div>
                <div className="flex items-start space-x-3">
                  <FileText className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Joint research opportunities and co-authorship</span>
                </div>
                <div className="flex items-start space-x-3">
                  <FileText className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Platform for conducting digital health interventions</span>
                </div>
                <div className="flex items-start space-x-3">
                  <FileText className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Funding opportunities for innovative studies</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559757175-5ec43988ad9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Research collaboration"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Interested in Research Collaboration?</h2>
          <p className="text-xl text-white opacity-90 mb-10">
            Let's work together to advance the science of digital health and behavior change.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition">
              Contact Research Team
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition">
              View All Publications
            </button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Research;
