import NoteView from "./NoteView";

export default function Notes({ notesArr, onPin, onDelete, onEdit }) {
    const pinnedNotes = notesArr.filter((note) => note.pin);
    const otherNotes = notesArr.filter((note) => !note.pin);

    return (
        <div className="max-w-full flex flex-col items-start mt-12 mx-30 bg-white dark:bg-[#202124]">
            <div id="PINNED" className="mb-4 ">
                <div className="font-medium text-gray-500 dark:text-gray-400 text-sm 100 pl-6">
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
                </div>
            </div>

            <div id="OTHERS">
                <div className="font-medium text-gray-500 dark:text-gray-400 text-sm 100 pl-6">
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
                </div>
            </div>
        </div>
    );
}