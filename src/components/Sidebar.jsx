import { useState } from "react";
import notesIcon from "../assets/2-side/note-logo.svg";
import binIcon from "../assets/2-side/bin-logo.svg";

const SIDEBAR_ITEMS = {
    NOTES: "notes",
    BIN: "bin"
}

export default function Sidebar() {
    const [selected, setSelected] = useState(SIDEBAR_ITEMS.NOTES);

    function handleSelect(type) {
        setSelected(type);
    }

    let notesClass = "w-10 h-10 rounded-full p-1";
    let binClass = "w-10 h-10 rounded-full p-1";

    if (selected === SIDEBAR_ITEMS.NOTES) {
        notesClass += " bg-[#feefc3]";
    } else {
        binClass += " bg-[#feefc3]";
    }

    return (
        <div className="min-h-screen overflow-y-auto w-18 fixed z-10 flex flex-col items-center gap-5 pt-6">
            <div id="notes">
                <img
                    src={notesIcon}
                    alt="notes"
                    className={notesClass}
                    onClick={() => handleSelect(SIDEBAR_ITEMS.NOTES)}
                />
            </div>

            <div id="bin">
                <img
                    src={binIcon}
                    alt="deleted notes"
                    className={binClass}
                    onClick={() => handleSelect(SIDEBAR_ITEMS.BIN)}
                />
            </div>
        </div>
    );
}
