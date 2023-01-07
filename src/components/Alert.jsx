import React, { useContext } from 'react'
import { alertContext } from '../context/alert/alertContext'
import { notesContext } from '../context/notes/notesContext'
import {CSSTransition} from 'react-transition-group'

export const Alert = () => {
  const {alert, hideAlert} = useContext(alertContext)
  const {addError,fetchError,deleteError} = useContext(notesContext)


 if(addError ||fetchError||deleteError) {
    return (
      <div className={'redColor'} >
      <div>
      <p className="font-bold">
          Внимание!
      </p>
      <p>
          Что-то пошло не так
      </p>
      </div>
      <span onClick={hideAlert}
      className=' px-1 py-1 h-[20px] text-2xl w-[20px] inline-block cursor-pointer'>&times;</span>
   </div>
     )
  }
else {
  return (
    <CSSTransition
    in={alert.visible}
    timeout={650}
    classNames={'alert'}
    mountOnEnter
    unmountOnExit
    >
    <div className={alert.color==='green'?'greenColor':'redColor'} >
    <div>
    <p className="font-bold">
        Внимание!
    </p>
    <p>
        {alert.text}
    </p>
    </div>
    <span onClick={hideAlert}
    className=' px-1 py-1 h-[20px] text-2xl w-[20px] inline-block cursor-pointer'>&times;</span>
 </div>
 </CSSTransition>
   )
}
  
}
