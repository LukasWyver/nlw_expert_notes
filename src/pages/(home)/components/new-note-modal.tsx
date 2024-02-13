import { z } from "zod";
import { toast } from "sonner"
import { useForm } from "react-hook-form";
import { useEffect, useState } from 'react';
import { useNotes } from '@/contexts/use-notes';
import { zodResolver } from "@hookform/resolvers/zod";
import { AudioLinesIcon, MicIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const formSchema = z.object({
  note: z.string({ required_error: "Campo obrigatório." }).trim().min(1, "Campo obrigatório.").max(500),
});

export function NewNoteModal() {
  const [ isRecording, setIsRecording ] = useState(false);
  const [ speechRecognition, setSpeechRecognition ] = useState<SpeechRecognition | null>(null);
  const [ shouldShowEditor, setShouldShowEditor ] = useState(false)
  const [ openModal, setOpenModal ] = useState(false)
  const { createNewNote } = useNotes()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      note: ''
    }
  });

  function handleSaveNote(data: z.infer<typeof formSchema>){
    createNewNote(data.note)
    toast.success("Nota criada com sucesso.")
    form.reset()
    setShouldShowEditor(false)
    setOpenModal(false)
  }

  const note = form.watch("note")

  useEffect(() => {
    form.setValue("note", note)
  }, [note,form])

  const isSaveNoteDisabled = shouldShowEditor && !note

  function handleStartEditor(){
    setShouldShowEditor(true)
    setIsRecording(false)
  }

  function handleStartRecording(){
    const isSpeechRecognitionAPIAvailable = 
    "SpeechRecognition" in window || "webkitSpeechRecognition" in window;

    if (!isSpeechRecognitionAPIAvailable) {
      toast.error("Infelizmente seu navegador não suporta a API de gravação!")
      // alert("Infelizmente seu navegador não suporta a API de gravação!");
      return;
    }

    setIsRecording(true);
    setShouldShowEditor(false)    

    const SpeechRecognitionAPI =  window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognitionAPI();

    recognition.lang = "pt-BR";
    recognition.continuous = true;
    recognition.maxAlternatives = 1;
    recognition.interimResults = true;

    recognition.onresult = (event) => {
      const transcription = Array.from(event.results).reduce((text, result) => {
        return text.concat(result[0].transcript);
      }, "");

      form.setValue("note", transcription)
    };

    recognition.onerror = (event) => {
      console.error(event);
    };

    recognition.start();
    setSpeechRecognition(recognition)
  }

  function handleStopRecording() {
    setIsRecording(false);

    if (speechRecognition !== null) {
      speechRecognition.stop();
    }

    setShouldShowEditor(true)
  }  

  return (
    <Dialog open={openModal} onOpenChange={setOpenModal}>
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
                <>
                  <p className={`${note.length > 500 ? "text-destructive" : "text-muted-foreground"} text-right font-semibold text-xs`}>{note.length}/500</p>
                  <FormField
                    name="note"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem className="w-full h-full">
                        <FormControl>
                          <Textarea 
                            placeholder="escreva sua nota aqui..." 
                            className='h-full resize-none'
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </>
              )}
            </div>

            <DialogFooter>
              {isRecording && 
                <Button type="button" className="w-full font-semibold" onClick={handleStopRecording}>
                  <AudioLinesIcon className="mr-2 h-4 w-4 motion-safe:animate-pulse"/>
                  Gravando! <span className="font-normal ml-1">(clique p/ interromper)</span>
                </Button>
              }

              {shouldShowEditor && 
                <Button type="submit" className='w-full font-semibold' disabled={isSaveNoteDisabled}>Salvar</Button>
              }
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}