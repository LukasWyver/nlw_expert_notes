import { Route, Routes } from 'react-router-dom'
import { RootLayout } from '@/layouts/root-layout'

import { Home } from '@/pages/(home)'
import { Notes } from '@/pages/notes'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<RootLayout/>}>      
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
      </Route>
    </Routes>
  )
}