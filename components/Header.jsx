import {BiPlus} from "react-icons/bi";
import {IoMdMenu} from "react-icons/io";
import {FaTimes} from "react-icons/fa";

const Header = ({isOpen, toggleIcon}) => {

    return (
        <header className={"sticky top-0 bg-white z-50 relative"}>
            <div className={"header"}>
                <div className={"ml-3"}><img className={"w-20 h-10 object-contain"} src={"images/noshlogo.png"} alt=""/></div>
                <div className={"hidden md:flex flex space-x-3"}>
                    <button className={"text-nosh_blue mx-4 font-bold"}>Sign-In</button>
                    <button className={"signup-btn"}>
                        <p className={"font-bold text-white"}>Sign-Up</p>
                        <span className={"border rounded-md border-gray-700 p-[2px]"}>
                    <BiPlus className={"text-nosh_blue "}/>
                    </span>
                    </button>
                </div>

                {/*mobile-nav*/}
                <div onClick={toggleIcon} className={"md:hidden text-3xl text-gray-400"}>{!isOpen && <IoMdMenu /> }</div>
            </div>

            {/*overlay*/}
            <div onClick={toggleIcon} className={`md:hidden ${isOpen && "transition duration-300 ease-in h-[100vh] fixed overflow-hidden w-2/6 top-0 right-0 left-0 bottom-0 bg-black opacity-50"}`}/>

            {/*mobile-nav*/}
            <aside className={`md:hidden ${isOpen ? "absolute -mt-3 top-0 right-0 h-screen fixed w-4/6 bg-white space-y-3" : "hidden"}`}>
                <p onClick={toggleIcon} className={"border-4 absolute right-[20px] top-[20px] font-light border-nosh_blue rounded-full border-opacity-30 w-[40px] h-[40px] px-[8px] pt-[8px]  text-center"}>
                    <FaTimes className={"text-md text-red-500"} />
                </p>
                <button className={"pt-7 pb-3 font-semibold mt-2 block border-blue-400 mx-auto text-nosh_blue-signIn text-[18px]"}>Sign-In</button>
                <button className={"signup-btn mx-auto"}>
                    <p className={"font-bold text-white"}>Sign-Up</p>
                    <span className={"border rounded-md border-gray-700 p-[2px]"}>
                    <BiPlus className={"text-nosh_blue"}/>
                    </span>
                </button>
            </aside>

        </header>
    );
};

export default Header;