import { MenuIcon } from 'lucide-react'
import { NavLink } from 'react-router-dom';
import logo from '@/assets/logo-fala-ai.svg'

import { Button } from './ui/button';
import { SideMenu } from './side-menu';
import { ModeToggle } from './mode-toggle';
import { Card, CardContent } from "./ui/card";
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';


export function Header() {
  return (
    <header>
      <Card className="rounded-t-none ">
        <CardContent className="p-5 flex items-center justify-between mx-auto max-w-6xl">
          <NavLink to="/">
            <img src={logo} alt="fala ai" height={24} width={120} className='dark:brightness-200 dark:grayscale grayscale-0 brightness-0'/>
          </NavLink >

          <div className="flex gap-2">
            <ModeToggle/>

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
          </div>
        </CardContent>
      </Card>
    </header>
  );
}