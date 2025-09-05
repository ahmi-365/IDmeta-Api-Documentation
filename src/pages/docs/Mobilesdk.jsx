import { Mobiledatasdk } from '@/data/Mobiledatasdk';

export const Mobilesdk = () => {
  return (
    <div className="prose prose-slate max-w-none">
      <h1>{Mobiledatasdk.title}</h1>
      <p>{Mobiledatasdk.subtitle}</p>

      {Mobiledatasdk.sections.map((section, index) => (
        <div key={index} className="mt-8">
          <h2>{section.heading}</h2>

          {/* Render Cards if available */}
          {section.cards && (
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              {section.cards.map((card, i) => (
                <div key={i} className="border rounded-xl p-4 shadow-sm">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  {card.solution && (
                    <p>
                      <strong>Solution:</strong> {card.solution}
                    </p>
                  )}
                  {card.tip && (
                    <p>
                      <strong>Tip:</strong> {card.tip}
                    </p>
                  )}
                  {card.code && (
                    <pre className="bg-gray-900 text-white text-xs rounded-lg p-2 mt-2 overflow-x-auto">
                      <code>{card.code}</code>
                    </pre>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Render Lists if available */}
          {section.lists && (
            <div className="mt-4 space-y-6">
              {section.lists.map((list, i) => (
                <div key={i} className="border rounded-xl p-4 shadow-sm">
                  <h3>{list.title}</h3>
                  <ul className="list-disc pl-5">
                    {list.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                  {list.code && (
                    <pre className="bg-gray-900 text-white text-xs rounded-lg p-2 mt-2 overflow-x-auto">
                      <code>{list.code}</code>
                    </pre>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
