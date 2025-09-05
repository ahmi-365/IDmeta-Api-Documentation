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

import { TrustFlows } from "./pages/docs/TrustFlows";
import { Trustvalidation } from "./pages/docs/Trustvalidation";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Documentation from "./components/docs/Documentation";
import "./index.css"
import { Mobilesdk } from "./pages/docs/Mobilesdk";
import { Websdk } from "./pages/docs/Websdk";
import Reactnative from "./pages/docs/Reactnative";
import Ionic from "./pages/docs/Ionic";
import Flutter from "./pages/docs/Flutter";
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
            <Route path="general/command-line" element={<GeneralCommandLine />} />
            <Route path="general/development-environment" element={<GeneralDevelopment />} />
            <Route path="apis" element={<IdmetaAPIs />} />
            <Route path="webhooks" element={<Webhooks />} />
            <Route path="sdk/mobile" element={<Mobilesdk />} />
            <Route path="sdk/mobile/flutter" element={<Flutter />} />
            <Route path="sdk/mobile/ionic" element={<Ionic />} />
            <Route path="sdk/mobile/react-native" element={<Reactnative />} />

            <Route path="sdk/web" element={<Websdk />} />

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
