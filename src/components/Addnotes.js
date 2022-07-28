
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

export default function Addnotes(props) {
  const [description, setcont] = useState('');
  const [title, settitle] = useState('');
  const [pending, setpending] = useState(false);
  const history = useHistory();

  const onch = (e) => {
    setcont(e.target.value)
  }
  const oncht = (e) => {
    settitle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();          
    const note = { title,description };

    setpending(true);
    fetch('http://localhost:8000/notes', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(note)
    }).then(() => {
      // console.log('added');
      setpending(false);
      history.push('/');  
    })
  }
  return (


    <body>
      <div className='textt'>
        <h1 className='h1'>ADD NOTES </h1>
        <form onSubmit={handleSubmit}>
          
          <input className='titlee' type="text" placeholder='Add Title' value={title} onChange={oncht} />
          
          <textarea name="content" className='desc' placeholder='Add description' value={description} onChange={onch}></textarea>
           {!pending && <button className='add'>Add</button>}
           {pending && <button className='add'>Adding....</button>}

          
        </form>
      </div>
    </body>
  )
}
