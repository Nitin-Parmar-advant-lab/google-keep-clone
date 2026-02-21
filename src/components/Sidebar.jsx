// import { useState } from "react";

// import notesIcon from "../assets/2-side/note-logo.svg";
import { MdOutlineLightbulb } from "react-icons/md";
import { LuTrash2 } from "react-icons/lu";

// import binIcon from "../assets/2-side/bin-logo.svg";
import { SIDEBAR_ITEMS } from "../App";

export default function Sidebar({ view, onViewChange }) {
    let notesClass = "w-10 h-10 rounded-full p-1";
    let binClass = "w-10 h-10 rounded-full p-1";

    if (view === SIDEBAR_ITEMS.NOTES) {
        notesClass += " bg-[#feefc3] dark:bg-yellow-600";
    } else {
        binClass += " bg-[#feefc3] dark:bg-yellow-600";
    }

    return (
        <div className="min-h-screen overflow-y-auto w-18 fixed z-10 flex flex-col items-center gap-5 pt-6 bg-white dark:bg-[#202124]  ">
            <div id="notes">
                {/* <img
                    src={notesIcon}
                    alt="notes"
                    className={`${notesClass} cursor-pointer dark:invert`}
                    onClick={() => onViewChange(SIDEBAR_ITEMS.NOTES)}
                /> */}
                <MdOutlineLightbulb
                    alt="notes"
                    className={`${notesClass} cursor-pointer dark:text-white/75`}
                    onClick={() => onViewChange(SIDEBAR_ITEMS.NOTES)}
                />
            </div>

            <div id="bin">
                {/* <img
                    src={binIcon}
                    alt="deleted notes"
                    className={`${binClass} cursor-pointer dark:invert`}
                    onClick={() => onViewChange(SIDEBAR_ITEMS.BIN)}
                /> */}
                <LuTrash2
                    className={`${binClass} cursor-pointer dark:text-white/75`}
                    onClick={() => onViewChange(SIDEBAR_ITEMS.BIN)}
                />
            </div>
        </div>
    );
}
