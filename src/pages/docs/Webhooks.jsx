import { webhooksData } from "@/data/webhooksData";

export const Webhooks = () => {
  const { title, subtitle, sections } = webhooksData;

  return (
    <div className="prose prose-slate max-w-none">
      <h1 className="text-3xl font-bold text-foreground mb-6">{title}</h1>
      <p className="text-lg text-muted-foreground mb-8">{subtitle}</p>

      {sections.map((section, idx) => (
        <div key={idx}>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
            {section.heading}
          </h2>

          {section.content && <p className="text-muted-foreground mb-4">{section.content}</p>}

          {section.note && (
            <div
              className={`${
                section.note.type === "primary"
                  ? "bg-primary/10 border-l-4 border-primary"
                  : "bg-yellow-50 border-l-4 border-yellow-400"
              } p-4 mb-6`}
            >
              <p
                className={`text-sm font-medium ${
                  section.note.type === "primary" ? "text-primary" : "text-yellow-800"
                } mb-1`}
              >
                {section.note.title}
              </p>
              <p
                className={`text-sm ${
                  section.note.type === "primary" ? "text-muted-foreground" : "text-yellow-700"
                }`}
              >
                {section.note.text}
              </p>
            </div>
          )}

          {section.cards &&
            section.cards.map((card, i) => (
              <div key={i} className="bg-card border border-border p-3 rounded-lg mb-3">
                <h3 className="font-medium text-foreground mb-1">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.text}</p>
              </div>
            ))}

          {section.steps &&
            section.steps.map((step, i) => (
              <div key={i}>
                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">{step.step}</h3>
                <p className="text-muted-foreground mb-4">{step.text}</p>
                {step.code && (
                  <div className="bg-slate-900 text-slate-100 p-4 rounded-lg mb-4 overflow-x-auto">
                    <code className="text-sm whitespace-pre-line">{step.code}</code>
                  </div>
                )}
              </div>
            ))}

          {section.list && (
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              {section.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}

          {section.code && !section.steps && !section.list && (
            <div className="bg-slate-900 text-slate-100 p-4 rounded-lg mb-4 overflow-x-auto">
              <code className="text-sm whitespace-pre-line">{section.code}</code>
            </div>
          )}

          {section.text && !section.list && !section.code && (
            <p className="text-muted-foreground mb-4">{section.text}</p>
          )}
        </div>
      ))}
    </div>
  );
};
