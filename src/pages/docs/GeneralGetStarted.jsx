import { generalGetStartedData } from "@/data/generalGetStartedData";

export const GeneralGetStarted = () => {
  const { title, welcome, overview, steps, nextSteps } = generalGetStartedData;

  return (
    <div className="prose prose-slate max-w-none">
      <h1 className="text-3xl font-bold text-foreground mb-6">{title}</h1>

      {/* Welcome */}
      <div className="bg-primary/10 border-l-4 border-primary p-4 mb-6">
        <p className="text-sm font-medium text-primary mb-1">{welcome.heading}</p>
        <p className="text-sm text-muted-foreground">{welcome.text}</p>
      </div>

      {/* Overview */}
      <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">{overview.heading}</h2>
      <p className="text-muted-foreground mb-4">{overview.text}</p>

      {/* Steps */}
      {steps.map((step, idx) => (
        <div key={idx}>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
            {step.title}
          </h2>
          <p className="text-muted-foreground mb-4">{step.text}</p>

          {step.note && (
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-medium mb-2">{step.note.title}</h3>
              <p className="text-sm text-muted-foreground">{step.note.text}</p>
            </div>
          )}

          {step.code && (
            <div className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
              <code className="text-sm whitespace-pre-line">{step.code}</code>
            </div>
          )}
        </div>
      ))}

      {/* Next Steps */}
      <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">{nextSteps.heading}</h2>
      <ul className="list-disc list-inside text-muted-foreground space-y-2">
        {nextSteps.list.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
