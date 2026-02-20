import NoteView from "./NoteView";

export default function Notes({ notesArr, onPin, onDelete, onEdit }) {
    const pinnedNotes = notesArr.filter((note) => note.pin);
    const otherNotes = notesArr.filter((note) => !note.pin);

    return (
        <div className="max-w-full flex flex-col items-start mt-12 mx-30 ">
            <div id="PINNED" className="mb-4 ">
                <div className="font-medium text-gray-500 text-sm 100 pl-6">
                    {pinnedNotes.length ? <p>PINNED</p> : undefined}
                </div>
                <div id="pin-notes" className="flex flex-wrap ">
                    {pinnedNotes.toReversed().map((note) => (
                        <NoteView
                            key={note.id}
                            note={note}
                            onPin={onPin}
                            onDelete={onDelete}
                            onEdit={onEdit}
                        />
                    ))}
                    {/* <NoteView key={132} note={{}} />
                    <NoteView key={133} note={{}} />
                    <NoteView key={134} note={{}} />
                    <NoteView key={135} note={{}} />
                    <NoteView key={136} note={{}} />
                    <NoteView key={137} note={{}} />
                    <NoteView key={138} note={{}} /> */}
                </div>
            </div>
            <div id="OTHERS">
                <div className="font-medium text-gray-500 text-sm 100 pl-6">
                    {otherNotes.length ? <p>OTHERS</p> : undefined}
                </div>
                <div id="other-notes" className="flex flex-wrap ">
                    {otherNotes.toReversed().map((note) => (
                        <NoteView
                            key={note.id}
                            note={note}
                            onPin={onPin}
                            onDelete={onDelete}
                            onEdit={onEdit}
                        />
                    ))}
                    {/* <NoteView key={132} note={{}} />
                    <NoteView key={133} note={{}} />
                    <NoteView key={134} note={{}} />
                    <NoteView key={135} note={{}} />
                    <NoteView key={136} note={{}} />
                    <NoteView key={137} note={{}} />
                    <NoteView key={138} note={{}} /> */}
                </div>
            </div>
        </div>
    );
}
