import { createContext, useContext, useState, ReactNode } from "react";
import { Note } from "../data/types/note";

interface NoteContextType {
  notes: Note[]
  createNewNote: (content: string) => void
  deleteNote: (id: string) => void
}

const NotesContext = createContext({} as NoteContextType)

interface NotesContextProviderProps {
  children: ReactNode
}

export function NotesContextProvider ({ children }: NotesContextProviderProps){
  const [notes, setNotes] = useState<Note[]>(() => {
    const notesOnStorage = localStorage.getItem('notes')

    if(notesOnStorage) {
      return JSON.parse(notesOnStorage)
    }

    return []
  })

  function createNewNote(content: string) {
    const id = String(new Date().getTime())
    const date = new Date()

    const newNote: Note = {
      id,
      date,
      content,
    }
    const notesArray = [newNote, ...notes]
    localStorage.setItem('notes', JSON.stringify(notesArray))
    setNotes(notesArray)
  }

  function deleteNote(id: string) {
    const notesArray = notes.filter((note) => {
      return note.id !== id;
    });

    localStorage.setItem("notes", JSON.stringify(notesArray));
    setNotes(notesArray);
  }

  return (
    <NotesContext.Provider value={{ notes, createNewNote, deleteNote }}>
      {children}
    </NotesContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useNotes = () => useContext(NotesContext)