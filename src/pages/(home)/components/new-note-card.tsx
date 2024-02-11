import { NewNoteModal } from './new-note-modal';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export function NewNoteCard() {
 return (
  <Card>
    <CardHeader>
      <CardTitle>Adicionar nota</CardTitle>
    </CardHeader>
    <CardContent className='h-28 mb-3'>
      <p>Grave uma nota em áudio que será convertida para texto automaticamente.</p>
    </CardContent>
    <CardFooter>
      <NewNoteModal />
    </CardFooter>
  </Card>
  )
}