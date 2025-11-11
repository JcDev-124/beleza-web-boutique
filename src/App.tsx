
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SiteDataProvider } from "@/contexts/SiteDataContext";
import Index from "./pages/Index";
import Courses from "./pages/Courses";
import Config from "./pages/Config";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import About from "./pages/About";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <SiteDataProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/cursos" element={<Courses />} />
            <Route path="/curso/terapia-capilar" element={<Courses />} />
            <Route path="/produtos" element={<Products />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/config" element={<Config />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </SiteDataProvider>
  </QueryClientProvider>
);

export default App;
