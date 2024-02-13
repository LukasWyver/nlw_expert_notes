import { Router } from "./router";
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@/components/theme-provider'
import { NotesContextProvider } from "./contexts/use-notes";

export function App() {
  return (
    <BrowserRouter>
      <NotesContextProvider>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Router/>
        </ThemeProvider>
      </NotesContextProvider>
    </BrowserRouter>
  )
}
