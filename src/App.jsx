import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NewInvoicePage from "./pages/NewInvoicePage";

export default function App() {

  return (
    <BrowserRouter>
      <div className="bg-slate-50">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/NewInvoice" element={<NewInvoicePage />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}