import { MicIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

export function NewNoteModal() {
 return (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="default" className='w-full gap-2'>
        <MicIcon size={18}/>
        Gravar
      </Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[640px] h-[600px]">
      <DialogHeader className='space-y-3'>
        <DialogTitle>Adicionar nota</DialogTitle>
        <DialogDescription>
          Comece <b className='text-primary'>gravando uma nota</b> em áudio ou se preferir <b className='text-primary'>utilize apenas texto</b>.
        </DialogDescription>
      </DialogHeader>
        <div className="flex flex-col flex-1 gap-4 py-4 h-[430px]">
          <Textarea placeholder="escreva sua nota aqui..." className='h-full resize-none'/>
        </div>
      <DialogFooter>
        <Button type="submit" className='w-full font-semibold'>Salvar nota</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
  )
}