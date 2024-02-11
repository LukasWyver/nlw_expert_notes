import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

interface NoteCardProps {
  note: {
    date: Date
  }
}

export function NoteCard({ note }: NoteCardProps) {
  return (
    <Card className='overflow-hidden relative hover:ring-2 hover:ring-secondary focus-visible:ring-2 focus-visible:ring-ring'>
      <button className="text-left">
        <CardHeader className=''>
          <CardTitle>
            {formatDistanceToNow(note.date, {addSuffix: true, locale: ptBR,})}
          </CardTitle>
        </CardHeader>
        <CardContent className='space-y-3'>
          <p>No app do NLW vamos criar um layout incrível, assim podemos entregar a melhor experiência para a comunidade.</p>
          <p>Na aplicação React vamos criar um projeto que permite o usuário salvar notas em texto ou áudio</p>
          <p>Na aplicação React vamos criar um projeto que permite o usuário salvar notas em texto ou áudio</p>
          <p>Na aplicação React vamos criar um projeto que permite o usuário salvar notas em texto ou áudio</p>

          <div className="absolute bottom-0 inset-x-0 h-full bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
        </CardContent>
      </button>
    </Card>
  );
}