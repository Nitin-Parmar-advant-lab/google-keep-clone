// import { useState } from "react";
import binIcon from "../assets/4-note-view/bin-logo.svg";

import pinIcon from "../assets/4-note-view/pin.svg";
import pinFilledIcon from "../assets/4-note-view/pin-filled.svg";

import restoreNote from "../assets/4-note-view/restore-note.svg";
import permenentDelete from "../assets/4-note-view/permenent-delete.svg";

export default function NoteView({
    note,
    onPin,
    onDelete,
    onRestore,
    onPermanentDelete,
    isBinView = false,
    onEdit,
}) {
    // const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div
            className="w-55 h-35 m-4 rounded-md bg-gray-50 border border-gray-200 shadow-md/5 hover:shadow-md/20 transition duration-150 ease-in scale-100 hover:scale-105 flex flex-col group justify-between"
            onClick={() => onEdit?.(note)}
        >
            <div id="note-data">
                <div id="note-title">
                    <p className="text-xl font-medium text-black mx-2 line-clamp-1 my-1">
                        {note.title}
                    </p>
                </div>

                <div
                    id="note-description"
                    className="line-clamp-3 mx-2 whitespace-pre-wrap"
                >
                    {note.description}
                </div>
            </div>

            <div className="group-hover:block ">
                <div
                    id="note-hover-icons"
                    className=" flex justify-end gap-3 pr-5 bottom-0 pb-1"
                >
                    {isBinView ? (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onRestore?.(note.id);
                                // setMenuOpen(false);
                            }}
                        >
                            <img
                                src={restoreNote}
                                alt="bin"
                                className="w-5 brightness-0 invert-30 cursor-pointer"
                                title="Resotre Note"
                            />
                        </button>
                    ) : (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onPin?.(note.id);
                                // setMenuOpen(false);
                            }}
                        >
                            {note.pin ? (
                                <img
                                    src={pinFilledIcon}
                                    alt="pinned"
                                    className="w-5 cursor-pointer"
                                    title="Unpin Note"
                                />
                            ) : (
                                <img
                                    src={pinIcon}
                                    alt="pin"
                                    className="w-5 cursor-pointer"
                                    title="pin Note"
                                />
                            )}
                        </button>
                    )}
                    {isBinView ? (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onPermanentDelete?.(note.id);
                                // setMenuOpen(false);
                            }}
                        >
                            <img
                                src={permenentDelete}
                                alt="bin"
                                className="w-5 brightness-0 invert-30 cursor-pointer"
                                title="Delete permanently"
                            />
                        </button>
                    ) : (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onDelete?.(note.id);
                                // setMenuOpen(false);
                            }}
                        >
                            <img
                                src={binIcon}
                                alt="bin"
                                className="w-5 brightness-0 invert-30 cursor-pointer"
                                title="Move to Bin"
                            />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
