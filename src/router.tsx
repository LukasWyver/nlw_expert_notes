import { Route, Routes } from 'react-router-dom'
import { RootLayout } from '@/layouts/root-layout'

import { HomePage } from '@/pages/(home)'
import { NotesPage } from '@/pages/notes'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<RootLayout/>}>      
        <Route path="/" element={<HomePage />} />
        <Route path="/notes" element={<NotesPage />} />
      </Route>
    </Routes>
  )
}