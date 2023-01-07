import React, { useContext, useState } from 'react'
import { alertContext } from '../context/alert/alertContext'
import { notesContext } from '../context/notes/notesContext'


export const Form = () => {
  const [value, setValue] = useState('')
  const {showAlert} = useContext(alertContext)
  const {addPosts} = useContext(notesContext)

  const submitHandler = (e) => {
    e.preventDefault()
    if (value.trim()) {
      showAlert({text:'Заметка добавлена!', color:'green', visible:true})
      addPosts(value.trim())
      setValue('')
    } else {
      showAlert({text:'Введите заметку', color:'red', visible:true})
    }
  }
  return (
   <form onSubmit={submitHandler}
   className="flex justify-center p-8">
   <div className=" relative">
       <input value={value}
       onChange={e=>setValue(e.target.value)} type="text"  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="Введите заметку"/>
       </div>
   </form>
  )
}
