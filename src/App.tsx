
import React, { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminProvider } from "@/context/AdminContext";
import { Skeleton } from "@/components/ui/skeleton";

// Lazy load the page components
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AdminLogin = lazy(() => import("./pages/AdminLogin"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const MarketingCampaigns = lazy(() => import("./pages/admin/MarketingCampaigns"));
const TeamImages = lazy(() => import("./pages/admin/TeamImages"));
const Testimonials = lazy(() => import("./pages/admin/Testimonials"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const VideoLinks = lazy(() => import("./pages/admin/VideoLinks"));


// Create the QueryClient outside of the component
const queryClient = new QueryClient();

// Loading fallback component
const PageLoader = () => (
  <div className="w-full h-screen flex flex-col items-center justify-center">
    <div className="w-full max-w-lg space-y-4 p-4">
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-64 w-full" />
        <Skeleton className="h-20 w-full" />
    </div>
  </div>
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AdminProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/obrigado" element={<ThankYou />} />
                <Route path="/admin" element={<AdminLogin />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/admin/marketing" element={<MarketingCampaigns />} />
                <Route path="/admin/team" element={<TeamImages />} />
                <Route path="/admin/testimonials" element={<Testimonials />} />
                <Route path="/admin/videos" element={<VideoLinks />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </AdminProvider>
    </QueryClientProvider>
  );
}

export default App;
