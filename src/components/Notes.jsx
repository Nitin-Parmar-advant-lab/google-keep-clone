import NoteView from "./NoteView";

export default function Notes({notesArr}) {

    const pinnedNotes = notesArr.filter(note => note.pin === true);
    const otherNotes = notesArr.filter(note => note.pin === false);

    return (
        <div className="max-w-full flex flex-col items-start mt-12 mx-30 ">
            <div id="PINNED" className="mb-4 ">
                <div className="font-medium text-gray-500 text-sm 100 pl-6">
                    {pinnedNotes.length ? <p>PINNED</p> : undefined }
                </div>
                <div id="pin-notes" className="flex flex-wrap ">
                    {pinnedNotes.map(note => (
                        <NoteView key={note.id} note={note} />
                    ))}
                    <NoteView key={132} note={{}}/>
                    <NoteView key={132} note={{}}/>
                    <NoteView key={132} note={{}}/>
                    <NoteView key={132} note={{}}/>
                    <NoteView key={132} note={{}}/>
                    <NoteView key={132} note={{}}/>
                    <NoteView key={132} note={{}}/>
                </div>
            </div>
            <div id="OTHERS">
                 <div className="font-medium text-gray-500 text-sm 100 pl-6">
                    {otherNotes.length ? <p>OTHERS</p>: undefined }
                </div>
                <div id="other-notes" className="flex flex-wrap ">
                    {otherNotes.map(note => (
                        <NoteView key={note.id} note={note} />
                    ))}
                    <NoteView key={132} note={{}}/>
                    <NoteView key={132} note={{}}/>
                    <NoteView key={132} note={{}}/>
                </div>
            </div>
        </div>
    );
}
