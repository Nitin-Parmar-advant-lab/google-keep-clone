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
    return (
        <div
            className="w-55 h-35 m-4 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#202124] shadow-md/5 hover:shadow-md/20 dark:hover:shadow-black/40 transition duration-150 ease-in scale-100 hover:scale-105 flex flex-col group justify-between"
            onClick={() => onEdit?.(note)}
        >
            <div id="note-data">
                <div id="note-title" className="flex justify-between">
                    <p className="text-xl font-medium text-black dark:text-gray-100 mx-2 line-clamp-1 my-1 flex-1">
                        {note.title}
                    </p>
                    <button
                        className="group-hover:block hidden pr-2 pt-1 pl-2"
                        onClick={(e) => {
                            e.stopPropagation();
                            onPin?.(note.id);
                        }}
                    >
                        {note.pin ? (
                            <img
                                src={pinFilledIcon}
                                alt="pinned"
                                className="w-5 cursor-pointer dark:invert"
                                title="Unpin Note"
                            />
                        ) : (
                            <img
                                src={pinIcon}
                                alt="pin"
                                className="w-5 cursor-pointer dark:invert"
                                title="pin Note"
                            />
                        )}
                    </button>
                </div>

                <div
                    id="note-description"
                    className="line-clamp-3 mx-2 whitespace-pre-wrap text-gray-800 dark:text-gray-300"
                >
                    {note.description}
                </div>
            </div>

            <div className="group-hover:block hidden">
                <div
                    id="note-hover-icons"
                    className="flex justify-end gap-3 pr-3 bottom-0 pb-2"
                >
                    {isBinView ? (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onRestore?.(note.id);
                            }}
                        >
                            <img
                                src={restoreNote}
                                alt="bin"
                                className="w-5 brightness-0 invert-30 dark:invert cursor-pointer"
                                title="Resotre Note"
                            />
                        </button>
                    ) : (
                        <div></div>
                    )}

                    {isBinView ? (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onPermanentDelete?.(note.id);
                            }}
                        >
                            <img
                                src={permenentDelete}
                                alt="bin"
                                className="w-5 brightness-0 invert-30 dark:invert cursor-pointer"
                                title="Delete permanently"
                            />
                        </button>
                    ) : (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onDelete?.(note.id);
                            }}
                        >
                            <img
                                src={binIcon}
                                alt="bin"
                                className="w-5 brightness-0 invert-30 dark:invert cursor-pointer"
                                title="Move to Bin"
                            />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}