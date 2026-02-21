import { useState, useEffect } from "react";
import { SIDEBAR_ITEMS } from "../App.jsx";

import Notes from "./Notes.jsx";
import TakeNote from "./TakeNote.jsx";
import Bin from "./Bin.jsx";
import EditModal from "./EditModal.jsx";

export default function MainSection({ view }) {
    const [notesArr, setNotesArr] = useState(() => {
        const localData = localStorage.getItem("notes-clone-data");
        return localData ? JSON.parse(localData) : [];
    });

    const [editingNote, setEditingNote] = useState(null);

    useEffect(() => {
            localStorage.setItem("notes-clone-data", JSON.stringify(notesArr));
    }, [notesArr]);

    function addNote(newNote) {
        const noteWithId = {
            ...newNote,
            id: Date.now(),
        };
        setNotesArr((prevNotes) => [...prevNotes, noteWithId]);
    }

    function updateNote(updatedNote) {
        setNotesArr((prev) =>
            prev.map((note) =>
                note.id === updatedNote.id ? updatedNote : note,
            ),
        );
    }

    console.log(notesArr);

    function togglePin(id) {
        setNotesArr((prev) =>
            prev.map((note) =>
                note.id === id ? { ...note, pin: !note.pin } : note,
            ),
        );
    }

    function deleteNote(id) {
        setNotesArr((prev) =>
            prev.map((note) =>
                note.id === id ? { ...note, isDeleted: true } : note,
            ),
        );
    }

    function permanentlyDelete(id) {
        setNotesArr((prev) => prev.filter((note) => note.id !== id));
    }

    function restoreNote(id) {
        setNotesArr((prev) =>
            prev.map((note) =>
                note.id === id ? { ...note, isDeleted: false } : note,
            ),
        );
    }

    const activeNotes = notesArr.filter((note) => !note.isDeleted);
    const deletedNotes = notesArr.filter((note) => note.isDeleted);

    return (
        <>
            {view === SIDEBAR_ITEMS.NOTES ? (
                <>
                    <TakeNote addNote={addNote} />
                    <Notes
                        notesArr={activeNotes}
                        onPin={togglePin}
                        onDelete={deleteNote}
                        onEdit={(note) => setEditingNote(note)}
                    />
                </>
            ) : (
                <Bin
                    deletedNotes={deletedNotes}
                    onRestore={restoreNote}
                    onPermanentDelete={permanentlyDelete}
                />
            )}
            
            {editingNote && (
                <EditModal
                    note={editingNote}
                    onClose={() => setEditingNote(null)}
                    onSave={updateNote}
                    onDelete={deleteNote}
                />
            )}
        </>
    );
}