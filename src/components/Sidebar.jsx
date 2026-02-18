import { useState } from "react";
import notesIcon from "../assets/2-side/note-logo.svg";
import binIcon from "../assets/2-side/bin-logo.svg";

export default function Sidebar() {
    const [selected, setSelected] = useState("notes");

    function handleSelect(type) {
        setSelected(type);
    }

    let notesClass = "w-6 h-6 rounded-full p-1";
    let binClass = "w-6 h-6 rounded-full p-1";

    if (selected === "notes") {
        notesClass += " bg-[#feefc3]";
    } else {
        binClass += " bg-[#feefc3]";
    }

    return (
        <div className="min-h-screen overflow-y-auto w-9 fixed z-10 flex flex-col items-center gap-3 pt-3">
            <div id="notes">
                <img
                    src={notesIcon}
                    alt="notes"
                    className={notesClass}
                    onClick={() => handleSelect("notes")}
                />
            </div>

            <div id="bin">
                <img
                    src={binIcon}
                    alt="deleted notes"
                    className={binClass}
                    onClick={() => handleSelect("bin")}
                />
            </div>
        </div>
    );
}
