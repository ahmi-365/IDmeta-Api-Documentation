import { Button } from "@/components/ui/button";
import { Book, ArrowRight, Code, Search, Zap, Shield, Globe, Smartphone, Monitor, Headphones, Users, Trophy, Clock, CheckCircle, Star, Github, ExternalLink, Download, PlayCircle, FileText, Settings, BarChart3, Lock, Cpu, Database, CloudUpload } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("quickstart");

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
    { icon: Smartphone, name: "SMS & MMS", count: "99.9% uptime", description: "Send text and multimedia messages globally" },
    { icon: Monitor, name: "Voice Calls", count: "Global reach", description: "High-quality voice communication" },
    { icon: Headphones, name: "Video Chat", count: "HD quality", description: "Crystal-clear video conferencing" }
  ];

  const stats = [
    { number: "10B+", label: "API Calls Monthly", icon: BarChart3 },
    { number: "99.99%", label: "Uptime SLA", icon: CheckCircle },
    { number: "50ms", label: "Average Response", icon: Clock },
    { number: "180+", label: "Countries", icon: Globe }
  ];

  const testimonials = [
    { 
      name: "Sarah Chen", 
      role: "Lead Developer at TechCorp", 
      content: "The API documentation is incredibly clear and comprehensive. We integrated their SMS service in just two hours.",
      avatar: "SC"
    },
    { 
      name: "Marcus Johnson", 
      role: "CTO at StartupXYZ", 
      content: "Best-in-class reliability and support. Their voice API has been rock solid for our customer service platform.",
      avatar: "MJ"
    },
    { 
      name: "Elena Rodriguez", 
      role: "Senior Engineer at GlobalTech", 
      content: "The code examples and SDKs made integration seamless. Excellent developer experience overall.",
      avatar: "ER"
    }
  ];

  const sdks = [
    { name: "Node.js", logo: "📦", downloads: "2.1M/month" },
    { name: "Python", logo: "🐍", downloads: "1.8M/month" },
    { name: "PHP", logo: "🔧", downloads: "950K/month" },
    { name: "Java", logo: "☕", downloads: "1.2M/month" },
    { name: "C#", logo: "🔷", downloads: "680K/month" },
    { name: "Ruby", logo: "💎", downloads: "420K/month" }
  ];

  const quickStartTabs = [
    { id: "quickstart", label: "Quick Start", icon: Zap },
    { id: "authentication", label: "Authentication", icon: Lock },
    { id: "examples", label: "Code Examples", icon: Code },
    { id: "webhooks", label: "Webhooks", icon: Settings }
  ];

  const useCases = [
    {
      title: "E-commerce Notifications",
      description: "Send order confirmations, shipping updates, and promotional messages to customers worldwide.",
      icon: Monitor,
      features: ["Order tracking", "Cart abandonment", "Promotional campaigns"]
    },
    {
      title: "Two-Factor Authentication",
      description: "Secure your applications with SMS and voice-based 2FA solutions.",
      icon: Shield,
      features: ["SMS verification", "Voice OTP", "Fraud detection"]
    },
    {
      title: "Customer Support",
      description: "Enable seamless customer communication through voice, video, and messaging.",
      icon: Headphones,
      features: ["Call routing", "Video support", "Chat integration"]
    },
    {
      title: "Marketing Automation",
      description: "Reach customers across multiple channels with personalized messaging campaigns.",
      icon: Smartphone,
      features: ["Automated workflows", "Personalization", "Analytics"]
    }
  ];

  const technicalSpecs = [
    { icon: Cpu, title: "High Performance", desc: "Sub-50ms response times globally" },
    { icon: Database, title: "Scalable Infrastructure", desc: "Auto-scaling to handle billions of requests" },
    { icon: CloudUpload, title: "Cloud Native", desc: "Built on modern cloud architecture" },
    { icon: Lock, title: "Enterprise Security", desc: "SOC2 Type II and ISO 27001 certified" }
  ];

  const renderTabContent = () => {
    switch(activeTab) {
      case "quickstart":
        return (
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Start Guide</h3>
            <div className="bg-slate-900 text-slate-100 rounded-lg p-6 font-mono text-sm">
              <div className="text-slate-400 mb-2"># Install the SDK</div>
              <div className="text-green-400">npm install @company/communications-api</div>
              <div className="text-slate-400 mt-4 mb-2"># Send your first SMS</div>
              <div className="text-slate-100">
                <div>const client = new CommunicationsAPI('your-api-key');</div>
                <div>await client.sms.send({`{`}</div>
                <div className="ml-4">to: '+1234567890',</div>
                <div className="ml-4">from: '+0987654321',</div>
                <div className="ml-4">body: 'Hello from our API!'</div>
                <div>{`});`}</div>
              </div>
            </div>
          </div>
        );
      case "authentication":
        return (
          <div>
            <h3 className="text-xl font-semibold mb-4">Authentication</h3>
            <p className="text-muted-foreground mb-4">All API requests require authentication using your API key:</p>
            <div className="bg-slate-900 text-slate-100 rounded-lg p-6 font-mono text-sm">
              <div className="text-slate-400 mb-2">// Set your API key</div>
              <div>const apiKey = 'your-api-key-here';</div>
              <div className="mt-4 text-slate-400 mb-2">// Include in headers</div>
              <div>const headers = {`{`}</div>
              <div className="ml-4">'Authorization': 'Bearer ' + apiKey,</div>
              <div className="ml-4">'Content-Type': 'application/json'</div>
              <div>{`};`}</div>
            </div>
          </div>
        );
      case "examples":
        return (
          <div>
            <h3 className="text-xl font-semibold mb-4">Code Examples</h3>
            <p className="text-muted-foreground mb-4">Ready-to-use examples in multiple languages:</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-slate-900 text-slate-100 rounded-lg p-4">
                <div className="text-sm font-medium text-slate-300 mb-2">Node.js</div>
                <div className="text-xs font-mono">
                  <div>const response = await fetch('/api/sms', {`{`}</div>
                  <div className="ml-2">method: 'POST',</div>
                  <div className="ml-2">body: JSON.stringify(data)</div>
                  <div>{`});`}</div>
                </div>
              </div>
              <div className="bg-slate-900 text-slate-100 rounded-lg p-4">
                <div className="text-sm font-medium text-slate-300 mb-2">Python</div>
                <div className="text-xs font-mono">
                  <div>import requests</div>
                  <div>response = requests.post(</div>
                  <div className="ml-2">'https://api.company.com/sms',</div>
                  <div className="ml-2">json=data</div>
                  <div>)</div>
                </div>
              </div>
            </div>
          </div>
        );
      case "webhooks":
        return (
          <div>
            <h3 className="text-xl font-semibold mb-4">Webhooks</h3>
            <p className="text-muted-foreground mb-4">Configure webhooks to receive real-time updates:</p>
            <div className="bg-slate-900 text-slate-100 rounded-lg p-6 font-mono text-sm">
              <div className="text-slate-400 mb-2">// Webhook endpoint example</div>
              <div>app.post('/webhook', (req, res) = {`{`}</div>
              <div className="ml-4">const event = req.body;</div>
              <div className="ml-4 mt-2">if (event.type === 'message.delivered') {`{`}</div>
              <div className="ml-8">console.log('Message delivered:', event.data);</div>
              <div className="ml-4">{`}`}</div>
              <div className="ml-4 mt-2">res.status(200).send('OK');</div>
              <div>{`});`}</div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10">
        <div className="absolute top-20 left-5 sm:left-20 w-56 sm:w-72 h-56 sm:h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-5 sm:right-20 w-72 sm:w-96 h-72 sm:h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6">
        <div className={`text-center max-w-3xl sm:max-w-6xl mx-auto py-20 sm:pt-40 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Hero Heading */}
          <div className="flex flex-col sm:flex-row items-center justify-center mb-10 sm:mb-12">
            <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 shadow-lg">
              <Code className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
              <span className="text-foreground">API</span>
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent ml-0 sm:ml-3">Documentation</span>
            </h1>
          </div>

          <p className="text-lg sm:text-2xl text-muted-foreground mb-8 sm:mb-12 leading-relaxed max-w-4xl mx-auto">
            Build powerful communication experiences with comprehensive guides, 
            <span className="text-primary font-semibold"> interactive examples</span>, and 
            world-class developer tools. Trusted by over 100,000 developers worldwide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16">
              <Link to="/docs/general/get-started">

            <Button size="lg" className="text-lg px-10 py-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center">
              <Book className="mr-3 h-6 w-6" />
              Get Started Now
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button></Link>
              <Link to="/docs/apis">

            <Button variant="outline" size="lg" className="text-lg px-10 py-6 border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300 flex items-center justify-center">
              <Code className="mr-3 h-6 w-6" />
              API Reference
            </Button>
            </Link>
            <Button variant="ghost" size="lg" className="text-lg px-6 py-6 hover:bg-primary/5 transition-all duration-300 flex items-center justify-center">
              <PlayCircle className="mr-2 h-6 w-6" />
              Watch Demo
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={stat.label} className={`text-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl sm:text-3xl font-bold text-foreground">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* API Services Section */}
      <div className="relative z-10 py-20 px-4 sm:px-6 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Communication APIs That Scale</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Powerful, reliable, and easy-to-use APIs for all your communication needs. Built for developers, trusted by enterprises.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 mb-16">
            {apiServices.map((service, index) => (
              <div key={service.name} className={`bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-500 hover:border-primary/30 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: `${index * 200}ms` }}>
                <service.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.name}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="text-sm font-medium text-primary">{service.count}</div>
                <Button variant="ghost" size="sm" className="mt-4 p-0 h-auto text-primary hover:text-primary/80">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="relative z-10 py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Developer-First Experience</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Everything you need to build, test, and deploy communication features faster than ever before.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={feature.title} className={`bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-500 hover:border-primary/30 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 150}ms` }}>
                <div className="h-14 w-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className={`h-7 w-7 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Technical Specifications */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalSpecs.map((spec, index) => (
              <div key={spec.title} className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-md transition-all duration-300">
                <spec.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">{spec.title}</h4>
                <p className="text-sm text-muted-foreground">{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Start Section */}
      <div className="relative z-10 py-20 px-4 sm:px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Get Started in Minutes</h2>
            <p className="text-lg text-muted-foreground">
              Choose your preferred language and start building immediately.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {quickStartTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg flex items-center space-x-2 transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-card hover:bg-muted text-muted-foreground hover:text-foreground'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-card border border-border rounded-xl p-8">
            {renderTabContent()}
          </div>
        </div>
      </div>

      {/* SDK Section */}
      <div className="relative z-10 py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">SDKs & Libraries</h2>
            <p className="text-lg text-muted-foreground">
              Official SDKs for all major programming languages and frameworks.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {sdks.map((sdk, index) => (
              <div key={sdk.name} className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                <div className="text-3xl mb-3">{sdk.logo}</div>
                <h4 className="font-semibold text-foreground mb-2">{sdk.name}</h4>
                <p className="text-xs text-muted-foreground mb-3">{sdk.downloads}</p>
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                  <Download className="h-4 w-4 mr-1" />
                  Install
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="relative z-10 py-20 px-4 sm:px-6 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Built for Every Use Case</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From startups to Fortune 500 companies, our APIs power communication experiences across industries.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={useCase.title} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                <useCase.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-3">{useCase.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="relative z-10 py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Trusted by Developers</h2>
            <p className="text-lg text-muted-foreground">
              See what developers are saying about our APIs and documentation.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.name} className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <span className="text-sm font-semibold text-primary">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="relative z-10 py-20 px-4 sm:px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Developer Resources</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to succeed with our APIs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FileText, title: "API Reference", desc: "Complete API documentation" },
              { icon: Github, title: "GitHub Samples", desc: "Open source code examples" },
              { icon: PlayCircle, title: "Video Tutorials", desc: "Step-by-step video guides" },
              { icon: Users, title: "Community Forum", desc: "Connect with other developers" }
            ].map((resource, index) => (
              <div key={resource.title} className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 hover:border-primary/30 group cursor-pointer">
                <resource.icon className="h-10 w-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="font-semibold text-foreground mb-2">{resource.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">{resource.desc}</p>
                <div className="flex items-center justify-center text-primary text-sm font-medium group-hover:text-primary/80">
                  Explore <ExternalLink className="h-4 w-4 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="relative z-10 py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-border/50 p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Ready to Build Something Amazing?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join over 100,000 developers using our APIs to create incredible communication experiences. 
              Get started with our free tier today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:scale-105 transition-all duration-300 flex items-center justify-center px-8 py-6">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-6 border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300">
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </Button>
            </div>

            <div className="text-sm text-muted-foreground">
              Free tier includes 100 SMS messages and 60 minutes of voice calls per month. No credit card required.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;