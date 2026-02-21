import NoteView from "./NoteView";

export default function Bin({deletedNotes, onRestore, onPermanentDelete}) {
    if (deletedNotes.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center mt-40 text-gray-400 dark:text-gray-500 bg-white dark:bg-[#202124]">
                <p className="text-lg font-medium">Bin is Empty!</p>
            </div>
        );
    }

    return (
        <div className="max-w-full flex flex-col items-start mt-12 mx-30 bg-white dark:bg-[#202124]">
            <div className="font-medium text-gray-500 dark:text-gray-400 text-sm pl-6 mb-2">
                <p>BIN</p>
            </div>
            <div className="flex flex-wrap">
                {deletedNotes.map((note) => (
                    <NoteView
                        key={note.id}
                        note={note}
                        onRestore={onRestore}
                        onPermanentDelete={onPermanentDelete}
                        isBinView={true}
                    />
                ))}
            </div>
        </div>
    );
}