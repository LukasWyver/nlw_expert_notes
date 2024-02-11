import { ptBR } from "date-fns/locale/pt-BR";
import { formatDistanceToNow } from "date-fns";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface NoteCardProps {
  note: {
    date: Date,
    content: string
  }
}

export function NoteCard({ note }: NoteCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className='text-left p-0 rounded-xl focus-visible:ring-2 focus-visible:ring-ring hover:ring-2 hover:ring-secondary'>
          <Card className='h-full overflow-hidden relative'>
            <CardHeader>
              <CardTitle>
                {formatDistanceToNow(note.date, {addSuffix: true, locale: ptBR,})}
              </CardTitle>
            </CardHeader>
            <CardContent className='space-y-3 font-mono text-sm'>
              {note.content}

              <div className="absolute bottom-0 inset-x-0 h-full bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
            </CardContent>
          </Card>
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[640px] h-[600px]">
        <DialogHeader className='space-y-3'>
          <DialogTitle>{formatDistanceToNow(note.date, {addSuffix: true, locale: ptBR,})}</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col flex-1 gap-4 py-4 h-[430px] font-mono text-sm">
          {note.content}
        </div>

        <DialogFooter>
          <Button variant="destructive" className='w-full font-semibold'>Deseja apagar essa nota?</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}