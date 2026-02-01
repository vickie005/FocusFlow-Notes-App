import {useState, useEffect} from 'react';
import axios from axios;

function App(){
    const [ notes, setNotes] = useState([]);
    const [content, setContent] = useState('');
    const API_URL = 'http://localhost:5000/api/notes';

    // Fetch notes from server
    const fetchNotes = async() =>{
        const res = await axios.get(API_URL);
        setNotes(res.data);
    };

    useEffect(() =>{ fetchNotes(); }, []);

    // Create a new note
    const addNote = async()=>{
        if(!content) return;
        const responce = await axios.post(API_URL, {content});
        setNotes([res.data, ...notes]); // Optimistic UI update
        setContent('');
    };

    // Delete a note
    const deleteNote = async(id) => {
        await axios.delete(`${API_URL}/${id}`);
        setNotes(notes.filter(note => note._id !== id));
    };

    return(
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            <h1>FocusFlow Notes</h1>
            <textarea
            value={content}
            onChange={(e) =>setContent(e.target.value)}
            placeholder="Write your note here..."
            />
            <button onClick={addNote}>Save Note</button>

            <div>
                {notes.map(note =>(
                    <div key={note._id} style={{border: '1px solid #ccc', padding: '10px', marginTop: '10px'}}>
                        <p>{note.content}</p>
                        <button onClick={() => deleteNote(note._id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>

    );

}

export default App;

