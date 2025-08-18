import { generalCommandLineData } from "@/data/generalCommandLineData";

export const GeneralCommandLine = () => {
  const { title, subtitle, why, essentials, apiTesting, tips } =
    generalCommandLineData;

  return (
    <div className="prose prose-slate max-w-none">
      {/* Title */}
      <h1 className="text-3xl font-bold text-foreground mb-6">{title}</h1>
      <p className="text-lg text-muted-foreground mb-8">{subtitle}</p>

      {/* Why */}
      <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
        {why.heading}
      </h2>
      <p className="text-muted-foreground mb-4">{why.text}</p>

      {/* Essentials */}
      <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
        {essentials.heading}
      </h2>
      {essentials.sections.map((section, idx) => (
        <div key={idx}>
          <h3 className="text-lg font-medium text-foreground mt-6 mb-3">
            {section.title}
          </h3>
          <div className="bg-slate-900 text-slate-100 p-4 rounded-lg mb-4 overflow-x-auto">
            <code className="text-sm whitespace-pre-line">{section.code}</code>
          </div>
        </div>
      ))}

      {/* API Testing */}
      <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
        {apiTesting.heading}
      </h2>
      {apiTesting.sections.map((section, idx) => (
        <div key={idx}>
          <h3 className="text-lg font-medium text-foreground mt-6 mb-3">
            {section.title}
          </h3>
          <div className="bg-slate-900 text-slate-100 p-4 rounded-lg mb-4 overflow-x-auto">
            <code className="text-sm whitespace-pre-line">{section.code}</code>
          </div>
        </div>
      ))}

      {/* Tips */}
      <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
        {tips.heading}
      </h2>
      <div className="bg-muted p-4 rounded-lg space-y-3">
        {tips.items.map((tip, idx) => (
          <div key={idx}>
            <h4 className="font-medium mb-1">{tip.title}</h4>
            <p className="text-sm text-muted-foreground">{tip.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
