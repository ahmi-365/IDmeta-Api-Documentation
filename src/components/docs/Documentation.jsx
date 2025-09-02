import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { BookOpen, ArrowRight, Code, Zap, Shield, Users, GitBranch, Rocket } from 'lucide-react';
import { sidebarItems } from "../../config/docs-nav";
const cards = [
  {
    id: 1,
    title: "Introduction",
    desc: "Fast, reliable, and easy API documentation.",
    icon: Rocket,
    color: "text-blue-600",
    link: sidebarItems[0]?.children?.[0]?.path,
    longDesc: "Longer details and examples about the Introduction section. Put code snippets, examples or extended text here."
  },
  {
    id: 2,
    title: "Trust Flows",
    desc: "Flow of credibility and reliable authority.",
    icon: Code,
    color: "text-purple-600",
    link: sidebarItems[0]?.children?.[1]?.path,
    longDesc: "Extended explanation of Trust Flows with more examples."
  },
  {
    id: 3,
    title: "Trust Values",
    desc: "Beliefs guiding reliability in every interaction.",
    icon: Zap,
    color: "text-amber-600",
    link: sidebarItems[0]?.children?.[2]?.path,
    longDesc: "Details and examples for Trust Values."
  },
  {
    id: 4,
    title: "ID Meta APIs",
    desc: "Powering identity solutions through advanced APIs.",
    icon: Shield,
    color: "text-green-600",
    link: sidebarItems[1]?.path,
    longDesc: "Longer description for ID Meta APIs."
  },
  {
    id: 5,
    title: "Mobile and Web SDK",
    desc: "Build faster with cross-platform mobile and web SDKs.",
    icon: Users,
    color: "text-red-600",
    link: sidebarItems[2]?.path,
    longDesc: "Details and guides for SDK usage."
  },
  {
    id: 6,
    title: "Web Book",
    desc: "One-stop digital book for mastering web.",
    icon: GitBranch,
    color: "text-indigo-600",
    link: sidebarItems[3]?.path,
    longDesc: "A long-form digital book explanation."
  },
];

export default function DynamicDocumentationCards() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCardId, setHoveredCardId] = useState(null); // key: store only the card id
  const closeTimer = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
    return () => {
      // cleanup timer on unmount
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  // helper: open immediately, cancel any pending close
  const handleEnter = (id) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setHoveredCardId(id);
  };

  // helper: set a short delay before closing (smoothness)
  const handleLeave = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setHoveredCardId(null);
      closeTimer.current = null;
    }, 120); // 120ms — adjust if you want faster/slower
  };

  return (
    <div className="min-h-screen bg-white relative overflow-visible">

      {/* ... your animated background and floating things unchanged ... */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-50/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className={`text-center max-w-7xl mx-auto py-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-lg sm:text-2xl text-muted-foreground mb-8 sm:mb-12 leading-relaxed max-w-4xl mx-auto">
            This is the Documentation File of the
            <span className="text-primary font-semibold"> Documentation API.</span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                // NOTE: we use a div as the clickable card and navigate on click (so we avoid nested anchors)
                <div
                  key={card.id}
                  onMouseEnter={() => handleEnter(card.id)}
                  onMouseLeave={handleLeave}
                  onClick={() => navigate(card.link)}
                  className={`group relative bg-white backdrop-blur-xl border border-gray-200 overflow-visible shadow-md transition-all duration-300 cursor-pointer 
                      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} 
                      ${hoveredCardId === card.id ? "z-50" : "z-0"}`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                    borderRadius: '60px 12px 12px 60px',
                    height: '120px'
                  }}
                >


                  <div className="relative z-10 flex h-full items-center">
                    <div className="flex-shrink-0 w-28 h-28 flex items-center justify-center relative">
                      <div className="absolute w-28 h-28 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full border border-gray-200"></div>
                      <div className="absolute w-20 h-20 rounded-full bg-white border border-gray-200 shadow-sm"></div>
                      <div className="relative z-20">
                        <Icon className={`h-7 w-7 ${card.color}`} />
                      </div>
                    </div>

                    <div className="flex-1 px-6 py-4 flex flex-col justify-center relative">
                      <div className="relative z-10">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {card.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-3 text-sm">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* ===== Hover modal (rendered INSIDE the card so it doesn't trigger leave) ===== */}
                  {/* ===== Hover modal ===== */}
                  <div
                    className={`absolute top-full left-1/2 mt-3 transform -translate-x-1/2 w-80 p-4 bg-white rounded-lg shadow-lg transition-all duration-300 ease-out z-50
    ${hoveredCardId === card.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <h4 className="text-lg font-semibold">{card.title}</h4>
                    <p className="text-sm text-gray-600 mt-2">{card.longDesc}</p>
                  </div>


                </div>
              );
            })}
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
