import React from "react";
import { Trustvalidationdata } from "@/data/Trustvalidationdata";

export const Trustvalidation = () => {
  const { title, subtitle, sections } = Trustvalidationdata;

  return (
    <div className="prose prose-slate max-w-none">
      {/* Title & Subtitle */}
      <h1 className="text-3xl font-bold text-foreground mb-6">{title}</h1>
      <p className="text-lg text-muted-foreground mb-8">{subtitle}</p>

      {/* Sections */}
      {sections.map((section, idx) => (
        <div key={idx} className="mb-8">
          {/* Section Heading */}
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
            {section.heading}
          </h2>

          {/* Alert / Info Box */}
          {section.alert && (
            <div
              className={`${
                section.alert.type === "primary"
                  ? "bg-primary/10 border-l-4 border-primary"
                  : "bg-muted/10 border-l-4 border-yellow-500"
              } p-4 mb-6`}
            >
              <p className="text-sm font-medium text-primary mb-1">
                {section.alert.title}
              </p>
              <p className="text-sm text-muted-foreground">{section.alert.text}</p>
            </div>
          )}

          {/* Grid Layout */}
          {section.grid && (
            <div
              className={`grid gap-4 ${
                section.gridCols ? section.gridCols : "md:grid-cols-2"
              }`}
            >
              {section.items.map((item, i) => (
                <div
                  key={i}
                  className={`bg-card border border-border p-6 rounded-lg ${
                    item.tags ? "" : "p-4"
                  }`}
                >
                  {/* Optional Icon */}
                  {item.icon && (
                    <h3 className="font-semibold text-foreground mb-3 flex items-center">
                      <div className={`w-8 h-8 ${item.icon} rounded mr-3`}></div>
                      {item.title}
                    </h3>
                  )}

                  {/* Title for non-icon items */}
                  {!item.icon && item.title && (
                    <h3 className="font-semibold text-foreground mb-3">{item.title}</h3>
                  )}

                  {/* Text */}
                  {item.text && <p className="text-sm text-muted-foreground mb-4">{item.text}</p>}

                  {/* Tags / Features */}
                  {item.tags && (
                    <>
                      <div className="text-xs font-medium text-primary mb-1">{item.tagsTitle}</div>
                      <div className="flex flex-wrap gap-1">
                        {item.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="px-2 py-1 bg-muted rounded text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </>
                  )}

                  {/* Code Blocks */}
                  {item.code && (
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-lg mb-4">
                      <code className="text-sm">{item.code}</code>
                    </div>
                  )}

                  {/* SDK Lists */}
                  {item.sdkList && (
                    <div className="space-y-2">
                      {item.sdkList.map((sdk, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex justify-between items-center p-2 bg-muted rounded"
                        >
                          <span className="font-medium">{sdk.name}</span>
                          <code className="text-xs text-muted-foreground">{sdk.command}</code>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Subtitle for Quick Start Guides */}
                  {item.subtitle && (
                    <p className="text-xs text-muted-foreground">{item.subtitle}</p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Stacked Items for Platform Services */}
          {section.stacked &&
            section.items.map((item, i) => (
              <div key={i} className="bg-card border border-border p-4 rounded-lg mb-4">
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                {item.text && <p className="text-sm text-muted-foreground">{item.text}</p>}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};
