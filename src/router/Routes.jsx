import { Routes, Route } from "react-router-dom";
import EntryPage from "../pages/EntryPage";
import ProductList from "../pages/ProductList";
import ProductDetail from "../pages/ProductDetail";
import About from "../pages/About"
import ContactPage from "../pages/ContactPage"
import NotificationPage from "../pages/NotificationPage"
import Terms from "../pages/TermsPage"
import CartPage from "../pages/CartPage"
import CheckoutPage from "../pages/CheckoutPage"
import SettingsPage from "../pages/SettingsPage"
import Layout from "../components/Layout/Layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<EntryPage />} /> 
        <Route path="/products-list" element={<ProductList />} />
         <Route path="/products/:id" element={<ProductDetail />} />
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<ContactPage />} />
         <Route path="/notifications" element={<NotificationPage />} />
         <Route path="/terms" element={<Terms />} />
         <Route path="/cart" element={<CartPage />} />
         <Route path="/settings" element={<SettingsPage />} />
         <Route path="/checkout" element={<CheckoutPage />} />
         
      </Route>
    </Routes>
  );
};

export default AppRoutes;