import { setDate } from 'date-fns'

import { NoteCard } from './components/note-card';
import { Greetings } from './components/greetings';
import { SearchInput } from "@/components/search-input";
import { NewNoteCard } from './components/new-note-card';


export function Home() {
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

        {[1,2,3,4].map((_item, id) => (          
          <NoteCard   
            key={id}           
            note={{ 
              date: setDate(new Date(), id),
              content: 'No app do NLW vamos criar um layout incrível, assim podemos entregar a melhor experiência para a comunidade. Na aplicação React vamos criar um projeto que permite o usuário salvar notas em texto ou áudio.'
            }}
          />          
        ))}  
      </div>
    </main>
  )
}