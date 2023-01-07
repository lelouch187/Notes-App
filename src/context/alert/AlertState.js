import { useState } from 'react'
import {alertContext} from './alertContext'

export const AlertState = ({children}) => {
   const [alert, setAlert] = useState({text:'', color:'red', visible:false})

   const showAlert = ({...args}) => {
      setAlert({...alert,...args })
   }
   const hideAlert = () => {
      setAlert({...alert, visible: false})
   }

   return (
      <alertContext.Provider value={{alert, showAlert, hideAlert}}>
         {children}
      </alertContext.Provider>
   )
}