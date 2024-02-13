import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";

export function Footer() {
  return (
    <footer className="mt-[4.5rem]">
      <Card className="rounded-b-none">
          <CardContent className="p-5 flex flex-wrap gap-1.5 items-center justify-center">
            <p className="text-xs text-center text-muted-foreground opacity-75">
              &copy; 2024 &bull; Copyright <strong>Fala.ai</strong> &bull;
            </p>
            <p className="text-xs text-center text-muted-foreground opacity-75">
              Desenvolvido com 💙 por <Link to="https://github.com/LukasWyver" target="_blank" className="hover:font-bold hover:opacity-100 transition-all">Lukas Wyver</Link>
            </p>            	
          </CardContent>
      </Card>
    </footer>
  );
}