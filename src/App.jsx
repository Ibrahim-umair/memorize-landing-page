import React, { useState, useEffect } from 'react';
import LogoIcon from './logo.svg?react';

import { 
  BookOpen, 
  Users, 
  BarChart3, 
  Shield, 
  Globe, 
  UserCheck, 
  Brain, 
  Building,
  ChevronRight,
  Check,
  Star,
  Target,
  Clock,
  Award,
  Menu,
  X,
  ArrowRight,
  PlayCircle,
  Zap,
  TrendingUp,
  Lock,
  Cloud,
  MessageCircle
} from 'lucide-react';

const Memorize = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <BarChart3 className="w-8 h-8 text-emerald-400" />,
      title: "Institutional Dashboard",
      description: "Real-time performance overview for admin and staff with comprehensive analytics",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: "Teacher Portal",
      description: "Daily tracking, student management, and feedback tools for efficient teaching",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: <UserCheck className="w-8 h-8 text-purple-400" />,
      title: "Student Profiles",
      description: "Personalized records, schedules, and targets for each student's journey",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: <Shield className="w-8 h-8 text-amber-400" />,
      title: "Parent Access",
      description: "View-only access for monitoring student progress and engagement",
      gradient: "from-amber-500 to-orange-600"
    },
    {
      icon: <Building className="w-8 h-8 text-red-400" />,
      title: "Multi-Branch Support",
      description: "Manage multiple schools under one unified admin panel",
      gradient: "from-red-500 to-rose-600"
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-400" />,
      title: "Cloud-Based",
      description: "99.9% uptime, global access, secure and scalable infrastructure",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      icon: <Target className="w-8 h-8 text-green-400" />,
      title: "Role-Based Access",
      description: "Fine-grained control over admin, teacher, and student permissions",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: <Brain className="w-8 h-8 text-violet-400" />,
      title: "AI-Powered Recitation",
      description: "Advanced feedback system that detects errors and tracks mastery",
      gradient: "from-violet-500 to-purple-600"
    }
  ];

  const pricingTiers = [
    {
      name: "Tier I",
      subtitle: "Small Madrassahs",
      price: "$100",
      period: "/year",
      students: "1-25 students",
      features: [
        "Up to 25 students",
        "AI-powered error detection",
        "Progress tracking",
        "Teacher dashboards",
        "Cloud-based access",
        "Basic analytics"
      ],
      recommended: false,
      color: "from-gray-600 to-gray-700"
    },
    {
      name: "Tier II",
      subtitle: "Medium Schools",
      price: "$150",
      period: "/year",
      students: "26-50 students",
      features: [
        "Up to 50 students",
        "All Tier I features",
        "Parent communication portal",
        "Enhanced analytics",
        "Student gamification",
        "Performance insights"
      ],
      recommended: true,
      color: "from-emerald-600 to-teal-700"
    },
    {
      name: "Tier III",
      subtitle: "Large Schools",
      price: "$200",
      period: "/year",
      students: "51-75 students",
      features: [
        "Up to 75 students",
        "All Tier II features",
        "Advanced analytics & reporting",
        "Multi-class management",
        "Custom learning paths",
        "Priority support"
      ],
      recommended: false,
      color: "from-blue-600 to-indigo-700"
    },
    {
      name: "Tier IV",
      subtitle: "Enterprise Networks",
      price: "$250",
      period: "/year",
      students: "76+ students",
      features: [
        "Unlimited students",
        "All Tier III features",
        "Multi-branch management",
        "Custom integrations",
        "Dedicated support",
        "Partnership benefits"
      ],
      recommended: false,
      color: "from-purple-600 to-violet-700"
    }
  ];

