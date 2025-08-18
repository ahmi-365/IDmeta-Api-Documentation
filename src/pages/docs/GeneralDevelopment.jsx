import { generalDevelopmentData } from "@/data/generalDevelopmentData";

export const GeneralDevelopment = () => {
  const { title, subtitle, prerequisites, tools, sdk, testing, nextSteps } =
    generalDevelopmentData;

  return (
    <div className="prose prose-slate max-w-none">
      {/* Title + Subtitle */}
      <h1 className="text-3xl font-bold text-foreground mb-6">{title}</h1>
      <p className="text-lg text-muted-foreground mb-8">{subtitle}</p>

      {/* Prerequisites */}
      <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
        {prerequisites.heading}
      </h2>
      <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
        {prerequisites.items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      {/* Development Tools */}
      <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
        {tools.heading}
      </h2>
      {tools.sections.map((section, idx) => (
        <div key={idx}>
          <h3 className="text-lg font-medium text-foreground mt-6 mb-3">
            {section.title}
          </h3>

          {/* API Testing Tools list */}
          {section.content && (
            <div className="bg-muted p-4 rounded-lg mb-4">
              <h4 className="font-medium mb-2">{section.content.note}</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                {section.content.items.map((tool, i) => (
                  <li key={i}>• <strong>{tool.split(" - ")[0]}</strong> - {tool.split(" - ")[1]}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Environment Variables */}
          {section.description && (
            <>
              <p className="text-muted-foreground mb-4">{section.description}</p>
              <div className="bg-slate-900 text-slate-100 p-4 rounded-lg mb-4 overflow-x-auto">
                <code className="text-sm whitespace-pre-line">{section.code}</code>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <p className="text-sm font-medium text-yellow-800 mb-1">
                  {section.warning.title}
                </p>
                <p className="text-sm text-yellow-700">{section.warning.text}</p>
              </div>
            </>
          )}
        </div>
      ))}

      {/* SDK Installation */}
      <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
        {sdk.heading}
      </h2>
      {sdk.sections.map((section, idx) => (
        <div key={idx}>
          <h3 className="text-lg font-medium text-foreground mt-6 mb-3">
            {section.title}
          </h3>
          <div className="bg-slate-900 text-slate-100 p-4 rounded-lg mb-4 overflow-x-auto">
            <code className="text-sm whitespace-pre-line">{section.code}</code>
          </div>
        </div>
      ))}

      {/* Testing Your Setup */}
      <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
        {testing.heading}
      </h2>
      <p className="text-muted-foreground mb-4">{testing.description}</p>
      <div className="bg-slate-900 text-slate-100 p-4 rounded-lg mb-4 overflow-x-auto">
        <code className="text-sm whitespace-pre-line">{testing.code}</code>
      </div>

      {/* Next Steps */}
      <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
        {nextSteps.heading}
      </h2>
      <ul className="list-disc list-inside text-muted-foreground space-y-2">
        {nextSteps.items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
