import { Route, Routes } from "react-router-dom"
import About from "./Routes/About"
import Home from "./Routes/Home"

function App() {

  return (
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>
  )
  
}

export default App
