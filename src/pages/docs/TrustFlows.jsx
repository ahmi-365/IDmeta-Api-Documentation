import { trustFlows } from '@/data/TrustFlowsData';

export const TrustFlows = () => {
  return (
    <div className="prose prose-slate max-w-none">
      <h1 className="text-3xl font-bold text-foreground mb-6">
        {trustFlows.title}
      </h1>
      <p className="text-lg text-muted-foreground mb-8">
        {trustFlows.subtitle}
      </p>

      {trustFlows.sections.map((section, i) => (
        <div key={i} className="mb-6">
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
            {section.heading}
          </h2>

          {/* Cards */}
          {section.cards?.map((card, j) => (
            <div key={j} className="bg-card border border-border p-4 rounded-lg mb-4">
              <h3 className="font-semibold text-foreground mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{card.text}</p>
              {card.solution && (
                <div className="bg-muted p-2 rounded text-xs">
                  <strong>Solution:</strong> {card.solution}
                </div>
              )}
            </div>
          ))}

          {/* Lists */}
          {section.lists?.map((list, k) => (
            <div key={k} className="mb-4">
              <h3 className="text-lg font-medium text-foreground mt-6 mb-3">{list.title}</h3>
              {list.items && (
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  {list.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
              {list.code && (
                <div className="bg-slate-900 text-slate-100 p-4 rounded-lg mb-4">
                  <code className="text-sm">{list.code}</code>
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
