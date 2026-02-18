import taggleIcon from "../assets/1-nav/taggle-icon.svg";
import keepLogo from "../assets/1-nav/google-keep-logo.svg";
import searchLogo from "../assets/1-nav/search.svg";

export default function Navigator() {
    return (
        <div className="flex justify-between pr-2 p-1 border-b border-gray-200 items-center h-10 z-20">
            <div id="left-nav" className="flex items-start">
                <div id="taggle-icon" className="mr-2">
                    <img src={taggleIcon} alt="taggle icon" className="w-6" />
                </div>
                <div id="logo" className="flex items-center">
                    <img src={keepLogo} alt="keep logo" className="w-4 mr-2" />
                    <h1 className="text-xs">Keep</h1>
                </div>
            </div>
            <div id="center-nav" className="flex items-center bg-[#f0f4f9] w-100 mr-70 rounded-sm">
                <div id="search-logo " className="p-1 w-6 justify-center">
                    <img src={searchLogo} alt="search notes" className="w-3" />
                </div>
                <div id="search" className="w-6 ">
                    <input type="text" placeholder="Search" className="text-xs outline-none h-3" de/>
                </div>
            </div>
            <div id="right-nav" className="flex items-start">
                <div id="refresh">R</div>
                <div id="view">V</div>
                <div id="setting">S</div>
                <div id="g-apps">G</div>
                <div id="profile-capsule">P</div>
            </div>
        </div>
    );
}