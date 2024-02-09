import { Router } from "./router";
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@/components/theme-provider'

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Router/>
      </ThemeProvider>
    </BrowserRouter>
  )
}
