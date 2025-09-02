import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { DocsLayout } from "./components/docs/DocsLayout";
import { GeneralGetStarted } from "./pages/docs/GeneralGetStarted";
import { GeneralCommandLine } from "./pages/docs/GeneralCommandLine";
import { GeneralDevelopment } from "./pages/docs/GeneralDevelopment";
import { IdmetaAPIs } from "./pages/docs/IdmetaAPIs";
import { Webhooks } from "./pages/docs/Webhooks";
import { FraudPrevention } from "./pages/docs/FraudPrevention";
import { Troubleshooting } from "./pages/docs/Troubleshooting";
import { IdmetaProducts } from "./pages/docs/IdmetaProducts";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

const queryClient = new QueryClient();
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); 
  }, [pathname]);

  return null;
};
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
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
            <Route path="fraud-prevention" element={<FraudPrevention />} />
            <Route path="troubleshooting" element={<Troubleshooting />} />
            <Route path="products" element={<IdmetaProducts />} />
            <Route index element={<GeneralGetStarted />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
