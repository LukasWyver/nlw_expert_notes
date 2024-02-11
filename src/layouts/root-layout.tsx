import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Outlet } from "react-router-dom";

export function RootLayout(){
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer/>
    </div>
  )
}