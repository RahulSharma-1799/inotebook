import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  //Get all Note
  const getNotes = async () => {
    //TODO: API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ3ZjE3ZDQ1NmQ3OGQ2NDNlODZjZmQ4In0sImlhdCI6MTY4NjEzMDYwOH0.ah-8t2f4oA6eyuO8PFEVtBM7FUsPgULk1Flx4pV0eOY",
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };  
  //Add a Note
  const addNote = async (title, description, tag) => {
    //TODO: API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ3ZjE3ZDQ1NmQ3OGQ2NDNlODZjZmQ4In0sImlhdCI6MTY4NjEzMDYwOH0.ah-8t2f4oA6eyuO8PFEVtBM7FUsPgULk1Flx4pV0eOY",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);
    let note = {
      _id: "6480587a7589dsss633a02f384a4",
      user: "647f17d456d78d643e86cfd8",
      title: title,
      description: description,
      tag: tag,
      date: "2023-06-07T10:14:18.868Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  //Delete a Note
  const deleteNote = (id) => {
    //TODO: API Call
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  //Edit a Note
  const editNote = async (id, title, description, tag) => {
    //TODO: API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ3ZjE3ZDQ1NmQ3OGQ2NDNlODZjZmQ4In0sImlhdCI6MTY4NjEzMDYwOH0.ah-8t2f4oA6eyuO8PFEVtBM7FUsPgULk1Flx4pV0eOY",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();
    console.log(json);
    //Logic to edit client notes
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
