import React, { useContext } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { notesContext } from '../context/notes/notesContext'
import { Loader } from './Loader'
import { Note } from './Note'

export const Notes = () => {
   const {notes, isFetchLoading} = useContext(notesContext)

   if(isFetchLoading) {
      return <Loader />
   }

   return (
      <div className='container mx-auto'>
         <div className="px-4 py-5  rounded-t sm:px-6">
            <div className="overflow-hidden bg-white shadow sm:rounded-md">
               
                  {notes.length
                  ?<TransitionGroup component='ul'
                  className="divide-y divide-gray-200">
                  {notes.map(note=><CSSTransition
                     timeout={650}
                     classNames={'notes'}
                     key={note.id}
                     >
                  <Note note={note} />
                  </CSSTransition>)}
                  </TransitionGroup>
                  :
                  <h2>Заметок нет</h2>
                  }
   
            </div>
         </div>
      </div>
   )
}
