import taggleIcon from "../assets/1-nav/taggle-icon.svg";
import keepLogo from "../assets/1-nav/google-keep-logo.svg";
import searchLogo from "../assets/1-nav/search.svg";
import refreshIcon from "../assets/1-nav/right/refresh.svg";
import viewIcon from "../assets/1-nav/right/view.svg";
import settingIcon from "../assets/1-nav/right/icons8-settings.svg";
import gApp from "../assets/1-nav/right/gapp.svg";
import myprofile from "../assets/1-nav/right/MYPROFILE.jpg";

export default function Navigator() {
    return (
        <div className="flex justify-between pr-2 p-3 border-b border-gray-200 items-center h-15 z-20">
            <div id="left-nav" className="flex items-start">
                <div id="taggle-icon" className="mr-3">
                    <img src={taggleIcon} alt="taggle icon" className="w-10 " />
                </div>
                <div id="logo" className="flex items-center">
                    <img src={keepLogo} alt="keep logo" className="w-7 mr-3" />
                    <h1 className="text-xl font-medium">Keep</h1>
                </div>
            </div>
            <div
                id="center-nav"
                className="flex items-center bg-[#f0f4f9] w-150 mr-70 rounded-md h-10"
            >
                <div id="search-logo " className="p-1 w-13 justify-center px-4">
                    <img src={searchLogo} alt="search notes" className="w-9" />
                </div>
                <div id="search" className="w-135 ">
                    <input
                        type="text"
                        placeholder="Search"
                        className="text-md h-6 font-medium w-full outline-none"
                    />
                </div>
            </div>
            <div
                id="right-nav"
                className="flex items-center justify-between gap-5 pr-4"
            >
                <div id="refresh">
                    <img src={refreshIcon} alt="refresh now" className="w-7" />
                </div>
                <div id="view">
                    <img src={viewIcon} alt="refresh now" className="w-7" />
                </div>
                <div id="setting">
                    <img src={settingIcon} alt="refresh now" className="w-6 brightness-0 invert-20" />
                </div>
                <div id="g-apps">
                    <img src={gApp} alt="refresh now" className="w-7" />
                </div>
                <div id="profile-capsule">
                    <img src={myprofile} alt="refresh now" className="w-32 border p-1 px-2 rounded-3xl" />
                </div>
            </div>
        </div>
    );
}
