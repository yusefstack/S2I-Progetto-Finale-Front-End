import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/views/features/Home"
import SharedLayout from "./components/SharedLayout"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
        </Route> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
