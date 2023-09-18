import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CssBaseline, ThemeProvider } from "@mui/material"

import ReduxProvider from "@/Redux/Provider"
import theme from "@/theme"
import Layout from "@/Layout"

// import Home from "./pages/home/HomePage"
import NoPageFound from "./pages/noPageFound/NoPageFound"
import SignInPage from "./pages/signin/SignInPage"
import SignupPage from "./pages/signup/SignupPage"
import Class from "./pages/student/Class"
import Classes from "./pages/student/Classes"
import Results from "./pages/student/Results"
import Exams from "./pages/student/Exams"

function App() {

  return (
    <BrowserRouter>
      <CssBaseline />
      <ReduxProvider>
        <ThemeProvider theme={theme}>
          <Routes>

            <Route path="" element={<Layout />}>
              <Route path="/" element={<Classes />} />
              <Route path="/class" element={<Classes />} />
              <Route path="/class/:id" element={<Class />} />
              <Route path="/exam/" element={<Exams />} />
              <Route path="/exam/result/:id" element={<Results />} />
            </Route>

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
