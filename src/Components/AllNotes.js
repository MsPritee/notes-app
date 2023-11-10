import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeNote } from '../Redux/action';
import { Link, useNavigate } from 'react-router-dom';
import './AllNotes.css'

export default function AllNotes() {

  const notes = useSelector((state) => state.notes)
  console.log(notes)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  
  

 

  return (
    <div>
          <div >
            <Link to='/'>
                  <button className=' homeBtn' type='submit'>Home</button>
            </Link>
            </div>
    <div className='row row-cols-1 row-cols-md-3 g-4'>
      {
        notes.map((note,index) =>{
          return(
            <>
            
            <div className='body '>
              <div className='col '>
                <div className='card all-notes border-success mb-3'>
              <div className='card-header bg-transparent border-success'><h3 className='all-title'>{note.title}</h3></div>
              <div className='card-body'><h5 className='all-content'>{note.content}</h5></div>
              <div className='btnRow'>
              <button className='button delete-btn' onClick={()=> dispatch(removeNote(index))}>Delete</button>
              {/* <Link to='/editNotes'> */}
                  <button className='button update-btn' type='submit' onClick={() => navigate('/editNotes', {state: {id: index}})} >Update</button>
              {/* </Link> */}
              
              {/* <button onClick={()=> dispatch(updateNote(index))}>Update</button> */}
              
              </div></div>
              </div>
            </div>
          </>
           
        )
      })
    }
  </div>
  </div>
)}
