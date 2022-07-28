import Notes from './Notes'
import useFetch from './Useeffect'

export default function Home() {
  
  const {data : note ,pending,err}=useFetch('http://localhost:8000/notes')


  const s = {
    color: 'white',
    margin: '5vh'
  }


  return (
    <div className='home'>
      {err && <div style={s}>{err}</div>}                              
      {pending && <div style={s}> Loading.... </div>}
      {note && <Notes note={note} title="All notes"
      />}


    </div>
  )
}