const stats = [
  { 
    number: "50%", 
    label: "Student Dropout Rate", 
    icon: <Users className="w-6 h-6" />,
    color: "from-emerald-500 to-teal-600",
    description: "in traditional Quranic memorization programs worldwide"
  },
  { 
    number: "30%", 
    label: "Teacher Time Wasted", 
    icon: <Clock className="w-6 h-6" />,
    color: "from-blue-500 to-blue-600", 
    description: "spent on manual record-keeping instead of teaching"
  },
  { 
    number: "60%", 
    label: "Parents Feel Disconnected", 
    icon: <Shield className="w-6 h-6" />,
    color: "from-purple-500 to-purple-600",
    description: "lack visibility into their child's learning progress"
  },
  { 
    number: "80%", 
    label: "Schools Use Outdated Methods", 
    icon: <Target className="w-6 h-6" />,
    color: "from-emerald-500 to-teal-600",
    description: "still rely on paper-based tracking systems"
  }
];

const solutionFeatures = [
  {
    icon: <Brain className="w-8 h-8 text-white" />,
    title: "AI-Powered Error Detection",
    description: "Real-time recitation analysis with immediate feedback for accurate memorization and pronunciation correction",
    gradient: "from-emerald-500 to-teal-600",
    category: "AI Technology"
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-white" />,
    title: "Comprehensive Progress Tracking",
    description: "Standardized dashboards showing detailed memorization milestones, performance analytics, and learning insights",
    gradient: "from-blue-500 to-blue-600",
    category: "Analytics"
  },
  {
    icon: <UserCheck className="w-8 h-8 text-white" />,
    title: "Parent Transparency Portal",
    description: "Real-time updates and detailed insights into student achievements, attendance, and areas for improvement",
    gradient: "from-purple-500 to-purple-600",
    category: "Communication"
  },
  {
    icon: <Users className="w-8 h-8 text-white" />,
    title: "Teacher Efficiency Tools",
    description: "Automated record-keeping, class management, and analytics that save 30% of administrative time",
    gradient: "from-emerald-500 to-teal-600",
    category: "Productivity"
  },
  {
    icon: <Building className="w-8 h-8 text-white" />,
    title: "Multi-Branch Management",
    description: "Centralized control for school networks with role-based access and unified reporting across locations",
    gradient: "from-blue-500 to-blue-600",
    category: "Scalability"
  },
  {
    icon: <Shield className="w-8 h-8 text-white" />,
    title: "Role-Based Security",
    description: "Fine-grained access control for admins, teachers, students, and parents with complete data protection",
    gradient: "from-purple-500 to-purple-600",
    category: "Security"
  }
];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-3/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-slate-900/95 backdrop-blur-md shadow-xl' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <LogoIcon className="w-32 h-16 text-emerald-400 hover:text-emerald-300 transform hover:scale-105 transition-all duration-300 cursor-pointer" />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <a href="#features" className="text-slate-300 hover:text-emerald-400 transition-colors relative group">
                  Features
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all"></div>
                </a>
                <a href="#how-it-works" className="text-slate-300 hover:text-emerald-400 transition-colors relative group">
                  How It Works
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all"></div>
                </a>
                <a href="#pricing" className="text-slate-300 hover:text-emerald-400 transition-colors relative group">
                  Pricing
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all"></div>
                </a>
                <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl">
                  Contact Us
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-300 hover:text-emerald-400 p-2"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-md border-t border-slate-700">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 text-slate-300 hover:text-emerald-400 transition-colors">Features</a>
              <a href="#how-it-works" className="block px-3 py-2 text-slate-300 hover:text-emerald-400 transition-colors">How It Works</a>
              <a href="#pricing" className="block px-3 py-2 text-slate-300 hover:text-emerald-400 transition-colors">Pricing</a>
              <button className="w-full text-left px-3 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg font-semibold mt-2">
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>

      
{/* Hero Section */}
<section className="relative pt-32 pb-20 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
        <span className="bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent">
          Modernize
        </span>
        <br />
        <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
          Quranic Education
        </span>
      </h1>
      
      <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-4xl mx-auto leading-relaxed">
        Transform how institutions teach Quran memorization with AI-powered progress tracking, 
        real-time analytics, and engaging learning experiences for students, teachers, and parents.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <button className="group bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transform hover:scale-105 transition-all shadow-2xl hover:shadow-emerald-500/25">
          Start Your Journey
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform inline" />
        </button>
        <button className="group flex items-center text-slate-300 hover:text-white px-8 py-4 border border-slate-600 rounded-lg hover:border-slate-500 transition-all">
        <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
        Contact Sales
      </button>
      </div>

    {/* Enhanced Challenge Stats */}
