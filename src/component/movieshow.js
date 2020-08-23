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

        <Modal.Dialog>
        <Modal.Header closeButton>
            <Modal.Title>Movie information</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <p>Name of the movie</p> <input type="text" name="movie"></input>
            <p>Rating of the movie</p> <input type="text" name="rating"></input>
        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary">Close</Button>
            
        </Modal.Footer>
        </Modal.Dialog>
             
        </>
             )
           
 }

export default movieshow;