const express = require('express');
const mongoose = require('mongoose');
const cors = require ('cors');
const Note = require('./Note');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors()); //Allows the React app to talk to this server
app.use(express.json()); // Allows express to read JSON in request bodies

// Connect to mongoose
//mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/focusflow');
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("✅Database connection Established!");
    console.log(`🌐Connected to MongoDB at ${mongoose.connection.name}`); // Shows the DB name
 })
 .catch((err) =>{
    console.error("❌Database connection error:", err.message);
 });

//Get all notes
app.get('/api/notes', async (req, res) =>{
    const notes = await Note.find();
    res.json(notes);
});

//Create a new note
app.post('/api/notes', async(req, res) =>{
    const savedNote = newNote(req.body);
    await savedNote.save();
    res.json(savedNote);
});

// Delete a note
app.delete('/api/notes/:id', async(req, res) =>{
    await Note.findByIdAndDelete(req.params.id);
    res.json({Message: "Note deleted!"});
});

app.listen(PORT, () =>
    console.log(`server running on port ${PORT}`)
);

