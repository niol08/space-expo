import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Technology from "./pages/Technology"
import Home from "./pages/Home"
import Destination from "./pages/Destination"
import Crew from "./pages/Crew"
import Error from "./pages/Error"
import SharedLayout from "./pages/SharedLayout"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='destination' element={<Destination />} />
          <Route path='crew' element={<Crew />} />
          <Route path='technology' element={<Technology />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
