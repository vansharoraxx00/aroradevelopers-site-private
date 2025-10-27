import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import TermsPopup from "./components/TermsPopup"; // ✅ Added

// ✅ Main Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Products from "./pages/Products";
import About from "./pages/About";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";

// ✅ Services Pages
import WebDev from "./pages/services/WebDev";
import MobileApps from "./pages/services/MobileApps";
import Cloud from "./pages/services/Cloud";
import AI from "./pages/services/AI";

// ✅ Industry Pages
import Healthcare from "./pages/industries/Healthcare";
import Finance from "./pages/industries/Finance";
import Education from "./pages/industries/Education";
import Ecommerce from "./pages/industries/Ecommerce";
import Retail from "./pages/industries/Retail";

// ✅ Product Pages
import SaaS from "./pages/products/SaaS";
import ERP from "./pages/products/ERP";
import Analytics from "./pages/products/Analytics";
import EcommercePlatform from "./pages/products/EcommercePlatform";
import HRM from "./pages/products/HRM";

// ✅ Blog Pages
import BlogERP from "./pages/BlogERP"; // 🆕 Added your ERP blog page

function App() {
  return (
    <Router>
      {/* 👇 Auto scroll to top on every route change */}
      <ScrollToTop />

      {/* 🌐 Global Components */}
      <Navbar />
      <TermsPopup /> {/* ✅ Terms & Conditions popup */}

      <Routes>
        {/* 🏠 Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactUs />} />

        {/* 💼 Services */}
        <Route path="/services/web-development" element={<WebDev />} />
        <Route path="/services/mobile-apps" element={<MobileApps />} />
        <Route path="/services/cloud" element={<Cloud />} />
        <Route path="/services/ai-ml" element={<AI />} />

        {/* 🏭 Industries */}
        <Route path="/industries/healthcare" element={<Healthcare />} />
        <Route path="/industries/finance" element={<Finance />} />
        <Route path="/industries/education" element={<Education />} />
        <Route path="/industries/ecommerce" element={<Ecommerce />} />
        <Route path="/industries/retail" element={<Retail />} />

        {/* 🛒 Products */}
        <Route path="/products/saas" element={<SaaS />} />
        <Route path="/products/erp" element={<ERP />} />
        <Route path="/products/analytics" element={<Analytics />} />
        <Route path="/products/ecommerce" element={<EcommercePlatform />} />
        <Route path="/products/hrm" element={<HRM />} />

        {/* 📝 Blog Pages */}
        <Route
          path="/blog/what-is-an-erp-system-and-why-every-business-needs-one"
          element={<BlogERP />}
        />
      </Routes>

      {/* 🧭 Global Footer */}
      <Footer />
    </Router>
  );
}

export default App;
