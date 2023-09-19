import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CssBaseline, ThemeProvider } from "@mui/material"

import ReduxProvider from "@/Redux/Provider"
import theme from "@/theme"
import Layout from "@/Layout"

import "@/scss/ui.scss"

import NoPageFound from "./pages/NoPageFound"
import SignInPage from "./pages/SignInPage"
import SignupPage from "./pages/SignupPage"
import ClassPage from "./pages/ClassPage"
import ClassesPage from "./pages/ClassesPage"
import ResultsPage from "./pages/ResultsPage"
import ExamsPage from "./pages/ExamsPage"

function App() {

  return (
    <BrowserRouter>
      <CssBaseline />
      <ReduxProvider>
        <ThemeProvider theme={theme}>
          <Routes>

            <Route path="" element={<Layout />}>
              <Route path="/" element={<ClassesPage />} />
              <Route path="/class" element={<ClassesPage />} />
              <Route path="/class/:id" element={<ClassPage />} />
              <Route path="/exam/" element={<ExamsPage />} />
              <Route path="/exam/result/:id" element={<ResultsPage />} />
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
