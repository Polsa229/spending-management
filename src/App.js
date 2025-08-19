import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './index.css'
import Index from "./Pages/Index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Index />} />
        <Route path="/" element={<Index />} />
      </Routes>
    </BrowserRouter >
  )
}

export default App;
