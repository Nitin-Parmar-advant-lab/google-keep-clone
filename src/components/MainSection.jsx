import { useState } from "react";
import Notes from "./Notes.jsx";
import TakeNote from "./TakeNote.jsx";


// const NOTES_ARRAY = [{ key: "this empty array object"}]

export default function MainSection() {
    const [notesArr, setNotesArr] = useState([]);

    function addNote(newNote) {
        const noteWithId = {
            ...newNote,
            id: Date.now()
        };
        setNotesArr((prevNotes) => [...prevNotes, noteWithId]);
    }

    // console.log(notesArr);
    

    return (
        <>
            <TakeNote addNote={addNote}/>
            <Notes notesArr={notesArr}/>
        </>
    );
}
