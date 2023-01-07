import { useState } from "react"

export const useFetching = (callback) => {
   const [isLoading,setIsLoading] = useState(false)
   const [error, setError] = useState('')
   async function fetching (title) {
      try {
         setIsLoading(true)
         await callback(title)
      }
      catch (e) {
         setError(e.message)
      }
      finally {
         setIsLoading(false)
      }
   }
   return [fetching, isLoading, error]
}