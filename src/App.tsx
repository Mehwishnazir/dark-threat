
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DataLeakDetection from "./pages/DataLeakDetection";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PlatformTerms from "./pages/PlatformTerms";
import WebsiteTerms from "./pages/WebsiteTerms";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import ThreatIntelligence from "./pages/ThreatIntelligence";
import Alerts from "./pages/Alerts";
import NotFound from "./pages/NotFound";
import ForgotPassword from "./pages/ForgotPassword";
import Pricing from "./pages/Pricing";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/data-leak-detection" element={<DataLeakDetection />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/platform-terms" element={<PlatformTerms />} />
          <Route path="/website-terms" element={<WebsiteTerms />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/threat-intelligence" element={<ThreatIntelligence />} />
          <Route path="/alerts" element={<Alerts />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
