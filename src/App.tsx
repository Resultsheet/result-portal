import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./pages/home/HomePage"
import NoPageFound from "./pages/noPageFound/NoPageFound"
import SignInPage from "./pages/signin/SignInPage"
import SignupPage from "./pages/signup/SignupPage"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" >
          <Route path="signin" element={<SignInPage />} />
          <Route path="signup" element={<SignupPage />} />
        </Route>
        <Route path="*" element={<NoPageFound />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
