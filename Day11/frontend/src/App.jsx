import { useEffect, useState } from 'react'
import axios from "axios"

function App() {
  const [todos, setTodos] = useState([]);
  const [flag, setFlag] = useState(0);
  const [show, setShowHide] = useState(false);
  const [showEdit, setShowEdit] = useState(false)
  const [addTodo, setAddTodo] = useState({ title: "", content: "" })
  const [editTodo, setEditTodo] = useState({ title: "", content: "" })
  const [editId, setEditId] = useState(null);

  const deleteTodo = (id) => {
    let ask = confirm("Do You Want To Delete?");
    if (ask) {
      axios.delete("http://localhost:5000/api/delete/" + id)
        .then(() => setFlag(flag + 1))
        .catch((err) => console.log(err, "Server Error"));
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:5000/api/addTodo", addTodo)
      .then(() => {
        setFlag(flag + 1)
        setShowHide(false);
      })
      .catch((err) => console.log(err, "Server Error"));
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    axios.patch("http://localhost:5000/api/update/" + editId, editTodo)
      .then(() => {
        setFlag(flag + 1)
        setShowEdit(false);
      })
      .catch((err) => console.log(err, "Server Error"));
  }

  const getTodos = async () => {
    await axios.get("http://localhost:5000/api/todos").then(data => {
      setTodos(data.data);
    }).catch((err) => {
      console.log(err, "Server Error");
    })
  }

  const handleEdit = (id) => {
    axios.get("http://localhost:5000/api/todo/" + id).then(({ data }) => {
      setEditTodo(data[0]);
      setEditId(id);
      setShowEdit(true);
    })
  }

  useEffect(() => {
    getTodos();
  }, [flag]);

  return (
    <>
      <h1 className='text-center text-4xl underline'>TO-DO</h1>
      <h1 className='text-center text-xl underline'>
        <button onClick={() => setShowHide(!show)} className='border-black border p-2 rounded bg-green-500 mt-5'>Add</button>
      </h1>

      {show && <div className='h-screen w-full absolute flex items-center justify-center'>
        <div className='border bg-green-200 border-black p-4'>
          <h1 className='text-4xl font-bold'>Add Todo</h1>
          <h1 className='text-2xl'>Title</h1>
          <input onChange={(e) => setAddTodo({ ...addTodo, title: e.target.value })} placeholder='Enter Title' type="text" className='border-black p-2 border-2' name='title' />
          <h1 className='text-2xl'>Content</h1>
          <textarea onChange={(e) => setAddTodo({ ...addTodo, content: e.target.value })} name="content" rows={5} cols={50} className='border border-black rounded'></textarea>
          <br />
          <button onClick={handleSubmit} className='bg-green-500 p-2 rounded'>Add Todo</button>
          <button onClick={() => setShowHide(!show)} className='bg-red-500 p-2 rounded ml-2'>Cancel</button>
        </div>
      </div>
      }

      {showEdit && <div className='h-screen w-full absolute flex items-center justify-center'>
        <div className='border bg-green-200 border-black p-4'>
          <h1 className='text-4xl font-bold'>Edit Todo</h1>
          <h1 className='text-2xl'>Title</h1>
          <input value={editTodo.title} onChange={(e) => setEditTodo({ ...editTodo, title: e.target.value })} placeholder='Enter Title' type="text" className='border-black p-2 border-2' name='title' />
          <h1 className='text-2xl'>Content</h1>
          <textarea value={editTodo.content} onChange={(e) => setEditTodo({ ...editTodo, content: e.target.value })} name="content" rows={5} cols={50} className='border border-black rounded'></textarea>
          <br />
          <button onClick={handleUpdate} className='bg-green-500 p-2 rounded'>Edit Todo</button>
          <button onClick={() => setShowEdit(!showEdit)} className='bg-red-500 p-2 rounded ml-2'>Cancel</button>
        </div>
      </div>
      }

      <div className='grid grid-cols-4 p-20 gap-5'>
        {todos.map((t, k) => (
          <div key={k} className='border border-black p-2'>
            <h1 className='font-bold text-2xl'>{t.title}</h1>
            <article className='p-2 mt-5 border border-black'>{t.content}</article>
            <div className='flex justify-end'>
              <button onClick={() => deleteTodo(t.id)} className='border border-black p-2 m-1 text-white rounded bg-red-500'>Delete</button>
              <button onClick={() => handleEdit(t.id)} className='border border-black p-2 m-1 text-white rounded bg-blue-500'>Edit</button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default App;
