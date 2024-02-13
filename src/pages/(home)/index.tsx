import { NoteCard } from '@/components/note-card';
import { SearchInput } from "@/components/search-input";

import { Greetings } from './components/greetings';
import { NewNoteCard } from './components/new-note-card';

import { useNotes } from '@/contexts/use-notes';

export function HomePage() {
 const { notes } = useNotes()

  return (
    <main className="mx-auto max-w-6xl my-12">
      <div className="px-5 pt-5">
        <Greetings />
      </div>

      <div className="px-5 mt-6">
        <SearchInput/>
      </div>

      <div className="px-5 pt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">  
        <NewNoteCard />

        {notes && notes.map((note) => {
          return <NoteCard key={note.id} note={note}/>
        })}  
      </div>
    </main>
  )
}