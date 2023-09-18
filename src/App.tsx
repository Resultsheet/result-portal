import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CssBaseline, ThemeProvider } from "@mui/material"
import ReduxProvider from "./Redux/Provider"

import Home from "./pages/home/HomePage"
import NoPageFound from "./pages/noPageFound/NoPageFound"
import SignInPage from "./pages/signin/SignInPage"
import SignupPage from "./pages/signup/SignupPage"
import theme from "./theme"

function App() {

  return (
    <BrowserRouter>
      <CssBaseline />
      <ReduxProvider>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" >
              <Route path="signin" element={<SignInPage />} />
              <Route path="signup" element={<SignupPage />} />
            </Route>
            <Route path="*" element={<NoPageFound />} />
          </Routes>
        </ThemeProvider>
      </ReduxProvider>
    </BrowserRouter>
  )
}

export default App
