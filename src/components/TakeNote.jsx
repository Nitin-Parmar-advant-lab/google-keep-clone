import { useState, useRef, useEffect, useCallback } from "react";

import pinIcon from "../assets/3-take-note/pin.svg";
import pinFilledIcon from "../assets/3-take-note/pin-filled.svg";

export default function TakeNote({ addNote }) {
    const [isTyping, setTyping] = useState(false);
    const ref = useRef(null);

    const [content, setContent] = useState({
        title: "",
        description: "",
        pin: false,
    });

    function handleContent(e) {
        const { name, value } = e.target;
        setContent((prevContent) => ({
            ...prevContent,
            [name]: value,
        }));
    }

    function handlePinClick() {
        setContent((prevContent) => ({
            ...prevContent,
            pin: !prevContent.pin,
        }));
    }

    function handleTyping() {
        setTyping(true);
    }

    function handleClose() {
        if (content.title.trim() || content.description.trim()) {
            addNote(content);
        }

        setTyping(false);
        setContent({
            title: "",
            description: "",
            pin: false,
        });
    }


    const handleOutsideClick = useCallback(function handleOutsideClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
            handleClose();
        }
    })

    useEffect(() => {
        if (!isTyping) return;

        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [isTyping]);
    
    const visual = (
        <div
            id="visual"
            className="w-140 h-13 flex items-center pl-3 rounded-md shadow-md/25 border border-gray-200 "
            onClick={handleTyping}
        >
            <input
                type="text"
                placeholder="Take a note..."
                className="text-md font-medium h-8 outline-none "
            />
        </div>
    );

    const typing = (
        <div
            id="working"
            className="flex flex-col w-140 h-30 pl-3 rounded-md shadow-md/25 border border-gray-200 gap-2"
            ref={ref}
        >
            <div id="title" className="flex">
                <input
                    type="text"
                    placeholder="Title"
                    className="text-xl font-medium text-black w-130 h-7 outline-none my-2 "
                    name="title"
                    value={content.title}
                    onChange={handleContent}
                />
                <img
                    src={content.pin ? pinFilledIcon : pinIcon}
                    alt="pin"
                    className="w-5 mt-3 mr-3 "
                    onClick={handlePinClick}
                />
            </div>
            <div id="description">
                <input
                    type="text"
                    placeholder="Take a note..."
                    className="text-gray-800  outline-none"
                    name="description" 
                    value={content.description}
                    onChange={handleContent}
                />
            </div>
            <div id="close" className="flex justify-end pr-8 mb-1 ">
                <button className="text-gray-900" onClick={handleClose}>
                    Close
                </button>
            </div>
        </div>
    );

    return (
        <div className="flex flex-col items-center justify-center ml-10 mt-8 ">
            {isTyping ? typing : visual}
        </div>
    );
}
