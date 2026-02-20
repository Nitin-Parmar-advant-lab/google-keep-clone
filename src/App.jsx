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

    function handleSelect(type) {
        setSelected(type);
    }

    return (
        <>
            <Navigator />
            <Sidebar
                view={selected}
                onViewChange={(type) => handleSelect(type)}
            />
            <MainSection view={selected} />
        </>
    );
}
