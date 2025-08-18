import { idmetaAPIsData } from "@/data/idmetaAPIsData";

export const IdmetaAPIs = () => {
  const { title, subtitle, coreAPIs, authentication, firstCalls, sdks, rateLimits, errors } =
    idmetaAPIsData;

  return (
    <div className="prose prose-slate max-w-none">
      <h1 className="text-3xl font-bold text-foreground mb-6">{title}</h1>
      <p className="text-lg text-muted-foreground mb-8">{subtitle}</p>

      {/* Core APIs */}
      <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Core APIs</h2>
      <div className="grid gap-4 md:grid-cols-2 mb-6">
        {coreAPIs.map((api, idx) => (
          <div key={idx} className="bg-card border border-border p-4 rounded-lg">
            <h3 className="font-semibold text-foreground mb-2">{api.name}</h3>
            <p className="text-sm text-muted-foreground">{api.description}</p>
          </div>
        ))}
      </div>

      {/* Authentication */}
      <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Authentication</h2>
      <p className="text-muted-foreground mb-4">{authentication.description}</p>
      <div className="bg-slate-900 text-slate-100 p-4 rounded-lg mb-6 overflow-x-auto">
        <code className="text-sm whitespace-pre-line">{authentication.code}</code>
      </div>

      {/* First API Calls */}
      <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Making Your First API Call</h2>
      {firstCalls.map((call, idx) => (
        <div key={idx}>
          <h3 className="text-lg font-medium text-foreground mt-6 mb-3">{call.title}</h3>
          <div className="bg-slate-900 text-slate-100 p-4 rounded-lg mb-4 overflow-x-auto">
            <code className="text-sm whitespace-pre-line">{call.code}</code>
          </div>
        </div>
      ))}

      {/* SDK Libraries */}
      <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">SDK Libraries</h2>
      <p className="text-muted-foreground mb-4">
        Idmeta provides official SDKs for popular programming languages to simplify integration.
      </p>
      <div className="grid gap-4 md:grid-cols-3 mb-6">
        {sdks.map((sdk, idx) => (
          <div key={idx} className="bg-muted p-3 rounded-lg text-center">
            <h4 className="font-medium mb-1">{sdk.name}</h4>
            <code className="text-xs text-muted-foreground">{sdk.install}</code>
          </div>
        ))}
      </div>

      {/* Rate Limits */}
      <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Rate Limits</h2>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
        <p className="text-sm font-medium text-yellow-800 mb-1">{rateLimits.title}</p>
        <p className="text-sm text-yellow-700">{rateLimits.text}</p>
      </div>

      {/* Error Handling */}
      <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Error Handling</h2>
      <p className="text-muted-foreground mb-4">{errors.description}</p>
      <div className="bg-slate-900 text-slate-100 p-4 rounded-lg mb-4 overflow-x-auto">
        <code className="text-sm whitespace-pre-line">{errors.code}</code>
      </div>
    </div>
  );
};
