import {notesContext} from './notesContext'
import { useState } from 'react'
import { useFetching } from '../../hooks/useFetching'
import { NoteServices } from '../../noteServices'

export const NotesState = ({children}) => {
   const [notes, setNotes] = useState([])
   const [fetchPosts, isFetchLoading, fetchError] = useFetching(async ()=> {
     const res = await NoteServices.getAllNote()
     if(res.data) {
      const payload = Object.keys(res.data).map(key => {
         return {
           ...res.data[key],
           id: key
         }})
     setNotes([...notes,...payload])
     }
   })
   const [addPosts, isAddLoading, addError] = useFetching(async (title)=> {
      const note = {title, date:new Date().toJSON()}
      const res = await NoteServices.postNote(note)
      const newNote = {...note, id:res.data.name}
      setNotes([...notes, newNote])
    })
    const [deletePosts, deleteLoading, deleteError] = useFetching((id)=> {
      NoteServices.deleteNote(id)
    }) 

   return (
      <notesContext.Provider value={{fetchPosts, isFetchLoading, fetchError, addPosts, addError, deletePosts, deleteError, notes, setNotes}}>
         {children}
      </notesContext.Provider>
   )
}