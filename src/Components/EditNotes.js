import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { updateNote } from '../Redux/action';
import { useLocation, useNavigate } from 'react-router-dom';
import './NotesForm.css'

export default function Note() {

    let [title, setTitle] = useState('');
    let [content, setContent] = useState('')
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const index = location.state.id;
    const notes = useSelector((state) => state.notes);
    useEffect(() => {
        setTitle(notes[index].title)
        setContent(notes[index].content)
    }, [index, notes])

    const handleUpdate = (e) =>{
        e.preventDefault();
        dispatch(updateNote(index, title, content))
        navigate('/allNotes')
      }

  return (
    <>
    
    <div  className="card "  >
      <div className='card-body'>
        <h1 className='update-note'> Update Note</h1>
        <form onSubmit={handleUpdate}>
                <div class="mb-3">
                  <h3 className='title'>Title</h3>
                  <input type='text' name='title' value={title} placeholder='Enter Title' onChange = {(e)=> setTitle(e.target.value)} required class="form-control" id="exampleFormControlInput1" />
                </div>
                <div class="mb-3">
                  <h4 className="content">Content</h4>
                  <textarea type='text' name='content' value={content} placeholder='Enter content' onChange = {(e)=> setContent(e.target.value)} required class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button className="button save-btn" >
                    Save Note                  
                </button>
                <button className="button cancel-btn" onClick={() => navigate('/')} >
                    Cancel
                </button>
        </form>
      </div>
    </div>
    </>
  
  )
}
