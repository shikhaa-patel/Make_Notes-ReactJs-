import { Link } from "react-router-dom";

const Notfound = () => {
    return ( 
         <div className="notfound">
            <h2> Sorry </h2>
            <p> Page cannot be found</p>
            <Link to='/'>Back to home page....</Link>
         </div>
     );
}
 
export default Notfound ;