<div className="mt-20 mb-8">
  <h3 className="text-2xl font-bold text-white mb-4">The Challenges We Solve</h3>
  <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
    Traditional Quranic education faces critical inefficiencies affecting millions worldwide
  </p>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
  {stats.map((stat, index) => (
    <div key={index} className="text-center group cursor-pointer">
      <div className="relative mb-4">
        <div className={`p-4 bg-gradient-to-r ${stat.color} rounded-2xl group-hover:scale-105 transition-all duration-200 shadow-md mx-auto w-fit`}>
          <div className="text-white">
            {stat.icon}
          </div>
        </div>
        <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl opacity-10 transition-opacity blur-lg`}></div>
      </div>
      <div className="text-4xl font-bold text-white mb-2 group-hover:scale-102 transition-transform">
        {stat.number}
      </div>
      <div className="text-slate-300 text-sm font-medium mb-1 group-hover:text-white transition-colors">
        {stat.label}
      </div>
      <div className="text-slate-500 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
        {stat.description}
      </div>
    </div>
  ))}
</div>
    </div>
  </div>
</section>

{/* Merged Solution & Features Section */}
<section id="features" className="py-20 bg-gradient-to-r from-slate-900/50 to-slate-800/50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
          Complete Platform Solution
        </span>
      </h2>
      <p className="text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
        Everything you need to modernize Quranic education - from AI-powered learning tools 
        to comprehensive management systems that work seamlessly together.
      </p>
    </div>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {solutionFeatures.map((feature, index) => (
        <div key={index} className="group p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <div className={`bg-gradient-to-r ${feature.gradient} w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
              {feature.icon}
            </div>
            <span className="text-xs text-emerald-400 font-medium bg-emerald-500/10 px-2 py-1 rounded-full">
              {feature.category}
            </span>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
          <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* How It Works */}
<section id="how-it-works" className="py-20 bg-gradient-to-r from-slate-900/50 to-slate-800/50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
          Get Started in Minutes
        </span>
      </h2>
      <p className="text-xl text-slate-400 max-w-3xl mx-auto">
        Our streamlined onboarding process gets your institution up and running quickly.
      </p>
    </div>
    
    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          step: "1",
          title: "Quick Setup",
          description: "Configure your institution profile, add branches, and customize settings in under 10 minutes.",
          icon: <Building className="w-6 h-6" />,
          color: "from-emerald-500 to-teal-600"
        },
        {
          step: "2",
          title: "Onboard Team",
          description: "Invite teachers, create classes, and import student data with our intuitive admin panel.",
          icon: <Users className="w-6 h-6" />,
          color: "from-blue-500 to-blue-600"
        },
        {
          step: "3",
          title: "Go Live",
          description: "Start tracking progress, viewing analytics, and enhancing learning outcomes immediately.",
          icon: <Zap className="w-6 h-6" />,
          color: "from-purple-500 to-purple-600"
        }
      ].map((item, index) => (
        <div key={index} className="relative group h-full">
          <div className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:scale-105 h-full flex flex-col">
            <div className={`bg-gradient-to-r ${item.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              {item.icon}
            </div>
            <div className={`bg-gradient-to-r ${item.color} text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-4`}>
              {item.step}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
            <p className="text-slate-400 leading-relaxed flex-grow">{item.description}</p>
          </div>
          {index < 2 && (
            <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-4 -translate-y-1/2">
              <ChevronRight className="w-6 h-6 text-slate-600" />
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>
    {/* Pricing */}
<section id="pricing" className="py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
          Affordable Annual Pricing
        </span>
      </h2>
      <p className="text-xl text-slate-400 max-w-3xl mx-auto">
        Transparent, institution-focused pricing that grows with your student base. 
        No hidden fees, no per-user complexity.
      </p>
    </div>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {pricingTiers.map((tier, index) => (
        <div key={index} className={`relative p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border transition-all duration-300 hover:scale-105 h-full flex flex-col ${
          tier.recommended 
            ? 'border-emerald-500/50 ring-2 ring-emerald-500/20' 
            : 'border-slate-700/50 hover:border-slate-600/50'
        }`}>
          {tier.recommended && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                Most Popular
              </div>
            </div>
          )}
          
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
            <p className="text-slate-400 text-sm mb-2">{tier.subtitle}</p>
            <p className="text-emerald-400 text-sm font-medium mb-4">{tier.students}</p>
            <div className="mb-4">
              <span className="text-4xl font-bold text-white">{tier.price}</span>
              <span className="text-slate-400 text-sm ml-1">{tier.period}</span>
            </div>
          </div>
          
          <ul className="space-y-3 mb-8 flex-grow">
            {tier.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-start">
                <Check className="w-5 h-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
          
          <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all mt-auto ${
            tier.recommended 
              ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700 transform hover:scale-105'
              : 'border border-slate-600 text-slate-300 hover:border-slate-500 hover:text-white'
          }`}>
            Get Started
          </button>
        </div>
      ))}
    </div>
    
    <div className="text-center mt-12">
      <p className="text-slate-400 mb-4">
        <strong className="text-emerald-400">Volume Discounts Available:</strong> Larger institutions and school networks receive additional pricing incentives
      </p>
      <p className="text-slate-500 text-sm">
        Partner with us for revenue-sharing models and sponsorship opportunities for underserved regions
      </p>
    </div>
  </div>
