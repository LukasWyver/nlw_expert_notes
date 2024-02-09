import { MenuIcon } from 'lucide-react'
import { Card, CardContent } from "./ui/card";
import logo from '@/assets/logo-nlw-expert.svg'
import { Button } from './ui/button';
import { NavLink } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import SideMenu from './side-menu';


export default function Header() {
  return (
    <header>
      <Card className="rounded-t-none">
        <CardContent className="p-5 flex items-center justify-between">
          <NavLink to="/">
            <img src={logo} alt="NLW Expert" height={24} width={120} className='brightness-200 grayscale'/>
          </NavLink >

           <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <MenuIcon size={20}/>
              </Button>
            </SheetTrigger>

            <SheetContent className="p-0">
              <SideMenu />          
            </SheetContent>
          </Sheet> 
        </CardContent>
      </Card>
    </header>
  );
}