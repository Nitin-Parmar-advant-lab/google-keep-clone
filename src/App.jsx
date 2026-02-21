import { useState } from "react";

import MainSection from "./components/MainSection";
import Navigator from "./components/Navigator";
import Sidebar from "./components/Sidebar";

export const SIDEBAR_ITEMS = {
    NOTES: "notes",
    BIN: "bin",
};

export default function App() {
    const [selected, setSelected] = useState(SIDEBAR_ITEMS.NOTES);
    const [isDarkMode, setIsDarkMode] = useState(false);

    function handleSelect(type) {
        setSelected(type);
    }

    function changeMode() {
        setIsDarkMode((prev) => !prev);
    }

    return (
        <div className={`${isDarkMode ? "dark" : ""} bg-white dark:bg-[#202124] min-h-screen`}>
            <Navigator mode={isDarkMode} changeMode={changeMode}/>
            <Sidebar
                view={selected}
                onViewChange={(type) => handleSelect(type)}
            />
            <MainSection view={selected} />
        </div>
    );
}
