import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Code,
  Cpu,
  Globe,
  Layers,
  Star,
  ArrowRight,
} from "lucide-react";

const Documentation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const cards = [
    {
      id: 1,
      title: "Intuitive Learning",
      desc: "Dive into comprehensive documentation designed for clarity and easy understanding, guiding you every step of the way.",
      icon: BookOpen,
      color: "text-blue-400",
      hoverColor: "hover:border-blue-400/30",
      bgColor: "bg-blue-400/10",
      hoverBgColor: "group-hover:bg-blue-400/20",
    },
    {
      id: 2,
      title: "Clean Codebase",
      desc: "Explore well-structured code examples that foster best practices and accelerate your development process.",
      icon: Code,
      color: "text-purple-400",
      hoverColor: "hover:border-purple-400/30",
      bgColor: "bg-purple-400/10",
      hoverBgColor: "group-hover:bg-purple-400/20",
    },
    {
      id: 3,
      title: "Powerful Performance",
      desc: "Leverage highly optimized components and discover insights into building performant applications with ease.",
      icon: Cpu,
      color: "text-green-400",
      hoverColor: "hover:border-green-400/30",
      bgColor: "bg-green-400/10",
      hoverBgColor: "group-hover:bg-green-400/20",
    },
    {
      id: 4,
      title: "Global Accessibility",
      desc: "Design with a worldwide audience in mind, ensuring your projects are accessible and engaging for everyone, everywhere.",
      icon: Globe,
      color: "text-indigo-400",
      hoverColor: "hover:border-indigo-400/30",
      bgColor: "bg-indigo-400/10",
      hoverBgColor: "group-hover:bg-indigo-400/20",
    },
    {
      id: 5,
      title: "Layered Architecture",
      desc: "Understand the modular design that allows for flexible scaling and seamless integration with existing systems.",
      icon: Layers,
      color: "text-orange-400",
      hoverColor: "hover:border-orange-400/30",
      bgColor: "bg-orange-400/10",
      hoverBgColor: "group-hover:bg-orange-400/20",
    },
    {
      id: 6,
      title: "Stellar Features",
      desc: "Uncover a galaxy of features, from core functionalities to advanced customizations that elevate your user experience.",
      icon: Star,
      color: "text-yellow-400",
      hoverColor: "hover:border-yellow-400/30",
      bgColor: "bg-yellow-400/10",
      hoverBgColor: "group-hover:bg-yellow-400/20",
    },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10">
        <div className="absolute top-20 left-5 sm:left-20 w-56 sm:w-72 h-56 sm:h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-5 sm:right-20 w-72 sm:w-96 h-72 sm:h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6">
        <div
          className={`text-center max-w-3xl sm:max-w-6xl mx-auto py-20 sm:pt-15 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          {/* Hero Heading */}
          <div className="flex flex-col sm:flex-row items-center justify-center mb-10 sm:mb-12">
            <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 shadow-lg">
              <BookOpen className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
              <span className="text-foreground">Explore Our</span>
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent ml-0 sm:ml-3">
                Documentation
              </span>
            </h1>
          </div>

          <p className="text-lg sm:text-2xl text-muted-foreground mb-16 sm:mb-20 leading-relaxed max-w-4xl mx-auto">
            Unlock the full potential of your projects with our{" "}
            <span className="text-primary font-semibold">
              comprehensive guides
            </span>
            , tutorials, and API references designed for developers at every
            level.
          </p>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {cards.map((card, index) => (
              <div
                key={card.id}
                className={`relative bg-card border border-border rounded-full pr-6 py-6 pl-[100px] sm:pl-[120px] flex items-center shadow-lg hover:shadow-xl hover:border-primary/50 hover:bg-card/80 backdrop-blur-sm transition-all duration-300 group cursor-pointer overflow-hidden max-w-[340px] sm:max-w-[380px] lg:max-w-[400px] xl:max-w-[420px] mx-auto ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                style={{ transitionDelay: `${index * 150}ms`, minHeight: '120px' }}
              >

                {/* Icon Circle */}
                {/* Icon Circle */}
                <div
                  className="absolute left-0 top-1/2 -translate-y-1/2
             h-20 w-20 rounded-full flex items-center justify-center
             bg-card border border-border/50
             group-hover:shadow-md transition-all duration-300"
                >
                  <card.icon
                    className={`h-20 w-12 ${card.color} 
                group-hover:scale-110 transition-transform duration-300`}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 text-left ml-4"> {/* Adjusted ml for closer text */}
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary/90 transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 text-sm transition-colors duration-300">
                    {card.desc}
                  </p>

                  {/* Action Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-2 border-primary/30 hover:border-primary hover:bg-primary/10 text-primary hover:text-primary transition-all duration-300 text-xs px-3 py-1"
                  >
                    Learn More <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;