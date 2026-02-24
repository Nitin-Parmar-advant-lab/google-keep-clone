import { useState, useRef, useEffect, useCallback } from "react";
import pinIcon from "../assets/3-take-note/pin.svg";
import pinFilledIcon from "../assets/3-take-note/pin-filled.svg";

export default function TakeNote({
    addNote,
    initialNote,
    onSaveModal,
    onDeleteModal,
    isModalView = false,
}) {
    const [isTyping, setTyping] = useState(isModalView);
    const ref = useRef(null);

    const [content, setContent] = useState(
        initialNote || {
            title: "",
            description: "",
            pin: false,
            isDeleted: false,
        },
    );

    function handleContent(e) {
        const { name, value } = e.target;
        setContent((prev) => ({ ...prev, [name]: value }));
    }

    function handlePinClick() {
        setContent((prev) => ({ ...prev, pin: !prev.pin }));
    }

    function handleTyping() {
        setTyping(true);
    }

    const handleClose = useCallback(function handleClose() {
        if (isModalView) {
            onSaveModal(content);
        } else {
            if (content.title.trim() || content.description.trim()) {
                addNote(content);
            }
            setTyping(false);
            setContent({
                title: "",
                description: "",
                pin: false,
                isDeleted: false,
            });
        }
    }, [isModalView, onSaveModal, content, addNote]);

    const handleOutsideClick = useCallback(
        function handleOutsideClick(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                handleClose();
            }
        },
        [handleClose],
    );

    useEffect(() => {
        if (!isTyping ) return;

        document.addEventListener("mousedown", handleOutsideClick);
        return () =>
            document.removeEventListener("mousedown", handleOutsideClick);
    }, [isTyping, handleOutsideClick]);

    function handleInputResize(e) {
        e.target.style.height = "auto";
        e.target.style.height = `${e.target.scrollHeight}px`;
    }

    const visual = (
        <div
            id="visual"
            className="w-140 h-13 flex items-center pl-3 mt-5 rounded-md shadow-md/25 border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#202124] cursor-text"
            onClick={handleTyping}
        >
            <input
                type="text"
                placeholder="Take a note..."
                className="text-md font-medium h-8 outline-none pointer-events-none bg-transparent text-black dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                readOnly
            />
        </div>
    );

    const typing = (
        <div
            id="working"
            className="flex flex-col w-140 min-h-30 py-2 pl-3 bg-white dark:dark:bg-[#202124] rounded-md shadow-lg border border-gray-200 dark:border-gray-700 gap-2 max-h-120 overflow-auto"
            ref={ref}
        >
            <div id="title" className="flex items-start">
                <textarea
                    rows={!isModalView ? 1 : 2}
                    placeholder="Title"
                    className="text-xl font-medium text-black dark:text-gray-100 w-130 overflow-hidden outline-none my-2 resize-none bg-transparent placeholder-gray-500 dark:placeholder-gray-400"
                    name="title"
                    value={content.title}
                    onChange={(e) => {
                        handleContent(e);
                        handleInputResize(e);
                    }}
                />
                <img
                    src={content.pin ? pinFilledIcon : pinIcon}
                    alt="pin"
                    className="w-5 mt-3 mr-3 cursor-pointer dark:invert"
                    onClick={handlePinClick}
                />
            </div>
            <div id="description">
                <textarea
                    placeholder="Take a note..."
                    className="text-gray-800 dark:text-gray-300 w-130 resize-none overflow-hidden outline-none bg-transparent placeholder-gray-500 dark:placeholder-gray-400"
                    rows={!isModalView ? 1 : 5}
                    name="description"
                    value={content.description}
                    onChange={(e) => {
                        handleContent(e);
                        handleInputResize(e);
                    }}
                />
            </div>
            <div
                id="actions"
                className="flex justify-between items-center pr-8 mb-1 mt-2"
            >
                {isModalView ? (
                    <button
                        className="text-gray-800 dark:text-gray-300 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-1 rounded-lg text-sm"
                        onClick={() => onDeleteModal(content.id)}
                    >
                        Delete Note
                    </button>
                ) : (
                    <div></div>
                )}

                <button
                    className="text-gray-800 dark:text-gray-300 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-1.5 rounded-lg"
                    onClick={handleClose}
                >
                    Close
                </button>
            </div>
        </div>
    );

    return (
        <div
            className={
                isModalView
                    ? ""
                    : "flex flex-col items-center justify-center ml-10 mt-8"
            }
        >
            {isTyping ? typing : visual}
        </div>
    );
}
