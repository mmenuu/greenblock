import { BrowserRouter, Route, Routes } from "react-router-dom";

import AuthLayout from "@/layouts/AuthLayout";
import BaseLayout from "@/layouts/BaseLayout";
import ContactPage from "@/pages/ContactPage";
import HistoryDetailPage from "@/pages/HistoryDetailPage";
import HistoryPage from "@/pages/HistoryPage";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import MarketplacesPage from "@/pages/MarketplacesPage";
import ProfilePage from "@/pages/ProfilePage";
import RegisterPage from "@/pages/RegisterPage";
import MarketplacePage from "@/pages/MarketplacePage";
import TicketPage from "@/pages/TicketPage";
import SwapPage from "@/pages/SwapPage";
import BuyOffSetsPage from "@/pages/BuyOffSetsPage";
import BuyOffSetPage from "@/pages/BuyOffsetPage";
import CreateOfferPage from "@/pages/CreateOfferPage";
import TestMapPage from "@/pages/TestMapPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/ticket" element={<TicketPage />} />
          <Route path="/marketplace" element={<MarketplacesPage />} />
          <Route path="/marketplace/:id" element={<MarketplacePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/swap" element={<SwapPage />} />
          <Route path="/buy-offsets" element={<BuyOffSetsPage />} />
          <Route path="/buy-offsets/:id" element={<BuyOffSetPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/history-detail" element={<HistoryDetailPage />} />
          <Route path="/create-offer" element={<CreateOfferPage />} />
          <Route path="/test-map" element={<TestMapPage />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;