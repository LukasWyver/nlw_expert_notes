import { Outlet } from "react-router-dom";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Toaster } from "@/components/ui/sonner"



export function RootLayout(){
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Toaster/>
      <Footer/>
    </div>
  )
}