import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ViewInvoice from "./pages/ViewInvoice";

export default function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/viewinvoice/:invoiceid" element={<ViewInvoice />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}