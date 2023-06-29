import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PlayProvider } from "./contexts/Play";
import Home from "./pages/views/features/Home"
import SharedLayout from "./components/SharedLayout"
import ExperiencePage from './pages/views/features/ExperiencePage'
import Charts from "./pages/views/features/Charts";
import About from "./pages/views/features/About";
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/experience" element={<PlayProvider><ExperiencePage /></PlayProvider>} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/about" element={<About />} />
          </Route> 
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
