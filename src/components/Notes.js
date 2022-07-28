import React from 'react'
import { Link } from 'react-router-dom'

export default function Notes(props) {
    const note = props.note
  return (
    <div className='ntextt'>

        <h1 className='nh1'>{props.title}</h1>
        <hr />
        {note.map((c)=>(
        <div className='contentss' key={c.id}>
          <div className='total'>
          <Link to={`/note/${c.id}`}>
          <h1 className='ntitlee'>{c.title}</h1>
          <p className='ndesc'>{c.description}</p>
          </Link> 
          </div>
        </div>
      ))}
    </div>
  )
}
