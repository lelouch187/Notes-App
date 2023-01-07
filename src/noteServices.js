import axios from 'axios'

export class NoteServices {
   static async getAllNote () {
      const res = await axios.get(`${process.env.REACT_APP_DB_URL}/notes.json`)
      return res
   }
   static async postNote (note) {
      const res = await axios.post(`${process.env.REACT_APP_DB_URL}/notes.json`, note)
      return res
   }
   static async deleteNote (id) {
   await axios.delete(`${process.env.REACT_APP_DB_URL}/notes/${id}.json`)
   }
}