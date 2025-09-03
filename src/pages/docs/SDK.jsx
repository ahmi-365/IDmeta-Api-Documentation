import { SDkData } from '@/data/SDKdata';
export const SDK = () => {
  const { title, subtitle, alert, sections } = SDkData;

  return (
    <div className="prose prose-slate max-w-none">
      {/* Title & Subtitle */}
      <h1 className="text-3xl font-bold text-foreground mb-6">{title}</h1>
      <p className="text-lg text-muted-foreground mb-8">{subtitle}</p>

      {/* Alert */}
      <div className={`bg-${alert.type}-50 border-l-4 border-${alert.type}-400 p-4 mb-6`}>
        <p className={`text-sm font-medium text-${alert.type}-800 mb-1`}>{alert.title}</p>
        <p className={`text-sm text-${alert.type}-700`}>{alert.text}</p>
      </div>

      {/* Sections */}
      {sections.map((section, idx) => (
        <div key={idx} className="mb-6">
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">{section.heading}</h2>

          {/* Cards */}
          {section.cards?.map((card, i) => (
            <div key={i} className="bg-card border border-border p-4 rounded-lg mb-3">
              <h3 className="font-semibold text-foreground mb-2">{card.title}</h3>
              {card.text && <p className="text-sm text-muted-foreground">{card.text}</p>}
              {card.list && (
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  {card.list.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              )}
            </div>
          ))}

          {/* Subsections */}
          {section.subsections?.map((sub, i) => (
            <div key={i} className="mb-4">
              <h3 className="text-lg font-medium text-foreground mt-6 mb-3">{sub.title}</h3>
              {sub.text && <p className="text-muted-foreground mb-2">{sub.text}</p>}
              {sub.list && (
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-2">
                  {sub.list.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              )}
              {sub.code && (
                <div className="bg-slate-900 text-slate-100 p-4 rounded-lg mb-4">
                  <code className="text-sm">{sub.code}</code>
                </div>
              )}
            </div>
          ))}

          {/* Notes */}
          {section.note && (
            <div className={`bg-${section.note.type}-50 border-l-4 border-${section.note.type}-400 p-4 mb-6`}>
              <p className={`text-sm font-medium text-${section.note.type}-800 mb-1`}>{section.note.title}</p>
              <p className={`text-sm text-${section.note.type}-700`}>{section.note.text}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
