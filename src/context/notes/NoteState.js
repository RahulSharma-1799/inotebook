import NoteContext from './noteContext';
import { useState } from 'react';
const NoteState = (props) => {
    const notesInitial = [
      {
        _id: "648058057589633a02f3849e",
        user: "647f17d456d78d643e86cfd8",
        title: "My Title",
        description: "Please wake up early",
        tag: "personal",
        date: "2023-06-07T10:12:21.451Z",
        __v: 0,
      },
      {
        _id: "648058797589633a02f384a2",
        user: "647f17d456d78d643e86cfd8",
        title: "My Title",
        description: "Please wake up early",
        tag: "personal",
        date: "2023-06-07T10:14:17.285Z",
        __v: 0,
      },
      {
        _id: "6480587a7589633a02f384a4",
        user: "647f17d456d78d643e86cfd8",
        title: "My Title",
        description: "Please wake up early",
        tag: "personal",
        date: "2023-06-07T10:14:18.868Z",
        __v: 0,
      },
      {
        _id: "6480587a7589633a02f384a4",
        user: "647f17d456d78d643e86cfd8",
        title: "My Title",
        description: "Please wake up early",
        tag: "personal",
        date: "2023-06-07T10:14:18.868Z",
        __v: 0,
      },
      {
        _id: "6480587a7589633a02f384a4",
        user: "647f17d456d78d643e86cfd8",
        title: "My Title",
        description: "Please wake up early",
        tag: "personal",
        date: "2023-06-07T10:14:18.868Z",
        __v: 0,
      },
      {
        _id: "6480587a7589633a02f384a4",
        user: "647f17d456d78d643e86cfd8",
        title: "My Title",
        description: "Please wake up early",
        tag: "personal",
        date: "2023-06-07T10:14:18.868Z",
        __v: 0,
      },
      {
        _id: "6480587a7589633a02f384a4",
        user: "647f17d456d78d643e86cfd8",
        title: "My Title",
        description: "Please wake up early",
        tag: "personal",
        date: "2023-06-07T10:14:18.868Z",
        __v: 0,
      },
      {
        _id: "6480587a7589633a02f384a4",
        user: "647f17d456d78d643e86cfd8",
        title: "My Title",
        description: "Please wake up early",
        tag: "personal",
        date: "2023-06-07T10:14:18.868Z",
        __v: 0,
      },
    ];
    const[notes,setNotes] =useState(notesInitial)
    return (
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
};

export default NoteState;