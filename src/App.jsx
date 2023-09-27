import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NotFound from "./pages/NotFound"
import Home from "./pages/Home"

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/" 
            element={<Home />}
          />
          {/* <Route 
            path="/resume" 
            element={addNavbarFooter(Resume)} 
          /> */}
          {/* <Route 
            path="/portfolio" 
            element={addNavbarFooter(Portfolio)} 
          /> */}
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}