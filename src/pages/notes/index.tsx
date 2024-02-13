import { Note } from "@/data/types/note";
import { Params } from "react-router-dom";
import { useQueryParams } from "@/hooks/use-query-params";

import { useNotes } from "@/contexts/use-notes";
import { NoteCard } from "@/components/note-card";
import { SearchInput } from "@/components/search-input"

export function NotesPage() {
  const { search } = useQueryParams<Params>();
  const { notes } = useNotes()

  function filterNotes(notes: Note[], search: string | undefined) {
    if (!search) {
        return notes;
    }
    
    const searchTerm = search.toLocaleLowerCase();
    return notes.filter((note: Note) => note.content.toLocaleLowerCase().includes(searchTerm));
  }

  const filteredNotes = filterNotes(notes, search);

  const noNotesMessage = notes.length === 0 
    ? <p className="text-muted-foreground text-center">Você ainda <b>não possui</b> nenhuma nota cadastrada.</p>
    : <p className="text-muted-foreground text-center">Não encontramos <b>nenhuma nota</b> para este resultado!</p>

  return (
    <main className="mx-auto max-w-6xl my-12">
      <div className="px-5 mt-6">
        <SearchInput/>
      </div>

      <div className="px-5 pt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">  
        {filteredNotes.length > 0 ? filteredNotes.map((note) => {
          return <NoteCard key={note.id} note={note}/>
        }): (
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex items-center justify-center">
            {noNotesMessage}
          </div>
        )}
      </div>
    </main>
  )
}