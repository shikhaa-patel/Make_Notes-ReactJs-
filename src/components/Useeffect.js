import { useState, useEffect } from 'react'

const useFetch = (url) =>{

    const [data, setdata] = useState(null)
      const [pending, setpending] = useState(true);
      const [err, seterr] = useState(null);

    useEffect(() => {

        const abortConst = new AbortController();  

        fetch(url , {signal: abortConst.signal})             
          .then(res => {
            if(!res.ok){                                    
              throw Error('Could not fetch details');
            }
            return res.json();                                
          })
          .then(data => {
            setdata(data);       
            setpending(false);      
            seterr(null);          
          })
          .catch(err => {

            if(err.name === 'AbortError'){
                console.log('cleaned');
            }
            else{
                setpending(false);                          
                seterr(err.message); 
            }
            
          })

          return ()=> abortConst.abort();
    
      
      }, [url]);

      return {data,pending,err}
}

export default useFetch;
