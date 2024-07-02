import { BrowserRouter, Route, Routes } from "react-router-dom";
import InvoiceList from "./components/InvoiceList";
import Home from "./pages/Home";



export default function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}
