
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import DataLeakDetection from "./pages/DataLeakDetection";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PlatformTerms from "./pages/PlatformTerms";
import WebsiteTerms from "./pages/WebsiteTerms";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import ThreatIntelligence from "./pages/ThreatIntelligence";
import Alerts from "./pages/Alerts";
import Reports from "./pages/Reports";
import NotFound from "./pages/NotFound";
import ForgotPassword from "./pages/ForgotPassword";
import Pricing from "./pages/Pricing";
import Solution from "./pages/Solution";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TrialComingSoon from "./pages/TrialComingSoon";
import Auth from "./pages/Auth";
import AdminDashboard from "./pages/AdminDashboard";

import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import DarkWebMonitoring from "./pages/DarkWebMonitoring";
import CredentialLeakDetection from "./pages/CredentialLeakDetection";
import DarkWebDataRemoval from "./pages/DarkWebDataRemoval";
import ComparisonDarkOwl from "./pages/ComparisonDarkOwl";
import Author from "./pages/Author";
import IndustriesPage from "./pages/IndustriesPage";
import FinancialServicesIndustry from "./pages/FinancialServicesIndustry";
import HealthcareIndustry from "./pages/HealthcareIndustry";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/solution" element={<Solution />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/data-leak-detection" element={<DataLeakDetection />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/platform-terms" element={<PlatformTerms />} />
            <Route path="/website-terms" element={<WebsiteTerms />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/threat-intelligence" element={<ThreatIntelligence />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/trial-coming-soon" element={<TrialComingSoon />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/admin" element={<AdminDashboard />} />
            
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/dark-web-monitoring" element={<DarkWebMonitoring />} />
            <Route path="/credential-leak-detection" element={<CredentialLeakDetection />} />
            <Route path="/dark-web-data-removal" element={<DarkWebDataRemoval />} />
            <Route path="/compare/darkthreat-vs-darkowl" element={<ComparisonDarkOwl />} />
            <Route path="/author/:slug" element={<Author />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/industries/financial-services" element={<FinancialServicesIndustry />} />
            <Route path="/industries/healthcare" element={<HealthcareIndustry />} />
            <Route path="/industries/*" element={<TrialComingSoon />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
