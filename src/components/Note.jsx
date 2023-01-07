import React, { useContext } from 'react'
import { notesContext } from '../context/notes/notesContext'

export const Note = ({note}) => {
   const {deletePosts, setNotes, notes} = useContext(notesContext)

   const onDelete = () => {
      setNotes(notes.filter(item=>item.id!==note.id))
      deletePosts(note.id)
   }

  return (
   <li>
   <div className="block hover:bg-gray-50 dark:hover:bg-gray-900">
      <div className="px-4 py-4 sm:px-6">
         <div className="flex items-center justify-between">
            <p className="text-gray-700 text-md">
               {note.title}
            </p>
            <div className="flex flex-shrink-0 ml-2">
               <button onClick={onDelete}
               type="button" className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-red-600 focus:outline-none focus:ring-0 transition duration-150 ease-in-out hover:text-white ">удалить</button>
            </div>
         </div>
         <div className="mt-2 sm:flex sm:justify-between">
            <div className="sm:flex">
               <p className="flex items-center font-light text-gray-500 text-md dark:text-gray-300">
                  {note.data}
               </p>
            </div>
         </div>
      </div>
   </div>
</li>
  )
}
