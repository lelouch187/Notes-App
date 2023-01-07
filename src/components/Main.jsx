import React, { useContext, useEffect } from 'react'
import { notesContext } from '../context/notes/notesContext'
import { Alert } from './Alert'
import { Form } from './Form'
import { Notes } from './Notes'

export const Main = () => {
   const {fetchPosts} = useContext(notesContext)
   useEffect(()=>{
      fetchPosts()
      // eslint-disable-next-line
   },[])
   return (
      <>
         <Alert />
         <Form />
         <Notes />
      </>
   )
}
