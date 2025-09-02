import React, { useState, useEffect } from 'react';
import { BookOpen, ArrowRight, Code, Zap, Shield, Users, GitBranch, Rocket } from 'lucide-react';

const Button = ({ children, variant = "default", size = "default", className = "", ...props }) => {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary",
    outline: "border text-foreground hover:bg-accent hover:text-accent-foreground focus:ring-primary",
  };
  const sizes = {
    default: "h-10 px-4 py-2 text-sm",
    sm: "h-8 px-3 text-xs",
    lg: "h-12 px-8 text-base",
  };
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} rounded-md ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const cards = [
  {
    id: 1,
    title: "Getting Started",
    desc: "Quick setup guides to get you up and running",
    icon: Rocket,
    color: "text-blue-600"
  },
  {
    id: 2,
    title: "API Reference",
    desc: "Complete documentation for all endpoints",
    icon: Code,
    color: "text-purple-600"
  },
  {
    id: 3,
    title: "Advanced Guides",
    desc: "In-depth tutorials and best practices",
    icon: Zap,
    color: "text-amber-600"
  },
  {
    id: 4,
    title: "Security",
    desc: "Authentication and security practices",
    icon: Shield,
    color: "text-green-600"
  },
  {
    id: 5,
    title: "Community",
    desc: "Join our developer community for support",
    icon: Users,
    color: "text-red-600"
  },
  {
    id: 6,
    title: "GitHub Integration",
    desc: "Connect with version control seamlessly",
    icon: GitBranch,
    color: "text-indigo-600"
  }
];

export default function DynamicDocumentationCards() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl animate-pulse"></div>
        <div 
          className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-50/40 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Floating Elements - Removed blinking */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-300 rounded-full opacity-30"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-300 rounded-full opacity-20"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-cyan-300 rounded-full opacity-25"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div
          className={`text-center max-w-7xl mx-auto py-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
        

          {/* Enhanced Cards Grid - 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {cards.map((card, index) => (
              <div
                key={card.id}
                className={`group relative bg-white backdrop-blur-xl border border-gray-200 overflow-hidden shadow-md transition-all duration-300 cursor-pointer ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  borderRadius: '60px 12px 12px 60px',
                  height: '120px'
                }}
              >
                {/* Removed animated border glow */}
                
                {/* Card Content Container */}
                <div className="relative z-10 flex h-full items-center">
                  {/* Left Side - Completely Round Icon Section */}
                  <div className="flex-shrink-0 w-28 h-28 flex items-center justify-center relative ml-4">
                    {/* Circular Background */}
                    <div className="absolute w-28 h-28 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full border border-gray-200"></div>
                    
                    {/* Inner Icon Circle */}
                    <div className="absolute w-20 h-20 rounded-full bg-white border border-gray-200 shadow-sm"></div>
                    
                    {/* Icon - No animations */}
                    <div className="relative z-20">
                      <card.icon 
                        className={`h-7 w-7 ${card.color}`}
                      />
                    </div>
                  </div>

                  {/* Right Side - Square Content Section */}
                  <div className="flex-1 px-6 py-4 flex flex-col justify-center relative">
                    <div className="relative z-10">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {card.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-3 text-sm">
                        {card.desc}
                      </p>

                      {/* Simple Action Button */}
                      <Button
                        variant="outline"
                        size="sm"
                        className="border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900 transition-colors duration-200 text-xs px-3 py-1.5 rounded-md"
                      >
                        Learn More 
                        <ArrowRight className="ml-1.5 h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Removed interactive hover effect */}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}