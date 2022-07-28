import { useParams } from "react-router-dom";
import useFetch from "./Useeffect";
import { useHistory } from 'react-router-dom';

const Notesdetails = () => { 
    const {id} =useParams();
    const {data ,pending,err}=useFetch('http://localhost:8000/notes/' +  id);
    const history = useHistory();

    const del =()=>{
        fetch('http://localhost:8000/notes/'+ data.id,{
            method:'DELETE'
        }).then(()=>{
            history.push('/');
        })
    }
    return ( 
          
          <div className="details">
            {pending && <div > Loading.... </div>}
            {err && <div>{err} </div>}
            {data && (                
                <div>                   
                    <h1 className="dtitle">{data.title}</h1>
                    <p className="ddes">{data.description}</p>
                    <button className="ddel" onClick={del}>Delete</button>
                </div>
                

            )} 
          </div>  
    );
}
 
export default Notesdetails;