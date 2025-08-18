import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Book, ArrowRight, Code, Search, Zap, Shield, Globe, Smartphone, Monitor, Headphones } from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    { icon: Book, title: "Comprehensive Guides", description: "Step-by-step tutorials and best practices for every level of developer.", color: "text-blue-500" },
    { icon: Code, title: "Code Examples", description: "Ready-to-use code samples in multiple programming languages.", color: "text-green-500" },
    { icon: Search, title: "Easy Search", description: "Find what you need quickly with our powerful search functionality.", color: "text-purple-500" },
    { icon: Zap, title: "Fast Integration", description: "Get up and running in minutes with our quick start guides.", color: "text-yellow-500" },
    { icon: Shield, title: "Security First", description: "Built-in security best practices and fraud prevention.", color: "text-red-500" },
    { icon: Globe, title: "Global Scale", description: "Reliable APIs that scale with your business worldwide.", color: "text-indigo-500" }
  ];

  const apiServices = [
    { icon: Smartphone, name: "SMS & MMS", count: "99.9% uptime" },
    { icon: Monitor, name: "Voice Calls", count: "Global reach" },
    { icon: Headphones, name: "Video Chat", count: "HD quality" }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10">
        <div className="absolute top-20 left-5 sm:left-20 w-56 sm:w-72 h-56 sm:h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-5 sm:right-20 w-72 sm:w-96 h-72 sm:h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6">
        <div className={`text-center max-w-3xl sm:max-w-6xl mx-auto py-20 sm:pt-40 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Hero Heading */}
          <div className="flex flex-col sm:flex-row items-center justify-center mb-10 sm:mb-12">
            <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl hero-gradient flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 shadow-lg">
              <Code className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
              <span className="text-foreground">API</span>
              <span className="gradient-text ml-0 sm:ml-3">Documentation</span>
            </h1>
          </div>

          <p className="text-lg sm:text-2xl text-muted-foreground mb-8 sm:mb-12 leading-relaxed">
            Build powerful communication experiences with comprehensive guides, 
            <span className="text-primary font-semibold"> interactive examples</span>, and 
            world-class developer tools.
          </p>

          {/* CTA Buttons */}
          {/* CTA Buttons */}
<div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16">
  <Link to="/docs/general/get-started">
    <Button size="lg" className="text-lg px-10 py-6 hero-gradient hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center">
      <Book className="mr-3 h-6 w-6" />
      Get Started Now
      <ArrowRight className="ml-3 h-6 w-6" />
    </Button>
  </Link>
  <Link to="/docs/apis">
    <Button variant="outline" size="lg" className="text-lg px-10 py-6 border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300 flex items-center justify-center">
      <Code className="mr-3 h-6 w-6" />
      API Reference
    </Button>
  </Link>
</div>


          {/* API Services */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {apiServices.map((service, index) => (
              <div key={service.name} className={`hero-card transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: `${index * 200}ms` }}>
                <service.icon className="h-6 sm:h-8 w-6 sm:w-8 text-primary mb-2 sm:mb-3 mx-auto" />
                <h3 className="font-semibold text-foreground mb-1">{service.name}</h3>
                <p className="text-sm text-muted-foreground">{service.count}</p>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {features.map((feature, index) => (
              <div key={feature.title} className={`hero-card group transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 150}ms` }}>
                <div className="h-12 sm:h-14 w-12 sm:w-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6 mx-auto group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className={`h-5 sm:h-7 w-5 sm:w-7 ${feature.color}`} />
                </div>
                <h3 className="font-semibold text-foreground mb-2 sm:mb-3 text-lg sm:text-xl">{feature.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 sm:mt-20 p-6 sm:p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-border/50 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-4">Ready to start building?</h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">Join thousands of developers using our APIs to create amazing experiences.</p>
            <Link to="/docs/general/get-started">
              <Button className="hero-gradient hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Index;
