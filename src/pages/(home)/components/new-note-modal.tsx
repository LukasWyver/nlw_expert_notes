import { useEffect, useState } from 'react';
import { MicIcon } from 'lucide-react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner"
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

import { z } from "zod";

const formSchema = z.object({
  note: z.string({ required_error: "Campo obrigatório." }).trim().min(1, "Campo obrigatório."),
});

export function NewNoteModal() {
  const [shouldShowEditor, setShouldShowEditor] = useState(false)

  function handleStartEditor(){
    setShouldShowEditor(true)
  }

  function handleStartRecording(){
    setShouldShowEditor(false)
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      note: ''
    }
  });

  function handleSaveNote(_data: z.infer<typeof formSchema>){
    // alert(JSON.stringify(data,null,2))
    toast.success("Nota criada com sucesso.")
    // setNote(data.note)
  }

  const note = form.watch("note")

  useEffect(() => {
    form.setValue("note", note)
  }, [note,form])

  const isSaveNoteDisabled = shouldShowEditor && !note

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
            Comece 
            <Button variant="link" className='text-primary font-bold px-1 py-0' onClick={handleStartRecording}>
              gravando uma nota
            </Button>
            em áudio ou se preferir 
            <Button variant="link" className='text-primary font-bold px-1 py-0' onClick={handleStartEditor}>
              utilize apenas texto
            </Button>
            .
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSaveNote)}>
            <div className="flex flex-col flex-1 gap-4 py-4 h-96 sm:h-[406px]">
              {shouldShowEditor && (
                <FormField
                  name="note"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="w-full h-full">
                      <FormControl>
                        <Textarea 
                          placeholder="escreva sua nota aqui..." 
                          className='h-full resize-none'
                          // onChange={handleContentChanged}
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              )}
            </div>

            <DialogFooter>
              <Button type="submit" className='w-full font-semibold' disabled={isSaveNoteDisabled}>
                Salvar
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}