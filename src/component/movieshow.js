import React,{useState} from 'react';

      const movieshow = () => {

      const [movie,setmovie] = useState([{id:1,movie:'titanic',rating:'5'}])
      const [inputData,setInputData] = useState('')
      const [ratingData,setratingData] = useState('')

      return( 
        <>
        <ul>
            {
                movie.filter(item =>
                <> 
                    <li>{item.movie}</li>
                    <li>{item.rating}</li>
                     
                 </>)
                
            }
        </ul>
        
         <input type='text' onChange={(e)=>{setInputData(e.target.value)}} value={inputData}></input>  
         <button onClick={()=>{ setmovie([...movie,{id:todo.length,movie:inputData,rating:ratingData}])
            setInputData('')
            }}>+</button>

import React,{useState} from 'react';

      const Movieshow = () => {

      const [movie,setmovie] = useState([{id:1,movie:'titanic',rating:'5'}])
      const [inputData,setInputData] = useState('')
      const [ratingData,setratingData] = useState('')

      return( 
        <>
        <ul>
            {
                movie.map(item =>
                <> 
                    <li>{item.movie}</li>
                    <li>{item.rating}</li>
                     
                 </>)
                
            }
        </ul>
        
         <input type='text' onChange={(e)=>{setInputData(e.target.value)}} value={inputData}></input>  
         <button onClick={()=>{ setmovie([...movie,{id:movie.length,movie:inputData,rating:ratingData}])
            setInputData('')
            }}>+</button>
             
        </>
             )
           
 }

export default Movieshow;
