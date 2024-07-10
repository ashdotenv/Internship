import { useEffect, useState } from 'react'
import axios from "axios"

function App() {

  const [todos, setTodo] = useState([])
  const [flag, setFlag] = useState(0)
  const deleteTodo = (id) => {
    let ask = confirm("Do You Want To Delete ? ")
    if (ask) {
      axios.delete("http://localhost:5000/api/delete/" + id)
    }
  }




  useEffect(() => {
    const getTodos = async () => {
      await axios.get("http://localhost:5000/api/todos").then(data => {
        setTodo(data.data);
        // console.log(data.data, "Server data");
      }).catch((err) => {
        console.log(err, "Server Error");
      })
    }
    getTodos()
  }, [])
  return (
    <>
      <h1 className='text-center text-4xl underline' >TO-DO</h1>
      <h1 className='text-center text-xl underline ' ><button className='border-black border p-2 rounded bg-green-500 mt-5 bg-green'>Add</button> </h1>

      <div className='grid grid-cols-4 p-20 gap-5'>

        {
          todos.map((t, k) => (
            (
              <div key={k} className='border border-black p-2' >
                <h1 className='font-bold text-2xl'>
                  {t.title}
                </h1>
                <article className='p-2 mt-5 border border-black'>

                  {t.content}{t.content}
                </article>
                <div className='flex justify-end'>
                  <button onClick={() => deleteTodo(t.id)} className='border border-black p-2 m-1 text-white   rounded bg-red-500' >Delete</button>
                  <button onClick={() => editTodo(t.id)} className='border border-black p-2 m-1 text-white  rounded bg-blue-500' >Edit</button>

                </div>
              </div>

            )
          ))
        }


      </div>

    </>
  )
}

export default App
