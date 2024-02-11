import { Card, CardContent } from "./ui/card";

export function Footer() {
  return (
    <footer className="mt-[4.5rem]">
      <Card className="rounded-b-none">
          <CardContent className="p-5 flex items-center justify-center">
            <p className="text-xs text-muted-foreground opacity-75">&copy; 2024 • Copyright NLW Expert <strong>Notes</strong></p>  	
          </CardContent>
      </Card>
    </footer>
  );
}