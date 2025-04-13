import { BrowserRouter, Routes, Route } from "react-router-dom";
import PhoneList from "./pages/PhoneList";
import PhoneDetails from "./pages/PhoneDetails";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";
import NotFound from "./pages/NotFound";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {
            window.location.reload();
          }}
        >
          <MainLayout>
            <Routes>
              <Route path="/" element={<PhoneList />} />
              <Route path="/product/:id" element={<PhoneDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </MainLayout>
        </ErrorBoundary>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