</section>
     {/* Call to Action */}
<section className="py-20 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/90 to-teal-600/90"></div>
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
      Ready to Transform Your Institution?
    </h2>
    <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
      Join thousands of institutions worldwide that are revolutionizing Quranic education with modern technology and proven results.
    </p>
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto mb-8">
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-2xl font-bold text-white">80%</div>
          <div className="text-emerald-100 text-sm">Student Retention</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-white">99.9%</div>
          <div className="text-emerald-100 text-sm">Platform Uptime</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-white">24/7</div>
          <div className="text-emerald-100 text-sm">Support Available</div>
        </div>
      </div>
    </div>
   {/* Final CTA Section */}
<div className="flex flex-col sm:flex-row gap-6 justify-center">
  <button className="group bg-white text-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all shadow-xl">
    Get Started Today
    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform inline" />
  </button>
  <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-emerald-600 transition-all">
    Contact Our Team
  </button>
</div>
  </div>
</section>
      {/* Footer */}
  <footer className="bg-slate-900 border-t border-slate-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center mb-6">
            <LogoIcon className="w-32 h-16 text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer" />
          </div>
          <p className="text-slate-400 mb-6 text-lg">Structured. Scalable. Spiritual.</p>
          <p className="text-slate-500 text-sm italic leading-relaxed">
            "And We have certainly made the Quran easy for remembrance, so is there any who will remember?" - Quran 54:17
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">Home</a></li>
            <li><a href="#features" className="text-slate-400 hover:text-emerald-400 transition-colors">Features</a></li>
            <li><a href="#pricing" className="text-slate-400 hover:text-emerald-400 transition-colors">Pricing</a></li>
            <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-white mb-6">Legal</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">Terms of Service</a></li>
            <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">Support</a></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-slate-800 mt-12 pt-8 text-center">
        <p className="text-slate-400">&copy; 2025 Memorize. All rights reserved.</p>
      </div>
    </div>
  </footer>
  </div>
  );
};

export default Memorize;