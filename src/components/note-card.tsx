import { toast } from "sonner";
import { useState } from "react";
import { Note } from "@/data/types/note";
import { Loader2Icon } from "lucide-react";
import { ptBR } from "date-fns/locale/pt-BR";
import { formatDistanceToNow } from "date-fns";
import { useNotes } from "@/contexts/use-notes";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface NoteCardProps {
  note: Note
}

export function NoteCard({ note }: NoteCardProps) {
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);
  const { deleteNote } = useNotes()

  const handleDeleteNote = async () => {
    setIsDeleteLoading(true);

    try {
      await deleteNote(note.id);

      toast.success("Nota apagada com sucesso!");
    } catch (error) {
      console.error(error);
    } finally {
      setIsDeleteLoading(false);
    }
  };

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
            <CardContent className='space-y-3'>
              {note.content.split('\n\n').map((paragraph, index) => <p key={index} className="font-mono text-sm break-words">{paragraph}</p>)}

              <div className="absolute bottom-0 inset-x-0 h-full bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
            </CardContent>
          </Card>
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[640px] h-[600px]">
        <DialogHeader className='space-y-3'>
          <DialogTitle>{formatDistanceToNow(note.date, {addSuffix: true, locale: ptBR,})}</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col flex-1 gap-4 py-4 h-[430px] overflow-x-hidden">
          {note.content.split('\n\n').map((paragraph, index) => <p key={index} className="font-mono text-sm break-words">{paragraph}</p>)}
        </div>

        <DialogFooter>
          <Button 
            variant="destructive" 
            disabled={isDeleteLoading} 
            onClick={handleDeleteNote}
            className='w-full font-semibold' 
          >
            {isDeleteLoading ? (
              <>
                <Loader2Icon className="mr-2 h-4 w-4 animate-spin"/>
                apagando nota...
              </>
            ) :'Deseja apagar essa nota?'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}