
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HowWeWork from "./pages/HowWeWork";
import Contacts from "./pages/Contacts";
import Japan from "./pages/Japan";
import JapanDocuments from "./pages/JapanDocuments";
import China from "./pages/China";
import ChinaDocuments from "./pages/ChinaDocuments";
import Korea from "./pages/Korea";
import KoreaDocuments from "./pages/KoreaDocuments";
import KoreaExpertReport from "./pages/KoreaExpertReport";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/how-we-work" element={<HowWeWork />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/japan" element={<Japan />} />
          <Route path="/japan/documents" element={<JapanDocuments />} />
          <Route path="/china" element={<China />} />
          <Route path="/china/documents" element={<ChinaDocuments />} />
          <Route path="/korea" element={<Korea />} />
          <Route path="/korea/documents" element={<KoreaDocuments />} />
          <Route path="/korea/expert-report" element={<KoreaExpertReport />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;