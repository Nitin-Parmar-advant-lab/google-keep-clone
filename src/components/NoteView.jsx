import threDots from "../assets/4-note-view/tree-dots.svg";

export default function NoteView({ note }) {
    return (
        <div className="w-55 h-33 m-4 rounded-md bg-gray-50 border border-gray-200 hover:shadow-md/20 transition duration-150 ease-in scale-100 hover:scale-105 ">
            <div id="note-title" className="flex items-center justify-between">
                <p className="text-xl font-medium text-black mx-2 line-clamp-1 my-1">
                    {note.title}
                    this is title
                </p>
                <div
                    id="three-dot"
                    className="m-3 p-1 hover:rounded-full hover:border-transparent cursor-pointer transition-all duration-150 ease-in-out hover:bg-gray-200 flex items-end"
                >
                    <img src={threDots} alt="three dots" className="w-5 h-4" />
                </div>
            </div>
            <div id="note-description" className="line-clamp-3 mx-2">
                {note.description}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo ut iusto consequatur adipisci maxime saepe excepturi similique dicta! Ducimus molestiae minus pariatur corrupti ipsum natus voluptatem nobis debitis reprehenderit neque!
            </div>
        </div>
    );
}
