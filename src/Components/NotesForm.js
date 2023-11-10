import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addNote } from '../Redux/action';
import './NotesForm.css';


export default function NotesForm() {

  let [title, setTitle] = useState('');
  let [content, setContent] = useState('')

  const dispatch = useDispatch();

  function handleSubmission(e){
    e.preventDefault();
    dispatch(addNote(title, content))
    setTitle('')
    setContent('')
  }

  return (
    <div className="card">
      <div className='card-body'>
        <h2 className='card-title React-Note-App'>React Notes App</h2>
        <br/>
        <form onSubmit={handleSubmission}>
            <h3 className='title'>Title </h3>
            <input className='input-title' type='text' name='title' value={title} placeholder='enter title' onChange = {(e)=> setTitle(e.target.value)}/> <br/>
            <br/><h4 className='content'> Content </h4> 
            {/* <input  type='text' name='content' value={content} placeholder='enter content' onChange = {(e)=> setContent(e.target.value)}/> <br/> */}
            <textarea type='text' name='content' value={content} placeholder='Enter content' onChange = {(e)=> setContent(e.target.value)} required class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            
            <br/>
              
              <button className='button add-note-btn ' type='submit'>Add note </button>
              
              <Link to='/allNotes'>
                <button className='button all-note-btn' type='submit'> All Notes </button>
              </Link>
           
        </form>
      </div>
    </div>
  )
}
