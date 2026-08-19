
import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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

import DarkWebMonitoring from "./pages/DarkWebMonitoring";
import CredentialLeakDetection from "./pages/CredentialLeakDetection";
import DarkWebDataRemoval from "./pages/DarkWebDataRemoval";
import ThreatIntelligencePlatform from "./pages/ThreatIntelligencePlatform";
import ComplianceFrameworkAlignment from "./pages/ComplianceFrameworkAlignment";
import ManagedSocSupport from "./pages/ManagedSocSupport";
import AdvancedThreatSearch from "./pages/AdvancedThreatSearch";
import ExternalAttackSurfaceMonitoring from "./pages/ExternalAttackSurfaceMonitoring";
import ComparisonDarkOwl from "./pages/ComparisonDarkOwl";
import ComparisonRecordedFuture from "./pages/ComparisonRecordedFuture";
import ComparisonZeroFox from "./pages/ComparisonZeroFox";
import ComparisonFlare from "./pages/ComparisonFlare";
import ComparisonSocRadar from "./pages/ComparisonSocRadar";
import ComparisonCybersixgill from "./pages/ComparisonCybersixgill";
import RouteHead from "./components/RouteHead";
import ScrollToTop from "./components/ScrollToTop";
import CookieConsent from "./components/CookieConsent";
import CookieSettingsLink from "./components/CookieSettingsLink";
import ChatWidget from "./components/ChatWidget";
import {
  IndustriesPage,
  FinancialServicesIndustry,
  HealthcareIndustry,
  LegalIndustry,
  GovernmentIndustry,
  EcommerceIndustry,
  SaasTechnologyIndustry,
  CryptoFintechIndustry,
  EducationIndustry,
  ProfessionalServicesIndustry,
} from "./pages/industries";

// Location Pages
import {
  DarkWebMonitoringNewYorkCity,
  ThreatIntelligenceWashingtonDC,
  DataBreachMonitoringCalifornia,
  CredentialMonitoringSanFrancisco,
  AttackSurfaceMonitoringTexas,
  DigitalRiskProtectionNewYork,
  BrandMonitoringLosAngeles,
  DarkWebMonitoringChicago,
  ExecutiveMonitoringBoston,
  DomainMonitoringAustin,
} from "./pages/locations";

// Blog routes pull in the full post corpus (~13 MB), so they load on demand.
const Blog = lazy(() => import("./pages/Blog"));
const BlogSlugRedirect = lazy(() => import("./components/BlogSlugRedirect"));
const Author = lazy(() => import("./pages/Author"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <RouteHead />
          <CookieConsent />
          <CookieSettingsLink />
          <ChatWidget />
          <Suspense fallback={<div className="min-h-screen bg-background" />}>
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
            <Route path="/platform-terms-of-use" element={<Navigate to="/platform-terms" replace />} />
            <Route path="/website-terms-of-use" element={<Navigate to="/website-terms" replace />} />
            <Route path="/threat-intelligence-platform" element={<ThreatIntelligencePlatform />} />
            <Route path="/compliance-framework-alignment" element={<ComplianceFrameworkAlignment />} />
            <Route path="/managed-soc-support" element={<ManagedSocSupport />} />
            <Route path="/advanced-threat-search" element={<AdvancedThreatSearch />} />
            <Route path="/external-attack-surface-monitoring" element={<ExternalAttackSurfaceMonitoring />} />
            <Route path="/digital-risk-protection" element={<Navigate to="/solution" replace />} />
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
            <Route path="/blog/:slug" element={<BlogSlugRedirect />} />
            <Route path="/dark-web-monitoring" element={<DarkWebMonitoring />} />
            <Route path="/credential-leak-detection" element={<CredentialLeakDetection />} />
            <Route path="/dark-web-data-removal" element={<DarkWebDataRemoval />} />
            <Route path="/compare/darkthreat-vs-darkowl" element={<ComparisonDarkOwl />} />
            <Route path="/compare/darkthreat-vs-recorded-future" element={<ComparisonRecordedFuture />} />
            <Route path="/compare/darkthreat-vs-zerofox" element={<ComparisonZeroFox />} />
            <Route path="/compare/darkthreat-vs-flare" element={<ComparisonFlare />} />
            <Route path="/compare/darkthreat-vs-socradar" element={<ComparisonSocRadar />} />
            <Route path="/compare/darkthreat-vs-cybersixgill" element={<ComparisonCybersixgill />} />
            <Route path="/author/:slug" element={<Author />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/industries/financial-services" element={<FinancialServicesIndustry />} />
            <Route path="/industries/healthcare" element={<HealthcareIndustry />} />
            <Route path="/industries/legal" element={<LegalIndustry />} />
            <Route path="/industries/government" element={<GovernmentIndustry />} />
            <Route path="/industries/ecommerce" element={<EcommerceIndustry />} />
            <Route path="/industries/saas-technology" element={<SaasTechnologyIndustry />} />
            <Route path="/industries/crypto-fintech" element={<CryptoFintechIndustry />} />
            <Route path="/industries/education" element={<EducationIndustry />} />
            <Route path="/industries/professional-services" element={<ProfessionalServicesIndustry />} />
            <Route path="/industries/technology" element={<Navigate to="/industries/saas-technology" replace />} />
            <Route path="/industries/*" element={<TrialComingSoon />} />
            
            {/* Location Pages */}
            <Route path="/dark-web-monitoring/new-york-city" element={<DarkWebMonitoringNewYorkCity />} />
            <Route path="/threat-intelligence/washington-dc" element={<ThreatIntelligenceWashingtonDC />} />
            <Route path="/data-breach-monitoring/california" element={<DataBreachMonitoringCalifornia />} />
            <Route path="/credential-monitoring/san-francisco" element={<CredentialMonitoringSanFrancisco />} />
            <Route path="/attack-surface-monitoring/texas" element={<AttackSurfaceMonitoringTexas />} />
            <Route path="/digital-risk-protection/new-york" element={<DigitalRiskProtectionNewYork />} />
            <Route path="/brand-monitoring/los-angeles" element={<BrandMonitoringLosAngeles />} />
            <Route path="/dark-web-monitoring/chicago" element={<DarkWebMonitoringChicago />} />
            <Route path="/executive-monitoring/boston" element={<ExecutiveMonitoringBoston />} />
            <Route path="/domain-monitoring/austin" element={<DomainMonitoringAustin />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
