import React from "react";
import { Flutterdata } from "@/data/Flutterdata";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { AlertCircle, Info, Lightbulb, CheckCircle2 } from "lucide-react";

// ✅ Code block component
const CodeBlock = ({ code }) => (
  <div className="mt-4 bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
    <pre className="text-sm whitespace-pre-wrap">{code}</pre>
  </div>
);

// ✅ Callout component (Tip / Warning / Info / Success)
const Callout = ({ type = "info", children }) => {
  const variants = {
    info: {
      icon: <Info className="w-5 h-5 text-blue-500" />,
      bg: "bg-blue-50 border-blue-200 text-blue-800",
    },
    warning: {
      icon: <AlertCircle className="w-5 h-5 text-amber-500" />,
      bg: "bg-amber-50 border-amber-200 text-amber-800",
    },
    tip: {
      icon: <Lightbulb className="w-5 h-5 text-green-500" />,
      bg: "bg-green-50 border-green-200 text-green-800",
    },
    success: {
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-500" />,
      bg: "bg-emerald-50 border-emerald-200 text-emerald-800",
    },
  };

  return (
    <div className={`flex items-start gap-3 p-4 border rounded-xl my-4 ${variants[type].bg}`}>
      {variants[type].icon}
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
};

// ✅ Section renderer
const SectionRenderer = ({ sections }) => {
  return (
    <>
      {sections.map((section, idx) => (
        <div key={idx} className="mb-10">
          {/* Section Heading */}
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-6">
            {section.heading}
          </h2>

          {/* Grid Layout */}
          {section.grid && (
            <div className="grid gap-6 md:grid-cols-2">
              {section.items.map((item, i) => (
                <div
                  key={i}
                  className="bg-card border border-border p-6 rounded-xl shadow-sm"
                >
                  <h3 className="font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  {item.text && (
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                  )}
                  {item.tags && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {item.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-1 bg-muted rounded text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  {item.code && <CodeBlock code={item.code} />}
                  {item.callout && (
                    <Callout type={item.callout.type}>{item.callout.text}</Callout>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Stacked Layout */}
          {section.stacked &&
            section.items.map((item, i) => (
              <div
                key={i}
                className="bg-card border border-border p-5 rounded-xl mb-4"
              >
                <h3 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.text}</p>
                {item.callout && (
                  <Callout type={item.callout.type}>{item.callout.text}</Callout>
                )}
              </div>
            ))}
        </div>
      ))}
    </>
  );
};

// ✅ Main Flutter SDK Page
export const Fluttersdk = () => {
  const { title, subtitle, android, ios } = Flutterdata;

  return (
    <div className="prose prose-slate max-w-none">
      {/* Title & Subtitle */}
      <h1 className="text-3xl font-bold text-foreground mb-4">{title}</h1>
      <p className="text-lg text-muted-foreground mb-6">{subtitle}</p>

      {/* Global Info Note */}
      <Callout type="info">
        This guide covers <strong>Android</strong> and <strong>iOS</strong> setup for the Flutter SDK.
        Choose your platform below to get started.
      </Callout>

      {/* Tabs for Android & iOS */}
      <Tabs defaultValue="android" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8 bg-muted p-1 rounded-xl">
          <TabsTrigger
            value="android"
            className="data-[state=active]:bg-background data-[state=active]:shadow-sm rounded-lg"
          >
            Android
          </TabsTrigger>
          <TabsTrigger
            value="ios"
            className="data-[state=active]:bg-background data-[state=active]:shadow-sm rounded-lg"
          >
            iOS
          </TabsTrigger>
        </TabsList>

        {/* Android Tab */}
        <TabsContent value="android">
          <SectionRenderer sections={android} />
        </TabsContent>

        {/* iOS Tab */}
        <TabsContent value="ios">
          <SectionRenderer sections={ios} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Fluttersdk;
