// src/pages/docs/Reactnative.jsx
import React from "react";
import { Reactnativedata } from "@/data/Reactnativedata";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const MessageBox = ({ type, children }) => {
  const styles = {
    note: "bg-blue-50 border-blue-300 text-blue-700",
    warning: "bg-red-50 border-red-300 text-red-700",
    tip: "bg-green-50 border-green-300 text-green-700",
  };
  return (
    <div className={`border-l-4 p-3 mt-3 mb-2 rounded ${styles[type]}`}>
      <p className="text-sm">{children}</p>
    </div>
  );
};

const CodeBlock = ({ code }) => (
  <div className="mt-3 bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
    <pre className="text-sm whitespace-pre-wrap">{code}</pre>
  </div>
);

const SectionRenderer = ({ sections }) => (
  <>
    {sections.map((section, idx) => (
      <div key={idx} className="mb-12">
        <h2 className="text-xl font-semibold text-foreground mt-8 mb-6">
          {section.heading}
        </h2>

        {/* Grid Layout */}
        {section.grid && (
          <div className="grid gap-6 md:grid-cols-2">
            {section.items.map((item, i) => (
              <div
                key={i}
                className="bg-card border border-border p-6 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                {item.text && (
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                )}
                {item.note && <MessageBox type="note">{item.note}</MessageBox>}
                {item.warning && (
                  <MessageBox type="warning">{item.warning}</MessageBox>
                )}
                {item.tip && <MessageBox type="tip">{item.tip}</MessageBox>}
                {item.code && <CodeBlock code={item.code} />}
              </div>
            ))}
          </div>
        )}

        {/* Stacked Layout */}
        {section.stacked &&
          section.items.map((item, i) => (
            <div
              key={i}
              className="bg-card border border-border p-5 rounded-xl mb-4 shadow-sm"
            >
              <h3 className="font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">{item.text}</p>
              {item.note && <MessageBox type="note">{item.note}</MessageBox>}
              {item.warning && (
                <MessageBox type="warning">{item.warning}</MessageBox>
              )}
              {item.tip && <MessageBox type="tip">{item.tip}</MessageBox>}
              {item.code && <CodeBlock code={item.code} />}
            </div>
          ))}
      </div>
    ))}
  </>
);

export const Reactnativesdk = () => {
  const { title, subtitle, android, ios } = Reactnativedata;

  return (
    <div className="prose prose-slate max-w-none">
      {/* Title & Subtitle */}
      <h1 className="text-3xl font-bold text-foreground mb-4">{title}</h1>
      <p className="text-lg text-muted-foreground mb-10">{subtitle}</p>

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

export default Reactnativesdk;
