import { NavLink } from 'react-router-dom';
import { HomeIcon, NotepadTextIcon } from "lucide-react";

import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { SheetHeader, SheetTitle } from "./ui/sheet";

export function SideMenu() {
  return (
    <>
      <SheetHeader className="text-left px-5 py-8">
        <SheetTitle>Menu</SheetTitle>
      </SheetHeader>
      <Separator />

      <div className="flex flex-col gap-3 px-5 mt-6">
        <Button variant="outline" className="gap-2 justify-start" asChild>
          <NavLink to="/">
            <HomeIcon size={16}/>
            Início
          </NavLink>
        </Button>

        <Button variant="outline" className="gap-2 justify-start" asChild>
          <NavLink to="/notes">
            <NotepadTextIcon size={16}/>
            Notas
          </NavLink>
        </Button>
      </div>
    </>
  );
}