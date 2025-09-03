import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DocsLayout } from "./components/docs/DocsLayout";
import { GeneralGetStarted } from "./pages/docs/GeneralGetStarted";
import { GeneralCommandLine } from "./pages/docs/GeneralCommandLine";
import { GeneralDevelopment } from "./pages/docs/GeneralDevelopment";
import { IdmetaAPIs } from "./pages/docs/IdmetaAPIs";
import { Webhooks } from "./pages/docs/Webhooks";
import {  SDK } from "./pages/docs/SDK";
import { TrustFlows } from "./pages/docs/TrustFlows";
import { Trustvalidation } from "./pages/docs/Trustvalidation";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Documentation from "./components/docs/Documentation";
import "./index.css"
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/Starter" element={<Documentation />} />

          <Route path="/" element={<Index />} />
          <Route path="/docs" element={<DocsLayout />}>
            <Route path="general/get-started" element={<GeneralGetStarted />} />
            <Route
              path="general/command-line"
              element={<GeneralCommandLine />}
            />
            <Route
              path="general/development-environment"
              element={<GeneralDevelopment />}
            />
            <Route path="apis" element={<IdmetaAPIs />} />
            <Route path="webhooks" element={<Webhooks />} />
            <Route path="sdk" element={<SDK />} />
            
            <Route path="trust-flows" element={<TrustFlows />} />


            <Route path="Trustvalidation" element={<Trustvalidation />} />
            <Route index element={<GeneralGetStarted />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
